import { ListGenresDto } from "./dto/list-genres/list-genres.dto";
import { RawgGenresApi } from "./api/rawg.api";
export declare class GenresService {
    private readonly rawgGenresApi;
    constructor(rawgGenresApi: RawgGenresApi);
    listGenres(listGenresDto: ListGenresDto): Promise<import("src/mapping/genre-mapping/genre-mapping").ListGenresResponseDto>;
}
