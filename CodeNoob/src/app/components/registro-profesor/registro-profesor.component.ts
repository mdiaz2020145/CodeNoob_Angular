import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profesores } from 'src/app/models/profesores.model';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-registro-profesor',
  templateUrl: './registro-profesor.component.html',
  styleUrls: ['./registro-profesor.component.scss']
})
export class RegistroProfesorComponent implements OnInit {
  public profesorModel : Profesores;

  constructor(private _profesorService: ProfesorService, private _router: Router) {
    this.profesorModel = new Profesores('','','','','');
  }

  ngOnInit(): void {
  }

  registrarProfe(){
    this._profesorService.registrarProfe(this.profesorModel).subscribe(
      (response)=>{
        console.log(response)
        this._router.navigate(["loginProfesor"])
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }
}
