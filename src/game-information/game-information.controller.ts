import { Controller, Get, Query } from "@nestjs/common";
import { GameInformationService } from "./game-information.service";
import { ListGamesDto } from "./dto/list-games/list-games.dto";
import { ListTopGamesDto } from "./dto/list-top-games/list-top-games.dto";
import { ListGamesByPlatformDto } from "./dto/list-games-by-platform/list-games-by-platform.dto";
import { GetGameDetailsDto } from "./dto/get-game-details/get-game-details.dto";
import { ListGamesByGenre } from "./dto/list-games-by-genre/list-games-by-genre.dto";

@Controller("game-information")
export class GameInformationController {
  constructor(
    private readonly gameInformationService: GameInformationService
  ) {}

  @Get("games")
  async listGames(@Query() listGamesDto: ListGamesDto) {
    return await this.gameInformationService.listGames(listGamesDto);
  }

  @Get("top-games")
  async listTopGames(@Query() listTopGamesDto: ListTopGamesDto) {
    return await this.gameInformationService.listTopGames(listTopGamesDto);
  }

  @Get("games-by-platform")
  async listGamesByPlatform(
    @Query() listGamesByPlatform: ListGamesByPlatformDto
  ) {
    return await this.gameInformationService.listGamesByPlatform(
      listGamesByPlatform
    );
  }

  @Get("games-by-genre")
  async listGamesByGenre(@Query() listGamesByGenre: ListGamesByGenre) {
    return await this.gameInformationService.listGamesByGenre(listGamesByGenre);
  }

  @Get("game-details")
  async getGameDetails(@Query() getGameDetails: GetGameDetailsDto) {
    return await this.gameInformationService.getGameDetails(getGameDetails);
  }
}
