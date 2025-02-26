import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { UsersComponent } from './users/users.component';

@Component({
  selector: 'fg-root',
  imports: [RouterOutlet, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'forge';
  val = '';

  onMethod(abc: unknown, das: unknown, fas: unknown): void {
    console.log(abc, das, fas);
  }

  onTest(): void {
    console.log('test');
  }
}
