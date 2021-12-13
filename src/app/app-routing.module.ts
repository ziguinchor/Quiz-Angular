import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QTestComponent } from './q-test/q-test.component';

const routes: Routes = [
  // this is default route 
  {path:"",redirectTo:"/qust",pathMatch:"full"},
  {path:"qust",component:QTestComponent},
  //this if user route any path not exist
  {path:"**",component:QTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
