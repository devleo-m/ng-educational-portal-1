import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { AlunosComponent } from './alunos/alunos.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';

export const routes: Routes = [
    { path: 'lista', component: AlunosComponent },    
    { path: 'cadastro-aluno', component: CadastroAlunoComponent },
    { path: 'login', component: LoginComponent },
    { path: 'disciplina', component: DisciplinasComponent },
    { path: 'home', component: HomeComponent }
];
