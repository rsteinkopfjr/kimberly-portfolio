import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-project-two',
  templateUrl: './project-two.component.html',
  styleUrls: ['./project-two.component.css']
})
export class ProjectTwoComponent implements OnInit {
  public currentPage:string = "pageTwo";

  constructor() { }

  ngOnInit(): void {
  }

}
