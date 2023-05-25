import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BannerModule } from "./banner/banner.module";
import { UserModule } from "./user/user.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { UploadModule } from './upload/upload.module';
@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, "..", "public"),
        }),
        MongooseModule.forRoot("mongodb://www.clsnull.com:27017", {
            dbName: "japan",
            user: "admin",
            pass: "clsnull5370",
            authSource: "admin",
        }),
        BannerModule,
        UserModule,
        UploadModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
