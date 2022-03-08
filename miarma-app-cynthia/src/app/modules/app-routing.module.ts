import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPostComponent } from '../screens/list-post/list-post.component';
import { LoginComponent } from '../screens/login/login.component';

const routes: Routes = [
  { path: 'posts', component:ListPostComponent},
  { path: 'login', component:LoginComponent},
  { path: '', pathMatch: 'full', redirectTo: '/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
