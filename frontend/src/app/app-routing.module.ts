import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './screens/users/users.component';
import { AddUserComponent } from './screens/add-user/add-user.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'user/add', component: AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
