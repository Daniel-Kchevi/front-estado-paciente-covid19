import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { PacienteService } from 'src/service/paciente.service';


@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.css']
})

export class ListaPacienteComponent implements OnInit {
  displayedColumns: string[] = ['cpf', 'nome', 'dataInternacao', 'status', 'detalhes'];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private route: Router, private pacienteService: PacienteService) {
    // Assign the data to the data source for the table to render
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.retornaListaPacientes();
  }

  editar(cpf:number) {//
    //this.route.navigate(['cadastro'])
    this.pacienteService.read(cpf).subscribe(data=>{
      console.log(data);
    })
  }

  retornaListaPacientes(){
    this.pacienteService.readAll().subscribe(data=>{
      console.log(data);
      this.dataSource.data=data;

    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
