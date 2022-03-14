import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { TeamDetailsComponent } from './team-details/team-details.component';

const routes: Routes = [
  { path: 'team-details/:id', component: TeamDetailsComponent },
  { path: '', component: BaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
