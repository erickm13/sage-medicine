import { Component } from '@angular/core';
import { CitasService } from 'src/app/services/citas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-cita',
  templateUrl: './view-cita.component.html',
  styleUrls: ['./view-cita.component.css']
})
export class ViewCitaComponent {

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
    let id_cita = localStorage.getItem("id_cita");
    this.apiCitas.getCitaId(id_cita).subscribe(response => {
      this.dataUser = response;
    })
  }

  asignarReceta(id: string){
    let body ={
      datos_receta: this.receta
    }
    let recetajson = JSON.stringify(body);
    this.apiCitas.updateRecetaCita(id, JSON.parse(recetajson)).subscribe(response => {
      window.location.reload();
    })
  }

  regresar(){
    this.router.navigate(['/citas-doctor']);
  }

}
