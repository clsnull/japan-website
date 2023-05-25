import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type BannerDocument = HydratedDocument<Banner>;

@Schema()
export class Banner {
    @Prop()
    name: string;

    @Prop()
    url: string;

    @Prop()
    img: string;
}

export const BannerSchema = SchemaFactory.createForClass(Banner);
