import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToAfficherComponent } from './to-afficher.component';

describe('ToAfficherComponent', () => {
  let component: ToAfficherComponent;
  let fixture: ComponentFixture<ToAfficherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToAfficherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToAfficherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
