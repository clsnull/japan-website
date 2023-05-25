import {
    UseInterceptors,
    Controller,
    UploadedFile,
    Post,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("upload")
export class UploadController {
    @Post()
    @UseInterceptors(FileInterceptor("file"))
    upload(@UploadedFile() file: Express.Multer.File) {
        return file;
    }
}
