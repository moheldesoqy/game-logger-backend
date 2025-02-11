import { ListGamesDto } from '../dto/list-games/list-games.dto';
import { ListGamesResponse } from '../data/list-games/list-games-response.data';
import { ListTopGamesDto } from '../dto/list-top-games/list-top-games.dto';
import { ListGamesByPlatformDto } from '../dto/list-games-by-platform/list-games-by-platform.dto';
import { GetGameDetailsDto } from '../dto/get-game-details/get-game-details.dto';
import { ListGamesByGenre } from '../dto/list-games-by-genre/list-games-by-genre.dto';
export declare class RawgGamesApi {
    private axiosInstance;
    constructor();
    listGames(listGamesDto: ListGamesDto): Promise<ListGamesResponse>;
    listTopGames(listTopGamesDto: ListTopGamesDto): Promise<ListGamesResponse>;
    listGamesByPlatform(listGamesByPlatformDto: ListGamesByPlatformDto): Promise<any>;
    listGamesByGenre(listGamesByGenre: ListGamesByGenre): Promise<any>;
    getGameDetails(getGameDetailsDto: GetGameDetailsDto): Promise<any>;
}
