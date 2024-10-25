import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.page';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), FormsModule, HomeComponent],
      providers: [
        { 
          provide: ActivatedRoute, 
          useValue: { params: of({}) }  // Mock do ActivatedRoute com params vazio
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar com todos os itens de serviço e finanças filtrados', () => {
    expect(component.filteredServiceOptions.length).toBe(component.serviceOptions.length);
    expect(component.filteredFinanceOptions.length).toBe(component.financeOptions.length);
  });

  it('deve filtrar corretamente os itens de serviço com base no termo de pesquisa', () => {
    component.searchTerm = 'Consulta';
    component.filterItems();
    expect(component.filteredServiceOptions.length).toBe(1);
    expect(component.filteredServiceOptions[0].title).toBe('Consulta');
  });

  it('deve filtrar corretamente os itens de finanças com base no termo de pesquisa', () => {
    component.searchTerm = 'Extrato';
    component.filterItems();
    expect(component.filteredFinanceOptions.length).toBe(1);
    expect(component.filteredFinanceOptions[0].title).toBe('Extrato');
  });

  it('deve retornar listas vazias se o termo de pesquisa não corresponder a nada', () => {
    component.searchTerm = 'TermoInexistente';
    component.filterItems();
    expect(component.filteredServiceOptions.length).toBe(0);
    expect(component.filteredFinanceOptions.length).toBe(0);
  });
});
