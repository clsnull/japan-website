import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Banner } from "./schemas/banner.schema";
import { Model } from "mongoose";
import { CreateBannerDto } from "./dto/create-banner.dto";

@Injectable()
export class BannerService {
    constructor(
        @InjectModel(Banner.name) private readonly bannerModel: Model<Banner>
    ) {}

    async create(createBannerDto: CreateBannerDto): Promise<Banner> {
        const createdBanner = await this.bannerModel.create(createBannerDto);
        return createdBanner;
    }

    async findAll(): Promise<Banner[]> {
        return this.bannerModel.find().exec();
    }

    async findOne(id: string): Promise<Banner> {
        return this.bannerModel.findOne({ _id: id }).exec();
    }

    async delete(id: string) {
        const deletedCat = await this.bannerModel
            .findByIdAndRemove({ _id: id })
            .exec();
        return deletedCat;
    }
}
