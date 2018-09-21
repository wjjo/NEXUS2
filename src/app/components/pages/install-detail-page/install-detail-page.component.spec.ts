import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallDetailPageComponent } from './install-detail-page.component';

describe('InstallDetailPageComponent', () => {
  let component: InstallDetailPageComponent;
  let fixture: ComponentFixture<InstallDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
