import { Component,OnInit } from '@angular/core';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';



import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-cadastro-aluno',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule
  ],
  templateUrl: './cadastro-aluno.component.html',
  styleUrl: './cadastro-aluno.component.scss'
})
export class CadastroAlunoComponent implements OnInit{
  studentForm: FormGroup;
  courses: string[] = ['Angular', 'Node', 'Java'];
  editingStudent: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.studentForm = this.fb.group({
      fullName: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      course: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const state = history.state;
    if (state && state.student) {
      this.editingStudent = state.student;
      this.studentForm.patchValue(this.editingStudent);
    }
  }

  onSubmit() {
    if (this.studentForm.valid) {
      console.log('Dados do aluno:', this.studentForm.value);

      this.snackBar.open('Usuário salvo com sucesso', 'Fechar', {
        duration: 3000
      });

      this.router.navigate(['/user-list']);
    } else {
      this.snackBar.open('Por favor, preencha todos os campos obrigatórios.', 'Fechar', {
        duration: 3000
      });
    }
  }
}
