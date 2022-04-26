import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectOneComponent } from './projects/project-one/project-one.component';
import { ProjectTwoComponent } from './projects/project-two/project-two.component';
import { ProjectThreeComponent } from './projects/project-three/project-three.component';
import { ProjectFourComponent } from './projects/project-four/project-four.component';
import { ProjectFiveComponent } from './projects/project-five/project-five.component';

const routes: Routes = [
  {path: "", component: PortfolioComponent},
  {path: "about", component: AboutComponent},
  {path: "project", children: [
    {path: "one", component: ProjectOneComponent},
    {path: "two", component: ProjectTwoComponent},
    {path: "three", component: ProjectThreeComponent},
    {path: "four", component: ProjectFourComponent},
    {path: "five", component: ProjectFiveComponent},
  ]},
  { path: 'project/one/two', redirectTo: 'project/two', pathMatch: 'full' },
  { path: 'project/one/five', redirectTo: 'project/five', pathMatch: 'full' },
  { path: 'project/two/one', redirectTo: 'project/one', pathMatch: 'full' },
  { path: 'project/two/three', redirectTo: 'project/three', pathMatch: 'full' },
  { path: 'project/three/two', redirectTo: 'project/two', pathMatch: 'full' },
  { path: 'project/three/four', redirectTo: 'project/four', pathMatch: 'full' },
  { path: 'project/four/three', redirectTo: 'project/three', pathMatch: 'full' },
  { path: 'project/four/five', redirectTo: 'project/five', pathMatch: 'full' },
  { path: 'project/five/one', redirectTo: 'project/one', pathMatch: 'full' },
  { path: 'project/five/four', redirectTo: 'project/four', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
