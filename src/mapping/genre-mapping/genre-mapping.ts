import { ListGenresResponse } from 'src/genres/data/list-genres/list-genres-response.data';

export class ListGenresResponseDto {
  count: number;
  genres: Genres[];

  constructor(count: number, genres: Genres[]) {
    this.count = count;
    this. genres = genres;
  }
}

export class Genres {
  id: number;
  name: string;
  gamesCount: number;
  backgroundImage: string;

  constructor(
    id: number,
    name: string,
    gamesCount: number,
    backgroundImage: string,
  ) {
    this.id = id;
    this.name = name;
    this.gamesCount = gamesCount;
    this.backgroundImage = backgroundImage;
  }
}

export const mapGenres = (
  response: ListGenresResponse,
): ListGenresResponseDto => {
  const { results, count } = response;

  const genres = results.map((result) => {
    const { id, name, games_count, image_background } = result;

    return new Genres(id, name, games_count, image_background);
  });

  return new ListGenresResponseDto(count, genres);
};
