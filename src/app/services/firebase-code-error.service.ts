import { Injectable } from '@angular/core';
import { FirebaseCodeErrorEnum } from '../utils/firebase-code-error';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }

  codeError(code: string){

    switch(code) {
      //correo ya existe
      case FirebaseCodeErrorEnum.EmailAlreadyInUse:
        return 'El usuario ya existe'

      //contrasena debil
      case FirebaseCodeErrorEnum.WeakPassword:
        return 'La contraseña tiene que ser mayor a 6 caracteres'

      //correo invalido
      case FirebaseCodeErrorEnum.InvalidEmail:
        return 'Correo Invalido'

      //campos vacios
      case FirebaseCodeErrorEnum.InternalError:
        return 'Llena todos los campos'

      //contrasena incorrecta
      case FirebaseCodeErrorEnum.WrongPassword:
        return 'Contraseña Incorrecta'

      //usuario no existe
      case FirebaseCodeErrorEnum.UserNotFound:
        return 'El usuario no existe'

      //Error Default
      default:
      return 'Error desconocido'
    }
  }
}
