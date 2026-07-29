import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// Hands-On 3, Task 3: custom attribute directive - highlights the host element
// on mouseenter and removes the highlight on mouseleave. Configurable colour via @Input.
@Directive({
  selector: '[appHighlight]'
})
export class Highlight {
  @Input() appHighlight = 'yellow';

  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.el.nativeElement.style.backgroundColor = this.appHighlight || 'yellow';
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
