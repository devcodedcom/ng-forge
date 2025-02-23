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
  static UPPERCA_SE = 20;

  @Output() readonly closable = new EventEmitter<boolean>()
  @Output() readonly draggable = new EventEmitter<boolean>()


  hejo = 'hej'

  readonly data: InputSignal<User[]> = input([{name: 'Lukas', age: 35}]);


  sdalsa = 20;
  test343= 20;


  get dupcia(): string {
    return this.hejo;
  }



  ngOnInit(): void {
    console.log('hej')
  }


  ngOnDestroy(): void {
    console.log('hej')
  }

  metoda(test: unknown): void {
    console.log('hello', test);
    const fn = new Function('a', 'b', 'return a + b');
    const dupa = 5;
    eval('fn');
    console.log(eval(new String("2 + 2")));
    setTimeout(() => {

    });

    setInterval(() => {

    })
  }


}


