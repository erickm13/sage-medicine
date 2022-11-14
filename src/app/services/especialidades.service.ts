import { Injectable } from '@angular/core';
import { HttpClient
 } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  url = 'http://localhost:3000';
  constructor(
      private HttpClient: HttpClient
      ) { }



    getIdEspecialidad(id: string){
      return this.HttpClient.get(this.url + "/listar-esp-doc/" + id);
    }

    getEspecialidad(id: string){
      return this.HttpClient.get(this.url + "/esp/" + id);
    }

    getEspecialidades(){
      return this.HttpClient.get(this.url + "/esp/");
    }

    postEspecialidad(body: any){
      return this.HttpClient.post(this.url + "/asignar-especialidad", body);
    }
}
