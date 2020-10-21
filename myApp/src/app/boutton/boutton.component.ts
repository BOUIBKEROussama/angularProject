import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boutton',
  templateUrl: './boutton.component.html',
  styleUrls: ['./boutton.component.scss'],
})
export class BouttonComponent implements OnInit {
  @Input() titre : string;
  @Input() lien : string;
  constructor() { }

  ngOnInit() {}

  getTitre(){
    return this.titre;
  }
}
