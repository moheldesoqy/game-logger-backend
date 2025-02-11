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
exports.GenresService = void 0;
const common_1 = require("@nestjs/common");
const genre_mapping_1 = require("../mapping/genre-mapping/genre-mapping");
const rawg_api_1 = require("./api/rawg.api");
let GenresService = class GenresService {
    constructor(rawgGenresApi) {
        this.rawgGenresApi = rawgGenresApi;
    }
    async listGenres(listGenresDto) {
        const genres = await this.rawgGenresApi.listGenres(listGenresDto);
        return await (0, genre_mapping_1.mapGenres)(genres);
    }
};
exports.GenresService = GenresService;
exports.GenresService = GenresService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [rawg_api_1.RawgGenresApi])
], GenresService);
//# sourceMappingURL=genres.service.js.map