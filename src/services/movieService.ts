import axios, { AxiosResponse, AxiosError } from 'axios';

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";
const headers = {
  accept: "application/json",
  Authorization:
    `Bearer ${TMDB_API_KEY}`,
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
