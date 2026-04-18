import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PhotoCard } from '../../shared/ui/photo-card/photo-card';

@Component({
  selector: 'app-photo-gallery',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PhotoCard],
  templateUrl: './photo-gallery.html',
  styleUrl: './photo-gallery.scss',
})
export class PhotoGallery {}
