import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [							
							
  // This route specifies the route to redirect to if the path							
// is empty. In our case we are redirecting to /home 							
// pathMatch property value can be full or prefix. For now we 							
// will set it to full as we want to do a full match							
							
  //{ path: '',redirectTo:'/home',pathMatch:'full' },							
  { path: '',component: HomeComponent },							
  { path: 'home',component:HomeComponent},							
  { path: 'login', component: LoginComponent },							
  { path: 'add-user', component: AddUserComponent },							
  { path: 'list-user', component: ListUserComponent },							
  { path: 'edit-user', component: EditUserComponent },							
  // {path : '', component : LoginComponent}, // or							
							
  							
  { path: '**', component: HomeComponent }    							
];	

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
