import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailcardComponent } from './emailcard.component';

describe('EmailcardComponent', () => {
  let component: EmailcardComponent;
  let fixture: ComponentFixture<EmailcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
