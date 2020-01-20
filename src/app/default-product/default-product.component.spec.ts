import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultProductComponent } from './default-product.component';

describe('DefaultProductComponent', () => {
  let component: DefaultProductComponent;
  let fixture: ComponentFixture<DefaultProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
