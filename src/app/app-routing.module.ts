import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'first', pathMatch: 'full' },
  { path: 'first', loadChildren: './first/first.module#FirstPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'gender', loadChildren: './gender/gender.module#GenderPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
