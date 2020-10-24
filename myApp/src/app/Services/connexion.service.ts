import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  liste=[]
  constructor(public http: HttpClient) {

  }
  addList(produit){
    this.liste.push(produit);
  }

  removeList(produit){
    this.liste = this.liste.filter(a=>produit.id!==a.id);
  }

  isInList(produit){
    let result = this.liste.filter(a=>produit.id===a.id).length;
    return result > 0;
  }

  getFichier(){
    return this.http.get<any[]>('../../assets/jsonfiles/produit.json')
  }

  getListe(){
    return this.liste;
  }
}
