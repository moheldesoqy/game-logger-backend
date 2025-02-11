import { ListPlatformsDto } from "../dto/list-platforms/list-platforms.dto";
import { ListPlatformsResponse } from "../data/list-platforms/list-platforms.response.data";
import { GetPlatformDetailsDto } from "../dto/get-platform-details/get-platform-details.dto";
export declare class RawgPlatformsApi {
    private axiosInstance;
    constructor();
    listPlatforms(listPlatformsDto: ListPlatformsDto): Promise<ListPlatformsResponse>;
    getPlatformDetails(getPlatformDetails: GetPlatformDetailsDto): Promise<any>;
}
