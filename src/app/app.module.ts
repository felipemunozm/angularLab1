import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
//import {routing, appRoutingProviders} from './app.routing'
//componentes
import {TiendaComponent} from './tienda/tienda.component'
import {ParquesComponent} from './parques/parques.component';
import { HomeComponent } from './home/home.component';
import { AnimalsComponent } from './animals/animals.component';
import { ContactComponent } from './contact/contact.component';
import { KeeperComponent } from './keeper/keeper.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    HomeComponent,
    AnimalsComponent,
    ContactComponent,
    KeeperComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
