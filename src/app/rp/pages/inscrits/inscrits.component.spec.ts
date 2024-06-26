import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscritsComponent } from './inscrits.component';

describe('InscritsComponent', () => {
  let component: InscritsComponent;
  let fixture: ComponentFixture<InscritsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscritsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscritsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
