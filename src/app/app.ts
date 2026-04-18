import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { WhatIDo } from './sections/what-i-do/what-i-do';
import { Projects } from './sections/projects/projects';
import { PhotoGallery } from './sections/photo-gallery/photo-gallery';
import { Contact } from './sections/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Hero, About, WhatIDo, Projects, PhotoGallery, Contact],
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
