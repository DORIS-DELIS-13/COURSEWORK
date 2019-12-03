/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TourDeteilComponent } from './tour-deteil.component';

describe('TourDeteilComponent', () => {
  let component: TourDeteilComponent;
  let fixture: ComponentFixture<TourDeteilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourDeteilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourDeteilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
