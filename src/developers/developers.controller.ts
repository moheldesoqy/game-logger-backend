import { Controller, Get, Body, Param } from "@nestjs/common";
import { DevelopersService } from "./developers.service";
import { ListGameDevelopersDto } from "./dto/list-game-developers/list-game-developers";

@Controller("developers")
export class DevelopersController {
  constructor(private readonly developersService: DevelopersService) {}
  a;

  @Get()
  async listGameDevelopers(@Body() listGameDevelopers: ListGameDevelopersDto) {
    return await this.developersService.listGameDevelopers(listGameDevelopers);
  }

  @Get(":id")
  async getGameDeveloper(@Param("id") id: string) {
    return this.developersService.getGameDeveloper(+id);
  }
}
