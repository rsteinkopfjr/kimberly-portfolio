import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  public allFilter:boolean = true;
  public brandFilter:boolean = false;
  public marketingFilter:boolean = false;
  public socialFilter:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public click_all_filter() {
    this.allFilter = true;
    this.brandFilter = false;
    this.marketingFilter = false;
    this.socialFilter = false;
  }

  public click_brand_filter() {
    this.allFilter = false;
    this.brandFilter = true;
    this.marketingFilter = false;
    this.socialFilter = false;
  }

  public click_marketing_filter() {
    this.allFilter = false;
    this.brandFilter = false;
    this.marketingFilter = true;
    this.socialFilter = false;
  }

  public click_social_filter() {
    this.allFilter = false;
    this.brandFilter = false;
    this.marketingFilter = false;
    this.socialFilter = true;
  }

}
