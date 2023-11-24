import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlackBackground]'
})
export class BlackBackgroundDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'black';
    element.nativeElement.style.color = 'white';
  }

}
