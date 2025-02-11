import { Module } from "@nestjs/common";
import { StoresService } from "./stores.service";
import { StoresController } from "./stores.controller";
import { RawgStoresApi } from "./api/rawg.api";

@Module({
  controllers: [StoresController],
  providers: [StoresService, RawgStoresApi],
})
export class StoresModule {}
