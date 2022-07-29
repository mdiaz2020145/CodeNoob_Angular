import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { EleccionLoginComponent } from './components/eleccion-login/eleccion-login.component';
import { RegistroAlumnoComponent } from './components/registro-alumno/registro-alumno.component';
import { RegistroProfesorComponent } from './components/registro-profesor/registro-profesor.component';
import { EleccionRegistroComponent } from './components/eleccion-registro/eleccion-registro.component';
import { LoginProfesorComponent } from './components/login-profesor/login-profesor.component';
import { LoginAlumnoComponent } from './components/login-alumno/login-alumno.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { CuestionarioComponent } from './components/cuestionario/cuestionario.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { EditarPefilProfeComponent } from './components/editar-pefil-profe/editar-pefil-profe.component';

const routes: Routes = [
  { path: "bienvenida", component: BienvenidaComponent },
  { path: "eleccionLogin", component: EleccionLoginComponent },
  { path: "eleccionRegistro", component: EleccionRegistroComponent },
  { path: "registraAlumno", component: RegistroAlumnoComponent },
  { path: "registrarProfe", component: RegistroProfesorComponent },
  { path: "loginProfesor", component: LoginProfesorComponent },
  { path: "loginAlumno", component: LoginAlumnoComponent },
  { path: "cursos", component: CursosComponent },
  { path: "cuestionario", component: CuestionarioComponent },
  { path: "preguntas/:idCuestionario", component: PreguntasComponent },
  { path: "editarPerfil", component: EditarPerfilComponent},
  {path: "editarPerfilProfe", component: EditarPefilProfeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
