"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapGame = exports.Requirements = exports.Platform = exports.MetacriticPlatform = exports.EsrbRating = exports.AddedByStatus = void 0;
class AddedByStatus {
    constructor() { }
}
exports.AddedByStatus = AddedByStatus;
class EsrbRating {
    constructor(id, slug, name) {
        this.id = id;
        this.slug = slug;
        this.name = name;
    }
}
exports.EsrbRating = EsrbRating;
class MetacriticPlatform {
    constructor(metascore, url) {
        this.metascore = metascore;
        this.url = url;
    }
}
exports.MetacriticPlatform = MetacriticPlatform;
class Platform {
    constructor(platform, releasedAt, requirements) {
        this.platform = platform;
        this.releasedAt = releasedAt;
        this.requirements = requirements;
    }
}
exports.Platform = Platform;
class Requirements {
    constructor(minimum, recommended) {
        this.minimum = minimum;
        this.recommended = recommended;
    }
}
exports.Requirements = Requirements;
const mapGame = (response) => {
    const { id, slug, name, name_original: nameOriginal, description, metacritic, metacritic_platforms: metacriticPlatforms, released, tba, updated, background_image: backgroundImage, background_image_additional: backgroundImageAdditional, website, rating, rating_top: ratingTop, ratings, reactions, added, added_by_status: addedByStatus, playtime, screenshots_count: screenshotsCount, movies_count: moviesCount, creators_count: creatorsCount, achievements_count: achievementsCount, parent_achievements_count: parentAchievementsCount, reddit_url: redditUrl, reddit_name: redditName, reddit_description: redditDescription, reddit_logo: redditLogo, reddit_count: redditCount, twitch_count: twitchCount, youtube_count: youtubeCount, reviews_text_count: reviewsTextCount, ratings_count: ratingsCount, suggestions_count: suggestionsCount, alternative_names: alternativeNames, metacritic_url: metacriticUrl, parents_count: parentsCount, additions_count: additionsCount, game_series_count: gameSeriesCount, esrb_rating: esrbRating, platforms, } = response;
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
        platforms: platforms.map(p => new Platform(new EsrbRating(p.platform.id, p.platform.slug, p.platform.name), p.released_at, new Requirements(p.requirements.minimum, p.requirements.recommended))),
    };
};
exports.mapGame = mapGame;
//# sourceMappingURL=game-mapping.js.map