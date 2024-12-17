import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { OrderSuccessComponent } from './order-success/order-success.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }, // Login route
  { path: 'register', component: RegisterComponent }, // Register route
  // { path: "", component: HomeComponent, canActivate: [AuthGuard] }, // Home page protected
  // { path:"",component: HomeComponent},
   {path:"home",component:HomeComponent},
    {path: "product/:id", component: ProductDetailComponent},
    {path: "cart", component: CartComponent},
    {path: "order/success/:id", component: OrderSuccessComponent}

];
