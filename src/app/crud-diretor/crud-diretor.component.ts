import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud-diretor',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './crud-diretor.component.html',
  styleUrls: ['./crud-diretor.component.css']
})
export class CrudDiretorComponent{
  diretores = [
    { nome: 'Diretor 1' },
    { nome: 'Diretor 2' },
    { nome: 'Diretor 3' }
  ];

  editarDiretor(diretor: any) {
    console.log('Editando dretor: ', diretor);
  }

  excluirDiretor(diretor: any) {
    console.log('Excluindo diretor: ', diretor);
  }
}
