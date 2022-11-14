import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxToastService } from 'ngx-toast-notifier';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';
import { ShareService } from '../../services/share.service';
import { Auth, GoogleAuthProvider, FacebookAuthProvider } from '@angular/fire/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser: FormGroup;
  loading: boolean = false;
  @Input() prueba = "hola";
  idUsuario: string;
  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private ngxToastService: NgxToastService,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService,
    private auth: Auth,
    private share: ShareService
    ){
      this.loginUser = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      })
    }

  ngOnInit(): void {

  }

  login(){
    const email = this.loginUser.value.email;
    const password = this.loginUser.value.password;

    this.loading = true;
    this.afAuth.signInWithEmailAndPassword(email, password)
    .then(response => {
      if(response.user?.emailVerified) {
        localStorage.setItem("uid", response.user.uid);
        localStorage.setItem("dataUser", JSON.stringify(response));
        this.router.navigate(['/dashboard/']);
      }else{
        this.router.navigate(['/verify-email']);
      }
      return
    })
    .catch((error) => {
      this.loading = false;
      this.ngxToastService.onDanger('Error', this.firebaseError.codeError(error.code));
    })
  }

  loginWithGoogle(){
    const provider = new GoogleAuthProvider();
    this.afAuth.signInWithPopup(provider)
    .then((Response) => {
      if(Response.additionalUserInfo.isNewUser == true) {
        localStorage.setItem("uid", Response.user.uid);
        localStorage.setItem("email", Response.user.email);
        localStorage.setItem("dataUser", JSON.stringify(Response));
        this.router.navigate(['/form-user']);
      }else{
        localStorage.setItem("uid", Response.user.uid);
        localStorage.setItem("dataUser", JSON.stringify(Response));
        this.router.navigate(['/dashboard']);
      }
    })
    .catch(error => {
      this.ngxToastService.onDanger('Error', 'No pudimos iniciar sesion con tu cuenta de google');
    });
  }

  loginWithFacebook(){
    const provider = new FacebookAuthProvider();
    this.afAuth.signInWithPopup(provider)
    .then((Response) => {
      if(Response.additionalUserInfo.isNewUser == true) {
        localStorage.setItem("uid", Response.user.uid);
        localStorage.setItem("email", Response.user.email);
        localStorage.setItem("dataUser", JSON.stringify(Response));
        this.router.navigate(['/form-user']);
      }else{
        localStorage.setItem("uid", Response.user.uid);
        localStorage.setItem("dataUser", JSON.stringify(Response));
        this.router.navigate(['/dashboard']);
      }
    })
    .catch(error => {
      this.ngxToastService.onDanger('Error', 'No pudimos iniciar sesion con tu cuenta de Facebook');
    });
  }
}
