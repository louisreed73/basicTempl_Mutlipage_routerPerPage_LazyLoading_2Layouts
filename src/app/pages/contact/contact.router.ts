import { FormComponent } from './../../components/form/form.component';
import { ContactComponent } from './contact.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



const routes: Routes = [

    { path: '', component: ContactComponent },

];

@NgModule({
    declarations:[
        ContactComponent,
        FormComponent
    ],
    imports: [RouterModule.forChild(routes)],
    exports: [
        RouterModule
    ]
})
export class ContactRoutingModule {}
