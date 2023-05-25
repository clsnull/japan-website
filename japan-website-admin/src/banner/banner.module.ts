import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BannerController } from "./banner.controller";
import { BannerService } from "./banner.service";
import { Banner, BannerSchema } from "./schemas/banner.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Banner.name, schema: BannerSchema, collection:'banner'},
        ]),
    ],
    controllers: [BannerController],
    providers: [BannerService],
})
export class BannerModule {}
