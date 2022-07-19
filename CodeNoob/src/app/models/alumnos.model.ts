export class Alumnos{
  constructor(
      public _id: String,
      public nombreUsuario:String,
      public email: String,
      public password:String,
      public rol:String,
      public puntosTotales:Number
  ){}
}
