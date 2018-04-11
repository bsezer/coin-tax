import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesTableComponent } from './sales-table/sales-table.component';

const routes: Routes = [
  { path: '', redirectTo: '/sales', pathMatch: 'full' },
  { path: 'sales', component: SalesTableComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

}