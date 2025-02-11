"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const game_tracker_config_1 = require("./config/game-tracker.config");
const rawg_api_1 = require("./game-information/api/rawg.api");
const game_information_service_1 = require("./game-information/game-information.service");
const game_information_controller_1 = require("./game-information/game-information.controller");
const genres_service_1 = require("./genres/genres.service");
const rawg_api_2 = require("./genres/api/rawg.api");
const genres_controller_1 = require("./genres/genres.controller");
const platforms_controller_1 = require("./platforms/platforms.controller");
const platforms_service_1 = require("./platforms/platforms.service");
const rawg_api_3 = require("./platforms/api/rawg.api");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `src/config/env/${process.env.NODE_ENV}.env`,
                load: [game_tracker_config_1.default],
                isGlobal: true,
            }),
        ],
        controllers: [app_controller_1.AppController, game_information_controller_1.GameInformationController, genres_controller_1.GenresController, platforms_controller_1.PlatformsController],
        providers: [app_service_1.AppService, rawg_api_1.RawgGamesApi, rawg_api_2.RawgGenresApi, game_information_service_1.GameInformationService, genres_service_1.GenresService, platforms_service_1.PlatformsService, rawg_api_3.RawgPlatformsApi],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map