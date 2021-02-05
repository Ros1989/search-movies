const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'a6e0559b1d4ae7a00056f15d4f759d5a';

async function apiService(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(
        new Error('404 The resource you requested could not be found 🥺'),
      );
}

export function getTrending(page) {
  return apiService(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`,
  );
}

export function searchMovies(query, page) {
  return apiService(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`,
  );
}

export function getMovieDetails(movieId) {
  return apiService(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
}

export function getMovieCredits(movieId) {
  return apiService(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
}

export function getMovieReviews(movieId, page) {
  return apiService(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&page=${page}`,
  );
}
