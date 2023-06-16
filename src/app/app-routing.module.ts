import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { ContactsComponent } from './core/contacts/contacts.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component: HomeComponent
  },
  {
    path:'about',
    component: AboutComponent,
  },
  {
    path:'contacts',
    component: ContactsComponent,
  },
  {
    path:'**',
    redirectTo:'/page-not-found'
  },
  {
    path:'page-not-found',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
