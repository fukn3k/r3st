import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraaljsonComponent } from './graaljson.component';

describe('GraaljsonComponent', () => {
  let component: GraaljsonComponent;
  let fixture: ComponentFixture<GraaljsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraaljsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraaljsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
