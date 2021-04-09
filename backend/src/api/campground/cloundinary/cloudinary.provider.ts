import { ConfigService } from '@nestjs/config';
import { v2 } from 'cloudinary';

export const CLOUNDINARY = 'cloundinary';

export const CloudinaryProvider = {
  provide: CLOUNDINARY,
  useFactory: (config: ConfigService) => {
    const conf = config.get('cloudinary');
    return v2.config(conf);
  },
  inject: [ConfigService],
};
