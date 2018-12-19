import { TestBed } from '@angular/core/testing';

import { RegisterService} from './register-service.service';

describe('RegisterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterService = TestBed.get(RegisterService);
    expect(service).toBeTruthy();
  });
});
