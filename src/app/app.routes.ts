import { Routes } from '@angular/router';
import { CrudAtorComponent } from './crud-ator/crud-ator.component';
import { CrudClasseComponent } from './crud-classe/crud-classe.component';
import { CrudDiretorComponent } from './crud-diretor/crud-diretor.component';

export const routes: Routes = [
    {path: '', component: CrudAtorComponent},
    {path: 'classe', component: CrudClasseComponent},
    {path: 'diretor', component: CrudDiretorComponent},
    {path: '**', component: CrudAtorComponent}
];
