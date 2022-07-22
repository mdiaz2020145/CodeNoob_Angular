export class PreguntasModel {
  constructor(
    public _id: String,
    public preguntaAnterior: String,
    public pregunta: String,
    public respuesta: String,
    public puntosPregunta: Number

  ) { }
}
