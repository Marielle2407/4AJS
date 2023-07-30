import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveAwayComponent } from './give-away.component';

describe('GiveAwayComponent', () => {
  let component: GiveAwayComponent;
  let fixture: ComponentFixture<GiveAwayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiveAwayComponent]
    });
    fixture = TestBed.createComponent(GiveAwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
