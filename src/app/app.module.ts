import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectOneComponent } from './projects/project-one/project-one.component';
import { ProjectTwoComponent } from './projects/project-two/project-two.component';
import { ProjectThreeComponent } from './projects/project-three/project-three.component';
import { ProjectFourComponent } from './projects/project-four/project-four.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    ProjectsComponent,
    ProjectOneComponent,
    ProjectTwoComponent,
    ProjectThreeComponent,
    ProjectFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
