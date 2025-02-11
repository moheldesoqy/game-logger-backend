import { ListGenresResponse } from 'src/genres/data/list-genres/list-genres-response.data';
import { ListPlatformsResponse } from 'src/platforms/data/list-platforms/list-platforms.response.data';

export class ListPlatformsResponseDto {
    count:    number;
    nextPage:     string;
    previousPage: string;
    results:  Result[];

    constructor(count: number, nextPage: string, previousPage: string, results: Result[]){
        this.count = count;
        this.nextPage = nextPage;
        this.previousPage = previousPage;
        this.results = results;
        
    }
}

export class Result {
    id:               number;
    name:             string;
    gamesCount:      number;
    backgroundImage: string;
    image:            string;

    constructor(id: number, name: string, gamesCount: number, backgroundImage: string, image: string){
        this.id = id;
        this.name = name;
        this.gamesCount = gamesCount;
        this.backgroundImage = backgroundImage;
        this.image = image;
    }
}

export class Game {
    id:    number;
    name:  string;
    added: number;

    constructor(id: number, name: string, added: number){
        this.id = id;
        this.name = name;
        this.added = added;
    }
}

export const mapPlatforms = (
  response: ListPlatformsResponse,
): ListPlatformsResponseDto => {
  const { count, results, next, previous } = response;

  const mappedResults = results.map((result) => {
    const {
      id,
      name,
      games_count,
      image_background,
      image,
    } = result;


    return new Result(
        id,
        name,
        games_count,
        image_background,
        image,
    );
  });

  return new ListPlatformsResponseDto(count, next, previous, mappedResults);
};
