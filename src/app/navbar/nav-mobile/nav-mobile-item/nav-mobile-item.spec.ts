import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMobileItem } from './nav-mobile-item';

describe('NavMobileItem', () => {
  let component: NavMobileItem;
  let fixture: ComponentFixture<NavMobileItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavMobileItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavMobileItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
