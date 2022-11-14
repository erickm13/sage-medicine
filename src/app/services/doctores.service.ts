import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctoresService {

  url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  //get Doctores

  postDoctor(body: any){
    return this.http.post(this.url + "/doctors", body );
  }

  getDoctoresPotente(){
    return this.http.get(this.url + "/doctors-potente");
  }

  getUnDoctoresPotente(id: string){
    return this.http.get(this.url + "/doctors-potente/" + id);
  }
  
  getDoctores(){
    return this.http.get(this.url + "/doctors");
  }

  getDoctor(id: string){
    return this.http.get(this.url + "/doctors/" + id);
  }

  updateStatusDoctor( id_doctor: string, Status:any ){
    return this.http.put(this.url + "/doctors/" + id_doctor, Status);
  }

  getIdEspecialidad(id_doctor: string){
    return this.http.get(this.url + "/listar-esp-doc/" + id_doctor);
  }

  getEspecialidadDoctor(id_especialidad: string){
    return this.http.get(this.url + "/esp/" + id_especialidad);
  }
}
