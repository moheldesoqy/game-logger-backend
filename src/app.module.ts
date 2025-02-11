import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import gameTrackerConfig from "./config/game-tracker.config";
import { RawgGamesApi } from "./game-information/api/rawg.api";
import { GameInformationService } from "./game-information/game-information.service";
import { GameInformationController } from "./game-information/game-information.controller";
import { GenresService } from "./genres/genres.service";
import { RawgGenresApi } from "./genres/api/rawg.api";
import { GenresController } from "./genres/genres.controller";
import { PlatformsController } from "./platforms/platforms.controller";
import { PlatformsService } from "./platforms/platforms.service";
import { RawgPlatformsApi } from "./platforms/api/rawg.api";
import { DevelopersModule } from "./developers/developers.module";
import { DevelopersController } from "./developers/developers.controller";
import { DevelopersService } from "./developers/developers.service";
import { RawgDevelopersApi } from "./developers/api/rawg.api";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `src/config/env/${process.env.NODE_ENV}.env`,
      load: [gameTrackerConfig],
      isGlobal: true,
    }),
    DevelopersModule,
  ],
  controllers: [
    AppController,
    GameInformationController,
    GenresController,
    PlatformsController,
    DevelopersController,
  ],
  providers: [
    AppService,
    RawgGamesApi,
    RawgGenresApi,
    GameInformationService,
    GenresService,
    PlatformsService,
    RawgPlatformsApi,
    DevelopersService,
    RawgDevelopersApi,
  ],
})
export class AppModule {}
