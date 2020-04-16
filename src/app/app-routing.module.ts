import { Header2Component } from './components/header2/header2.component';
import { Layout2Component } from './layouts/layout2/layout2.component';
import { Layout1Component } from './layouts/layout1/layout1.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "",
    // redirectTo:"home",
    // pathMatch: "full",
    component: Layout1Component,
    children: [
/*       {
        path: "home",
        loadChildren: "./pages/home/home.router#HomeRoutingModule",
      }, */
      {
        path: "guitars",
        loadChildren: "./pages/guitars/guitars.router#GuitarsRoutingModule",
      },
      {
        path: "bass",
        loadChildren: "./pages/bass/bass.router#BassRoutingModule",
      },
      {
        path: "contact",
        loadChildren: "./pages/contact/contact.router#ContactRoutingModule",
      },
    ],
  },
  {
    path: "",
    // redirectTo:"home",
    // pathMatch: "full",
    component: Layout2Component,
    children: [
      {
        path: "home",
        loadChildren: "./pages/home/home.router#HomeRoutingModule",
      },
      
    ],
  },

];

@NgModule({
  declarations: [
    Layout1Component,
    Layout2Component,
    HeaderComponent,
    Header2Component,
    FooterComponent,
        // HomeComponent,

  ],
  imports: [
    // HomeRoutingModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy:PreloadAllModules
    }),
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {}
