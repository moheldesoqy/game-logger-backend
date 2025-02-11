"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RawgPlatformsApi = void 0;
const axios_1 = require("axios");
class RawgPlatformsApi {
    constructor() {
        const configAxios = {
            baseURL: process.env.RAWG_URL,
        };
        this.axiosInstance = axios_1.default.create(configAxios);
    }
    async listPlatforms(listPlatformsDto) {
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
            return response.data;
        }
        catch (error) {
            console.log(error);
        }
    }
    async getPlatformDetails(getPlatformDetails) {
        try {
            const { id } = getPlatformDetails;
            const response = await this.axiosInstance.get("/platforms", {
                params: {
                    id: id,
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
exports.RawgPlatformsApi = RawgPlatformsApi;
//# sourceMappingURL=rawg.api.js.map