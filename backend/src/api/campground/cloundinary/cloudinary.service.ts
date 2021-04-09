import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import toStream = require('buffer-to-stream');
import { v4 as uuid } from 'uuid';
import * as path from 'path';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CloudinaryService {
  constructor(private readonly configService: ConfigService) {}

  async uploadImages(files: Express.Multer.File[]) {
    const promises = files.map((file) => this.uploadImage(file));
    return Promise.all(promises);
  }

  private async uploadImage(
    file: Express.Multer.File,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    const { folder, allowed_formats } = this.configService.get('cloudinary');
    return new Promise((resolve, reject) => {
      // backend/node_modules/cloudinary/types/index.d.ts
      const upload = v2.uploader.upload_stream(
        {
          allowed_formats: allowed_formats.split(','),
          folder,
          public_id: this.getFileUniqueName(file),
          unique_filename: true,
        },
        (error, result) => {
          if (error) return reject(error);
          else resolve(result);
        },
      );
      toStream(file.buffer).pipe(upload);
    });
  }

  private getFileUniqueName(file: Express.Multer.File): string {
    const extention = path.extname(file.originalname);
    const fileName = file.originalname.replace(extention, '');
    const id = uuid();
    return `${fileName}.${id}`;
  }
}
