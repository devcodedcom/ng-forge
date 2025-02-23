import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  InputSignal,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';

interface User {
  name: string;
  age: number
}

@Component({
  selector: 'fg-users',
  imports: [],
  template: `<div>
    sda
  </div>`,
  styleUrl: './users.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnDestroy, OnInit {

  @Output() readonly closable = new EventEmitter<boolean>()
  @Output() readonly draggable = new EventEmitter<boolean>()

  readonly UPPERCA_SE = 20;
  readonly data: InputSignal<User[]> = input([{name: 'Lukas', age: this.UPPERCA_SE}]);

  ngOnInit(): void {
    console.log('hej')
  }


  ngOnDestroy(): void {
    console.log('hej')
  }
}


