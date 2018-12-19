import { TestBed } from '@angular/core/testing';

import { AllQuestionsService } from './all-questions.service';

describe('AllQuestionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllQuestionsService = TestBed.get(AllQuestionsService);
    expect(service).toBeTruthy();
  });
});
