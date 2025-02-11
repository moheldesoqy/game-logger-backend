import { RawgGamesApi } from "./api/rawg.api";
import { ListGamesDto } from "./dto/list-games/list-games.dto";
import { ListTopGamesDto } from "./dto/list-top-games/list-top-games.dto";
import { ListGamesByPlatformDto } from "./dto/list-games-by-platform/list-games-by-platform.dto";
import { GetGameDetailsDto } from "./dto/get-game-details/get-game-details.dto";
import { ListGamesByGenre } from "./dto/list-games-by-genre/list-games-by-genre.dto";
export declare class GameInformationService {
    private readonly rawgGamesApi;
    constructor(rawgGamesApi: RawgGamesApi);
    listGames(listGamesDto: ListGamesDto): Promise<import("src/mapping/game-information-mapping/games-mapping").ListGamesResponseDto>;
    listTopGames(listTopGamesDto: ListTopGamesDto): Promise<import("src/mapping/game-information-mapping/games-mapping").ListGamesResponseDto>;
    listGamesByPlatform(listGamesByPlatformDto: ListGamesByPlatformDto): Promise<import("src/mapping/game-information-mapping/games-mapping").ListGamesResponseDto>;
    listGamesByGenre(listGamesByGenre: ListGamesByGenre): Promise<import("src/mapping/game-information-mapping/games-mapping").ListGamesResponseDto>;
    getGameDetails(getGameDetails: GetGameDetailsDto): Promise<import("src/mapping/game-information-mapping/game-mapping").GetGameDetailsResponseDto>;
}
