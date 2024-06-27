import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/auth/login/login.component';
import { StateDataComponent } from './features/state-data/state-data.component';
import { UsMapComponent } from './features/us-map/us-map.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'state-data',
        component: StateDataComponent
    },
    {
        path: 'us-map',
        component: UsMapComponent
    }
];
