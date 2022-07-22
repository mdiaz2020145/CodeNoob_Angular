import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'

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
import { RegistroProfesorComponent } from './components/registro-profesor/registro-profesor.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { CuestionarioComponent } from './components/cuestionario/cuestionario.component';
import { ValueArrayPipe } from './pipes/value-array.pipe';
import { PreguntasComponent } from './components/preguntas/preguntas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BienvenidaComponent,
    EleccionLoginComponent,
    RegistroAlumnoComponent,
    EleccionRegistroComponent,
    LoginProfesorComponent,
    LoginAlumnoComponent,
    RegistroProfesorComponent,
    CursosComponent,
    CuestionarioComponent,
    ValueArrayPipe,
    PreguntasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
