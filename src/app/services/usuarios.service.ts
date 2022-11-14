import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  //get usuarios

  insertUser(usuario: any){
    return this.http.post(this.url + "/users", usuario );
  }

  getUser(id: string){
    return this.http.get(this.url + "/users/" + id );
  }
}
