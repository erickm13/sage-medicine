import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//modulos
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxToastNotifierModule } from 'ngx-toast-notifier';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import listPlugin from '@fullcalendar/list';
import {HttpClientModule} from '@angular/common/http';

//componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { environment } from 'src/environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { CitasComponent } from './components/citas/citas.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ProfileComponent } from './components/profile/profile.component';
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

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin,
  bootstrap5Plugin,
  listPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    VerifyEmailComponent,
    RecoverPasswordComponent,
    SpinnerComponent,
    DoctorsComponent,
    CitasComponent,
    NotFoundPageComponent,
    CalendarComponent,
    ProfileComponent,
    FormUserComponent,
    DetailsDoctorComponent,
    GenerarCitaComponent,
    LoginDoctorComponent,
    FormDoctorComponent,
    RegisterDoctorComponent,
    VerifyEmailDoctorComponent,
    CoverComponent,
    DashboardDoctorComponent,
    CitasDoctorComponent,
    ViewCitaComponent,
    ViewCitaUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule, // required animations module
    NgxToastNotifierModule.forRoot(), // NgxToastNotifierModule added
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    FullCalendarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
