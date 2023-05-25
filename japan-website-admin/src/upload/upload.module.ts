import { Module } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname, join } from "path";
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
@Module({
    imports: [
        MulterModule.register({
            storage: diskStorage({
                destination: join("./public/uploads"),
                filename: (_, file, callback) => {
                    const fileName = `${
                        new Date().getTime() + extname(file.originalname)
                    }`;
                    return callback(null, fileName);
                },
            }),
        }),
    ],
    controllers: [UploadController],
    providers: [UploadService],
})
export class UploadModule {}
