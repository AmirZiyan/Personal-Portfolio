import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  readonly strengths = [
    {
      title: 'Problem Solving',
      description: 'Breaking technical problems into manageable solutions.'
    },
    {
      title: 'Continuous Learning',
      description: 'Improving my skills and learning new technologies.'
    },
    {
      title: 'Team Collaboration',
      description: 'Sharing knowledge and contributing to team goals.'
    }
  ];

  readonly technologies = [
    'SQL',
    'PL/SQL',
    'Oracle Database',
    'Angular',
    'TypeScript',
    'Python',
    'Git'
  ];
}
