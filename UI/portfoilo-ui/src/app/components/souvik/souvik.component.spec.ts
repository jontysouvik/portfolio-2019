import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouvikComponent } from './souvik.component';

describe('SouvikComponent', () => {
  let component: SouvikComponent;
  let fixture: ComponentFixture<SouvikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouvikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouvikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
