import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';
import { CartService } from './cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,RouterModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl:'./app.component.css'
})
export class AppComponent implements OnInit {
  showNavbar: boolean = true;
  [x: string]: any;
  searchText:string = '';
  title = 'frontend';
  cartCount=0;
  
  constructor(private apiService: ApiService,private cartService:CartService,private router: Router) {
    
    router.events.subscribe(() => {
      // Update `showNavbar` based on the current route
      this.showNavbar = !['/login', '/register'].includes(this.router.url);
    });
  }
   
  ngOnInit():void{
    // this.loadStyle('assets/css/style.css');
    this.cartService.currentItems.subscribe((data) =>{
      this.cartCount=data.length;
    })
  }
  // loadStyle(path: string): void {
  //   const link = this.renderer.createElement('link');
  //   link.rel = 'stylesheet';
  //   link.href = path;
  //   this.renderer.appendChild(document.head, link);
  // }
  search() {
    this.apiService.searchProducts(this.searchText);
   }
  
   clearSearch(){
   this.apiService.clearSearch(this.searchText);
  }
  
  searchByEnterKey(){
    this.search();
  }

  
}
