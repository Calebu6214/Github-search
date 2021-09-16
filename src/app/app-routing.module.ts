import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilesComponent } from './profiles/profiles.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  
  {path:'profiles',component:ProfilesComponent},
  {path: '', redirectTo:"/profiles", pathMatch:"full"},
  { path: '**',component: NotFoundComponent }
  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  ProfilesComponent,
  NotFoundComponent
]