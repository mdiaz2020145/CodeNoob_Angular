import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-profesor',
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class InicioProfesorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
