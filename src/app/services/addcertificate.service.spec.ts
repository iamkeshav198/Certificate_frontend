import { TestBed } from '@angular/core/testing';

import { AddcertificateService } from './addcertificate.service';

describe('AddcertificateService', () => {
  let service: AddcertificateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddcertificateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
