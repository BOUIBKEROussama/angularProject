import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrustacePageRoutingModule } from './crustace-routing.module';

import { CrustacePage } from './crustace.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrustacePageRoutingModule
  ],
  declarations: [CrustacePage]
})
export class CrustacePageModule {}
