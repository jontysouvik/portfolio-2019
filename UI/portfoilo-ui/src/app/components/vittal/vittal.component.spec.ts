import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VittalComponent } from './vittal.component';

describe('VittalComponent', () => {
  let component: VittalComponent;
  let fixture: ComponentFixture<VittalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VittalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VittalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
