import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import Swal from 'sweetalert2';
import { NgxToastService } from 'ngx-toast-notifier';
import { Router } from '@angular/router';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUser:FormGroup;
  loading: boolean = false;
  modalSwitch: boolean;
  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private ngxToastService: NgxToastService,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService
    ){


    this.registerUser = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', Validators.required]
    })

  }

  ngOnInit(): void {
  }

  openModal(){
    this.modalSwitch = true;
  }

  register(){
    const email = this.registerUser.value.email;
    const password = this.registerUser.value.password;
    const repeatPassword = this.registerUser.value.repeatPassword;

    if(password !== repeatPassword){
      this.ngxToastService.onDanger('ERROR', 'Las contraseñas ingresadas deben ser las mismas');
      return;
    }
    this.loading = true;
    this.afAuth.createUserWithEmailAndPassword(email, password)
    .then((response => {
      localStorage.setItem("dataUser", JSON.stringify(response));
      localStorage.setItem("email", response.user.email);
      localStorage.setItem("uid", response.user.uid);
      this.router.navigate(['/form-user']);
    }))
    .catch((error) => {
      this.loading = false;
      this.ngxToastService.onDanger('ERROR', this.firebaseError.codeError(error.code));
    });
  }


}
