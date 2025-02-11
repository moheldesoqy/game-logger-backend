import { ListGenresDto } from '../dto/list-genres/list-genres.dto';
import { ListGenresResponse } from '../data/list-genres/list-genres-response.data';
export declare class RawgGenresApi {
    private axiosInstance;
    constructor();
    listGenres(listGenres: ListGenresDto): Promise<ListGenresResponse>;
}
