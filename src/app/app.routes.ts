import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Experience } from './pages/experience/experience';
import { Education } from './pages/education/education';
import { Skills } from './pages/skills/skills';
import { Interests } from './pages/interests/interests';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'experience', component: Experience },
  { path: 'education', component: Education },
  { path: 'skills', component: Skills },
  { path: 'interests', component: Interests },

  { path: '**', redirectTo: '' }
];