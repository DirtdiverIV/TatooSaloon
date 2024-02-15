import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideobgComponent } from './videobg.component';

describe('VideobgComponent', () => {
  let component: VideobgComponent;
  let fixture: ComponentFixture<VideobgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideobgComponent]
    });
    fixture = TestBed.createComponent(VideobgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
