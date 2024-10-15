import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDiretorComponent } from './crud-diretor.component';

describe('CrudDiretorComponent', () => {
  let component: CrudDiretorComponent;
  let fixture: ComponentFixture<CrudDiretorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudDiretorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudDiretorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
