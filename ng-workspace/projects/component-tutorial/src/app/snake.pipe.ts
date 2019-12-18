import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'snake',
})
export class SnakePipe implements PipeTransform {

  transform(strToTransform : string, lettersToTransform : string, age: number): string {
    let result = '';
    for (let char of strToTransform) {
        if (char === lettersToTransform) {
            result+=char.toUpperCase();
        }
        else {
            result+=char;
        }
    }
    return result;
  }

}
