import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ng-ng-ui',
  imports: [],
  template: ` <p>ng-ui works!</p> `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgUiComponent {}
