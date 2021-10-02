import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Aluno } from './aluno';
import { ALUNOS } from './mock-alunos';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  getAlunos(): Observable<Aluno[]> {
    const alunos = of(ALUNOS);
    this.messageService.add('AlunoService: Alunos localizados')
    return alunos;

  }

  constructor(private messageService: MessageService) { }
}
