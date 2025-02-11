import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { ListGamesDto } from "../dto/list-games/list-games.dto";
import { ListGamesResponse } from "../data/list-games/list-games-response.data";
import { ListTopGamesDto } from "../dto/list-top-games/list-top-games.dto";
import { ListGamesByPlatformDto } from "../dto/list-games-by-platform/list-games-by-platform.dto";
import { GetGameDetailsDto } from "../dto/get-game-details/get-game-details.dto";
import { ListGamesByGenre } from "../dto/list-games-by-genre/list-games-by-genre.dto";

export class RawgGamesApi {
  private axiosInstance: AxiosInstance;

  constructor() {
    const configAxios: AxiosRequestConfig = {
      baseURL: process.env.RAWG_URL,
    };
    this.axiosInstance = axios.create(configAxios);
  }

  async listGames(listGamesDto: ListGamesDto) {
    try {
      const { page, pageSize } = listGamesDto;
      const response = await this.axiosInstance.get("/games", {
        params: {
          page,
          page_size: pageSize,
          key: process.env.RAWG_API_KEY,
        },
      });

      return response.data as ListGamesResponse;
    } catch (error) {
      console.log(error);
    }
  }

  async listTopGames(listTopGamesDto: ListTopGamesDto) {
    console.log(listTopGamesDto);
    try {
      const { page, pageSize, metacritic } = listTopGamesDto;
      const response = await this.axiosInstance.get("/games", {
        params: {
          page,
          page_size: pageSize,
          metacritic: metacritic,
          key: process.env.RAWG_API_KEY,
        },
      });

      return response.data as ListGamesResponse;
    } catch (error) {
      console.log(error);
    }
  }

  async listGamesByPlatform(listGamesByPlatformDto: ListGamesByPlatformDto) {
    console.log(listGamesByPlatformDto);
    try {
      const { page, pageSize, platforms } = listGamesByPlatformDto;
      const response = await this.axiosInstance.get("/games", {
        params: {
          page,
          page_size: pageSize,
          platforms: platforms,
          key: process.env.RAWG_API_KEY,
        },
      });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async listGamesByGenre(listGamesByGenre: ListGamesByGenre) {
    console.log(listGamesByGenre);
    try {
      const { page, pageSize, genres } = listGamesByGenre;
      const response = await this.axiosInstance.get("/games", {
        params: {
          page,
          page_size: pageSize,
          genres: genres,
          key: process.env.RAWG_API_KEY,
        },
      });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getGameDetails(getGameDetailsDto: GetGameDetailsDto) {
    console.log(getGameDetailsDto);
    try {
      const { id } = getGameDetailsDto;
      const response = await this.axiosInstance.get(`/games/${id}`, {
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
