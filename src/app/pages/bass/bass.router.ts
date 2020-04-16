import { BassComponent } from './bass.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



const routes: Routes = [

    { path: '', component: BassComponent },

];

@NgModule({
    declarations:[
        BassComponent
    ],
    imports: [RouterModule.forChild(routes)],
    exports: [
        RouterModule
    ]
})
export class BassRoutingModule {}
