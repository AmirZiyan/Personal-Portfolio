
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  category: string;
  description: string;
  subjects: string[];
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class Education {
  readonly education: EducationItem[] = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Federal Institute of Science and Technology (FISAT)',
      period: 'Completed',
      category: 'POSTGRADUATE',
      description:
        'Postgraduate education focused on computer applications, software development, and computing fundamentals.',
      subjects: [
        'Software Development',
        'Database Management',
        'Programming',
        'Computer Applications'
      ]
    }
  ];

  readonly learning = [
    {
      title: 'Oracle SQL & PL/SQL',
      description:
        'Developing skills in SQL queries, procedures, functions, and database objects.'
    },
    {
      title: 'Web Development',
      description:
        'Building practical skills with Angular, TypeScript, HTML, and CSS.'
    }
  ];
}
