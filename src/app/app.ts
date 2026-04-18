import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [NgOptimizedImage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        document.body.classList.add('bg-fade-in');
        document.querySelector<HTMLElement>('.fade-in-bg')?.classList.add('bg-fade-in');
      });
    }
  }
}
