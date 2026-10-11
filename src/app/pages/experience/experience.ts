
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  readonly responsibilities = [
    'Developing and maintaining Oracle PL/SQL procedures.',
    'Working with database tables, sequences, and views.',
    'Supporting database-related issues and troubleshooting.',
    'Preparing test cases and performing application testing.',
    'Creating technical documentation, including SOPs and TSDs.'
  ];

  readonly technologies = [
    'Oracle SQL',
    'PL/SQL',
    'Oracle Database',
    'SQL Server Management Studio',
    'Database Testing'
  ];
}
