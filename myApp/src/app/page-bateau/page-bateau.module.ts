import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageBateauPageRoutingModule } from './page-bateau-routing.module';

import { PageBateauPage } from './page-bateau.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageBateauPageRoutingModule
  ],
  declarations: [PageBateauPage]
})
export class PageBateauPageModule {}
