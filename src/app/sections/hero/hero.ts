import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PaperCard } from '../../shared/ui/paper-card/paper-card';
import { PhotoCard } from '../../shared/ui/photo-card/photo-card';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PaperCard, PhotoCard],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
