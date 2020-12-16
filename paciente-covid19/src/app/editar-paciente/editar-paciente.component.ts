import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/service/paciente.service';
import { FormGroup, FormControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.css']
})
export class EditarPacienteComponent implements OnInit {

  constructor(private pacienteService:PacienteService, private routeActivite : ActivatedRoute , private route: Router) { }

  idPaciente : number;

  formularioEditarPaciente = new FormGroup({
    id: new FormControl(),
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
    this.routeActivite.paramMap.subscribe((param: any)=>{
      const id = param.get('id');
      if(id){
        this.pacienteService.read(id).subscribe(data=>{             
          console.log(data); 
          this.carregaObjeto(data);
          this.idPaciente=id;
        })
      }
    })  
  }
  
  carregaObjeto(objeto: any){
    this.formularioEditarPaciente.get('id')?.setValue(objeto.id);
    this.formularioEditarPaciente.get('nome')?.setValue(objeto.nome);
    this.formularioEditarPaciente.get('cpf')?.setValue(objeto.cpf);
    this.formularioEditarPaciente.get('dataNascimento')?.setValue(objeto.dataNascimento);
    this.formularioEditarPaciente.get('telefoneContato')?.setValue(objeto.telefoneContato);
    this.formularioEditarPaciente.get('dataInternacao')?.setValue(objeto.dataInternacao);
    this.formularioEditarPaciente.get('sintomas')?.setValue(objeto.sintomas);
    this.formularioEditarPaciente.get('dataAlta')?.setValue(objeto.dataAlta);
    this.formularioEditarPaciente.get('status')?.setValue(objeto.status);
  }

  Atualizar() {
    console.log(this.formularioEditarPaciente.value)  
    let id = this.formularioEditarPaciente.get('id');
    this.pacienteService.update(this.idPaciente, this.formularioEditarPaciente.value);  
  }

}
