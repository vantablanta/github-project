import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplyGists'
})
export class MultiplyGistsPipe implements PipeTransform {

  transform(value: any): unknown {
    return value * 2;
  }

}
