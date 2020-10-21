import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageBateauPage } from './page-bateau.page';

const routes: Routes = [
  {
    path: '',
    component: PageBateauPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageBateauPageRoutingModule {}
