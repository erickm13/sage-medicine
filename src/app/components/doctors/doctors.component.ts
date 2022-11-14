import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import {DoctoresService} from '../../services/doctores.service';
import { EspecialidadesService } from 'src/app/services/especialidades.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent {
  dataUser: any;
  listaDoctores: any=[];
  idDoctor: string;
  listaidEspecialidad: any = [];
  listaEspecialidad: any = [];
  doc: string;
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private DoctoresService: DoctoresService,
    private esp: EspecialidadesService
    ) { }
  
  ngOnInit(): void {
    this.listarDoctores();
  }

  listarDoctores(){
    this.DoctoresService.getDoctoresPotente().subscribe(
      res =>{
        this.listaDoctores = res;
      },
      err => console.log(err)
      );
  }


  agendarCita(id: string){
    localStorage.setItem("id_doctor", id);
    this.router.navigate(['/generarCita']);

  }

  detalles(id: string){
  localStorage.setItem("id_doctor", id);
  this.router.navigate(['/details-doctor']);
  }

  logOut(){
    localStorage.removeItem("uid");
    localStorage.removeItem("dataUser");
    localStorage.removeItem("email");
    localStorage.removeItem("id_doctor");
    localStorage.removeItem("fecha_registro");
    this.afAuth.signOut().then(() => this.router.navigate(['/login']));
  }


  
}
