import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecettexyzPageRoutingModule } from './recettexyz-routing.module';

import { RecettexyzPage } from './recettexyz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecettexyzPageRoutingModule
  ],
  declarations: [RecettexyzPage]
})
export class RecettexyzPageModule {}
