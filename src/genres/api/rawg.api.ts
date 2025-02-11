import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { ListGenresDto } from '../dto/list-genres/list-genres.dto';
import { ListGenresResponse } from '../data/list-genres/list-genres-response.data';

export class RawgGenresApi {
  private axiosInstance: AxiosInstance;

  constructor() {
    const configAxios: AxiosRequestConfig = {
      baseURL: process.env.RAWG_URL,
    };
    this.axiosInstance = axios.create(configAxios);
  }

  async listGenres(listGenres: ListGenresDto) {
    try {
      const { page, pageSize } = listGenres;
      const response = await this.axiosInstance.get('/genres', {
        params: {
          page,
          page_size: pageSize,
          key: process.env.RAWG_API_KEY,
        },
      });

      return response.data as ListGenresResponse;
    } catch (error) {
      console.log(error);
    }
  }
}
