import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { ListStoresDto } from "../dto/list-stores/list-stores.dto";

export class RawgStoresApi {
  private axiosInstance: AxiosInstance;

  constructor() {
    const configAxios: AxiosRequestConfig = {
      baseURL: process.env.RAWG_URL,
    };
    this.axiosInstance = axios.create(configAxios);
  }

  async listStorefronts(listStores: ListStoresDto) {
    try {
      const { page, pageSize } = listStores;
      const response = await this.axiosInstance.get("/stores", {
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

  async getStorefrontDetails(id: number) {
    console.log(id);
    try {
      const response = await this.axiosInstance.get(`/stores/${id}`, {
        params: {
          key: process.env.RAWG_API_KEY,
        },
      });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
