import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPacienteComponent } from './lista-paciente/lista-paciente.component';
import { CadastroPacienteComponent } from './cadastro-paciente/cadastro-paciente.component';
import { EditarPacienteComponent } from './editar-paciente/editar-paciente.component';

const routes: Routes = [
  {
    path: 'home', component: ListaPacienteComponent
  },
  {
    path: 'cadastro', component: CadastroPacienteComponent
  },
  {
    path: 'editar/:id', component: EditarPacienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
