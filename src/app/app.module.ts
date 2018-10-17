import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatDividerModule} from '@angular/material';
import { HeaderAcComponent } from './components/header-ac/header-ac.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderAcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
