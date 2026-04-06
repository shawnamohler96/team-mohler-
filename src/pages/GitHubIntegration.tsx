import React, { useState, useEffect } from 'react';
import { Github, Loader2 } from 'lucide-react';

export default function GitHubIntegration() {
  const [token, setToken] = useState<string | null>(localStorage.getItem('github_token'));
  const [userData, setUserData] = useState<any>(null);
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const origin = event.origin;
      if (!origin.endsWith('.run.app') && !origin.includes('localhost')) {
        return;
      }
      if (event.data?.type === 'OAUTH_AUTH_SUCCESS' && event.data.token) {
        setToken(event.data.token);
        localStorage.setItem('github_token', event.data.token);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  useEffect(() => {
    if (token) {
      fetchGitHubData();
    }
  }, [token]);

  const handleConnect = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/auth/url');
      if (!response.ok) {
        throw new Error('Failed to get auth URL');
      }
      const { url } = await response.json();

      const authWindow = window.open(
        url,
        'oauth_popup',
        'width=600,height=700'
      );

      if (!authWindow) {
        setError('Please allow popups for this site to connect your account.');
      }
    } catch (err: any) {
      console.error('OAuth error:', err);
      setError(err.message || 'Failed to initiate connection');
    } finally {
      setLoading(false);
    }
  };

  const handleDisconnect = () => {
    setToken(null);
    setUserData(null);
    setRepos([]);
    localStorage.removeItem('github_token');
  };

  const fetchGitHubData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const [userRes, reposRes] = await Promise.all([
        fetch('/api/github/user', {
          headers: { Authorization: `Bearer ${token}` }
        }),
        fetch('/api/github/repos', {
          headers: { Authorization: `Bearer ${token}` }
        })
      ]);

      if (!userRes.ok || !reposRes.ok) {
        if (userRes.status === 401 || reposRes.status === 401) {
          handleDisconnect();
          throw new Error('Session expired. Please reconnect.');
        }
        throw new Error('Failed to fetch GitHub data');
      }

      const userData = await userRes.json();
      const reposData = await reposRes.json();

      setUserData(userData);
      setRepos(reposData);
    } catch (err: any) {
      console.error('Error fetching GitHub data:', err);
      setError(err.message || 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Github className="w-8 h-8" />
                GitHub Integration
              </h1>
              <p className="mt-2 text-gray-600">
                Connect your GitHub account to share your repositories and profile information.
              </p>
            </div>
            {!token ? (
              <button
                onClick={handleConnect}
                disabled={loading}
                className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Github className="w-5 h-5" />}
                Connect GitHub
              </button>
            ) : (
              <button
                onClick={handleDisconnect}
                className="text-red-600 hover:text-red-700 font-medium px-4 py-2 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
              >
                Disconnect
              </button>
            )}
          </div>

          {error && (
            <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg border border-red-100">
              {error}
            </div>
          )}
        </div>

        {loading && token && !userData && (
          <div className="p-12 flex justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
          </div>
        )}

        {userData && (
          <div className="p-8">
            <div className="flex items-start gap-6 mb-12">
              <img
                src={userData.avatar_url}
                alt={userData.login}
                className="w-24 h-24 rounded-full border-4 border-gray-50"
               referrerPolicy="no-referrer" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{userData.name || userData.login}</h2>
                <a
                  href={userData.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center gap-1 mt-1"
                >
                  @{userData.login}
                </a>
                {userData.bio && <p className="mt-2 text-gray-600 max-w-2xl">{userData.bio}</p>}
                <div className="flex gap-4 mt-4 text-sm text-gray-600">
                  <span><strong>{userData.public_repos}</strong> repositories</span>
                  <span><strong>{userData.followers}</strong> followers</span>
                  <span><strong>{userData.following}</strong> following</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Repositories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all"
                >
                  <h4 className="font-bold text-blue-600 truncate">{repo.name}</h4>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2 h-10">
                    {repo.description || 'No description provided.'}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        {repo.language}
                      </span>
                    )}
                    <span>⭐ {repo.stargazers_count}</span>
                    <span>🍴 {repo.forks_count}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
