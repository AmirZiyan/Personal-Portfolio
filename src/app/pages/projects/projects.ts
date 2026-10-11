
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  contribution: string;
  technologies: string[];
  highlights: string[];
  githubUrl: string | null;
  demoUrl: string | null;
  status: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  readonly projects: Project[] = [
    {
      number: '01',
      title: 'Oracle Database Development',
      category: 'DATABASE DEVELOPMENT',
      description:
        'A showcase of Oracle database development skills, including SQL, PL/SQL programming, and database objects.',
      contribution:
        'Presenting database development experience and relevant technical skills.',
      technologies: ['Oracle SQL', 'PL/SQL', 'Oracle Database'],
      highlights: [
        'Stored procedures and functions',
        'Tables, sequences and views',
        'Database support and testing'
      ],
      githubUrl: null,
      demoUrl: null,
      status: 'Experience showcase'
    },
    {
      number: '02',
      title: 'Personal Developer Portfolio',
      category: 'WEB DEVELOPMENT',
      description:
        'A responsive personal portfolio website presenting my professional background, technical skills, and projects.',
      contribution:
        'Building the website with Angular, TypeScript, HTML, and CSS.',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      highlights: [
        'Multi-page navigation',
        'Responsive layouts',
        'Reusable components'
      ],
      githubUrl: null,
      demoUrl: null,
      status: 'In development'
    },
    {
      number: '03',
      title: 'SQL & PL/SQL Development',
      category: 'DATABASE DEVELOPMENT',
      description:
        'A showcase of database development using Oracle SQL and PL/SQL.',
      contribution:
        'Highlighting database development skills gained through professional work and continued learning.',
      technologies: [
        'Oracle SQL',
        'PL/SQL',
        'Stored Procedures',
        'Database Objects'
      ],
      highlights: [
        'Developing and maintaining PL/SQL procedures',
        'Working with tables, sequences, and views',
        'Database support, testing, and troubleshooting'
      ],
      githubUrl: null,
      demoUrl: null,
      status: 'Experience showcase'
    }
  ];
}
