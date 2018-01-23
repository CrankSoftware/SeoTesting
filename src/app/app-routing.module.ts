import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HowComponent } from './how/how.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: 'About',
    component: AboutComponent
  },
  {
    path: 'How',
    component: HowComponent
  },
  {
    path: 'Contact',
    component: ContactComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
