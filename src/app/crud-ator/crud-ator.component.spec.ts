import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAtorComponent } from './crud-ator.component';

describe('CrudAtorComponent', () => {
  let component: CrudAtorComponent;
  let fixture: ComponentFixture<CrudAtorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudAtorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudAtorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
