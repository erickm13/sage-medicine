import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/angular';
import esLocale from '@fullcalendar/core/locales/es';
import { CitasService } from 'src/app/services/citas.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  dataUser: any;
  events: any[];
  options: any;
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private apiCitas: CitasService
    ) { }


  calendarOptions: CalendarOptions = {
    navLinks: false,
    handleWindowResize: true,
    themeSystem: 'bootstrap5',
    headerToolbar: {
      left: 'prev,next,today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,list'
    },
    locale: esLocale,
    dateClick: this.handleDateClick.bind(this),
    events: [
      { title: 'Cita Dermatologo',start: '2022-11-03T10:00:00', end: '2022-11-03T12:00:00', date: '2022-11-03' },
      { title: 'Cita Pediatra',start: '2022-11-06T11:00:00', end: '2022-11-06T12:00:00', date: '2022-11-06' },
      { title: 'Cita Pediatra',start: '2022-11-06T13:00:00', end: '2022-11-06T14:00:00', date: '2022-11-06' }
    ]
  };

  handleDateClick(arg: { dateStr: string; }) {
    alert('date click! ' + arg.dateStr)
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
