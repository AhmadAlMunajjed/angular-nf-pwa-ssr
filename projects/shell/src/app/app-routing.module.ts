import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'remote',
    loadChildren: () =>
      loadRemoteModule('remote', './remoteModule').then((m) => m.RemoteMainModule)
  },
  {
    path: 'remote2',
    loadChildren: () =>
      loadRemoteModule('remote2', './remote2Module').then((m) => m.RemoteMainModule)
  },
  {
    path: 'remote3',
    loadComponent: () => loadRemoteModule('remote3', './Component').then((m) => m.AppComponent),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    HomeComponent
  ]
})
export class AppRoutingModule { }
