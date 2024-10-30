import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
    },
    // {
    //     path: 'remote',
    //     loadChildren: () =>
    //         loadRemoteModule('remote', './remoteModule').then((m) => m.RemoteMainModule)
    // },
    {
        path: 'remote3',
        loadComponent: () => loadRemoteModule('remote3', './Component').then((m) => m.AppComponent),
    },
];
