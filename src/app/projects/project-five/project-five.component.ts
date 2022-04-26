import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-five',
  templateUrl: './project-five.component.html',
  styleUrls: ['./project-five.component.css']
})
export class ProjectFiveComponent implements OnInit {
  public currentPage:string = "pageFive";

  constructor() { }

  ngOnInit(): void {
  }

}
