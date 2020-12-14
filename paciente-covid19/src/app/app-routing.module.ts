import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPacienteComponent } from './lista-paciente/lista-paciente.component';
import { CadastroPacienteComponent } from './cadastro-paciente/cadastro-paciente.component';

const routes: Routes = [
  {
    path: 'home', component: ListaPacienteComponent
  },
  {
    path: 'cadastro', component: CadastroPacienteComponent
  },
  {
    path: 'cadastro/:cpf', component: CadastroPacienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
