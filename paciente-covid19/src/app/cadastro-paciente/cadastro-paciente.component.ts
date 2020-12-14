import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { PacienteService } from 'src/service/paciente.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.css']
})
export class CadastroPacienteComponent implements OnInit { 
 
  constructor(private pacienteService:PacienteService){}

  formularioPaciente = new FormGroup({
    nome: new FormControl(),
    cpf: new FormControl(), 
    dataNascimento: new FormControl(), 
    telefoneContato: new FormControl(), 
    sintomas: new FormControl(), 
    dataInternacao: new FormControl(), 
    dataAlta: new FormControl(),
    status: new FormControl('selecione')
  });

  ngOnInit(): void {
    
  }

  cadastrar(){
  console.log(this.formularioPaciente.value);
   this.pacienteService.create(this.formularioPaciente.value).subscribe(data=>{
      const pacientes = data;
      console.log(pacientes);
    })
  }
}
