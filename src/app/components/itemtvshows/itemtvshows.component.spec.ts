import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemtvshowsComponent } from './itemtvshows.component';

describe('ItemtvshowsComponent', () => {
  let component: ItemtvshowsComponent;
  let fixture: ComponentFixture<ItemtvshowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemtvshowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemtvshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
