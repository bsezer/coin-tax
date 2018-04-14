import { Component } from '@angular/core';
import 'ng2-smart-table';
import { LocalDataSource } from 'ng2-smart-table';
import { TradeService } from '../services/trade-service';

@Component({
  selector: 'tax-report',
  providers: [TradeService],
  template: `
    <p>{{title}} feature coming soon!<p>
  `,
})
export class TaxReportComponent {
  title: "Tax Report"
}
