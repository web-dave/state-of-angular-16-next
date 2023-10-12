import {
  Directive,
  inject,
  ElementRef,
  Input,
  OnInit,
  OnChanges,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true,
})
export class HoverDirective implements OnChanges {
  @Input({ required: true }) appHover: string = '';
  hostELem: ElementRef<HTMLDivElement> = inject(ElementRef);
  ngOnChanges(): void {
    this.hostELem.nativeElement.title = this.appHover;
  }
}
