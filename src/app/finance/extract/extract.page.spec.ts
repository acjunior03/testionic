import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavController } from '@ionic/angular';
import { ExtractPage } from './extract.page';
import { Extract } from '../../interface/model/extract.model';
import { CommonModule } from '@angular/common';

describe('ExtractPage', () => {
  let component: ExtractPage;
  let fixture: ComponentFixture<ExtractPage>;
  let navControllerSpy: jasmine.SpyObj<NavController>;

  beforeEach(async () => {
    // Criar um mock do NavController para verificar o método de navegação
    navControllerSpy = jasmine.createSpyObj('NavController', ['back']);

    await TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), CommonModule, ExtractPage],
      providers: [
        { provide: NavController, useValue: navControllerSpy }  // Injetando o mock do NavController
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ExtractPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar com o extrato correto', () => {
    const expectedExtract: Extract = {
      period: '201803',
      totalAmount: 99999.00,
      responsiblePerson: 'FULANO DA SILVA',
      launches: [
        {
          number: '00320000058967852',
          name: 'FULANO DA SILVA',
          document: '1234567890',
          serviceDate: '20180204',
          dueDate: '20180310',
          event: '12345678',
          description: 'RM - ARTICULAR BY ARTICULATION',
          providerName: 'Hospital da Luz',
          quantity: 1.00,
          copaymentAmount: 4.56
        },
        {
          number: '00320000058967852',
          name: 'FULANO DA SILVA',
          document: '1234567890',
          serviceDate: '20180105',
          dueDate: '20180301',
          event: '12345678',
          description: 'RM - ARTICULAR BY ARTICULATION',
          providerName: 'Hospital da Luz',
          quantity: 1.00,
          copaymentAmount: 4.56
        }
      ]
    };
    
    expect(component.extract).toEqual(expectedExtract);
  });

  it('deve chamar navCtrl.back() ao executar goBack', () => {
    component.goBack();
    expect(navControllerSpy.back).toHaveBeenCalled();
  });
});
