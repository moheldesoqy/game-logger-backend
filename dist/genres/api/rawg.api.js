"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RawgGenresApi = void 0;
const axios_1 = require("axios");
class RawgGenresApi {
    constructor() {
        const configAxios = {
            baseURL: process.env.RAWG_URL,
        };
        this.axiosInstance = axios_1.default.create(configAxios);
    }
    async listGenres(listGenres) {
        try {
            const { page, pageSize } = listGenres;
            const response = await this.axiosInstance.get('/genres', {
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
}
exports.RawgGenresApi = RawgGenresApi;
//# sourceMappingURL=rawg.api.js.map