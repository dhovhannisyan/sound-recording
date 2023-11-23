import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoundListComponent } from './pages/sound-list/sound-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/sounds', pathMatch: 'full' },
  { path: 'sounds', loadComponent: () => import('./pages/sound-list/sound-list.component').then(mod => mod.SoundListComponent)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
