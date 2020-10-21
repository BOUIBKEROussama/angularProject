import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
  listeRestaurants = [{
    titre:"Bistrot des Gascons",
    lien:"/page-bateau"
  },
  {
    titre:"Les fous de l'île",
    lien:"/page-bateau"
  },
  {
    titre:"Bistrot Landais",
    lien:"/page-bateau"
  },
  {
    titre:"Bistrot du Sommelier",
    lien:"/page-bateau"
  },{
    titre:"Devenez partenaire !",
    lien:"/page-bateau"
  }]

  listeBoutton;
  constructor() {
    this.listeBoutton = this.listeRestaurants;
   }

  ngOnInit() {
  }
  
}
