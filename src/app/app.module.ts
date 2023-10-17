import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HeroModule } from './heroes/hero.module';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/components/counter.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
