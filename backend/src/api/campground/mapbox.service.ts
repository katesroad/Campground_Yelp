import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Geometry } from 'src/entities/campground.entity';

const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');

@Injectable()
export class MapboxService {
  private geocoder: any;
  constructor(private readonly configService: ConfigService) {
    const accessToken = this.configService.get('mapbox.access_token');
    this.geocoder = mbxGeocoding({ accessToken });
    console.log(this.geocoder.forwardGeocode);
  }

  getGeometry(query: string): Promise<Geometry> {
    return this.geocoder
      .forwardGeocode({ query, limit: 1 })
      .send()
      .then((res: any) => res.body.features[0].geometry)
      .catch((e) => {
        throw new ServiceUnavailableException(e.msg);
      });
  }
}
