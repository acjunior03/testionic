import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.page';
import { ExtractPage } from './finance/extract/extract.page';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'extrato',
    component: ExtractPage,
  },
];
