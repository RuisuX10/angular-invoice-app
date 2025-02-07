import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../data/invoice.data';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private invoice: Invoice = invoiceData;

  constructor() { }

  getInvoice(): Invoice {
    const total = this.calculateTotal();
    return {...this.invoice, total}   
  }
  
  remove(id: number):Invoice {
    this.invoice.items = this.invoice.items?.filter(item => item.id !== id);
    const total = this.calculateTotal();

    return {...this.invoice, total};
  }

  calculateTotal(): number {
    return this.invoice.items?.reduce((total, item) => total + item.total(), 0) ?? 0;
  }
}
