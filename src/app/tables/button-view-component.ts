import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import 'ng2-smart-table';
import { LocalDataSource, ViewCell  } from 'ng2-smart-table';
import { TradeService } from '../services/trade-service';
import { DataSource } from 'ng2-smart-table/lib/data-source/data-source';

@Component({
  selector: 'app-button-view',
  template: `
  <td class="td">
  <div class="title">Reactive forms</div>
  <div>
      <form [formGroup]="myForm" (ngSubmit)="onSubmitReactiveForms()" novalidate>
          <my-date-picker name="reactiveFormsDate" [options]="myDatePickerOptions" formControlName="myDate"
                          (inputFieldChanged)="onInputFieldChanged($event)"></my-date-picker>
          <div>
              <button class="button" type="submit">Submit</button>
              <button class="button" type="button" (click)="setDate()">Set Today</button>
              <button class="button" type="button" (click)="resetDate()">Reset Today</button>
              <button class="button" type="button" (click)="clearDate()">Set Empty</button>
              <p class="error" *ngIf="myForm.controls.myDate.errors">Date is required!</p>
          </div>
      </form>
  </div>
</td>
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
