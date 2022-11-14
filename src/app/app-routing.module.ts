import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { RegisterComponent } from './components/register/register.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { CitasComponent } from './components/citas/citas.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FormUserComponent } from './components/form-user/form-user.component';
import { DetailsDoctorComponent } from './components/details-doctor/details-doctor.component';
import { GenerarCitaComponent } from './components/generar-cita/generar-cita.component';
import { LoginDoctorComponent } from './components/login-doctor/login-doctor.component';
import { FormDoctorComponent } from './components/form-doctor/form-doctor.component';
import { RegisterDoctorComponent } from './components/register-doctor/register-doctor.component';
import { VerifyEmailDoctorComponent } from './components/verify-email-doctor/verify-email-doctor.component';
import { CoverComponent } from './components/cover/cover.component';
import { DashboardDoctorComponent } from './components/dashboard-doctor/dashboard-doctor.component';
import { CitasDoctorComponent } from './components/citas-doctor/citas-doctor.component';
import { ViewCitaComponent } from './components/view-cita/view-cita.component';
import { ViewCitaUserComponent } from './components/view-cita-user/view-cita-user.component';

const routes: Routes = [
  {path: '', redirectTo: '/error-404', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'cover', component: CoverComponent},
  {path: 'login-doctor', component: LoginDoctorComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'register-doctor', component: RegisterDoctorComponent},
  {path: 'verify-email',component: VerifyEmailComponent},
  {path: 'verify-email-doctor',component: VerifyEmailDoctorComponent},
  {path: 'recover-password', component: RecoverPasswordComponent},
  {path: 'form-user', component: FormUserComponent},
  {path: 'form-doctor', component: FormDoctorComponent},
  {path: 'view-cita-user', component: ViewCitaUserComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/login-doctor']))
  },
  {path: 'view-cita', component: ViewCitaComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/login-doctor']))
  },
  {path: 'dashboard-doctor', component: DashboardDoctorComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/login-doctor']))
  },
  {path: 'dashboard', component: DashboardComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {path: 'doctors', component: DoctorsComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {path: 'citas', component: CitasComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {path: 'citas-doctor', component: CitasDoctorComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/login-doctor']))
  },
  {path: 'details-doctor', component: DetailsDoctorComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/login-doctor']))
  },
  {path: 'calendar', component: CalendarComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {path: 'generarCita', component: GenerarCitaComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {path: 'error-404', component: NotFoundPageComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {path: '**', redirectTo: 'error-404', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
