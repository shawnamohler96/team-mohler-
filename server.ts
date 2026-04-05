import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // Helper to get redirect URI
  const getRedirectUri = (req: express.Request) => {
    const host = req.get('host');
    const protocol = req.protocol;
    // In AI Studio, the app runs behind a proxy, so we use the APP_URL if available,
    // otherwise fallback to the host.
    const baseUrl = process.env.APP_URL || `${protocol}://${host}`;
    return `${baseUrl}/auth/callback`;
  };

  // GitHub OAuth URL endpoint
  app.get('/api/auth/url', (req, res) => {
    const redirectUri = getRedirectUri(req);
    const params = new URLSearchParams({
      client_id: process.env.GITHUB_CLIENT_ID || '',
      redirect_uri: redirectUri,
      scope: 'repo user', // Adjust scopes as needed
    });

    const authUrl = `https://github.com/login/oauth/authorize?${params}`;
    res.json({ url: authUrl });
  });

  // GitHub OAuth Callback endpoint
  app.get(['/auth/callback', '/auth/callback/'], async (req, res) => {
    const { code } = req.query;

    if (!code) {
      res.status(400).send('No code provided');
      return;
    }

    try {
      const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
          redirect_uri: getRedirectUri(req),
        }),
      });

      const tokenData = await tokenResponse.json();

      if (tokenData.error) {
        console.error('GitHub token error:', tokenData);
        res.status(400).send(`Authentication failed: ${tokenData.error_description}`);
        return;
      }

      const accessToken = tokenData.access_token;

      // Send success message to parent window and close popup
      res.send(`
        <html>
          <body>
            <script>
              if (window.opener) {
                window.opener.postMessage({ type: 'OAUTH_AUTH_SUCCESS', token: '${accessToken}' }, '*');
                window.close();
              } else {
                window.location.href = '/';
              }
            </script>
            <p>Authentication successful. This window should close automatically.</p>
          </body>
        </html>
      `);
    } catch (error) {
      console.error('Error exchanging code for token:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  // Proxy endpoint to fetch GitHub user data
  app.get('/api/github/user', async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      res.status(401).json({ error: 'No authorization header' });
      return;
    }

    try {
      const response = await fetch('https://api.github.com/user', {
        headers: {
          Authorization: authHeader,
          Accept: 'application/vnd.github.v3+json',
        },
      });
      const data = await response.json();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch user data' });
    }
  });

  // Proxy endpoint to fetch GitHub repos
  app.get('/api/github/repos', async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      res.status(401).json({ error: 'No authorization header' });
      return;
    }

    try {
      const response = await fetch('https://api.github.com/user/repos?sort=updated&per_page=10', {
        headers: {
          Authorization: authHeader,
          Accept: 'application/vnd.github.v3+json',
        },
      });
      const data = await response.json();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch repos' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
