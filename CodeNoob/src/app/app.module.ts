import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { EleccionLoginComponent } from './components/eleccion-login/eleccion-login.component';
import { RegistroAlumnoComponent } from './components/registro-alumno/registro-alumno.component';
import { EleccionRegistroComponent } from './components/eleccion-registro/eleccion-registro.component';
import { LoginProfesorComponent } from './components/login-profesor/login-profesor.component';
import { LoginAlumnoComponent } from './components/login-alumno/login-alumno.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BienvenidaComponent,
    EleccionLoginComponent,
    RegistroAlumnoComponent,
    EleccionRegistroComponent,
    LoginProfesorComponent,
    LoginAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
