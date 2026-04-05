# Team Mohler Martial Arts Academy

Texas's premier 13,000 sqft academy! Led by Professor Mohler (30+ years exp), Beginner-friendly BJJ, Boxing, & MMA for all ages.

## 🚀 Deployment

This project is configured for deployment on both **Netlify** and **GitHub Pages**.

### 1. Netlify (Recommended)

Netlify is the recommended hosting platform for this project as it supports Single Page Application (SPA) routing and Netlify Forms out of the box.

- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Environment Variables:**
  - `GEMINI_API_KEY`: Your Google Gemini API Key.

### 2. Cloudflare Pages (Recommended Alternative)

Cloudflare Pages is a high-performance hosting platform that also supports Single Page Application (SPA) routing via the existing `_redirects` file.

- **Build Command:** `npm run build`
- **Build Output Directory:** `dist`
- **Environment Variables:**
  - `GEMINI_API_KEY`: Your Google Gemini API Key.
- **Form Handling:** Note that Netlify Forms are not supported on Cloudflare. You may want to use a service like **Formspree**, **Getform**, or a **Cloudflare Worker** to handle form submissions.

### 3. GitHub Pages

This project includes a GitHub Actions workflow for automated deployment to GitHub Pages.

- **Setup:**
  1. Go to your repository settings on GitHub.
  2. Navigate to **Pages**.
  3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
  4. The site will automatically deploy when you push to the `main` branch.
- **SPA Routing:** A `404.html` trick is included in the `public/` folder to handle client-side routing on GitHub Pages.

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🔑 Environment Variables

Create a `.env` file in the root directory and add your API keys:

```env
GEMINI_API_KEY=your_api_key_here
```
