import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomxSelectComponent } from './atomx-select.component';

describe('AtomxSelectComponent', () => {
  let component: AtomxSelectComponent;
  let fixture: ComponentFixture<AtomxSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtomxSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomxSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
