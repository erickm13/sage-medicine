import { Component, Output, EventEmitter, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CitasService } from '../../services/citas.service';
import { ShareService } from '../../services/share.service';
import { DoctoresService } from 'src/app/services/doctores.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent {
  dataUser: any;
  listaCitas: any = [];
  listaDoctor: any = [];
  state: boolean;
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
      this.CitasService.getCitaDoctor(uid).subscribe(res=> {
        this.listaCitas = res;
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

  cancelarCita(id_horario: string){
    this.CitasService.deleteCita(id_horario).subscribe(res => {
      Swal.fire('Cita Cancelada!', '' , 'success');
      window.location.reload();
    }
    );
  }

  verCita(id: string){
    localStorage.setItem("id_cita_user", id);
    this.router.navigate(["/view-cita-user"]);
  }
}
