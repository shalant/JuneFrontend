import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown, faArrowUp, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Chart } from 'chart.js';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    // SidebarComponent,
    FontAwesomeModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  faPlus = faPlus;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  myChart: any;
  rapidApiAgData$?: Observable<any[]>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      this.rapidApiAgData$ = this.http.get<any[]>(`https://bloomberg-api.p.rapidapi.com/bloomberg/agriculture`)


      this.myChart = new Chart('myChart', {
          type: 'line',
          data: {
              labels: [
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday'
              ],
              datasets: [{
                  data: [
                      15339,
                      21345,
                      18483,
                      24003,
                      23489,
                      24092,
                      12034
                  ],
                  backgroundColor: 'transparent',
                  borderColor: '#007bff',
                  borderWidth: 4,
                  pointBackgroundColor: '#007bff'
              }]
          },
          options: {
              plugins: {
                  legend: {
                      display: false
                  },
                  tooltip: {
                      boxPadding: 3
                  }
              }
          }
      })
  }
}