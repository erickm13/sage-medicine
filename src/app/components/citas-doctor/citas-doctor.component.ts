import { Component, Output, EventEmitter, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CitasService } from '../../services/citas.service';
import { ShareService } from '../../services/share.service';
import { DoctoresService } from 'src/app/services/doctores.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-citas-doctor',
  templateUrl: './citas-doctor.component.html',
  styleUrls: ['./citas-doctor.component.css']
})
export class CitasDoctorComponent {
  dataUser: any;
  listaPaciente: any = [];
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private CitasService: CitasService,
    private share: ShareService,
    private apiDoctor: DoctoresService
    ) { }


  ngOnInit(): void {
    this.getCitas();
  }

  getCitas(){
      let uid = localStorage.getItem("uid");
      this.CitasService.getCitaUser(uid).subscribe(res=> {
        this.listaPaciente = res;
      })
    }

  logOut(){
    localStorage.removeItem("uid");
    localStorage.removeItem("dataUser");
    localStorage.removeItem("email");
    localStorage.removeItem("id_doctor");
    localStorage.removeItem("fecha_registro");
    localStorage.removeItem("id_cita");
    localStorage.removeItem("id_cita_user");
    this.afAuth.signOut().then(() => this.router.navigate(['/login-doctor']));
  }

  editarCita(id: string){
    localStorage.setItem("id_cita", id);
    this.router.navigate(['/view-cita']);
  }

  aceptarCita(id: string){
    let body ={
      habilitado: '1'
    }
    let recetajson = JSON.stringify(body);
    this.CitasService.updateStatusCita(id, JSON.parse(recetajson)).subscribe(response => {
      window.location.reload();
    })
  }

  statusDoctor(status: string){
    let body ={
      habilitado: status
    }
    
    let id_doctor = localStorage.getItem('uid');
    let statusjson = JSON.stringify(body);
    this.apiDoctor.updateStatusDoctor(id_doctor, JSON.parse(statusjson)).subscribe(response => {
    })
  }
}