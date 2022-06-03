import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../Models/taches';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  @Input() TacheProfil: Todo;

  constructor() { }

  ngOnInit(): void {
  }

}
