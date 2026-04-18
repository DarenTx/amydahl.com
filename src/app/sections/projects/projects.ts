import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PaperCard } from '../../shared/ui/paper-card/paper-card';
import { ContentService } from '../../shared/services/content.service';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PaperCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  private content = inject(ContentService);

  projectItems = this.content.getBulletPoints('My Current Projects');
  beliefItems = this.content.getBulletPoints('Things I Believe');
}
