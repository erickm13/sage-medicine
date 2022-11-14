import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import Swal from 'sweetalert2';
import { NgxToastService } from 'ngx-toast-notifier';
import { Router } from '@angular/router';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';
import { DatePipe } from '@angular/common';
import { MunDepService } from '../../services/mun-dep.service'
import { DoctoresService } from 'src/app/services/doctores.service';
import { EspecialidadesService } from 'src/app/services/especialidades.service';

@Component({
  selector: 'app-form-doctor',
  templateUrl: './form-doctor.component.html',
  styleUrls: ['./form-doctor.component.css'],
  providers: [DatePipe]
})
export class FormDoctorComponent implements OnInit {

  registerInfoUser: FormGroup;
  listaEspecialidades: any = [];
  listaDepartamentos: any = [];
  listaMunicipios: any = [];
  id_dep: string;
  name: string;
  apellido: string;
  direccion: string;
  telefono: string;
  colegiado: string;
  nacimiento: string;
  id_muni: string;
  id_especialidad: string;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private ngxToastService: NgxToastService,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService,
    private miPipeDate: DatePipe,
    private munDep: MunDepService,
    private apiDoctor: DoctoresService,
    private apiEspecialidades: EspecialidadesService
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
          this.router.navigate(['/login-doctor']);
        })
      });
    }

    ngOnInit(): void {
        this.listarEspecialidades()
    }

    enviar(){
      let uid = localStorage.getItem("uid");
      let fecha = new Date();
      let fechaFormat = this.miPipeDate.transform(fecha, 'yyy-MM-dd');
      let email = localStorage.getItem("email");
      let nombre = this.name + " " + this.apellido;

        const body = {
          id_doctor: uid,
          colegiado: this.colegiado,
          email: email,
          telefono: this.telefono,
          nombre: nombre,
          fecha_registro: fechaFormat,
          fecha_nacimiento: this.nacimiento,
          direccion: this.direccion,
          id_municipio: this.id_muni,
          habilitado: 0
      }

      let doctor = JSON.stringify(body);
      this.apiDoctor.postDoctor(JSON.parse(doctor)).subscribe(res => {
        const json = {
          id_doctor: uid,
          id_especialidad: this.id_especialidad
        }
        let especialidad = JSON.stringify(json);
        this.apiEspecialidades.postEspecialidad(JSON.parse(especialidad)).subscribe(res => {
        });
        this.verifyEmail();
      })
    }

    listarEspecialidades() {
      this.apiEspecialidades.getEspecialidades().subscribe( res=> {
        this.listaEspecialidades = res;
      })
    }
}