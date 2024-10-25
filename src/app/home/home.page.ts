import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { bodyOutline, calculatorOutline, barbellOutline, constructOutline, helpCircleOutline, cashOutline, cardOutline } from 'ionicons/icons';

import { RouterModule } from '@angular/router';

import { ServiceOption } from '../interface/model/serviceOption.model'; 
import { FinanceOption } from '../interface/model/financeOption.model ';  


addIcons({
  bodyOutline,
  calculatorOutline,
  barbellOutline,
  constructOutline,
  helpCircleOutline,
  cashOutline,
  cardOutline
});

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule, RouterModule,FormsModule],
})
export class HomeComponent {

  searchTerm: string = '';

  serviceOptions = [
    { title: 'Consulta', description: 'Consulta de serviços', icon: 'body-Outline', link: '/extrato' },
    { title: 'Suporte', description: 'Suporte técnico', icon: 'help-circle-outline', link: '/extrato' },
  ];

  financeOptions = [
    { title: 'Extrato', description: 'Consulta extrato financeiro', icon: 'cash-outline', link: '/extrato' },
    { title: 'Pagamentos', description: 'Gerenciar pagamentos', icon: 'card-outline', link: '/extrato' },
  ];

  filteredServiceOptions: ServiceOption[] = [];
  filteredFinanceOptions: FinanceOption[] = [];

  constructor() {
    this.filteredServiceOptions = this.serviceOptions;
    this.filteredFinanceOptions = this.financeOptions;
  }

  filterItems() {
    const term = this.searchTerm.toLowerCase();

    this.filteredServiceOptions = this.serviceOptions.filter(service =>
      service.title.toLowerCase().includes(term) || 
      (service.description && service.description.toLowerCase().includes(term)) 
    );

    this.filteredFinanceOptions = this.financeOptions.filter(finance =>
      finance.title.toLowerCase().includes(term) || 
      (finance.description && finance.description.toLowerCase().includes(term)) 
    );
  }
}

