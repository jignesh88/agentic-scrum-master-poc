const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function fetchJson<T>(url: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_URL}${url}`, {
    ...options,
    headers: {
      ...options.headers,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    const error = new Error('API request failed') as Error & { status?: number };
    error.status = response.status;
    throw error;
  }

  return response.json();
}

export const api = {
  standups: {
    create: (data: any) => fetchJson('/api/standups/', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
    getSummary: (date?: string) => fetchJson<any>(`/api/standups/summary${date ? `?date=${date}` : ''}`),
  },
};
