import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesTableComponent } from './sales-table/sales-table.component';
import { AdvancedExamplesTypesComponent } from './tables/advance-example-types';

const routes: Routes = [
  { path: '', redirectTo: '/editor', pathMatch: 'full' },
  { path: 'sales', component: SalesTableComponent },
  { path: 'editor', component: AdvancedExamplesTypesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

}