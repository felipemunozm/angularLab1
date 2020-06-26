import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//componentes
import { MainComponent } from './components/main/main.component'
import { AddComponent } from './components/add/add.component'
import { EditComponent } from './components/edit/edit.component'
import { ListComponent } from './components/list/list.component'

const routes: Routes = [
    {
        path: 'admin-panel',
        component: MainComponent,
        children: [
            {
                path: '',
                redirectTo: 'listado',
                pathMatch: 'full'
            },
            {
                path: 'listado',
                component: ListComponent
            },
            {
                path: 'crear',
                component: AddComponent
            },
            {
                path: 'editar',
                component: EditComponent
            }
        ]
    },
    {
        path: 'listado-del-panel',
        component: ListComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule { }