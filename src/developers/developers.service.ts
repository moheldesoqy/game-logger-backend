import { Injectable } from "@nestjs/common";
import { RawgDevelopersApi } from "./api/rawg.api";
import { ListGameDevelopersDto } from "./dto/list-game-developers/list-game-developers.dto";

@Injectable()
export class DevelopersService {
  constructor(private readonly rawgDevelopersApi: RawgDevelopersApi) {}

  async listGameDevelopers(listGameDevelopers: ListGameDevelopersDto) {
    const developers =
      await this.rawgDevelopersApi.listGameDevelopers(listGameDevelopers);
    return developers;
  }

  async getGameDeveloper(id: number) {
    const developer = await this.rawgDevelopersApi.getGameDeveloper(id);
    return developer;
  }
}
