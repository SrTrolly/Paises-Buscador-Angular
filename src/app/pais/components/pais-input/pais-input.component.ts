import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  termino: string = "";
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = "";

  dbouncer: Subject<string> = new Subject;

  constructor() { }

  ngOnInit(): void {
    this.dbouncer.pipe(
      debounceTime(300) // estos son las milisima de segundos
    ).subscribe(valor => {
      this.onDebounce.emit(valor);
    });
  }

  teclaPresionada() {
    this.dbouncer.next(this.termino);
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

}
