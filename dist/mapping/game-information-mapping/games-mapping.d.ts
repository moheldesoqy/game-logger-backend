import { ListGamesResponse } from 'src/game-information/data/list-games/list-games-response.data';
export declare class ListGamesResponseDto {
    count: number;
    results: Result[];
    constructor(count: number, results: Result[]);
}
export declare class Result {
    id: number;
    name: string;
    releaseDate: Date;
    tba: boolean;
    backgroundImage: string;
    rating: number;
    topRating: number;
    numberOfRatings: number;
    added: number;
    metacritic: number;
    playtime: number;
    suggestionsCount: number;
    updated: Date;
    esrbRating: EsrbRating;
    platforms: Platform[];
    constructor(id: number, name: string, releaseDate: Date, tba: boolean, backgroundImage: string, rating: number, topRating: number, numberOfRatings: number, added: number, metacritic: number, playtime: number, suggestionsCount: number, updated: Date, esrbRating: EsrbRating, platforms: Platform[]);
}
export declare class EsrbRating {
    id: number;
    slug: string;
    name: string;
    constructor(id: number, slug: string, name: string);
}
export declare class Platform {
    platform: EsrbRating;
    released_at: string;
    constructor(platform: EsrbRating, released_at: string);
}
export declare const mapGames: (response: ListGamesResponse) => ListGamesResponseDto;
