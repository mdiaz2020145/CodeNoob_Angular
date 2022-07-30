import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumnos } from 'src/app/models/alumnos.model';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-login-alumno',
  templateUrl: './login-alumno.component.html',
  styleUrls: ['./login-alumno.component.scss'],
  providers: [AlumnoService]
})
export class LoginAlumnoComponent implements OnInit {
  public alumnoModelo: Alumnos;

  constructor(private _alumnoService: AlumnoService, private _router: Router) {
    this.alumnoModelo = new Alumnos('', '', '', '', '', 0);
  }

  ngOnInit(): void {
  }

  getTokenAlumno() {
    this._alumnoService.loginAlumno(this.alumnoModelo, "true").subscribe(
      (response) => {
        console.log(response);
        localStorage.setItem("token", response.token)

      },
      (error) => {
        console.log(<any>error)
      }
    )
  }

  loginAlumno() {
    this._alumnoService.loginAlumno(this.alumnoModelo).subscribe(
      (response) => {
        this.getTokenAlumno();
        localStorage.setItem("identidad", JSON.stringify(response.Alumno))
        console.log(response);
        this._router.navigate(['/alumno/cursos']);
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }
}
