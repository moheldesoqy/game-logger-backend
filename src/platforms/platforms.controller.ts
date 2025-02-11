import { Controller, Get, Query } from "@nestjs/common";
import { PlatformsService } from "./platforms.service";
import { ListPlatformsDto } from "./dto/list-platforms/list-platforms.dto";
import { GetPlatformDetailsDto } from "./dto/get-platform-details/get-platform-details.dto";

@Controller("platforms")
export class PlatformsController {
  constructor(private readonly platformsService: PlatformsService) {}

  @Get()
  async listPlatforms(@Query() listPlatformsDto: ListPlatformsDto) {
    return await this.platformsService.listPlatforms(listPlatformsDto);
  }

  @Get("details")
  async getPlatformDetails(
    @Query() getPlatformDetailsDto: GetPlatformDetailsDto
  ) {
    return await this.platformsService.getPlatformDetails(
      getPlatformDetailsDto
    );
  }
}
