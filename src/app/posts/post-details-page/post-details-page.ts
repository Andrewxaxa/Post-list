import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-details-page',
  imports: [],
  templateUrl: './post-details-page.html',
  styleUrl: './post-details-page.css',
})
export class PostDetailsPage implements OnInit {
  readonly id = input('');

  ngOnInit(): void {
    console.log('Post id: ', this.id());
  }
}
