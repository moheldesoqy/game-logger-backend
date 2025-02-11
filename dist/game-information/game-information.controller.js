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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameInformationController = void 0;
const common_1 = require("@nestjs/common");
const game_information_service_1 = require("./game-information.service");
let GameInformationController = class GameInformationController {
    constructor(gameInformationService) {
        this.gameInformationService = gameInformationService;
    }
    async listGames(listGamesDto) {
        return await this.gameInformationService.listGames(listGamesDto);
    }
    async listTopGames(listTopGamesDto) {
        return await this.gameInformationService.listTopGames(listTopGamesDto);
    }
    async listGamesByPlatform(listGamesByPlatform) {
        return await this.gameInformationService.listGamesByPlatform(listGamesByPlatform);
    }
    async listGamesByGenre(listGamesByGenre) {
        return await this.gameInformationService.listGamesByGenre(listGamesByGenre);
    }
    async getGameDetails(getGameDetails) {
        return await this.gameInformationService.getGameDetails(getGameDetails);
    }
};
exports.GameInformationController = GameInformationController;
__decorate([
    (0, common_1.Get)("games"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GameInformationController.prototype, "listGames", null);
__decorate([
    (0, common_1.Get)("top-games"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GameInformationController.prototype, "listTopGames", null);
__decorate([
    (0, common_1.Get)("games-by-platform"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GameInformationController.prototype, "listGamesByPlatform", null);
__decorate([
    (0, common_1.Get)("games-by-genre"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GameInformationController.prototype, "listGamesByGenre", null);
__decorate([
    (0, common_1.Get)("game-details"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GameInformationController.prototype, "getGameDetails", null);
exports.GameInformationController = GameInformationController = __decorate([
    (0, common_1.Controller)("game-information"),
    __metadata("design:paramtypes", [game_information_service_1.GameInformationService])
], GameInformationController);
//# sourceMappingURL=game-information.controller.js.map