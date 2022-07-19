import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Alumnos } from 'src/app/models/alumnos.model';

@Component({
  selector: 'app-login-alumno',
  templateUrl: './login-alumno.component.html',
  styleUrls: ['./login-alumno.component.scss']
})
export class LoginAlumnoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
