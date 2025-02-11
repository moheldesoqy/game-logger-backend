"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapGenres = exports.Genres = exports.ListGenresResponseDto = void 0;
class ListGenresResponseDto {
    constructor(count, genres) {
        this.count = count;
        this.genres = genres;
    }
}
exports.ListGenresResponseDto = ListGenresResponseDto;
class Genres {
    constructor(id, name, gamesCount, backgroundImage) {
        this.id = id;
        this.name = name;
        this.gamesCount = gamesCount;
        this.backgroundImage = backgroundImage;
    }
}
exports.Genres = Genres;
const mapGenres = (response) => {
    const { results, count } = response;
    const genres = results.map((result) => {
        const { id, name, games_count, image_background } = result;
        return new Genres(id, name, games_count, image_background);
    });
    return new ListGenresResponseDto(count, genres);
};
exports.mapGenres = mapGenres;
//# sourceMappingURL=genre-mapping.js.map