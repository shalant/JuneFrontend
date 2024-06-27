import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { faBars, faChartLine, faFlagUsa, faGear, faGlobe, faUser, faWheatAwn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { environment } from '../environments/environment.development';
import { AuthService } from './features/auth/services/auth.service';
import { User } from './features/auth/models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    // NavbarComponent,
    //     HeaderComponent,
    //     DarkToggleComponent,
    //     SidebarComponent,
    FontAwesomeModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'Rosen-Co';

  user?: User;

  faWheatAwn = faWheatAwn;
  faChartLine = faChartLine;
  faFlagUsa = faFlagUsa;
  faGlobe = faGlobe;
  faGear = faGear;
  faUser = faUser;
  faBars = faBars;

  constructor(private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    if (environment.production) {
      console.log("We are running in production mode");
    } else {
      console.log("We are running in development mode");
    }

    this.authService.user()
      .subscribe({
        next: (response) => {
          this.user = response;
        }
      })
    
    this.user = this.authService.getUser();

  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}
