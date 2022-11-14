import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import Swal from 'sweetalert2';
import { NgxToastService } from 'ngx-toast-notifier';
import { Router } from '@angular/router';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';
import { DatePipe } from '@angular/common';
import { MunDepService } from '../../services/mun-dep.service'
import { UsuariosService } from '../../services/usuarios.service'
import { AlergiasService } from 'src/app/services/alergias.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
  providers: [DatePipe]
})
export class FormUserComponent implements OnInit {

  registerInfoUser: FormGroup;
  listaDepartamentos: any = [];
  listaMunicipios: any = [];
  listaAlergias: any = [];
  id_dep: string;
  name: string;
  apellido: string;
  direccion: string;
  telefono: string;
  dpi: string;
  nacimiento: string;
  id_muni: string;
  id_alergia: string;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private ngxToastService: NgxToastService,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService,
    private miPipeDate: DatePipe,
    private munDep: MunDepService,
    private usuarioService: UsuariosService,
    private apiAlergias: AlergiasService
    ){
      this.munDep.getDepartamentos().subscribe(deps => {
      this.listaDepartamentos = deps;
      })
    }

    mostrarDep(){
      this.munDep.getMunicipio(this.id_dep).subscribe(res => {
        this.listaMunicipios = res;
      })

    }
    verifyEmail(){
      this.afAuth.currentUser
      .then(response => {response?.sendEmailVerification()
        .then(() =>{
          Swal.fire('Verificar Correo', 'Le enviamos un correo electronico para su verificacion' , 'info');
          this.router.navigate(['/login']);
        })
      });
    }

    ngOnInit(): void {
        this.getAlergias();
    }

    enviar(){
      let uid = localStorage.getItem("uid");
      let fecha = new Date();
      let fechaFormat = this.miPipeDate.transform(fecha, 'yyy-MM-dd');
      let email = localStorage.getItem("email");
      let nombre = this.name + " " + this.apellido;
        const body = {
          id_usuario: uid,
          dpi: this.dpi,
          email: email,
          telefono: this.telefono,
          nombre: nombre,
          fecha_registro: fechaFormat,
          fecha_nacimiento: this.nacimiento,
          direccion: this.direccion,
          id_municipio: this.id_muni
      }

      
      let usuario = JSON.stringify(body);
      this.usuarioService.insertUser(JSON.parse(usuario)).subscribe(res => {

        const alergiajson = {
          id_alergias: this.id_alergia,
          id_usuario: uid
      }

      
      let alergia = JSON.stringify(alergiajson);
      this.apiAlergias.setAlergia(JSON.parse(alergia)).subscribe( responseale=> {
        this.verifyEmail();
      })
      })
    }

    getAlergias(){
      this.apiAlergias.getAlergias().subscribe(res => {
        this.listaAlergias = res;
      })
    }
}
