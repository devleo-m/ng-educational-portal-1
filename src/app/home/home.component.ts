import { Component, OnInit } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import {CommonModule} from '@angular/common';

interface Activity {
  title: string;
  description: string;
  dueDate: Date;
}

interface Subject {
  name: string;
  description: string;
}

interface ExtraCourse {
  name: string;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  upcomingActivities: Activity[] = [
    { title: 'Entrega de trabalho', description: 'Trabalho da disciplina Java', dueDate: new Date('2025-01-01') },
    { title: 'Avaliação', description: 'Avaliação da disciplina Angular', dueDate: new Date('2025-01-05') },
    { title: 'Chat com o mentor', description: 'Chat com o mentor até a data Z', dueDate: new Date('2025-02-01') },
  ];

  currentSubjects: Subject[] = [
    { name: 'Angular', description: 'Lorem ipsum....' },
    { name: 'Node', description: 'Lorem ipsum....' },
    { name: 'Java', description: 'Lorem ipsum....' },
  ];

  extraCourses: ExtraCourse[] = [
    { name: 'Angular', description: 'Lorem ipsum 2....' },
    { name: 'Node', description: 'Lorem ipsum 2....' },
    { name: 'Java', description: 'Lorem ipsum 2....' },
  ];

  constructor() {}

  ngOnInit(): void {}
}