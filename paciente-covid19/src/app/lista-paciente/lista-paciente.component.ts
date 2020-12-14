import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { PacienteService } from 'src/service/paciente.service';

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
  {codigo: 5, nome: 'Rosa1', cpf: '373.132.158-45', status: 'estável'},
  {codigo: 6, nome: 'Rosa2', cpf: '373.132.158-45', status: 'estável'},
  {codigo: 7, nome: 'Rosa3', cpf: '373.132.158-45', status: 'estável'},
  {codigo: 8, nome: 'Rosa4', cpf: '373.132.158-45', status: 'estável'},
  {codigo: 9, nome: 'Rosa5', cpf: '373.132.158-45', status: 'estável'},
  {codigo: 10, nome: 'Rosa6', cpf: '373.132.158-45', status: 'estável'}
];

@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.css']
})

export class ListaPacienteComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'nome', 'cpf', 'status', 'detalhes'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private route: Router, private pacienteService: PacienteService) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
  }

  editar() {
    this.route.navigate(['cadastro'])
    //this.pacienteService.update(this.dataSource)

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
