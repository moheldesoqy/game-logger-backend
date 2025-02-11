import { GetGameDetailsResponse } from "src/game-information/data/get-game-details/get-game-details.response.data";

export interface GetGameDetailsResponseDto {
  id:                          number;
  slug:                        string;
  name:                        string;
  nameOriginal:                string;
  description:                 string;
  metacritic:                  number;
  metacriticPlatforms:         MetacriticPlatform[];
  released:                    Date;
  tba:                         boolean;
  updated:                     Date;
  backgroundImage:             string;
  backgroundImageAdditional:   string;
  website:                     string;
  rating:                      number;
  ratingTop:                   number;
  ratings:                     AddedByStatus;
  reactions:                   AddedByStatus;
  added:                       number;
  addedByStatus:               AddedByStatus;
  playtime:                    number;
  screenshotsCount:            number;
  moviesCount:                 number;
  creatorsCount:               number;
  achievementsCount:           number;
  parentAchievementsCount:     string;
  redditUrl:                   string;
  redditName:                  string;
  redditDescription:           string;
  redditLogo:                  string;
  redditCount:                 number;
  twitchCount:                 string;
  youtubeCount:                string;
  reviewsTextCount:            string;
  ratingsCount:                number;
  suggestionsCount:            number;
  alternativeNames:            string[];
  metacriticUrl:               string;
  parentsCount:                number;
  additionsCount:              number;
  gameSeriesCount:             number;
  esrbRating:                  EsrbRating;
  platforms:                   Platform[];
}

export class AddedByStatus {
  constructor() {}
}

export class EsrbRating {
  constructor(
    public id: number,
    public slug: string,
    public name: string
  ) {}
}

export class MetacriticPlatform {
  constructor(
    public metascore: number,
    public url: string
  ) {}
}

export class Platform {
  constructor(
    public platform: EsrbRating,
    public releasedAt: string,
    public requirements: Requirements
  ) {}
}

export class Requirements {
  constructor(
    public minimum: string,
    public recommended: string
  ) {}
}

export const mapGame = (response: GetGameDetailsResponse): GetGameDetailsResponseDto => {
  const {
    id,
    slug,
    name,
    name_original: nameOriginal,
    description,
    metacritic,
    metacritic_platforms: metacriticPlatforms,
    released,
    tba,
    updated,
    background_image: backgroundImage,
    background_image_additional: backgroundImageAdditional,
    website,
    rating,
    rating_top: ratingTop,
    ratings,
    reactions,
    added,
    added_by_status: addedByStatus,
    playtime,
    screenshots_count: screenshotsCount,
    movies_count: moviesCount,
    creators_count: creatorsCount,
    achievements_count: achievementsCount,
    parent_achievements_count: parentAchievementsCount,
    reddit_url: redditUrl,
    reddit_name: redditName,
    reddit_description: redditDescription,
    reddit_logo: redditLogo,
    reddit_count: redditCount,
    twitch_count: twitchCount,
    youtube_count: youtubeCount,
    reviews_text_count: reviewsTextCount,
    ratings_count: ratingsCount,
    suggestions_count: suggestionsCount,
    alternative_names: alternativeNames,
    metacritic_url: metacriticUrl,
    parents_count: parentsCount,
    additions_count: additionsCount,
    game_series_count: gameSeriesCount,
    esrb_rating: esrbRating,
    platforms,
  } = response;

  return {
    id,
    slug,
    name,
    nameOriginal,
    description,
    metacritic,
    metacriticPlatforms: metacriticPlatforms.map(mp => new MetacriticPlatform(mp.metascore, mp.url)),
    released: new Date(released),
    tba,
    updated: new Date(updated),
    backgroundImage,
    backgroundImageAdditional,
    website,
    rating,
    ratingTop,
    ratings: new AddedByStatus(),
    reactions: new AddedByStatus(),
    added,
    addedByStatus: new AddedByStatus(),
    playtime,
    screenshotsCount,
    moviesCount,
    creatorsCount,
    achievementsCount,
    parentAchievementsCount,
    redditUrl,
    redditName,
    redditDescription,
    redditLogo,
    redditCount,
    twitchCount,
    youtubeCount,
    reviewsTextCount,
    ratingsCount,
    suggestionsCount,
    alternativeNames,
    metacriticUrl,
    parentsCount,
    additionsCount,
    gameSeriesCount,
    esrbRating: new EsrbRating(esrbRating.id, esrbRating.slug, esrbRating.name),
    platforms: platforms.map(p => new Platform(
      new EsrbRating(p.platform.id, p.platform.slug, p.platform.name),
      p.released_at,
      new Requirements(p.requirements.minimum, p.requirements.recommended)
    )),
  };
};
