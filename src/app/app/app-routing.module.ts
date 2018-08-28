git remote add origin https://github.com/sojankreji/angularRouterDemo.gitimport { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoloadComponent } from '../autoload/autoload.component';

const routes: Routes = [
  { path: '', component: AutoloadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
