import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-four',
  templateUrl: './project-four.component.html',
  styleUrls: ['./project-four.component.css']
})
export class ProjectFourComponent implements OnInit {
  public currentPage:string = "pageFour";

  constructor() {
  }

  ngOnInit(): void {
  }

  public onViewBlogPost(post: string) {
    if (post == 'journal'){
      window.open('https://ice.edu/blog/food-journaling-health-tips','_blank');
    }
    if (post == 'spring'){
      window.open('https://ice.edu/blog/spring-plant-based-recipes','_blank');
    }
    if (post == 'female'){
      window.open('https://ice.edu/blog/health-supportive-chefs-international-womens-day','_blank');
    }
    if (post == 'hydration'){
      window.open('https://ice.edu/blog/hydration-tips-green-juice-recipe','_blank');
    }
  }

}
