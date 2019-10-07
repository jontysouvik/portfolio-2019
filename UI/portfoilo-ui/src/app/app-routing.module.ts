import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SouvikComponent } from './components/souvik/souvik.component';
import { RamComponent } from './components/ram/ram.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'souvik', component: SouvikComponent},
  { path: 'divya', component: SouvikComponent},
  { path: 'kalyani', component: SouvikComponent},
  { path: 'ram', component: RamComponent},
  { path: 'shanmukhi', component: SouvikComponent},
  { path: 'sreeram', component: SouvikComponent},
  { path: 'santosh', component: SouvikComponent},
  { path: 'vittal', component: SouvikComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
