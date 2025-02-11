import { RawgPlatformsApi } from "./api/rawg.api";
import { ListPlatformsDto } from "./dto/list-platforms/list-platforms.dto";
import { GetPlatformDetailsDto } from "./dto/get-platform-details/get-platform-details.dto";
export declare class PlatformsService {
    private readonly rawgPlatformsApi;
    constructor(rawgPlatformsApi: RawgPlatformsApi);
    listPlatforms(listPlatformsDto: ListPlatformsDto): Promise<import("src/mapping/platforms-mapping/list-platforms-mapping").ListPlatformsResponseDto>;
    getPlatformDetails(getPlatformDetails: GetPlatformDetailsDto): Promise<any>;
}
