import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPesamentosComponent } from './listar-pesamentos.component';

describe('ListarPesamentosComponent', () => {
  let component: ListarPesamentosComponent;
  let fixture: ComponentFixture<ListarPesamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPesamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPesamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
