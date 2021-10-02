import { Component, OnInit } from '@angular/core';

import { Aluno } from '../aluno';
import {AlunoService} from '../aluno.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  selectedAluno?: Aluno;

  alunos: Aluno[] = [];

  alunosSearch: Aluno[] = [];

  constructor(private alunoService: AlunoService, private messegeService:
    MessageService) { }

  ngOnInit(): void {
    this.getAlunos();
  }

  onSelect(aluno:Aluno): void{
    this.selectedAluno = aluno;
    this.messegeService.add('AlunosComponent : Selecionado aluno com id= '+aluno.id);
  }

  getAlunos(): void {
    this.alunoService.getAlunos().subscribe(alunos => {this.alunos = alunos
    this.alunosSearch = alunos});
  }

  searchAluno(event: any): void{
    let busca : string = event.target.value;
    this.alunos = this.alunosSearch.filter(aluno => 
      aluno.nome.toLowerCase().includes(busca.toLowerCase()));
  }

}
