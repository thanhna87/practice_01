import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
  @Output() count1 = 10;
  // count:number;
  avatar : string;
  
  
  constructor(){
    //  this.count1 = 0;
    // this.count++;    
    this.avatar = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/4db8408a269c2d6804a5ac33536af429.png?auto=format%2Ccompress&dpr=1&w=562&h=221&q=40&fit=crop';
  }

  tang(){
    ++ this.count1;
  }

  giam(){
    --this.count1;
  }


  ngOnInit() {
    // this.count++;
    // this.rating = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/4db8408a269c2d6804a5ac33536af429.png?auto=format%2Ccompress&dpr=1&w=562&h=221&q=40&fit=crop';
  }

}
