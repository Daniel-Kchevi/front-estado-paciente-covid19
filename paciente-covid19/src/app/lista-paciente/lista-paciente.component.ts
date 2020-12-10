import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface PeriodicElement {
  codigo: number;
  nome: string;  
  cpf: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {codigo: 1, nome: 'José', cpf: '373.132.158-45', status: 'estável'},
  {codigo: 2, nome: 'Maria', cpf: '373.132.158-45', status: 'grave'},
  {codigo: 3, nome: 'João', cpf: '373.132.158-45', status: 'gravíssimo'},
  {codigo: 4, nome: 'Pedro', cpf: '373.132.158-45', status: 'saudável'},
  {codigo: 5, nome: 'Rosa', cpf: '373.132.158-45', status: 'estável'}
];

@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.css']
})
export class ListaPacienteComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'nome', 'cpf', 'status', 'detalhes'];
  dataSource = ELEMENT_DATA;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  editar(){
    this.route.navigate(['cadastro'])
  }

}
