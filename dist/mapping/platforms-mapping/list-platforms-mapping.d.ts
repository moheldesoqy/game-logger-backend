import { ListPlatformsResponse } from 'src/platforms/data/list-platforms/list-platforms.response.data';
export declare class ListPlatformsResponseDto {
    count: number;
    nextPage: string;
    previousPage: string;
    results: Result[];
    constructor(count: number, nextPage: string, previousPage: string, results: Result[]);
}
export declare class Result {
    id: number;
    name: string;
    gamesCount: number;
    backgroundImage: string;
    image: string;
    constructor(id: number, name: string, gamesCount: number, backgroundImage: string, image: string);
}
export declare class Game {
    id: number;
    name: string;
    added: number;
    constructor(id: number, name: string, added: number);
}
export declare const mapPlatforms: (response: ListPlatformsResponse) => ListPlatformsResponseDto;
