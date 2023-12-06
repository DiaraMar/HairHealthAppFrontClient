import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStatusComponent } from './page-status.component';

describe('PageStatusComponent', () => {
  let component: PageStatusComponent;
  let fixture: ComponentFixture<PageStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageStatusComponent]
    });
    fixture = TestBed.createComponent(PageStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
