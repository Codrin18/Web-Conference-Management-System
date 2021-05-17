import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSubmissionsComponent } from './tab-submissions.component';

describe('TabSubmissionsComponent', () => {
  let component: TabSubmissionsComponent;
  let fixture: ComponentFixture<TabSubmissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabSubmissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
