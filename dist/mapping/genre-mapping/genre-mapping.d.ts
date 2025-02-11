import { ListGenresResponse } from 'src/genres/data/list-genres/list-genres-response.data';
export declare class ListGenresResponseDto {
    count: number;
    genres: Genres[];
    constructor(count: number, genres: Genres[]);
}
export declare class Genres {
    id: number;
    name: string;
    gamesCount: number;
    backgroundImage: string;
    constructor(id: number, name: string, gamesCount: number, backgroundImage: string);
}
export declare const mapGenres: (response: ListGenresResponse) => ListGenresResponseDto;
