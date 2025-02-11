import { GameInformationService } from "./game-information.service";
import { ListGamesDto } from "./dto/list-games/list-games.dto";
import { ListTopGamesDto } from "./dto/list-top-games/list-top-games.dto";
import { ListGamesByPlatformDto } from "./dto/list-games-by-platform/list-games-by-platform.dto";
import { GetGameDetailsDto } from "./dto/get-game-details/get-game-details.dto";
import { ListGamesByGenre } from "./dto/list-games-by-genre/list-games-by-genre.dto";
export declare class GameInformationController {
    private readonly gameInformationService;
    constructor(gameInformationService: GameInformationService);
    listGames(listGamesDto: ListGamesDto): Promise<import("../mapping/game-information-mapping/games-mapping").ListGamesResponseDto>;
    listTopGames(listTopGamesDto: ListTopGamesDto): Promise<import("../mapping/game-information-mapping/games-mapping").ListGamesResponseDto>;
    listGamesByPlatform(listGamesByPlatform: ListGamesByPlatformDto): Promise<import("../mapping/game-information-mapping/games-mapping").ListGamesResponseDto>;
    listGamesByGenre(listGamesByGenre: ListGamesByGenre): Promise<import("../mapping/game-information-mapping/games-mapping").ListGamesResponseDto>;
    getGameDetails(getGameDetails: GetGameDetailsDto): Promise<import("../mapping/game-information-mapping/game-mapping").GetGameDetailsResponseDto>;
}
