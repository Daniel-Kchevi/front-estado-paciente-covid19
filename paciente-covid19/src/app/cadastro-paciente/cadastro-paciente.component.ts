import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.css']
})
export class CadastroPacienteComponent implements OnInit { 
 
  formularioPaciente = new FormGroup({
    nome: new FormControl(),
    cpf: new FormControl(), 
    dtNascimento: new FormControl(), 
    telContato: new FormControl(), 
    sintomas: new FormControl(), 
    dtInternacao: new FormControl(), 
    dtAlta: new FormControl(),
    status: new FormControl('selecione')
  });

  ngOnInit(): void {
    
  }
 
  cadastrar(){
    console.log(this.formularioPaciente.value);
  }
}
