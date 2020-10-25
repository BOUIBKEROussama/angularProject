import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'restaurant',
    loadChildren: () => import('./restaurant/restaurant.module').then( m => m.RestaurantPageModule)
  },
  {
    path: 'bateau',
    loadChildren: () => import('./bateau/bateau.module').then( m => m.BateauPageModule)
  },
  {
    path: 'recette',
    loadChildren: () => import('./recette/recette.module').then( m => m.RecettePageModule)
  },
  {
    path: 'produit',
    loadChildren: () => import('./produit/produit.module').then( m => m.ProduitPageModule)
  },
  {
    path: 'de-la-brise',
    loadChildren: () => import('./Page/Page_Bateaux/de-la-brise/de-la-brise.module').then( m => m.DeLaBrisePageModule)
  },
  {
    path: 'saphir',
    loadChildren: () => import('./Page/Page_Bateaux/saphir/saphir.module').then( m => m.SaphirPageModule)
  },
  {
    path: 'gast-micher',
    loadChildren: () => import('./Page/Page_Bateaux/gast-micher/gast-micher.module').then( m => m.GastMicherPageModule)
  },
  {
    path: 'aquilon',
    loadChildren: () => import('./Page/Page_Bateaux/aquilon/aquilon.module').then( m => m.AquilonPageModule)
  },
  {
    path: 'homard',
    loadChildren: () => import('./Page/Page_Recettes/homard/homard.module').then( m => m.HomardPageModule)
  },
  {
    path: 'st-jacques',
    loadChildren: () => import('./Page/Page_Recettes/st-jacques/st-jacques.module').then( m => m.StJacquesPageModule)
  },
  {
    path: 'bar',
    loadChildren: () => import('./Page/Page_Recettes/bar/bar.module').then( m => m.BarPageModule)
  },
  {
    path: 'tourteau',
    loadChildren: () => import('./Page/Page_Recettes/tourteau/tourteau.module').then( m => m.TourteauPageModule)
  },
  {
    path: 'bistrot-des-gascons',
    loadChildren: () => import('./Page/Page_Restaurants/bistrot-des-gascons/bistrot-des-gascons.module').then( m => m.BistrotDesGasconsPageModule)
  },
  {
    path: 'les-fous-de-lile',
    loadChildren: () => import('./Page/Page_Restaurants/les-fous-de-lile/les-fous-de-lile.module').then( m => m.LesFousDeLilePageModule)
  },
  {
    path: 'bistrot-landains',
    loadChildren: () => import('./Page/Page_Restaurants/bistrot-landains/bistrot-landains.module').then( m => m.BistrotLandainsPageModule)
  },
  {
    path: 'bisrtot-du-sommelier',
    loadChildren: () => import('./Page/Page_Restaurants/bisrtot-du-sommelier/bisrtot-du-sommelier.module').then( m => m.BisrtotDuSommelierPageModule)
  },
  {
    path: 'villa9-trois',
    loadChildren: () => import('./Page/Page_Restaurants/villa9-trois/villa9-trois.module').then( m => m.Villa9TroisPageModule)
  },
  {
    path: 'poisson',
    loadChildren: () => import('./ListeProduit/poisson/poisson.module').then( m => m.PoissonPageModule)
  },
  {
    path: 'coquillage',
    loadChildren: () => import('./ListeProduit/coquillage/coquillage.module').then( m => m.CoquillagePageModule)
  },
  {
    path: 'crustace',
    loadChildren: () => import('./ListeProduit/crustace/crustace.module').then( m => m.CrustacePageModule)
  },
  {
    path: 'promotion',
    loadChildren: () => import('./ListeProduit/promotion/promotion.module').then( m => m.PromotionPageModule)
  },
  {
    path: 'panier',
    loadChildren: () => import('./panier/panier.module').then( m => m.PanierPageModule)
  },
  {path: 'recettexyz',
  loadChildren: () => import('./Page/Page_Recettes/recettexyz/recettexyz.module').then( m => m.RecettexyzPageModule)
},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
