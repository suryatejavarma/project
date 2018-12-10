import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompamyComponent } from './compamy.component';

describe('CompamyComponent', () => {
  let component: CompamyComponent;
  let fixture: ComponentFixture<CompamyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompamyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompamyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
