import { TestBed } from '@angular/core/testing';

import { ViewMessagesService } from './view-messages.service';

describe('ViewMessagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewMessagesService = TestBed.get(ViewMessagesService);
    expect(service).toBeTruthy();
  });
});
