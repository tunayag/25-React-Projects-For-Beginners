import axios from "axios";

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

// export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// const options = {
//   params: {
//     maxResults: '50'
//   },
//   headers: {
//     'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPID_API_KEY,
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };

// export const fetchFromAPI = (url) => {
//   return fetch(`${BASE_URL}/${url}`, options)
//     .then(response => response.json())
//     .then(data => {
//       return data;
//     })
//     .catch(error => console.error(error));
// };
