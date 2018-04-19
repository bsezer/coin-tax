import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import 'ng2-smart-table';
import { LocalDataSource, ViewCell  } from 'ng2-smart-table';
import { TradeService } from '../services/trade-service';
import { DataSource } from 'ng2-smart-table/lib/data-source/data-source';

@Component({
  selector: 'app-button-view',
  template: `
    <button (click)="onClick()">{{ renderValue }}</button>
  `,
})
export class ButtonViewComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  onClick() {
    this.save.emit(this.rowData);
  }
}
