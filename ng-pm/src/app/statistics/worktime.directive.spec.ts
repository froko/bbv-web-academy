import { ElementRef } from '@angular/core';

import { WorktimeDirective } from './worktime.directive';

describe('WorktimeDirective', () => {
  it('should create an instance', () => {
    const directive = new WorktimeDirective(new ElementRef(120));
    expect(directive).toBeTruthy();
  });
});
