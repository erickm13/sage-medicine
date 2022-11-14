import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  url = "http://localhost:3000";
  constructor(private HttpClient: HttpClient) { }


  getCita(id_user: string){
    return this.HttpClient.get(this.url + "/date/" + id_user);
  }

  postCita(body: any){
    return this.HttpClient.post(this.url + "/date", body);
  }

  updateStatusCita(id_cita: string, body:any){
    return this.HttpClient.put(this.url + "/date/" + id_cita, body);
  }

  updateRecetaCita(id_cita: string, body:any){
    return this.HttpClient.put(this.url + "/date-receta/" + id_cita, body);
  }

  deleteCita(id: string){
    return this.HttpClient.delete(this.url + "/date-delete/" + id);
  }

  getCitaDoctor(id: string){
    return this.HttpClient.get(this.url + "/date-doctor/" + id);
  }

  getCitaUser(id: string){
    return this.HttpClient.get(this.url + "/date-user/" + id);
  }

  getCitaId(id: string){
    return this.HttpClient.get(this.url + "/date-dateid/" + id);
  }
}
