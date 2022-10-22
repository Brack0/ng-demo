import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from 'demo/shared';
import { ReusableFormsModule } from 'reusable-forms';

import { SubscribeFormComponent } from './subscribe-form.component';

describe('SubscribeFormComponent', () => {
  let component: SubscribeFormComponent;
  let fixture: ComponentFixture<SubscribeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscribeFormComponent],
      imports: [FormsModule, ReactiveFormsModule, ReusableFormsModule, ButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
