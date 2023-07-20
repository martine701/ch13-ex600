import { Directive, Input,Component,ElementRef,Renderer2,OnInit } from '@angular/core';

@Directive({
  selector: '[sizer]'
})
export class SizerDirective implements OnInit {
  @Input() sizer: string = "16px";
  constructor(private element: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'font-size', this.sizer);
  }
}
