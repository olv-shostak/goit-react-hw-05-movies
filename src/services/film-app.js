const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'c496f55a229c1ab2ed0f82314b903f21';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok ? await response.json() : Promise.reject(new Error('Not found'));
}

export function fetchPopularFilms() {
  return fetchWithErrorHandling(`${BASE_URL}/trending/all/week?api_key=${API_KEY}`);
}

export function fetchMovie(movieId) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
}

export function fetchMovieCast(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  );
}
