import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProfComponent } from './form-prof.component';

describe('FormProfComponent', () => {
  let component: FormProfComponent;
  let fixture: ComponentFixture<FormProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormProfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
