import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//componentes
import {TiendaComponent} from './components/tienda/tienda.component'

const routes: Routes = [
    {path: '', component: TiendaComponent},
    {path: '', redirectTo: 'tienda',  pathMatch: 'full'},
    {path: 'tienda', component: TiendaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
