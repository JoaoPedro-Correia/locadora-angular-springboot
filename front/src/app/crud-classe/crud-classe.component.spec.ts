import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudClasseComponent } from './crud-classe.component';

describe('CrudClasseComponent', () => {
  let component: CrudClasseComponent;
  let fixture: ComponentFixture<CrudClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudClasseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
