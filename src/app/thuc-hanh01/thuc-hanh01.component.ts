import { Component } from '@angular/core';

@Component({
  selector: 'app-thuc-hanh01',
  templateUrl: './thuc-hanh01.component.html',
  styleUrls: ['./thuc-hanh01.component.scss']
})
export class ThucHanh01Component {
  isReadMore: boolean = true;
  pageTitle: string = 'Home';
  content: string ='';
  content1: string = 'Welcome to Angular! Click More... to view content';
  content2: string = 'Today is Sunday... You have success with function ngIf';    
  filterValue: string = '';
  onClickValue: string = '';
  name:string='';
  isDisable = false;

  getTitle(): string {
    return this.pageTitle};  

  readMore(){
  this.content='Welcome to Angular';  
  }  

  filter(event:any){
    this.filterValue=event.target.value; 
    this.processFilter();      
  }

  toggleReadMore() {
    this.isReadMore = !this.isReadMore;
  }

  onInput(event:any){
    // console.log(event);    
    this.filterValue = event.target.value;    
    this.processFilter();
  }

  onClickMe(){
    this.onClickValue = this.filterValue;
    console.log('Clicked');    
    // this.processFilter();
  }

  onClear(){
    this.name = '';
  }

  processFilter()
  {
    switch (this.filterValue){
      case '10':
      this.filterValue = 'Muoi';
      break;
      // default: 
      //   this.filterValue = 'Khac Muoi';
        
      // break;
    }
  }
}
