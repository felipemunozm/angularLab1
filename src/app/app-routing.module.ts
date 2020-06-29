import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//componentes
import { TiendaComponent } from './components/tienda/tienda.component'
import { ParquesComponent } from './components/parques/parques.component';
import { HomeComponent } from './components/home/home.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeeperComponent } from './components/keeper/keeper.component';
import { ErrorComponent } from './components/error/error.component'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import { UserEditComponent } from './components/user-edit/user-edit.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'animales', component: AnimalsComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'cuidadores', component: KeeperComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'mis-datos', component: UserEditComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
