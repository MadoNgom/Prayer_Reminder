import { TestBed } from '@angular/core/testing';

import { ReminderService } from './reminder-service.service';

describe('ReminderServiceService', () => {
  let service: ReminderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReminderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
