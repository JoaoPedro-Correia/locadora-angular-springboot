import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud-ator',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './crud-ator.component.html',
  styleUrls: ['./crud-ator.component.css']
})
export class CrudAtorComponent{
  atores = [
    { nome: 'Ator 1' },
    { nome: 'Ator 2' },
    { nome: 'Ator 3' }
  ];

  editarAtor(ator: any) {
    console.log('Editando ator:', ator);
  }

  excluirAtor(ator: any) {
    console.log('Excluindo ator:', ator);
  }
}