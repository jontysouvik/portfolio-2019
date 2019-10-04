import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SouvikComponent } from './components/souvik/souvik.component';
import { VittalComponent } from './components/vittal/vittal.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'souvik', component: SouvikComponent},
  { path: 'divya', component: SouvikComponent},
  { path: 'kalyani', component: SouvikComponent},
  { path: 'ram', component: SouvikComponent},
  { path: 'shanmukhi', component: SouvikComponent},
  { path: 'sreeram', component: SouvikComponent},
  { path: 'santosh', component: SouvikComponent},
  { path: 'vittal', component: VittalComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
