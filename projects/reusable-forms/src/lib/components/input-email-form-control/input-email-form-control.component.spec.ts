import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputEmailFormControlComponent } from './input-email-form-control.component';

describe('InputEmailFormControlComponent', () => {
  let component: InputEmailFormControlComponent;
  let fixture: ComponentFixture<InputEmailFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputEmailFormControlComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputEmailFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
