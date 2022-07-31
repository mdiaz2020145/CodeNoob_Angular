import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuestionarioModule } from 'src/app/models/cuestionario.models';
import { CuestionarioService } from 'src/app/services/cuestionario.service';

@Component({
  selector: 'app-lista-lecciones',
  templateUrl: './lista-lecciones.component.html',
  styleUrls: ['./lista-lecciones.component.scss'],
  providers: [CuestionarioService]
})
export class ListaLeccionesComponent implements OnInit {

  public idCurso: String;
  public token: any;
  public validation: Boolean = true;
  public cuestionarioModelGet: CuestionarioModule;

  constructor(public _activatedRoute: ActivatedRoute, public _cuestionarioServices: CuestionarioService) {
    this.token = _cuestionarioServices.obtenerToken();
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      console.log(dataRuta.get("idCurso"))
      this.idCurso = dataRuta.get("idCurso")
    })
  }

  ngOnInit(): void {
    this.getLecciones()
  }

  getLecciones() {
    this._cuestionarioServices.buscarPorCurso(this.idCurso).subscribe({
      next: (res) => {
        if (res.pregunta == 0) {
          this.validation=false;
          console.log('datos vacios')
        } else {
          this.cuestionarioModelGet = res.pregunta
          this.validation=true;
        }
      }, error: (err: any) => { console.log(err) }
    })
  }
}
