import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {path: '', redirectTo: '/user/login', pathMatch: 'full'},
  {
    path:'user', component:UserComponent,
    children: [
        { path: 'registration', component: RegistrationComponent},
        { path: 'login', component: LoginComponent}
    ]
  },
  {path:'home', component:HomeComponent, canActivate:[AuthGuard]},
  {path:'forbidden', component:ForbiddenComponent},
  {path:'adminpanel', component:AdminPanelComponent, canActivate:[AuthGuard], data :{permittedRoles:['Admin']}},
  {path:'profile', component:MyProfileComponent, canActivate:[AuthGuard]},
  {path:'products', component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
