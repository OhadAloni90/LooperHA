import { TestBed } from '@angular/core/testing';

import { AudioListServiceService } from './audio-list-service.service';

describe('AudioListServiceService', () => {
  let service: AudioListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
