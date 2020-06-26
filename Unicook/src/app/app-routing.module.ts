import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrazione',
    loadChildren: () => import('./pages/registrazione/registrazione.module').then( m => m.RegistrazionePageModule)
  },
  {
    path: 'recuperopassword',
    loadChildren: () => import('./pages/recuperopassword/recuperopassword.module').then( m => m.RecuperopasswordPageModule)
  },
  {
    path: 'pubblicaricetta',
    loadChildren: () => import('./pages/pubblicaricetta/pubblicaricetta.module').then( m => m.PubblicaricettaPageModule)
  },
  {
    path: 'dettaglioricetta/:id',
    loadChildren: () => import('./pages/dettaglioricetta/dettaglioricetta.module').then( m => m.DettaglioricettaPageModule)
  },
  {
    path: 'valutazione/:id',
    loadChildren: () => import('./pages/valutazione/valutazione.module').then( m => m.ValutazionePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
