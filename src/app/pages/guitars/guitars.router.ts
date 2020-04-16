import { GuitarsComponent } from './guitars.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



const routes: Routes = [

    { path: '', component: GuitarsComponent },

];

@NgModule({
    declarations:[
        GuitarsComponent
    ],
    imports: [RouterModule.forChild(routes)],
    exports: [
        RouterModule
    ]
})
export class GuitarsRoutingModule {}
