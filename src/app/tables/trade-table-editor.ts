import { Component } from '@angular/core';
import 'ng2-smart-table';
import { LocalDataSource } from 'ng2-smart-table';
import { TradeService } from '../services/trade-service';

@Component({
  selector: 'trade-table-editor',
  providers: [TradeService],
  template: `
    <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>
  `,
})
export class TradeTableEditorComponent {
  currencies = ["Bitcoin", "USD", "Ethereum", "Ripple", "Litecoin", "Euro", "Tron"]
  source: LocalDataSource;
  
  settings = {
    columns: {
      id: {
        title: 'ID',
      },
      name: {
        title: 'Full Name',
        editor: {
          type: 'completer',
          config: {
            completer: {
              data: this.source,
              searchFields: 'name',
              titleField: 'name',
              descriptionField: 'email',
            },
          },
        },
      },
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
        title: 'Currency',
        type: 'string',       
      },
      sellAmount: {
        title: 'Sell Amount',
        type: 'string',
      },
      sellCurrency: {
        title: 'Currency',
        type: 'string',
      },
      tradingFeeAmount: {
        title: 'Trading Fee Amount',
        type: 'string',
      },
      tradingFeeCurrency: {
        title: 'Currency',
        type: 'string',
      },
      other: {
        title: 'Comments',
        editor: {
          type: 'textarea',
        },
      },
    },
  };

  constructor(protected service: TradeService) {
    this.source = new LocalDataSource();
    this.service.getData().then((data) => {
      this.source.load(data);
    });
  }
}
