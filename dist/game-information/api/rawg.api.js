"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RawgGamesApi = void 0;
const axios_1 = require("axios");
class RawgGamesApi {
    constructor() {
        const configAxios = {
            baseURL: process.env.RAWG_URL,
        };
        this.axiosInstance = axios_1.default.create(configAxios);
    }
    async listGames(listGamesDto) {
        try {
            const { page, pageSize } = listGamesDto;
            const response = await this.axiosInstance.get('/games', {
                params: {
                    page,
                    page_size: pageSize,
                    key: process.env.RAWG_API_KEY,
                },
            });
            return response.data;
        }
        catch (error) {
            console.log(error);
        }
    }
    async listTopGames(listTopGamesDto) {
        console.log(listTopGamesDto);
        try {
            const { page, pageSize, metacritic } = listTopGamesDto;
            const response = await this.axiosInstance.get('/games', {
                params: {
                    page,
                    page_size: pageSize,
                    metacritic: metacritic,
                    key: process.env.RAWG_API_KEY,
                },
            });
            return response.data;
        }
        catch (error) {
            console.log(error);
        }
    }
    async listGamesByPlatform(listGamesByPlatformDto) {
        console.log(listGamesByPlatformDto);
        try {
            const { page, pageSize, platforms } = listGamesByPlatformDto;
            const response = await this.axiosInstance.get('/games', {
                params: {
                    page,
                    page_size: pageSize,
                    platforms: platforms,
                    key: process.env.RAWG_API_KEY,
                },
            });
            return response.data;
        }
        catch (error) {
            console.log(error);
        }
    }
    async listGamesByGenre(listGamesByGenre) {
        console.log(listGamesByGenre);
        try {
            const { page, pageSize, genres } = listGamesByGenre;
            const response = await this.axiosInstance.get('/games', {
                params: {
                    page,
                    page_size: pageSize,
                    genres: genres,
                    key: process.env.RAWG_API_KEY,
                },
            });
            return response.data;
        }
        catch (error) {
            console.log(error);
        }
    }
    async getGameDetails(getGameDetailsDto) {
        console.log(getGameDetailsDto);
        try {
            const { id } = getGameDetailsDto;
            const response = await this.axiosInstance.get(`/games/${id}`, {
                params: {
                    key: process.env.RAWG_API_KEY,
                },
            });
            return response.data;
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.RawgGamesApi = RawgGamesApi;
//# sourceMappingURL=rawg.api.js.map