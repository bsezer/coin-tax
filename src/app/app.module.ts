import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppComponent } from './app.component';
import { SalesTableComponent } from './sales-table/sales-table.component';
import { AppRoutingModule } from './/app-routing.module';
import { AdvancedExamplesTypesComponent } from './tables/advance-example-types';
import { AlertModule } from 'ngx-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [
    AppComponent,
    SalesTableComponent,
    AdvancedExamplesTypesComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    NgxDatatableModule,
    AppRoutingModule,
    Ng2SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
