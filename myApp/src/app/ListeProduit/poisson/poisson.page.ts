<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../../Services/connexion.service'
>>>>>>> francois2

@Component({
  selector: 'app-poisson',
  templateUrl: './poisson.page.html',
  styleUrls: ['./poisson.page.scss'],
})
export class PoissonPage implements OnInit {
<<<<<<< HEAD

  constructor() { }

  ngOnInit() {
=======
  fichier;
  liste = [];

  constructor(public connexion:ConnexionService) {
   }

  ngOnInit() {
    this.affichage()
  }
  affichage(){
    this.connexion.getFichier().subscribe((res)=>{
      this.fichier = res;
      for(let i of this.fichier){
        if(i.category===0){
          this.liste.push(i)
        }
      }
      console.log(this.liste)
    })
  }

  

  add(element){
    if(!this.connexion.isInList(element)){
      this.connexion.addList(element);
    }
    else{
      this.connexion.removeList(element);
    }
>>>>>>> francois2
  }

}
