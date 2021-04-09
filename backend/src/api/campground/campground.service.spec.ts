import { Test, TestingModule } from '@nestjs/testing';
import { CampgroundService } from './campground.service';

describe('CampgroundService', () => {
  let service: CampgroundService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampgroundService],
    }).compile();

    service = module.get<CampgroundService>(CampgroundService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
