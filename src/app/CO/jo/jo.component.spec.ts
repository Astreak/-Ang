import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoComponent } from './jo.component';

describe('JoComponent', () => {
  let component: JoComponent;
  let fixture: ComponentFixture<JoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
