import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  aboutItems = [
    { img: '../../assets/about/car.svg', title: 'Free Shipping', description: 'Last Chance! Free shipping on all orders ends today.' },
    { img: '../../assets/about/cup.svg', title: 'Free Shipping', description: 'Last Chance! Free shipping on all orders ends today.' },
    { img: '../../assets/about/cash.svg', title: 'Free Shipping', description: 'Last Chance! Free shipping on all orders ends today.' },
    { img: '../../assets/about/delivery.svg', title: 'Free Shipping', description: 'Last Chance! Free shipping on all orders ends today.' }
  ];
}
