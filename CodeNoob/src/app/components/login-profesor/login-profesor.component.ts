import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfesorService } from 'src/app/services/profesor.service';
import { Profesores } from 'src/app/models/profesores.model';

@Component({
  selector: 'app-login-profesor',
  templateUrl: './login-profesor.component.html',
  styleUrls: ['./login-profesor.component.scss'],
  providers: [ProfesorService]
})
export class LoginProfesorComponent implements OnInit {
  public profesorModel : Profesores;

  constructor(private _profesorServices: ProfesorService, private _router: Router) {
    this.profesorModel = new Profesores('','','','','');
  }


  ngOnInit(): void {
  }

 getTokenProfe() {
    this._profesorServices.loginProfesor(this.profesorModel, "true").subscribe(
      (response) => {
        console.log(response);
        localStorage.setItem("token", response.token)

      },
      (error) => {
        console.log(<any>error)
      }
    )
  }

  loginProfe(){
   this._profesorServices.loginProfesor(this.profesorModel).subscribe(
    (response)=>{
      this.getTokenProfe();
      localStorage.setItem("identidad", JSON.stringify(response.Profesor))
      console.log(response);
      this._router.navigate(['/bienvenida']);
    },
    (error) => {
      console.log(<any>error);
    }
   )
  }

}
