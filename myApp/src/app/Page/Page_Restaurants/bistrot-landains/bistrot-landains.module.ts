import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BistrotLandainsPageRoutingModule } from './bistrot-landains-routing.module';

import { BistrotLandainsPage } from './bistrot-landains.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BistrotLandainsPageRoutingModule
  ],
  declarations: [BistrotLandainsPage]
})
export class BistrotLandainsPageModule {}
