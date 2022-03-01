import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public navbarCollapse:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onNavBtnClick() {
    if (this.navbarCollapse != false) {
      this.navbarCollapse = false;
      console.log(this.navbarCollapse);
    } else {
      this.navbarCollapse = true;
      console.log(this.navbarCollapse);
    }
  }

}
