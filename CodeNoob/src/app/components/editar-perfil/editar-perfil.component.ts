import { Component, OnInit } from '@angular/core';
import { Alumnos } from 'src/app/models/alumnos.model';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss'],
  providers: [AlumnoService]
})
export class EditarPerfilComponent implements OnInit {
  public alumnoModelGetId: Alumnos;
  public alumnoModelGet: any;
  public token: any;
  public id: string;
  public buscar;
  public validation:Boolean = true;

  constructor(public _serviceAlumno:AlumnoService) {
    this.alumnoModelGetId = new Alumnos('','','','','',0);
    this.token = _serviceAlumno.obtenerToken();
    this.id = _serviceAlumno.obtenerIdentidad()._id;
  }

  ngOnInit(): void {
    this.getAlumnosId()
  }

  getAlumnos(){
    this._serviceAlumno.obtenerAlumno().subscribe(
      response => {
        console.log(response)
        console.log('response.AlumnoEncontrado' + response.mensaje)
        if (response.mensaje == 0) {
          console.log("datos vacios")
        } else {
          this.alumnoModelGet = response.mensaje
        }
        console.log(this.alumnoModelGet)
      },
      error => {
        console.log(<any>error)
      }
    )
  }

  getAlumnosId(){
    console.log(this.id)
    this._serviceAlumno.obtenerAlumnoId(this.id, this.token).subscribe({
      next: (response) => {
        this.alumnoModelGetId = response.AlumnoEncontrado;
        console.log("console " + this.alumnoModelGetId)
      },
      error: (err: any) => { console.log(err) }
    })
  }

  putCuentaAlumno(){
    this._serviceAlumno.editarPerfilAlumno(this.alumnoModelGetId, this.token).subscribe(
      response => {
        this.getAlumnos()
      },
      error=> {
        console.log(<any>error)
      }
    )
  }

  deleteUsuario() {
    this._serviceAlumno.eliminarPerfilAlumno(this.id, this.token).subscribe(
      (response)=>{
        console.log(response);
        if(response.AlumnoEliminado==0){
          this.validation=false;
        }else{
          this.validation=true;
          this.getAlumnos();
        }
      },
      (error)=>{
        console.log(error);
      }
    )
  }
}
