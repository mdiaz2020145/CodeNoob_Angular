import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoGuard implements CanActivate {
  public identidad;
  constructor(
    private _router: Router
  ) { }

  canActivate() {
    let identidad2 = this.obtenerIdentidad();
    if (identidad2.rol !== 'ROL_ALUMNO') {
      this._router.navigate(['/loginProfesor'])
      return false;
    }

    return true;
  }
  obtenerIdentidad() {
    var identidad2 = JSON.parse(localStorage.getItem('identidad'));
    if (identidad2 != undefined) {
      this.identidad = identidad2;
    } else if (identidad2 == undefined) {
      this.identidad = null;
    }

    return this.identidad;
  }
}
