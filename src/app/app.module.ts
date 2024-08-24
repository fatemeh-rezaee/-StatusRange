import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NgApexchartsModule } from 'ng-apexcharts';  

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgApexchartsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
