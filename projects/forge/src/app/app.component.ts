import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, of, Subject, switchMap, tap } from 'rxjs';

import { UsersComponent } from './users/users.component';

type Test2 = Record<string, string>;

@Component({
  selector: 'fg-root',
  imports: [RouterOutlet, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'forge';
  ala: Test2 = {hello: 'hello'}
  destroyRef = inject(DestroyRef)
  stream$ = this.test2Subject$.pipe(switchMap(() => of([50])));

  private test2Subject$ = new BehaviorSubject([20.30]);
  private testSubject$ = new Subject();

  private okej = '20';
  private s = this.okej as string

  constructor() {
    this.stream$.pipe(tap(), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        console.log();
      },
      error: () => {
        console.log();
      }
    })
  }

  test(one: unknown, two: unknown, three: unknown): void {
    console.log('test', one, two, three)
  }
}
