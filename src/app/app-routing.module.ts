import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//componentes
import {TiendaComponent} from './tienda/tienda.component'
import {ParquesComponent} from './parques/parques.component';
import { HomeComponent } from './home/home.component';
import { AnimalsComponent } from './animals/animals.component';
import { ContactComponent } from './contact/contact.component';
import { KeeperComponent } from './keeper/keeper.component';
import {ErrorComponent} from './error/error.component'

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: '', redirectTo: 'home',  pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'animales', component: AnimalsComponent},
    {path: 'contacto', component: ContactComponent},
    {path: 'cuidadores', component: KeeperComponent},
    {path: 'tienda', component: TiendaComponent},
    {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
