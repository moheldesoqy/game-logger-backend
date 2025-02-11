import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { ListGameDevelopersDto } from "../dto/list-game-developers/list-game-developers";

export class RawgDevelopersApi {
  private axiosInstance: AxiosInstance;

  constructor() {
    const configAxios: AxiosRequestConfig = {
      baseURL: process.env.RAWG_URL,
    };
    this.axiosInstance = axios.create(configAxios);
  }

  async listGameDevelopers(listGameDevelopers: ListGameDevelopersDto) {
    try {
      const { page, pageSize } = listGameDevelopers;
      const response = await this.axiosInstance.get("/developers", {
        params: {
          page,
          page_size: pageSize,
          key: process.env.RAWG_API_KEY,
        },
      });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getGameDeveloper(id: number) {
    try {
      const response = await this.axiosInstance.get("/developers", {
        params: {
          id: id,
          key: process.env.RAWG_API_KEY,
        },
      });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
