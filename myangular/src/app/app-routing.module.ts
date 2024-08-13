import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { LocationComponent } from './location/location.component';
import { CreatelocationComponent } from './createlocation/createlocation.component';
import { UpdatelocationComponent } from './updatelocation/updatelocation.component';
import { ViewstudentComponent } from './student/viewstudent/viewstudent.component';
import { CreatestudentComponent } from './student/createstudent/createstudent.component';
import { UpdatestudentComponent } from './student/updatestudent/updatestudent.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/authguard.guard';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { RoleGuard } from './guard/role.guard';


const routes: Routes = [


{path: 'employee', component:EmployeeComponent},
{path: 'location', component:LocationComponent,
  canActivate:[AuthGuard, RoleGuard],
  data: { role: 'User' }
},
{path: 'createlocation', component:CreatelocationComponent, canActivate:[AuthGuard, RoleGuard],
  data: { role: 'Admin' }
},
{path: 'updatelocation/:id', component:UpdatelocationComponent, canActivate:[AuthGuard]},
{path: 'student', component:ViewstudentComponent},
{path: 'createstudent', component:CreatestudentComponent,
  canActivate:[AuthGuard, RoleGuard],
  data: { role: 'Admin' }
},
{path: 'updatestudent/:id', component:UpdatestudentComponent,
  canActivate:[AuthGuard, RoleGuard],
  data: { role: 'Admin' }
},
{path: 'reg', component:RegistrationComponent},
{path: 'login', component:LoginComponent},
{path: 'home', component:HomeComponent},
{path: 'logout', component:LogoutComponent},

{
  path: 'userprofile',
  component: UserprofileComponent,
  canActivate: [AuthGuard, RoleGuard],
  data:{role: ['Admin','User']}
  
}
,
{path: '**', redirectTo: 'login', pathMatch: 'full' },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
