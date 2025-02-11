import { Module } from "@nestjs/common";
import { DevelopersService } from "./developers.service";
import { DevelopersController } from "./developers.controller";
import { RawgDevelopersApi } from "./api/rawg.api";

@Module({
  controllers: [DevelopersController],
  providers: [DevelopersService, RawgDevelopersApi],
})
export class DevelopersModule {}
