import { Body, Controller, Post } from "@nestjs/common";
import { BannerService } from "./banner.service";
import { CreateBannerDto } from "./dto/create-banner.dto";

@Controller("banner")
export class BannerController {
    constructor(private readonly bannerService: BannerService) {}

    @Post()
    async create(@Body() createBannerDto: CreateBannerDto) {
        await this.bannerService.create(createBannerDto);
    }
}
