import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/service/paciente.service';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.css']
})
export class EditarPacienteComponent implements OnInit {

  constructor(private pacienteService:PacienteService) { }

  formularioEditarPaciente = new FormGroup({
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
  
  Atualizar() {//
    
    
  }

}
