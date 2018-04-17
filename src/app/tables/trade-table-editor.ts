import { Component } from '@angular/core';
import 'ng2-smart-table';
import { LocalDataSource } from 'ng2-smart-table';
import { TradeService } from '../services/trade-service';
import { DataSource } from 'ng2-smart-table/lib/data-source/data-source';

@Component({
  selector: 'trade-table-editor',
  providers: [TradeService],
  template: `
  <div class="card text-center">
    <div class="card-body">
      <h5 class="card-title">Recent Trades</h5>
      <ng2-smart-table [settings]="settings" [source]="source" (userRowSelect)="userRowSelect($event)"></ng2-smart-table>
    </div>
    <div class="card-footer text-muted">
      Last save was 2 mins ago.
    </div>
  </div>
  `,
})
export class TradeTableEditorComponent {
  currencies = ["Bitcoin", "USD", "Ethereum", "Ripple", "Litecoin", "Euro", "Tron"]
  source: LocalDataSource;
  
  settings = {
    pager: {
      display: true,
      perPage: 12
    },
    columns: {
      tradeType: {
        title: 'Trade Type',
        type: 'html',
        editor: {
          type: 'list',
          config: {
            list: [
              { value: 'Trade', title: 'Trade' }, 
              { value: 'General Transfer', title: 'General Transfer' }, 
              { value: 'General Depost', title: 'General Deposit',}
            ],
          },
        },
      },
      transactionDate: {
        title: 'Transaction Date',
        type: 'string',
      },
      buyAmount: {
        title: 'Buy Amount',
        type: 'string',
      },
      buyCurrency: {
        width: '3%',
        title: 'Currency',
        type: 'string',       
      },
      sellAmount: {
        title: 'Sell Amount',
        type: 'string',
      },
      sellCurrency: {
        width: '3%',
        title: 'Currency',
        type: 'string',
      },
      tradingFeeAmount: {
        title: 'Trading Fee',
        type: 'string',
      },
      tradingFeeCurrency: {
        width: '3%',
        title: 'Currency',
        type: 'string',
      },

    },
  };

  constructor(protected service: TradeService) {
    this.source = new LocalDataSource();
    this.service.getData().then((data) => {
      this.source.load(data);
    });
  }

  userRowSelect(data: Object, source: DataSource) {
    console.log('Selection row');
    console.log('Selected rows: ' + data);
  }
}
