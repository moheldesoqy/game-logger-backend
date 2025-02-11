import { ListGamesResponse } from 'src/game-information/data/list-games/list-games-response.data';
import { ListGenresResponse } from 'src/genres/data/list-genres/list-genres-response.data';
import { ListGenresResponseDto } from '../genre-mapping/genre-mapping';
import { count } from 'console';

export class ListGamesResponseDto {
  count: number;
  results: Result[];

  constructor(count: number, results: Result[]) {
    this.count = count;
    this.results = results;
  }
}

export class Result {
  id: number;
  name: string;
  releaseDate: Date;
  tba: boolean;
  backgroundImage: string;
  rating: number;
  topRating: number;
  numberOfRatings: number;
  added: number;
  metacritic: number;
  playtime: number;
  suggestionsCount: number;
  updated: Date;
  esrbRating: EsrbRating;
  platforms: Platform[];

  constructor(
    id: number,
    name: string,
    releaseDate: Date,
    tba: boolean,
    backgroundImage: string,
    rating: number,
    topRating: number,
    numberOfRatings: number,
    added: number,
    metacritic: number,
    playtime: number,
    suggestionsCount: number,
    updated: Date,
    esrbRating: EsrbRating,
    platforms: Platform[],
  ) {
    this.id = id;
    this.name = name;
    this.releaseDate = releaseDate;
    this.tba = tba;
    this.backgroundImage = backgroundImage;
    this.rating = rating;
    this.topRating = topRating;
    this.numberOfRatings = numberOfRatings;
    this.added = added;
    this.metacritic = metacritic;
    this.playtime = playtime;
    this.suggestionsCount = suggestionsCount;
    this.updated = updated;
    this.esrbRating = esrbRating;
    this.platforms = platforms;
  }
}

export class EsrbRating {
  id: number;
  slug: string;
  name: string;

  constructor(id: number, slug: string, name: string) {
    this.id = id;
    this.slug = slug;
    this.name = name;
  }
}

export class Platform {
  platform: EsrbRating;
  released_at: string;

  constructor(platform: EsrbRating, released_at: string) {
    this.platform = platform;
    this.released_at = released_at;
  }
}

export const mapGames = (response: ListGamesResponse): ListGamesResponseDto => {
  const { results, count } = response;

  const mappedResults = results.map((result) => {
    const {
      id,
      name,
      released,
      tba,
      background_image,
      rating,
      rating_top,
      ratings_count,
      added,
      metacritic,
      playtime,
      suggestions_count,
      updated,
      esrb_rating,
      platforms,
    } = result;

    return new Result(
      id,
      name,
      released,
      tba,
      background_image,
      rating,
      rating_top,
      ratings_count,
      added,
      metacritic,
      playtime,
      suggestions_count,
      updated,
      esrb_rating,
      platforms,
    );
  });

  return new ListGamesResponseDto(count, mappedResults);
};
