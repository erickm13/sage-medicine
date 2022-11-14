import { Component } from '@angular/core';
import { CitasService } from 'src/app/services/citas.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generar-cita',
  templateUrl: './generar-cita.component.html',
  styleUrls: ['./generar-cita.component.css']
})
export class GenerarCitaComponent {
  fecha: string;
  constructor(
    private apiDate: CitasService,
    private router: Router
  ){

  }

  agendar(){
    let uid = localStorage.getItem("uid");
    let idDoctor = localStorage.getItem("id_doctor");
    let fechaHora = this.fecha;
    console.log(fechaHora);
    console.log(uid);
    console.log(idDoctor);
    const body = {
        fecha_hora: fechaHora,
        habilitado: 0,
        costo: 0,
        id_usuario: uid,
        id_doctor: idDoctor,
        datos_receta: ''
    }

    let cita = JSON.stringify(body);
    this.apiDate.postCita(JSON.parse(cita)).subscribe(res => {
      Swal.fire('Cita Agendada!', 'Su cita esta en proceso de Aprobacion' , 'success');
          this.router.navigate(['/doctors']);
    })
  }


}
