import { GetGameDetailsResponse } from "src/game-information/data/get-game-details/get-game-details.response.data";
export interface GetGameDetailsResponseDto {
    id: number;
    slug: string;
    name: string;
    nameOriginal: string;
    description: string;
    metacritic: number;
    metacriticPlatforms: MetacriticPlatform[];
    released: Date;
    tba: boolean;
    updated: Date;
    backgroundImage: string;
    backgroundImageAdditional: string;
    website: string;
    rating: number;
    ratingTop: number;
    ratings: AddedByStatus;
    reactions: AddedByStatus;
    added: number;
    addedByStatus: AddedByStatus;
    playtime: number;
    screenshotsCount: number;
    moviesCount: number;
    creatorsCount: number;
    achievementsCount: number;
    parentAchievementsCount: string;
    redditUrl: string;
    redditName: string;
    redditDescription: string;
    redditLogo: string;
    redditCount: number;
    twitchCount: string;
    youtubeCount: string;
    reviewsTextCount: string;
    ratingsCount: number;
    suggestionsCount: number;
    alternativeNames: string[];
    metacriticUrl: string;
    parentsCount: number;
    additionsCount: number;
    gameSeriesCount: number;
    esrbRating: EsrbRating;
    platforms: Platform[];
}
export declare class AddedByStatus {
    constructor();
}
export declare class EsrbRating {
    id: number;
    slug: string;
    name: string;
    constructor(id: number, slug: string, name: string);
}
export declare class MetacriticPlatform {
    metascore: number;
    url: string;
    constructor(metascore: number, url: string);
}
export declare class Platform {
    platform: EsrbRating;
    releasedAt: string;
    requirements: Requirements;
    constructor(platform: EsrbRating, releasedAt: string, requirements: Requirements);
}
export declare class Requirements {
    minimum: string;
    recommended: string;
    constructor(minimum: string, recommended: string);
}
export declare const mapGame: (response: GetGameDetailsResponse) => GetGameDetailsResponseDto;
