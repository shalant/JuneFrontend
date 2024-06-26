import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsMapComponent } from './us-map.component';

describe('UsMapComponent', () => {
  let component: UsMapComponent;
  let fixture: ComponentFixture<UsMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
