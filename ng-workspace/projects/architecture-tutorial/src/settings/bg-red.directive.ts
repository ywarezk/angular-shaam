import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[shaamBgRed]'
})
export class BgRedDirective {

    constructor(
      private _element : ElementRef 
    ) { 
        _element.nativeElement.style.backgroundColor = 'red';
    }

}
