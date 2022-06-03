import { Injectable } from '@angular/core';
import { Todo } from '../Models/taches';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  saveTaches(Taches:Todo[]){
    localStorage.setItem('Taches',JSON.stringify(Taches));
  }
  
  //Permet de récupérer les tâches du storage
  getTaches():Todo[]{
  
    const Taches = JSON.parse(
  
      localStorage.getItem('Taches')!
    );
  
  if (Taches !== null) {
    return Taches;
    }
    else{
      return[];
    }
  }

  constructor() { }
}
