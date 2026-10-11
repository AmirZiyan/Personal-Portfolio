
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  readonly categories: SkillCategory[] = [
    {
      title: 'Database Development',
      description: 'Working with relational databases and database objects.',
      skills: ['Oracle SQL', 'PL/SQL', 'Stored Procedures', 'Functions', 'Views', 'Sequences']
    },
    {
      title: 'SQL & Data Management',
      description: 'Querying, organizing, and maintaining structured data.',
      skills: ['SQL Queries', 'Joins', 'Subqueries', 'Constraints', 'Transactions', 'Data Validation']
    },
    {
      title: 'Web Development',
      description: 'Building responsive web interfaces and applications.',
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular']
    },
    {
      title: 'Tools & Professional Practices',
      description: 'Tools and practices used during development and support.',
      skills: ['SQL Server Management Studio', 'Git', 'Database Testing', 'Test Cases', 'SOP Documentation', 'Troubleshooting']
    }
  ];

  readonly currentlyLearning = [
    'Building Angular applications',
    'Improving TypeScript skills',
    'Writing cleaner and more maintainable code'
  ];
}
