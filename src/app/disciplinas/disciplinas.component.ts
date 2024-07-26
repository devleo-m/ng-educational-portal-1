import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import {CommonModule} from '@angular/common';

interface Semester {
  semester: string;
  subjects: string[];
}
@Component({
  selector: 'app-disciplinas',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule
  ],
  templateUrl: './disciplinas.component.html',
  styleUrl: './disciplinas.component.scss'
})
export class DisciplinasComponent  implements OnInit {
  courseName: string = '';
  semesters: Semester[] = [];

  courseSubjects: { [key: string]: Semester[] } = {
    'Angular': [
      { semester: 'Primeiro semestre', subjects: ['A', 'B'] },
      { semester: 'Segundo semestre', subjects: ['C', 'D'] },
    ],
    'Node': [
      { semester: 'Primeiro semestre', subjects: ['E', 'F'] },
      { semester: 'Segundo semestre', subjects: ['A', 'C'] },
    ],
    'Java': [
      { semester: 'Primeiro semestre', subjects: ['D', 'E'] },
      { semester: 'Segundo semestre', subjects: ['F', 'G'] },
    ]
  };
  ngOnInit(): void {
    this.semesters = this.courseSubjects[this.courseName] || [];
  }
}