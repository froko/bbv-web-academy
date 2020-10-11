import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'toHours' })
export class DurationPipe implements PipeTransform {
  transform(duration: number): string {
    const hourPart = Math.floor(duration / 60);
    const remainingMinutes = duration % 60;

    return ('00' + hourPart).slice(-2) + ':' + ('00' + remainingMinutes).slice(-2);
  }
}
