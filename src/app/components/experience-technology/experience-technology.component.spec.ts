import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceTechnologyComponent } from './experience-technology.component';

describe('ExperienceTechnologyComponent', () => {
  let component: ExperienceTechnologyComponent;
  let fixture: ComponentFixture<ExperienceTechnologyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienceTechnologyComponent]
    });
    fixture = TestBed.createComponent(ExperienceTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
