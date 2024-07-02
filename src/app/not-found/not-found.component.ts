import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
})
export class NotFoundComponent implements OnInit {
  @Input() visible: boolean = false;
  @Input() notFoundImage: string = '/assets/images/foods/food-1.jpg';
  @Input() notFoundMessage: string = 'Noting Found';
  @Input() resetLinkText: string = 'Reset';
  @Input() resetLinkRoute: string = '/';


  constructor() {}
  ngOnInit(): void {}
}
