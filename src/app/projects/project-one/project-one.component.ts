import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-one',
  templateUrl: './project-one.component.html',
  styleUrls: ['./project-one.component.css']
})
export class ProjectOneComponent implements OnInit {
  public currentPage:string = "pageOne";

  constructor() { }

  ngOnInit(): void {
    // window.scrollTo(0, 0)
  }

  public onViewBlogPost(post: string) {
    if (post == 'winter'){
      window.open('https://www.integrativenutrition.com/blog/twelve-health-tips-to-get-through-the-end-of-winter','_blank');
    }
    if (post == 'blue'){
      window.open('https://www.integrativenutrition.com/blog/how-to-attain-optimal-heart-health-lifestyle-tips-from-the-blue-zones','_blank');
    }
    if (post == 'date'){
      window.open('https://www.integrativenutrition.com/blog/30-cheap-date-ideas-for-healthy-relationships','_blank');
    }
    if (post == 'dry'){
      window.open('https://www.integrativenutrition.com/blog/beyond-dry-january-thinking-about-alcohol-and-your-health','_blank');
    }
    if (post == 'goal'){
      window.open('https://www.integrativenutrition.com/blog/goal-setting-for-success','_blank');
    }
    if (post == 'friends'){
      window.open('https://www.integrativenutrition.com/blog/healthy-friendsgiving-ideas','_blank');
    }
    if (post == 'gratitude'){
      window.open('https://www.integrativenutrition.com/blog/the-benefits-of-gratitude-and-how-to-be-grateful-this-holiday-season','_blank');
    }
    if (post == 'halloween'){
      window.open('https://www.integrativenutrition.com/blog/sugar-cravings-and-easy-halloween-treats-to-keep-you-on-track','_blank');
    }
    if (post == 'burnout'){
      window.open('https://www.integrativenutrition.com/blog/how-to-avoid-burnout-at-work','_blank');
    }
    if (post == 'school'){
      window.open('https://www.integrativenutrition.com/blog/back-to-school-keeping-the-whole-family-healthy','_blank');
    }
    if (post == 'farmers'){
      window.open('https://www.integrativenutrition.com/blog/farmers-market-finds-what-to-look-for-this-fall','_blank');
    }
    if (post == 'sunday'){
      window.open('https://www.integrativenutrition.com/blog/what-are-they-sunday-scaries','_blank');
    }
  }

}
