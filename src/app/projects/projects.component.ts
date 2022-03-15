import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'projects-lower',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @Input() getCurrentPage:string = '';
  public previousPage:string = '';
  public nextPage:string = '';

  constructor() { }

  ngOnInit(): void {
    this.setNextPrevPages();
  }

  public setNextPrevPages() {
    if (this.getCurrentPage == 'pageOne') {
      this.nextPage = 'two';
      this.previousPage = 'four';
    }
    if (this.getCurrentPage == 'pageTwo') {
      this.nextPage = 'three';
      this.previousPage = 'one';
    }
    if (this.getCurrentPage == 'pageThree') {
      this.nextPage = 'four';
      this.previousPage = 'two';
    }
    if (this.getCurrentPage == 'pageFour') {
      this.nextPage = 'one';
      this.previousPage = 'three';
    }
  }
}
