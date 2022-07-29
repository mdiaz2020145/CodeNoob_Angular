import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';
import { ProfesorService } from 'src/app/services/profesor.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AlumnoService, ProfesorService],
})
export class NavbarComponent implements OnInit {

  constructor(public _alumnoService: AlumnoService, public _profesorService: ProfesorService) { }

  ngOnInit(): void {
  }

  cerrarSesion() {
    localStorage.clear();
  }

}
