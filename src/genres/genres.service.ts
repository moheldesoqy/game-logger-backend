import { Injectable } from "@nestjs/common";
import { RawgGenresApi } from "./api/rawg.api";
import { ListGenresDto } from "./dto/list-genres/list-genres.dto";
import { mapGenres } from "src/mapping/genre-mapping/genre-mapping";

@Injectable()
export class GenresService {
  constructor(private readonly rawgGenresApi: RawgGenresApi) {}

  async listGenres(listGenresDto: ListGenresDto) {
    const genres = await this.rawgGenresApi.listGenres(listGenresDto);
    return await mapGenres(genres);
  }
}
