import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import 'ng2-smart-table';
import { LocalDataSource, ViewCell  } from 'ng2-smart-table';
import { TradeService } from '../services/trade-service';
import { ButtonViewComponent } from './button-view-component';
import { DataSource } from 'ng2-smart-table/lib/data-source/data-source';

@Component({
  selector: 'trade-table-editor',
  providers: [TradeService],
  entryComponents: [ButtonViewComponent],
  template: `
  <div class="row align-items-center">
    <div class="col-3">
      <h4>Import Trades</h4>
    </div>
    <div class="col-7 align-items-center">
      <div class="card text-center" >
        <div class="card-body">
          <ng2-smart-table [settings]="settings" [source]="source" (userRowSelect)="userRowSelect($event)"></ng2-smart-table>
        </div>
        <div class="card-footer text-muted">
          Last save was 2 mins ago.
        </div>
      </div>
    </div>
    <div class="col-2">
      <h4>Advertising Goes here</h4>
    </div>
  </div>  
  `,
})
export class TradeTableEditorComponent {
  currencies = ["Bitcoin", "USD", "Ethereum", "Ripple", "Litecoin", "Euro", "Tron"]
  source: LocalDataSource;
  
  settings = {
    edit: {
      saveButtonContent: 'Save'
    },	
    pager: {
      display: true,
      perPage: 13
    },
    columns: {
      tradeType: {
        title: 'Trade Type',
        type: 'html',
        width: '7%',
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
        width: '7%',
        title: 'Transaction Date',
        type: 'custom',
        renderComponent: ButtonViewComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            alert(`${row.transactionDate} saved!`)
          });
        }
      },
      // TODO put this in a seperate component with amount and currency as a generic component, because all 3 share commanility
      buyAmount: {
        width: '10%',
        title: 'Buy Amount',
        type: 'string',
      },
      buyCurrency: {
        width: '3%',
        title: 'Buy Currency',
        type: 'string',       
      },
      sellAmount: {
        width: '10%',
        title: 'Sell Amount',
        type: 'string',
      },
      sellCurrency: {
        width: '3%',
        title: 'Sell Currency',
        type: 'string',
      },
      tradingFeeAmount: {
        width: '8%',
        title: 'Trading Fee',
        type: 'string',
      },
      tradingFeeCurrency: {
        width: '3%',
        title: 'Currency',
        type: 'string',
      },

    },
  }
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
