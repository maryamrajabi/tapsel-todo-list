import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from './core/core.module';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {DateAdapter, NativeDateAdapter} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

  ],
  exports: [
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy },     { provide: DateAdapter, useClass: NativeDateAdapter },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
