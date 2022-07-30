import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss'],
  providers: [AlumnoService, ProfesorService]
})
export class BienvenidaComponent implements OnInit {

  constructor(public _alumnoService: AlumnoService, public _profesorService: ProfesorService) { }

  ngOnInit(): void {
  }

  revisarRolAlumno() {
    if (this._alumnoService.obtenerIdentidad() === null) {
      return false;
    } else {
      if (this._profesorService.obtenerIdentidad().rol === "ROL_PROFESOR") {
        console.log("rol_profesor")
        return 1;
      } else {
        return true;
      }
    }
  }
  revisarRolProfesor() {
    if (this._profesorService.obtenerIdentidad() === null) {
      return false;
    } else {
      if (this._profesorService.obtenerIdentidad().rol === "ROL_ALUMNO") {
        console.log("rol_alumno")
        return 2;
      } else {
        return true;
      }
    }
  }
}
