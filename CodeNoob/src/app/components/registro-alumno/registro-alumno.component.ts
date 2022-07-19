import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Alumnos } from 'src/app/models/alumnos.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.component.html',
  styleUrls: ['./registro-alumno.component.scss']
})
export class RegistroAlumnoComponent implements OnInit {
  public alumnoModel: Alumnos;

  constructor(private _alumnoService: AlumnoService, private _router: Router) {
    this.alumnoModel = new Alumnos('','','','','',0);
  }

  ngOnInit(): void {
  }

  registrarAlumno(){
    this._alumnoService.registrarAlumno(this.alumnoModel).subscribe(
      (response)=>{
        console.log(response)
        this._router.navigate(["loginAlumno"])
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }
}
