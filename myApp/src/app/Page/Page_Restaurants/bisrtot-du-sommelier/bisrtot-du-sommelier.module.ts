import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BisrtotDuSommelierPageRoutingModule } from './bisrtot-du-sommelier-routing.module';

import { BisrtotDuSommelierPage } from './bisrtot-du-sommelier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BisrtotDuSommelierPageRoutingModule
  ],
  declarations: [BisrtotDuSommelierPage]
})
export class BisrtotDuSommelierPageModule {}
