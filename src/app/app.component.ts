import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CrudAtorComponent } from './crud-ator/crud-ator.component';  // Importando o componente de Ator
import { CrudClasseComponent } from './crud-classe/crud-classe.component';  // Importando o componente de Classe
import { CrudDiretorComponent } from './crud-diretor/crud-diretor.component';
import { NavbarComponent } from "./_component/navbar/navbar.component";  // Importando o componente de Diretor

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CrudAtorComponent, CrudClasseComponent, CrudDiretorComponent, NavbarComponent], // Incluindo os componentes standalone aqui
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'video-locadora';
  
  selectedCrud: string = '';

  expandSidebar() {
    document.querySelector('.sidebar')?.classList.add('expanded');
  }

  collapseSidebar() {
    document.querySelector('.sidebar')?.classList.remove('expanded');
  }

  showCrud(crudType: string) {
    this.selectedCrud = crudType;
  }
}
