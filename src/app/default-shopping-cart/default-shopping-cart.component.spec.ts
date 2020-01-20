import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultShoppingCartComponent } from './default-shopping-cart.component';

describe('DefaultShoppingCartComponent', () => {
  let component: DefaultShoppingCartComponent;
  let fixture: ComponentFixture<DefaultShoppingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultShoppingCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
