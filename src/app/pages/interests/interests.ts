
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Interest {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  symbol: string;
}

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './interests.html',
  styleUrl: './interests.css'
})
export class Interests {
  readonly interests: Interest[] = [
    {
      number: '01',
      title: 'Football',
      subtitle: 'TEAMWORK & COMPETITION',
      description:
        'Football inspires me to stay active and appreciate teamwork, discipline, strategy, and the determination to improve.',
      tags: ['Football', 'Teamwork', 'Sports Analysis'],
      symbol: '⚽'
    },
    {
      number: '02',
      title: 'Travelling',
      subtitle: 'ADVENTURE & DISCOVERY',
      description:
        'I enjoy the idea of exploring new destinations, experiencing different cultures, discovering local places, and creating memorable experiences.',
      tags: ['Exploration', 'New Experiences', 'Culture'],
      symbol: '✈'
    },
    {
      number: '03',
      title: 'Photography & Exploring',
      subtitle: 'OBSERVATION & CREATIVITY',
      description:
        'Discovering interesting places, noticing details, and capturing memorable moments through photos.',
      tags: ['Photography', 'Nature', 'Places'],
      symbol: '◉'
    },
    {
      number: '04',
      title: 'Technology & Learning',
      subtitle: 'CURIOSITY & GROWTH',
      description:
        'I enjoy exploring technologies, strengthening my development skills, solving problems, and learning through hands-on projects.',
      tags: ['Programming', 'Problem Solving', 'Learning'],
      symbol: '</>'
    }
  ];
}
