import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { Food } from '../shared/models/Food';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { TagsComponent } from '../tags/tags.component';
defineComponents(IgcRatingComponent);
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SearchComponent, TagsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.foods = this.foodService.getAllFoodsBySearchTerm(
          params['searchTerm']
        );
      } else if (params['tag']) {
        this.foods = this.foodService.getAllFoodsByTag(params['tag']);
      } else {
        this.foods = this.foodService.getAll();
      }
    });
  }
}
