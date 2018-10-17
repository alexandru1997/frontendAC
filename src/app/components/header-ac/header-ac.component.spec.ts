import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAcComponent } from './header-ac.component';

describe('HeaderAcComponent', () => {
  let component: HeaderAcComponent;
  let fixture: ComponentFixture<HeaderAcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderAcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
