import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSitiosComponent } from './listar-sitios.component';

describe('ListarSitiosComponent', () => {
  let component: ListarSitiosComponent;
  let fixture: ComponentFixture<ListarSitiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarSitiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarSitiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
