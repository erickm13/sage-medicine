import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MunDepService {

  url = 'http://localhost:3000';
  constructor(private Http: HttpClient) { }

  getDepartamentos(){
    return this.Http.get(this.url + "/dep");
  }

  getMunicipios(){
    return this.Http.get(this.url + "/muni");
  }

  getMunicipio(id: string){
    return this.Http.get(this.url + "/muni/" + id);
  }

  getUnMunicipio(id: string){
    return this.Http.get(this.url + "/munis/" + id);
  }

}
