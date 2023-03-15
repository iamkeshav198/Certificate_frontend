import { TestBed } from '@angular/core/testing';

import { CertificateserviceService } from './certificateservice.service';

describe('CertificateserviceService', () => {
  let service: CertificateserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertificateserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
