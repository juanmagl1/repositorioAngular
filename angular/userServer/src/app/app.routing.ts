import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComponenteusersComponent } from './users/componenteusers/componenteusers.component';
import { ComponenteserversComponent } from './servers/componenteservers/componenteservers.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
const routes : Routes =[
    {
        path:'',
        component:HomeComponent,
        pathMatch:'full'
    },
    {
        path:'users',
        component:ComponenteusersComponent
    },
    {
        path:'users/:id/:name',
        component:UserComponent
    },
    {
        path:'servers',
        component: ComponenteserversComponent,
        children:[
            { 
                path: 'servers/:id/edit',
                component: EditServerComponent 
            },
            { 
                path: ':id',
                component: ServerComponent 
            }
        ]  
    },
    {
        path:'**',
        component: NotFoundComponent  
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}