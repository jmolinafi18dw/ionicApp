import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'contacto', loadChildren: './contacto/contacto.module#ContactoPageModule' },
  { path: 'experiencia', loadChildren: './experiencia/experiencia.module#ExperienciaPageModule' },
  { path: 'formacion', loadChildren: './formacion/formacion.module#FormacionPageModule' },
  { path: 'idiomas', loadChildren: './idiomas/idiomas.module#IdiomasPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
