import axios from "axios";

const API_KEY = 'd88f0de56ca3b9f50c6b6c569b5a8f7a';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrending = async () => {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
  };
  
export const getSearchMovies = async keyword => {
const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${keyword}`
);
return response.data.results;
};

export const getMovieDetails = async movieId => {
const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
);
return response.data;
};

export const getMovieCredits = async movieId => {
const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
);
return response.data.cast;
};

export const getMovieReviews = async movieId => {
const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
);
return response.data.results;
};
