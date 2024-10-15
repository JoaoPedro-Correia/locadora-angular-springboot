import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud-classe',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './crud-classe.component.html',
  styleUrls: ['./crud-classe.component.css']
})
export class CrudClasseComponent {
  classes = [
    {nome: "classe1"}
  ];
  
  editarClasse(classe: any) {
    console.log('Editando ator:', classe);
  }

  excluirClasse(classe: any) {
    console.log('Excluindo ator:', classe);
  }
}
