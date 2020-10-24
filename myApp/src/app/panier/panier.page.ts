import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../Services/connexion.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {
  listePanier = []
  constructor(public connexion:ConnexionService) { }

  ngOnInit() {
    this.affichage()
  }

  affichage(){
    this.listePanier = this.connexion.getListe()
    console.log(this.listePanier)
  }

}
