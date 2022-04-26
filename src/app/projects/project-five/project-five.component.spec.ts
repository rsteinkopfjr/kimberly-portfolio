import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFiveComponent } from './project-five.component';

describe('ProjectFiveComponent', () => {
  let component: ProjectFiveComponent;
  let fixture: ComponentFixture<ProjectFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
