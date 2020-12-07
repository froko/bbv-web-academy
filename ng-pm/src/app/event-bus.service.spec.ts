import { inject, TestBed } from '@angular/core/testing';

import { EventBusService } from './event-bus.service';

describe('EventBusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventBusService]
    });
  });

  it('should be created', inject([EventBusService], (service: EventBusService) => {
    expect(service).toBeTruthy();
  }));

  it('should publish event', inject([EventBusService], (service: EventBusService) => {
    service.observe('myEvent').subscribe((event) => expect(event).toBe('Hello World'));

    service.publish('myEvent', 'Hello World');
  }));
});
