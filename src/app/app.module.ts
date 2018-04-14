import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TradeTableEditorComponent } from './tables/trade-table-editor';
import { AppRoutingModule } from './/app-routing.module';
import { AlertModule } from 'ngx-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TradeService } from './services/trade-service';
import { TaxReportComponent } from './tax-reports/tax-report';

@NgModule({
  declarations: [
    AppComponent,
    TradeTableEditorComponent,
    TaxReportComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    Ng2SmartTableModule
  ],
  providers: [
    TradeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
