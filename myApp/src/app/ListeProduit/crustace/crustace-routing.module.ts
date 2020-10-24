import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrustacePage } from './crustace.page';

const routes: Routes = [
  {
    path: '',
    component: CrustacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrustacePageRoutingModule {}
