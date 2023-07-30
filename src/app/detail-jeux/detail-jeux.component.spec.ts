import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailJeuxComponent } from './detail-jeux.component';

describe('DetailJeuxComponent', () => {
  let component: DetailJeuxComponent;
  let fixture: ComponentFixture<DetailJeuxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailJeuxComponent]
    });
    fixture = TestBed.createComponent(DetailJeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
