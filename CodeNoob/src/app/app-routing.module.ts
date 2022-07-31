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
import { InicioAlumnoComponent } from './components/inicio-alumno/inicio-alumno.component';
import { InicioProfesorComponent } from './components/inicio-profesor/inicio-profesor.component';
import { AlumnoGuard } from './services/alumno.guard';
import { ProfesorGuard } from './services/profesor.guard';
import { ListarCursosAsignadosComponent } from './components/listar-cursos-asignados/listar-cursos-asignados.component';
import { ListaLeccionesComponent } from './components/lista-lecciones/lista-lecciones.component';
import { CuestionarioAlumnoComponent } from './components/cuestionario-alumno/cuestionario-alumno.component';

const routes: Routes = [
  { path: "bienvenida", component: BienvenidaComponent },
  { path: "eleccionLogin", component: EleccionLoginComponent },
  { path: "eleccionRegistro", component: EleccionRegistroComponent },
  { path: "registraAlumno", component: RegistroAlumnoComponent },
  { path: "registrarProfe", component: RegistroProfesorComponent },
  { path: "loginAlumno", component: LoginAlumnoComponent },
  { path: "loginProfesor", component: LoginProfesorComponent },
  {
    path: "alumno", component: InicioAlumnoComponent, canActivate: [AlumnoGuard], children: [
      { path: "editarPerfil", component: EditarPerfilComponent },
      { path: "cursos", component: CursosComponent },
      { path: "cursosAsignados", component: ListarCursosAsignadosComponent },
      { path: "listarLeccion/:idCurso", component: ListaLeccionesComponent },
      { path: "resolverCuestionario/:idCuestionario", component: CuestionarioAlumnoComponent}
    ]
  },
  {
    path: "profesor", component: InicioProfesorComponent, canActivate: [ProfesorGuard], children: [
      { path: "editarPerfilProfe", component: EditarPefilProfeComponent },
      { path: "cursos", component: CursosComponent },
      { path: "cuestionario", component: CuestionarioComponent },
      { path: "preguntas/:idCuestionario", component: PreguntasComponent }
    ]
  },
  { path: "**", component: BienvenidaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
