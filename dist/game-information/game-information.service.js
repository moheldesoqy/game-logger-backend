"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameInformationService = void 0;
const common_1 = require("@nestjs/common");
const rawg_api_1 = require("./api/rawg.api");
const games_mapping_1 = require("../mapping/game-information-mapping/games-mapping");
const game_mapping_1 = require("../mapping/game-information-mapping/game-mapping");
let GameInformationService = class GameInformationService {
    constructor(rawgGamesApi) {
        this.rawgGamesApi = rawgGamesApi;
    }
    async listGames(listGamesDto) {
        const games = await this.rawgGamesApi.listGames(listGamesDto);
        return await (0, games_mapping_1.mapGames)(games);
    }
    async listTopGames(listTopGamesDto) {
        const games = await this.rawgGamesApi.listTopGames(listTopGamesDto);
        return await (0, games_mapping_1.mapGames)(games);
    }
    async listGamesByPlatform(listGamesByPlatformDto) {
        const games = await this.rawgGamesApi.listGamesByPlatform(listGamesByPlatformDto);
        return await (0, games_mapping_1.mapGames)(games);
    }
    async listGamesByGenre(listGamesByGenre) {
        const games = await this.rawgGamesApi.listGamesByGenre(listGamesByGenre);
        return await (0, games_mapping_1.mapGames)(games);
    }
    async getGameDetails(getGameDetails) {
        const games = await this.rawgGamesApi.getGameDetails(getGameDetails);
        return await (0, game_mapping_1.mapGame)(games);
    }
};
exports.GameInformationService = GameInformationService;
exports.GameInformationService = GameInformationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [rawg_api_1.RawgGamesApi])
], GameInformationService);
//# sourceMappingURL=game-information.service.js.map