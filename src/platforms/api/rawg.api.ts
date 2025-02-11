import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { ListPlatformsDto } from "../dto/list-platforms/list-platforms.dto";
import { ListPlatformsResponse } from "../data/list-platforms/list-platforms.response.data";
import { GetPlatformDetailsDto } from "../dto/get-platform-details/get-platform-details.dto";

export class RawgPlatformsApi {
  private axiosInstance: AxiosInstance;

  constructor() {
    const configAxios: AxiosRequestConfig = {
      baseURL: process.env.RAWG_URL,
    };
    this.axiosInstance = axios.create(configAxios);
  }

  async listPlatforms(listPlatformsDto: ListPlatformsDto) {
    try {
      const { sort, page, pageSize } = listPlatformsDto;
      const response = await this.axiosInstance.get("/platforms", {
        params: {
          ordering: sort,
          page,
          page_size: pageSize,
          key: process.env.RAWG_API_KEY,
        },
      });

      return response.data as ListPlatformsResponse;
    } catch (error) {
      console.log(error);
    }
  }

  async getPlatformDetails(getPlatformDetails: GetPlatformDetailsDto) {
    try {
      const { id } = getPlatformDetails;
      const response = await this.axiosInstance.get("/platforms", {
        params: {
          id: id,
          key: process.env.RAWG_API_KEY,
        },
      });

      return response.data as any;
    } catch (error) {
      console.log(error);
    }
  }
}
