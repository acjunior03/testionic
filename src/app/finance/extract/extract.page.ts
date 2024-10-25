import { Component } from '@angular/core';
import { Extract } from '../../interface/model/extract.model';
import { NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { arrowBack} from 'ionicons/icons';

addIcons({
  arrowBack
});

@Component({
  selector: 'app-extract',
  templateUrl: './extract.page.html',
  styleUrls: ['./extract.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})

export class ExtractPage {
  extract: Extract = {
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

  constructor(private navCtrl: NavController) {}

  goBack() {
    this.navCtrl.back();
  }
}
