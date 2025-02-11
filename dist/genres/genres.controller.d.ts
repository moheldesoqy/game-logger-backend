import { GenresService } from "./genres.service";
import { ListGenresDto } from "./dto/list-genres/list-genres.dto";
export declare class GenresController {
    private readonly genresService;
    constructor(genresService: GenresService);
    listGenres(listGenresDto: ListGenresDto): Promise<import("../mapping/genre-mapping/genre-mapping").ListGenresResponseDto>;
}
