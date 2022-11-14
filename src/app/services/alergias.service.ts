import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlergiasService {

  url = "http://localhost:3000";
  constructor(
    private Http: HttpClient
  ) { }

  getAlergias(){
    return this.Http.get(this.url + "/alergias");
  }

  setAlergia(body: any){
    return this.Http.post(this.url + "/asignar-alergia", body);
  }
}
