"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapPlatforms = exports.Game = exports.Result = exports.ListPlatformsResponseDto = void 0;
class ListPlatformsResponseDto {
    constructor(count, nextPage, previousPage, results) {
        this.count = count;
        this.nextPage = nextPage;
        this.previousPage = previousPage;
        this.results = results;
    }
}
exports.ListPlatformsResponseDto = ListPlatformsResponseDto;
class Result {
    constructor(id, name, gamesCount, backgroundImage, image) {
        this.id = id;
        this.name = name;
        this.gamesCount = gamesCount;
        this.backgroundImage = backgroundImage;
        this.image = image;
    }
}
exports.Result = Result;
class Game {
    constructor(id, name, added) {
        this.id = id;
        this.name = name;
        this.added = added;
    }
}
exports.Game = Game;
const mapPlatforms = (response) => {
    const { count, results, next, previous } = response;
    const mappedResults = results.map((result) => {
        const { id, name, games_count, image_background, image, } = result;
        return new Result(id, name, games_count, image_background, image);
    });
    return new ListPlatformsResponseDto(count, next, previous, mappedResults);
};
exports.mapPlatforms = mapPlatforms;
//# sourceMappingURL=list-platforms-mapping.js.map