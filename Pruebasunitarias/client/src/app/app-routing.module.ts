import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AsignacionComponent } from './components/asignacion/asignacion.component';



const routes: Routes = [
  
  {path: 'inicio', component: InicioComponent},
  {path: 'asignacion', component: AsignacionComponent},
  {path: 'registro', component: RegistroComponent},
  {path: '', redirectTo: '/inicio', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
