import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuardarEmailComponent } from './components/guardar-email/guardar-email.component';
import { MostrarEmailComponent } from './components/mostrar-email/mostrar-email.component';



@NgModule({
  declarations: [GuardarEmailComponent, MostrarEmailComponent],
  imports: [
    CommonModule
  ]
})
export class ModuloemailModule { }
