import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PaperCard } from '../../shared/ui/paper-card/paper-card';
import { ContentService } from '../../shared/services/content.service';

@Component({
  selector: 'app-what-i-do',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PaperCard],
  templateUrl: './what-i-do.html',
  styleUrl: './what-i-do.scss',
})
export class WhatIDo {
  private content = inject(ContentService);

  businessItems = this.content.getBulletPoints('Business & Real Life');
  funPlannerItems = this.content.getBulletPoints('Fun Planner');
  problemSolverItems = this.content.getBulletPoints('Problem Solver');
}
