export class CuestionarioModule {
  constructor(
    public _id: String,
    public nombreCuestionario: String,
    public numeroLeccion: String,
    public items: [{
      pregunta: String,
      respuesta: String,
      puntosPregunta: Number
    }],
    public total: Number,
    public idProfesor: String,
    public nombreCurso: String
  ) { }
}
