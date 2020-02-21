import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosCategoriasComponent } from './articulos-categorias.component';

describe('ArticulosCategoriasComponent', () => {
  let component: ArticulosCategoriasComponent;
  let fixture: ComponentFixture<ArticulosCategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticulosCategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
