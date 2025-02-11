import { Injectable } from "@nestjs/common";
import { RawgGamesApi } from "./api/rawg.api";
import { ListGamesDto } from "./dto/list-games/list-games.dto";
import { mapGames } from "src/mapping/game-information-mapping/games-mapping";
import { ListTopGamesDto } from "./dto/list-top-games/list-top-games.dto";
import { ListGamesByPlatformDto } from "./dto/list-games-by-platform/list-games-by-platform.dto";
import { GetGameDetailsDto } from "./dto/get-game-details/get-game-details.dto";
import { mapGame } from "src/mapping/game-information-mapping/game-mapping";
import { ListGamesByGenre } from "./dto/list-games-by-genre/list-games-by-genre.dto";

@Injectable()
export class GameInformationService {
  constructor(private readonly rawgGamesApi: RawgGamesApi) {}

  async listGames(listGamesDto: ListGamesDto) {
    const games = await this.rawgGamesApi.listGames(listGamesDto);
    return await mapGames(games);
  }

  async listTopGames(listTopGamesDto: ListTopGamesDto) {
    const games = await this.rawgGamesApi.listTopGames(listTopGamesDto);
    return await mapGames(games);
  }

  async listGamesByPlatform(listGamesByPlatformDto: ListGamesByPlatformDto) {
    const games = await this.rawgGamesApi.listGamesByPlatform(
      listGamesByPlatformDto
    );
    return await mapGames(games);
  }


  async listGamesByGenre(listGamesByGenre: ListGamesByGenre) {
    const games = await this.rawgGamesApi.listGamesByGenre(
      listGamesByGenre
    );
    return await mapGames(games);
  }

  async getGameDetails(getGameDetails: GetGameDetailsDto) {
    const games = await this.rawgGamesApi.getGameDetails(getGameDetails);
    return await mapGame(games);
  }
}
