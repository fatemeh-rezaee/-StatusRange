import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { StatusChartComponent } from './status-chart/status-chart.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { DatePickerComponent } from './date-range-picker/date-range-picker.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, StatusChartComponent, DatePickerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgApexchartsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
