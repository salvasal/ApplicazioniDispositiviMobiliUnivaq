import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listaricette/lista',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule'
  },
  {
    path: 'registrazione',
    loadChildren: './pages/registrazione/registrazione.module#RegistrazionePageModule'
  },
  {
    path: 'listaricette',
    loadChildren: './pages/listaricette/listaricette.module#ListaricettePageModule' },
  {
    path: 'recuperopassword',
    loadChildren: './pages/recuperopassword/recuperopassword.module#RecuperopasswordPageModule'
  },
  {
    path: 'listacategorie',
    loadChildren: './pages/listacategorie/listacategorie.module#ListacategoriePageModule'
  },
  { path: 'listaingredienti', loadChildren: './pages/listaingredienti/listaingredienti.module#ListaingredientiPageModule' },
  { path: 'creapubblica', loadChildren: './pages/creapubblica/creapubblica.module#CreapubblicaPageModule' },
  { path: 'lista', loadChildren: './pages/lista/lista.module#ListaPageModule' },  { path: 'dettaglioricetta', loadChildren: './pages/dettaglioricetta/dettaglioricetta.module#DettaglioricettaPageModule' }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
