import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BisrtotDuSommelierPage } from './bisrtot-du-sommelier.page';

const routes: Routes = [
  {
    path: '',
    component: BisrtotDuSommelierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BisrtotDuSommelierPageRoutingModule {}
