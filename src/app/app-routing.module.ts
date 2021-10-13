import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'lobby',
    pathMatch: 'full'
  },
  {
    path: 'lobby',
    loadChildren: () => import('./lobby/lobby.module').then( m => m.LobbyPageModule)
  },
  {
    path: 'cadastro-musico',
    loadChildren: () => import('./cadastro-musico/cadastro-musico.module').then( m => m.CadastroMusicoPageModule)
  },
  {
    path: 'codigo-musico',
    loadChildren: () => import('./codigo-musico/codigo-musico.module').then( m => m.CodigoMusicoPageModule)
  },
  {
    path: 'preferencias-musico',
    loadChildren: () => import('./preferencias-musico/preferencias-musico.module').then( m => m.PreferenciasMusicoPageModule)
  },
  {
    path: 'mais-preferencias-musico',
    loadChildren: () => import('./mais-preferencias-musico/mais-preferencias-musico.module').then( m => m.MaisPreferenciasMusicoPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'perfil-musico',
    loadChildren: () => import('./perfil-musico/perfil-musico.module').then( m => m.PerfilMusicoPageModule)
  },
  {
    path: 'filtros',
    loadChildren: () => import('./modals/filtros/filtros.module').then( m => m.FiltrosPageModule)
  },
  {
    path: 'evento',
    loadChildren: () => import('./evento/evento.module').then( m => m.EventoPageModule)
  },
  {
    path: 'recarregar',
    loadChildren: () => import('./recarregar/recarregar.module').then( m => m.RecarregarPageModule)
  },
  {
    path: 'negociacoes',
    loadChildren: () => import('./negociacoes/negociacoes.module').then( m => m.NegociacoesPageModule)
  },
  {
    path: 'alert-denuncia',
    loadChildren: () => import('./modals/alert-denuncia/alert-denuncia.module').then( m => m.AlertDenunciaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
