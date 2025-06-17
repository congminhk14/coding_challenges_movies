import axios, { AxiosResponse, AxiosError } from 'axios';

const BASE_URL = "https://api.themoviedb.org/3";
const headers = {
  accept: "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTNjMWI3MDY0MGE5ZTc0ZGRiMWI4OWQyYmFhOThkNSIsIm5iZiI6MTc1MDA0MjY4MS43OTYsInN1YiI6IjY4NGY4ODM5YWQxYjM4OTkyMWIwZTdiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JpU8pWV6TvhNB4L-I4NjkpA_lA5GfPD2hBJ8l_S_l28",
};

export default class MovieService {
  static get = async (endpoint: string) => {
    try {
      const response: AxiosResponse = await axios.get(`${BASE_URL}/${endpoint}`, { headers });
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      throw axiosError.response;
    }
  };
}
