import { Controller, Get, Query } from "@nestjs/common";
import { GenresService } from "./genres.service";
import { ListGenresDto } from "./dto/list-genres/list-genres.dto";

@Controller("genres")
export class GenresController {
  constructor(private readonly genresService: GenresService) {}
  @Get()
  async listGenres(@Query() listGenresDto: ListGenresDto) {
    return await this.genresService.listGenres(listGenresDto);
  }
}
