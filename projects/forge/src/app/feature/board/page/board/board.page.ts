import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fg-board',
  standalone: true,
  templateUrl: './board.page.html',
  styleUrl: './board.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardPageComponent {}
