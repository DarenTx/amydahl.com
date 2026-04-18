import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-paper-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'paper-card' },
  template: `<ng-content />`,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class PaperCard {}
