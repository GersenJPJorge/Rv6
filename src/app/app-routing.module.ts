import { UserResponseModel } from './models/UserResponseModel';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CpfComponent } from './menu/cpf/cpf.component';
import { CpfForm } from './menu/cpf/cpf.form';


const routes: Routes = [
    { path: 'login',      component: LoginComponent },
    { path: '',           component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'dashboard',  component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'user/:id',   component: UserComponent },
    { path: 'menu-cpf',   component: CpfComponent },
    { path: 'logout',     component: LoginComponent },
    { path: 'cpf-component', component: CpfComponent },
    { path: 'cpf-form/:user', component: CpfForm }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
