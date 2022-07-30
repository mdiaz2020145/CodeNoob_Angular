import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-alumno',
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class InicioAlumnoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
