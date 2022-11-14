import { Component } from '@angular/core';
import { DoctoresService } from '../../services/doctores.service'
import { MunDepService } from 'src/app/services/mun-dep.service';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-doctor',
  templateUrl: './details-doctor.component.html',
  styleUrls: ['./details-doctor.component.css']
})
export class DetailsDoctorComponent {

  dataDoctor: any =[];
  listaMunicipio: any = [];
  listaidEspecialidad: any = [];
  listaEspecialidad: any = [];

  constructor(
    private doctorService: DoctoresService,
    private munDep: MunDepService,
    private esp: EspecialidadesService,
    private router: Router
    ){


  }

  ngOnInit(): void {
    this.getDoctor();
  }

  getDoctor(){
    let id_doctor = localStorage.getItem("id_doctor");
    this.doctorService.getUnDoctoresPotente(id_doctor).subscribe(response => {
      this.dataDoctor = response;
    })
  }


  regresar(){
    this.router.navigate(['/doctors']);
  }
}
