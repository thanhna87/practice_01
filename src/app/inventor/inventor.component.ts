import { AfterViewInit, Component } from '@angular/core';
import { Inventor } from '../entities/inventor';

@Component({
  selector: 'app-inventor',
  templateUrl: './inventor.component.html',
  styleUrls: ['./inventor.component.scss']
})
export class InventorComponent implements AfterViewInit{

  title = 'Practice lab-01';

  inventors:Inventor[]=[
    {id:1, first: 'Thanh', last: 'Nguyen Ho', year: 1987},
    {id:2, first: 'Minh Tri', last: 'Nguyen Ho', year: 2019},
    {id:3, first: 'Minh Triet', last: 'Nguyen Ho', year: 2024},
    {id:4, first: 'Chi', last: 'Nguyen Ho', year: 2026},
    {id:5, first: 'Tuan', last: 'Nguyen Ho', year: 2028},
  ]

  ngAfterViewInit(): void {
    this.render(this.show)
  }

  render(callback: (data: string) => any){
  let innerHTML= this.inventors.map(item=>{ 
  return `
    <tr>
      <td>${item.id}</td>
      <td>${item.first}</td>
      <td>${item.last}</td>
      <td>${item.year}</td>
    </tr>
    `;
  }).join('');

  callback(innerHTML)
  }

  show(innerHTML:string){ 
    let item = document.querySelector('#list');

    if(item) {
      item.innerHTML = innerHTML;
    }
  }
  

}
