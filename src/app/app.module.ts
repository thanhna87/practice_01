import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Đảm bảo đã import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ThucHanh01Component } from './thuc-hanh01/thuc-hanh01.component';
import { StarComponent } from './star/star.component';
import { InventorComponent } from './inventor/inventor.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ThucHanh01Component,
    StarComponent,
    InventorComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Thêm FormsModule vào imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
