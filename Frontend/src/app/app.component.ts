import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { faBars, faChartLine, faFlagUsa, faGear, faGlobe, faUser, faWheatAwn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { environment } from '../environments/environment.development';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    // NavbarComponent,
    // HeaderComponent,
    // DarkToggleComponent,
    // SidebarComponent,
    FontAwesomeModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend';

  faWheatAwn = faWheatAwn;
  faChartLine = faChartLine;
  faFlagUsa = faFlagUsa;
  faGlobe = faGlobe;
  faGear = faGear;
  faUser = faUser;
  faBars = faBars;

  ngOnInit() {
    if (environment.production) {
      console.log("We are running in production mode");
    } else {
      console.log("We are running in development mode");
    }
  }
}
