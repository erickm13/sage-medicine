import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxToastService } from 'ngx-toast-notifier';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {
  recoverPassword: FormGroup;
  loading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private ngxToastService: NgxToastService,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService
  ) {
    this.recoverPassword = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
  }

  recover(){
    const email = this.recoverPassword.value.email;
    this.loading = true;
    this.afAuth.sendPasswordResetEmail(email)
    .then(() => {
      Swal.fire('Recuperar Contraseña', 'Te hemos enviado un correo para restablecer tu contraseña' , 'info');
      this.router.navigate(['/login']);
    })
    .catch((error) => {
      this.loading = false;
      this.ngxToastService.onDanger('Error', this.firebaseError.codeError(error.code));
    })
  }
}
