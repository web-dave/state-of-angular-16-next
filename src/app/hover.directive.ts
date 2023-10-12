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
  child = document.createElement('label');
  ngOnChanges(): void {
    this.hostELem.nativeElement.title = this.appHover;
    this.child.innerText = this.appHover;
    this.hostELem.nativeElement.appendChild(this.child);

    console.log(this.appHover);
  }
  constructor() {
    console.log('jkhsgdosadjhga');
  }
}
