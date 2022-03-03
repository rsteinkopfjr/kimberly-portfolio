import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-me',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public skillOne:boolean = false;
  public skillTwo:boolean = false;
  public skillThree:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onLinkedIn() {
    window.open('https://linkedin.com/in/ksteinkopf','_blank');
  }

  public onSkillOne() {
    if (this.skillOne != false) {
      this.skillOne = false;
    } else {
      this.skillOne = true;
    }
  }

  public onSkillTwo() {
    if (this.skillTwo != false) {
      this.skillTwo = false;
    } else {
      this.skillTwo = true;
    }    
  }

  public onSkillThree() {
    if (this.skillThree != false) {
      this.skillThree = false;
    } else {
      this.skillThree = true;
    }
  }

}
