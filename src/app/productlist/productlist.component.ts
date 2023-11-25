import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IProduct } from '../entities/product';
import { iCompany } from '../entities/company';
import { ICustomer } from '../entities/customer';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.render(this.show);
  }


  products: IProduct[] = [
    { productId: 1, productName: 'Leaf Rake', productCode: 'GDN-0011', releaseDate: 'March 19, 2016', description: 'Leaf rake with 48-inch wooden handle', price: 19.95, starRating: 3.2, "imageUrl": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPnc47KvtR2P8jktcrnu8kqYDd_MgI2L1fWQ&usqp=CAU' },
    { productId: 2, productName: 'Garden Cart', productCode: 'GDN-0023', releaseDate: 'March 18, 2016', description: '15 gallon capacity rolling garden cart', price: 32.99, starRating: 4.2, "imageUrl": 'https://images.thdstatic.com/productImages/357b7bc8-5f0b-44ad-b700-c2a1d19c19ca/svn/garden-carts-844221243316-64_600.jpg' },
    { productId: 5, productName: 'Hammer', productCode: 'TBX-0048', releaseDate: 'May 21, 2016', description: 'Curved claw steel hammer', price: 8.9, starRating: 4.8, "imageUrl": 'https://m.media-amazon.com/images/I/71JxuOqyiYL._AC_UF894,1000_QL80_.jpg' },
    { productId: 8, productName: 'Saw', productCode: 'TBX-0022', releaseDate: 'May 15, 2016', description: '15-inch steel blade hand saw', price: 11.55, starRating: 3.7, "imageUrl": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQHkY_Si6PvqzWCMC7AvIXxktXu_r3piTdzg&usqp=CAU' },
    { productId: 10, productName: 'Video Game Controller', productCode: 'GMG-0042', releaseDate: 'October 15, 2015', description: 'Standard two-button video game controller', price: 35.95, starRating: 4.6, "imageUrl": 'https://media.istockphoto.com/id/1208386205/vector/joystick-flat-icon-playing-online-gamepad-cartoon-icon-game-controller.jpg?s=612x612&w=0&k=20&c=0UCu7wJNNjJpIaUXe6zyLLXEk3ZX2onolq5aBrbQQY8=' }
  ]

  listProduct: IProduct[] = [];
  constructor() { }

  ngOnInit(): void {
    this.listProduct = this.products;
  }

  filterValue: string = '';//ánh xạ tới textbox search
  filter() {
    //chọn sản phẩm có tên chưa tên giá trị nhập vào
    this.products = this.listProduct.filter(p => p.productName.includes(this.filterValue))
  }


  show(innerHTML: string) {
    let item = document.querySelector('#list');
    if (item) {
      item.innerHTML = innerHTML;
    }
  }

  render(callback: (data: string) => any) {
    let innerHTML = this.products.map(item => {
      return `
      <tr>        
        <td>${item.productId}</td>
        <td>${item.productName}</td>
        <td>${item.productCode}</td>
        <td>${item.releaseDate}</td>
        <td>${item.price}</td>
        <td>${item.description}</td>
        <td>${item.starRating}</td>               
      </tr>
      `;
    }).join('');
    callback(innerHTML)
  }
  //  filterValue: number = 0;

  // getMark(event:any){
  //   this.filterValue  = event.target.value;
  // }

  // products: IProduct[]=[
  //   { "productId": 1001,
  //     "productName": "ASUS VIVOBOOK 15",
  //     "productCode": "LTAU779",
  //     "releaseDate": "March 19, 2023",
  //     "description": "ASUS VIVOBOOK 15 OLED A1505VA - L1114W (I5 13500H/16GB RAM/512GB SSD/15.6 OLED/WIN11/ĐEN)",
  //     "price": 17599000,
  //     "starRating": this.filterValue,
  //     "imageUrl":'./assets/images/71158_a1505va_l1114w.png' 
  //   }
  //   ];

  //   Congty: iCompany[]=[
  //     {
  //       "MaCongty":"CT001",
  //       "TenCongty":"CÔNG TY TNHH TMDV HACOM",
  //       "Diachi":"410 Nguyễn Văn Cừ, Long Biên, Hà Nội",
  //       "Phone":"09040587584",
  //       "imageUrl":"./assets/images/aits.png"
  //     }
  //     ];

  //     Customer: ICustomer[]=[
  //     {
  //       "userId":"US001",
  //       "userName":"Lại Duy Hưng",
  //       "email":"hungld@aits.vn",
  //       "phoneNumber":'0946238383'
  //     },
  //     {
  //       "userId":"US002",
  //       "userName":"Dương Vũ Mạnh Long",
  //       "email":"longdvm@aits.vn",
  //       "phoneNumber":'2911'
  //     }
  //     ];



  // // constructor(){

  // // }
  // ngOnInit(): void {

  // }
}
