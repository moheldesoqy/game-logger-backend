import { Injectable } from "@nestjs/common";
import { RawgPlatformsApi } from "./api/rawg.api";
import { ListPlatformsDto } from "./dto/list-platforms/list-platforms.dto";
import { GetPlatformDetailsDto } from "./dto/get-platform-details/get-platform-details.dto";
import { mapPlatforms } from "src/mapping/platforms-mapping/list-platforms-mapping";

@Injectable()
export class PlatformsService {
  constructor(private readonly rawgPlatformsApi: RawgPlatformsApi) {}

  async listPlatforms(listPlatformsDto: ListPlatformsDto) {
    const platforms =
      await this.rawgPlatformsApi.listPlatforms(listPlatformsDto);
    return mapPlatforms(platforms);
  }

  async getPlatformDetails(getPlatformDetails: GetPlatformDetailsDto) {
    return await this.rawgPlatformsApi.getPlatformDetails(getPlatformDetails);
  }
}
