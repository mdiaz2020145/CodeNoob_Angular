import { Component, OnInit } from '@angular/core';
import { ProfesorService } from 'src/app/services/profesor.service';
import { Profesores } from 'src/app/models/profesores.model';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-pefil-profe',
  templateUrl: './editar-pefil-profe.component.html',
  styleUrls: ['./editar-pefil-profe.component.scss'],
  providers: [ProfesorService]
})
export class EditarPefilProfeComponent implements OnInit {
  public profesorModelGetId: Profesores;
  public profesorModelGet: any;
  public token: any;
  public id: string;
  public buscar;
  public validation:Boolean = true;

  constructor(public _serviceProfesor: ProfesorService, public _router: Router) {
    this.profesorModelGetId = new Profesores('','','','','');
    this.token = _serviceProfesor.obtenerToken();
    this.id = _serviceProfesor.obtenerIdentidad()._id;
   }

  ngOnInit(): void {
    this.getProfeId()
  }

  getProfes(){
    this._serviceProfesor.obtenerProfe().subscribe(
      response => {
        console.log(response)
        console.log('response. ProfesorEncontrado' + response.mensaje)
        if (response.mensaje == 0) {
          console.log("datos vacios")
        } else {
          this.profesorModelGet = response.mensaje
        }
        console.log(this.profesorModelGet)
      },
      error => {
        console.log(<any>error)
      }
    )
  }

  getProfeId(){
    console.log(this.id)
    this._serviceProfesor.obtenerProfeId(this.id, this.token).subscribe({
      next: (response) => {
        this.profesorModelGetId = response.ProfesorEncontrado;
        console.log("console " + this.profesorModelGetId)
      },
      error: (err: any) => { console.log(err) }
    })
  }

  putCuentaProfe(){
    this._serviceProfesor.editarPerfilProfe(this.profesorModelGetId, this.token).subscribe(
      response => {
        Swal.fire(
          '¡Muy bien!',
          'Tu cuenta se ha actualizado correctamente',
          'success'
        )
        this.getProfes()
      },
      error=> {
        console.log(<any>error)
      }
    )
  }

  deleteProfe() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true
    })
    swalWithBootstrapButtons.fire({
      title: '¿Esta seguro de eliminar su cuenta?',
      text: "Este proceso sera irreversible",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, lo hare',
      cancelButtonText: '¡Cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this._serviceProfesor.eliminarPerfilProfe(this.id, this.token).subscribe(
          (response)=>{
            console.log(response);
            this._router.navigate(['/eleccionRegistro']);
              swalWithBootstrapButtons.fire(
                '¡Eliminado!',
                'Tu cuenta ha sido eliminada',
                'success'
              )
              this.getProfes();
          },
          (error)=>{
            console.log(error);
          }
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          '',
          'error'
        )
      }
    })
  }
}
