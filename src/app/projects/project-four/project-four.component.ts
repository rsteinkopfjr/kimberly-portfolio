import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-four',
  templateUrl: './project-four.component.html',
  styleUrls: ['./project-four.component.css']
})
export class ProjectFourComponent implements OnInit {
  public currentPage:string = "pageFour";

  constructor() { }

  ngOnInit(): void {
  }

}
