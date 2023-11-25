import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { IProduct } from './entities/product';
import { ICustomer } from './entities/customer';
import { iCompany } from './entities/company';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})

export class AppComponent{

  Counter = 0;
  
   
  onClick(){
    this.Counter++;
    // this.rating = ++this.rating;
    setTimeout(() => {
      this.Counter = 0;
    },2000);
  }  
};





