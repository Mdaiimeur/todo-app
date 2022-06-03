import { Component } from '@angular/core';
import { Todo } from './Models/taches';
import { StorageService } from './service/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private storageService: StorageService) {}
//Déclaration d'une variable
title = 'Travail à faire';
  TodoActif : Todo;

//Déclaration d'un objet

/*  uneTache={
    id:1,
    name: 'Tondre la pelouse',
    time: '1 heure',
    priotity: '3',
    user : 'Jamy',
  }
*/

//Tableau des tâches
mesTaches:Todo[] = [
  {
    id:1,
    name: 'Tondre la pelouse',
    time: '1 heure',
    priority: '3',
    user : 'Jamy',
    status: false,
  },
  {
    id:2,
    name: "Emmener Julie à l'école", 
    time: '30 minutes',
    priority: '5',
    user : 'Micheline',
    status: false,
  },
  {
    id:3,
    name: 'Préparer un gateau',
    time: '1 heure',
    priority: '1',
    user : 'Julie',
    status: false,
  },
  {
    id:4,
    name: 'Faire les devoirs',
    time: '2 heures',
    priority: '4',
    user : 'Keldine',
    status: false,
  }
]



  //Permet d'afficher le profil
displayProfil(Todo:Todo){
  this.TodoActif=Todo;
  };

/** 
 * La nouvelle tâche récupérée depuis
 * le composant addcomponent
*/
  addTache(nouvelleTache:Todo){
    //on pousse (push) dans le tableau la nouvelle tâches
  this.mesTaches.push(nouvelleTache);
  //j'enregistre dans le storage la nouvelle tâche
  this.storageService.saveTaches(this.mesTaches);
}
ngOnInit():void{
  this.mesTaches = this.storageService.getTaches();
}
// Je supprime ma tâche et je sauvegarde a nouveau
deleteTache(tache:Todo){
  console.log(tache)
  this.mesTaches.splice(this.mesTaches.indexOf(tache), 1);
  this.storageService.saveTaches(this.mesTaches);

// Je barre le texte pour validé la tâche
}

tacheCount(){
  let tacheCheck = "";
  for(let i = 0; i< this.mesTaches.length; i++){
    if(this.mesTaches[i].status == true){
      tacheCheck  = tacheCheck + 1;
    }
  }
  tacheCheck  = tacheCheck +"/"+ this.mesTaches.length
  return tacheCheck ;
}
*
barretxt(tache:Todo){
  console.log("coucou")
  //return tache.status === false ? true : null
 
}




}
