import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');

@Injectable()
export class MapboxService {
  private geocoder: any;
  constructor(private readonly configService: ConfigService) {
    const accessToken = this.configService.get('mapbox.access_token');
    this.geocoder = mbxGeocoding({ accessToken });
  }

  getGeometry(location: string) {
    return this.geocoder
      .forwardGeocode({
        query: location,
        limit: 1,
      })
      .send()
      .then((res: any) => res?.features[0].geometry);
  }
}
