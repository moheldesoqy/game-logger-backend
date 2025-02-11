"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapGames = exports.Platform = exports.EsrbRating = exports.Result = exports.ListGamesResponseDto = void 0;
class ListGamesResponseDto {
    constructor(count, results) {
        this.count = count;
        this.results = results;
    }
}
exports.ListGamesResponseDto = ListGamesResponseDto;
class Result {
    constructor(id, name, releaseDate, tba, backgroundImage, rating, topRating, numberOfRatings, added, metacritic, playtime, suggestionsCount, updated, esrbRating, platforms) {
        this.id = id;
        this.name = name;
        this.releaseDate = releaseDate;
        this.tba = tba;
        this.backgroundImage = backgroundImage;
        this.rating = rating;
        this.topRating = topRating;
        this.numberOfRatings = numberOfRatings;
        this.added = added;
        this.metacritic = metacritic;
        this.playtime = playtime;
        this.suggestionsCount = suggestionsCount;
        this.updated = updated;
        this.esrbRating = esrbRating;
        this.platforms = platforms;
    }
}
exports.Result = Result;
class EsrbRating {
    constructor(id, slug, name) {
        this.id = id;
        this.slug = slug;
        this.name = name;
    }
}
exports.EsrbRating = EsrbRating;
class Platform {
    constructor(platform, released_at) {
        this.platform = platform;
        this.released_at = released_at;
    }
}
exports.Platform = Platform;
const mapGames = (response) => {
    const { results, count } = response;
    const mappedResults = results.map((result) => {
        const { id, name, released, tba, background_image, rating, rating_top, ratings_count, added, metacritic, playtime, suggestions_count, updated, esrb_rating, platforms, } = result;
        return new Result(id, name, released, tba, background_image, rating, rating_top, ratings_count, added, metacritic, playtime, suggestions_count, updated, esrb_rating, platforms);
    });
    return new ListGamesResponseDto(count, mappedResults);
};
exports.mapGames = mapGames;
//# sourceMappingURL=games-mapping.js.map