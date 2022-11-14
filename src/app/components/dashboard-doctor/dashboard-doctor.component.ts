import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DoctoresService } from 'src/app/services/doctores.service';

@Component({
  selector: 'app-dashboard-doctor',
  templateUrl: './dashboard-doctor.component.html',
  styleUrls: ['./dashboard-doctor.component.css']
})
export class DashboardDoctorComponent implements OnInit {

  dataDoctor: any=[];
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private apiDoctor: DoctoresService
    ){

  }

  ngOnInit(): void {
    let uid = localStorage.getItem("uid");
    this.apiDoctor.getDoctor(uid).subscribe(res => {
      this.dataDoctor = res;
    })
  }

  logOut(){
    localStorage.removeItem("uid");
    localStorage.removeItem("dataUser");
    localStorage.removeItem("email");
    localStorage.removeItem("id_doctor");
    localStorage.removeItem("fecha_registro");
    localStorage.removeItem("id_cita_user");
    this.afAuth.signOut().then(() => this.router.navigate(['/login-doctor']));
  }

  statusDoctor(status: string){
    let body ={
      habilitado: status
    }
    
    let id_doctor = localStorage.getItem('uid');
    let statusjson = JSON.stringify(body);
    this.apiDoctor.updateStatusDoctor(id_doctor, JSON.parse(statusjson)).subscribe(response => {
      window.location.reload();
    })
  }
}
