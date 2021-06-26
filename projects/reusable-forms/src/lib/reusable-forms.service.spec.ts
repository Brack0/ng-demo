import { TestBed } from '@angular/core/testing';

import { ReusableFormsService } from './reusable-forms.service';

describe('ReusableFormsService', () => {
  let service: ReusableFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReusableFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
