import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataUser: any = [];
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private apiUser: UsuariosService
    ) { }

  ngOnInit(): void {
    let uid = localStorage.getItem("uid");
    this.apiUser.getUser(uid).subscribe(res => {
      this.dataUser = res;
    })
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
