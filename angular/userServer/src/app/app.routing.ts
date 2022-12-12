import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComponenteusersComponent } from './users/componenteusers/componenteusers.component';
import { ComponenteserversComponent } from './servers/componenteservers/componenteservers.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './shared/not-found/not-found.component';
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
        path:'servers',
        component: ComponenteserversComponent  
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