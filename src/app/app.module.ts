import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorBlockComponent } from './calculator-block/calculator-block.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorBlockComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
