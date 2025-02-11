import { Injectable } from "@nestjs/common";
import { RawgStoresApi } from "./api/rawg.api";
import { ListStoresDto } from "./dto/list-stores/list-stores.dto";

@Injectable()
export class StoresService {
  constructor(private readonly rawgStoresApi: RawgStoresApi) {}
  async listStores(listStoresDto: ListStoresDto) {
    return await this.rawgStoresApi.listStorefronts(listStoresDto);
  }

  async getStoreDetails(id: number) {
    return await this.rawgStoresApi.getStorefrontDetails(id);
  }
}
