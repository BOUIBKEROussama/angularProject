import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { ConnexionService } from 'src/app/Services/connexion.service';
>>>>>>> francois2

@Component({
  selector: 'app-crustace',
  templateUrl: './crustace.page.html',
  styleUrls: ['./crustace.page.scss'],
})
export class CrustacePage implements OnInit {
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
        if(i.category===2){
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
