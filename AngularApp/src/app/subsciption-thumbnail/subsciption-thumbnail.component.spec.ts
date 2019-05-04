import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsciptionThumbnailComponent } from './subsciption-thumbnail.component';

describe('SubsciptionThumbnailComponent', () => {
  let component: SubsciptionThumbnailComponent;
  let fixture: ComponentFixture<SubsciptionThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsciptionThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsciptionThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
