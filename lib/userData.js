// my-app/lib/userData.js

import { getToken } from './authenticate';

async function fetchData(url, options = {}) {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `JWT ${token}`, 
    ...options.headers, 
  };

  try {
    const response = await fetch(url, { ...options, headers });

    if (response.status === 200) {
      return response.json(); 
    } else {
      return []; 
    }
  } catch (error) {
    console.error('Error:', error);
    return []; 
  }
}

export async function addToFavourites(id) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/favourites/${id}`;
  const options = {
    method: 'PUT', 
  };
  return await fetchData(url, options);
}

export async function removeFromFavourites(id) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/favourites/${id}`;
  const options = {
    method: 'DELETE', 
  };
  return await fetchData(url, options);
}

export async function getFavourites() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/favourites`;
  return await fetchData(url);
}

export async function addToHistory(id) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/history/${id}`;
  const options = {
    method: 'PUT', 
  };
  return await fetchData(url, options);
}

export async function removeFromHistory(id) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/history/${id}`;
  const options = {
    method: 'DELETE', 
  };
  return await fetchData(url, options);
}

export async function getHistory() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/history`;
  return await fetchData(url);
}
