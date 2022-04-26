import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  public allFilter:boolean = true;
  public contentFilter:boolean = false;
  public communityFilter:boolean = false;
  public productFilter:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public click_all_filter() {
    this.allFilter = true;
    this.contentFilter = false;
    this.communityFilter = false;
    this.productFilter = false;
  }

  public click_content_filter() {
    this.allFilter = false;
    this.contentFilter = true;
    this.communityFilter = false;
    this.productFilter = false;
  }

  public click_community_filter() {
    this.allFilter = false;
    this.contentFilter = false;
    this.communityFilter = true;
    this.productFilter = false;
  }

  public click_product_filter() {
    this.allFilter = false;
    this.contentFilter = false;
    this.communityFilter = false;
    this.productFilter = true;
  }

}
