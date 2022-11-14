import { Component } from '@angular/core';
import { CitasService } from 'src/app/services/citas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-cita-user',
  templateUrl: './view-cita-user.component.html',
  styleUrls: ['./view-cita-user.component.css']
})
export class ViewCitaUserComponent {

  dataUser: any =[];
  receta: string;
  constructor(
    private apiCitas: CitasService,
    private router: Router
  ){

  }


  ngOnInit(): void {
    this.getDoctor();
  }

  getDoctor(){
    let id_date = localStorage.getItem("id_cita_user");
    this.apiCitas.getCitaId(id_date).subscribe(response => {
      this.dataUser = response;
    })
  }

  regresar(){
    this.router.navigate(['/citas']);
  }

}