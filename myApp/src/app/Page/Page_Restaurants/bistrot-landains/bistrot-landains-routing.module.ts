import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BistrotLandainsPage } from './bistrot-landains.page';

const routes: Routes = [
  {
    path: '',
    component: BistrotLandainsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BistrotLandainsPageRoutingModule {}
