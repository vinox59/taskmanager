import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priority',
  standalone: false
})
export class PriorityPipe implements PipeTransform {

  transform(value: unknown): unknown {
    return value == 1 ? 'High' : value == 2 ? 'Medium' : 'Low';
  }

}
