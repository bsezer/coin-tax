import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TradeTableEditorComponent } from './tables/trade-table-editor';
import { TaxReportComponent } from './tax-reports/tax-report';

const routes: Routes = [
  { path: '', redirectTo: '/trades', pathMatch: 'full' },
  { path: 'trades', component: TradeTableEditorComponent },
  { path: 'taxReport', component: TaxReportComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

}