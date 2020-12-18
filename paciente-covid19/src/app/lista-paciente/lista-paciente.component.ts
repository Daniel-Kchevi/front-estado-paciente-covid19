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

  loader: Boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private route: Router, private pacienteService: PacienteService) {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.token();   
    if(this.retornaListaPacientes()!=null){
      this.loader=true;
      this.retornaListaPacientes()
    }
  }

  verificaExistenciaToken():Boolean{
    const tokenStorange = localStorage.getItem('access-token');
    if(tokenStorange)return true;
    return false;
  }

  token(){    
    this.pacienteService.gerarToken().subscribe((data:any)=>{
      localStorage.setItem('access-token', data.access_token);
    });
  }

  editar(cpf:number) {
    this.route.navigate(['editar', cpf]);    
  }

  retornaListaPacientes(){
    
      this.pacienteService.readAll().subscribe(data=>{
        this.dataSource.data=data;
      }, e=>{
        if(e.statusText=='Unauthorized'){
          localStorage.removeItem('access-token');
          this.route.navigate(['home']);  
        }
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
