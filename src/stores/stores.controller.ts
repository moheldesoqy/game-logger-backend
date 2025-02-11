import { Controller, Get, Body, Param, Query } from "@nestjs/common";
import { StoresService } from "./stores.service";
import { ListStoresDto } from "./dto/list-stores/list-stores.dto";

@Controller("stores")
export class StoresController {
  constructor(private readonly storesService: StoresService) {}

  @Get()
  async listStores(@Body() listStoresDto: ListStoresDto) {
    return this.storesService.listStores(listStoresDto);
  }

  @Get("details")
  async getStoreDetails(@Query("id") id: number) {
    return this.storesService.getStoreDetails(id);
  }
}
