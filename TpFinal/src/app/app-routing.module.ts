import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// Se definieron los Path hijos de dispositivo/:id
// mediciones
// logsriegos
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
    path: 'dispositivo/:id',
    children: [
      {
        path:'',
        loadChildren: () => import('./dispositivo/dispositivo.module').then( m => m.DispositivoPageModule)
      },
      {
        path: 'mediciones',
        loadChildren: () => import('./dispositivo/mediciones/mediciones.module').then( m => m.MedicionesPageModule)
      },
      {
        path: 'logsriegos',
        loadChildren: () => import('./dispositivo/logsriegos/logsriegos.module').then( m => m.LogsriegosPageModule)
      }
    ]
    
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


