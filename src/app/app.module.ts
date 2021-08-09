import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarChartComponent } from "./components/bar-chart/bar-chart.component";
import { MatButtonModule } from "@angular/material/button";
import { DistributionPlotComponent } from "./components/distribution-plot/distribution-plot.component";

@NgModule({
  declarations: [
    BarChartComponent,
    DistributionPlotComponent,
    AppComponent
  ],
  imports: [
    MatFormFieldModule,
    ChartsModule,
    MatSelectModule,
    ReactiveFormsModule,
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
