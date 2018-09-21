import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallTypeSelectionPageComponent } from './install-type-selection-page.component';

describe('InstallTypeSelectionPageComponent', () => {
  let component: InstallTypeSelectionPageComponent;
  let fixture: ComponentFixture<InstallTypeSelectionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallTypeSelectionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallTypeSelectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
