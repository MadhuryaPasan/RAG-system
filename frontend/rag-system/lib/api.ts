// lib/api.ts

export async function apiFetch(endpoint: string, options?: RequestInit) {
  // Detect if code is running on Server (Docker network) or Client (Browser)
  const isServer = typeof window === "undefined";

  // Pick URL based on environment
  const baseURL = isServer 
    ? process.env.BACKEND_INTERNAL_URL  // http://backend:8000
    : process.env.NEXT_PUBLIC_API_URL; // http://localhost:8000

  // Ensure endpoint starts with a slash
  const url = `${baseURL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Backend fetch failed: ${response.statusText}`);
  }

  return response.json();
}