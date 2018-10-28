import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatDividerModule} from '@angular/material';
import { HeaderAcComponent } from './components/header-ac/header-ac.component';
import { ListComponent } from './components/list/list.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderAcComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
