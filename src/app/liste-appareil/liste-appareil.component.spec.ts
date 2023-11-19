import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAppareilComponent } from './liste-appareil.component';

describe('ListeAppareilComponent', () => {
  let component: ListeAppareilComponent;
  let fixture: ComponentFixture<ListeAppareilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAppareilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeAppareilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
