import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  HostBinding,
} from '@angular/core';

@Directive({ selector: '[appDropdown]' })
export class DropdownDirective {
  // method 1 : using nativeElement and renderer2
  //   constructor(private element: ElementRef, private renderer2: Renderer2) {}

  //   @HostListener('click') toggleDropdown() {
  //     const isOpen = this.element.nativeElement.classList.contains('open');
  //     if (isOpen) {
  //       this.renderer2.removeClass(this.element.nativeElement, 'open');
  //     } else {
  //       this.renderer2.addClass(this.element.nativeElement, 'open');
  //     }
  //

  //methid 2: using hostBinding and hostListener
  @HostBinding('class.open') isOpen: boolean = false;
  @HostListener('click') toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
