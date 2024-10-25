export interface Launch {
  number: string;
  name: string;
  document: string;
  serviceDate: string;
  dueDate: string;
  event: string;
  description: string;
  providerName: string;
  quantity: number;
  copaymentAmount: number;
}

export interface Extract {
  period: string;
  totalAmount: number;
  responsiblePerson: string;
  launches: Launch[];
}
