import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterformComponent } from './registerform/registerform.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { EditComponent } from './edit/edit.component';
import { LoginSuccessComponent } from './login-success/login-success.component';


const routes: Routes = [
  { path: 'register', component: RegisterformComponent },
  { path: '', component: LoginFormComponent },
  { path: 'employee/:id', component: EmployeeformComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'logout', component: LoginFormComponent },
  { path: 'loginSuccess', component: LoginSuccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
