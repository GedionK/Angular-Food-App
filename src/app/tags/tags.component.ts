import { Component, OnInit } from '@angular/core';
import { Tag } from '../shared/models/tags';
import { RouterModule } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css',
})
export class TagsComponent implements OnInit {
  tags: Tag[] = [];
  constructor(private foodService: FoodService) {}
  ngOnInit(): void {
    this.tags = this.foodService.getAllTags();
  }
}
