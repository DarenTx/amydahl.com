import { booleanAttribute, ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-photo-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  host: { class: 'paper-card' },
  template: `
    @if (priority()) {
      <img [ngSrc]="src()" [width]="width()" [height]="height()" [alt]="alt()" priority />
    } @else {
      <img [ngSrc]="src()" [width]="width()" [height]="height()" [alt]="alt()" loading="lazy" />
    }
  `,
  styles: `
    :host {
      display: block;
      padding: 0.38rem;
      margin: 0;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
      min-height: inherit;
      object-fit: cover;
    }
  `,
})
export class PhotoCard {
  src = input.required<string>();
  width = input.required<number>();
  height = input.required<number>();
  alt = input.required<string>();
  priority = input(false, { transform: booleanAttribute });
}
