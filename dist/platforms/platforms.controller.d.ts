import { PlatformsService } from "./platforms.service";
import { ListPlatformsDto } from "./dto/list-platforms/list-platforms.dto";
import { GetPlatformDetailsDto } from "./dto/get-platform-details/get-platform-details.dto";
export declare class PlatformsController {
    private readonly platformsService;
    constructor(platformsService: PlatformsService);
    listPlatforms(listPlatformsDto: ListPlatformsDto): Promise<import("../mapping/platforms-mapping/list-platforms-mapping").ListPlatformsResponseDto>;
    getPlatformDetails(getPlatformDetailsDto: GetPlatformDetailsDto): Promise<any>;
}
