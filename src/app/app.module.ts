import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TradeTableEditorComponent } from './tables/trade-table-editor';
import { AppRoutingModule } from './/app-routing.module';
import { AlertModule } from 'ngx-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TradeService } from './services/trade-service';
import { TaxReportComponent } from './tax-reports/tax-report';
import { ButtonViewComponent } from './tables/button-view-component';

@NgModule({
  declarations: [
    AppComponent,
    TradeTableEditorComponent,
    TaxReportComponent,
    ButtonViewComponent
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
