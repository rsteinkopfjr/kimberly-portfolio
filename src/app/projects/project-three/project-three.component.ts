import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-three',
  templateUrl: './project-three.component.html',
  styleUrls: ['./project-three.component.css']
})
export class ProjectThreeComponent implements OnInit {
  public currentPage:string = "pageThree";

  constructor() { }

  ngOnInit(): void {
  }

}
