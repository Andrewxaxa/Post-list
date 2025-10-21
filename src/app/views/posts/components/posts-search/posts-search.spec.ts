import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsSearch } from './posts-search';

describe('PostsSearch', () => {
  let component: PostsSearch;
  let fixture: ComponentFixture<PostsSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
