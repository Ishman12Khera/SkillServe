import { TestBed } from '@angular/core/testing';

import { RegisterApplicantService } from './register-applicant.service';

describe('RegisterApplicantService', () => {
  let service: RegisterApplicantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterApplicantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
