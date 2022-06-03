import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Todo } from '../Models/taches';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Output() TacheEvent = new EventEmitter();

  nouvelleTache:Todo= new Todo();

  ngOnInit(): void {
  }
  submitTache(){
//  console.log(this.nouvelleTache);
    this.TacheEvent.emit(this.nouvelleTache);
  }

  constructor() { }
}
