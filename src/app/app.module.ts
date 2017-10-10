import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CpfComponent } from './menu/cpf/cpf.component';
import { CpfForm } from './menu/cpf/cpf.form';

import { AuthGuard } from './guards/auth.guard';

import { OrbitallAuthenticationService } from './foundation/services/orbitall.authentication.service';
import { CpfAuthenticationService } from './foundation/services/cpf.authentication.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    UserComponent,
    DashboardComponent,
    CpfComponent,
    LoginComponent,
    CpfForm
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    OrbitallAuthenticationService,
    CpfAuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
