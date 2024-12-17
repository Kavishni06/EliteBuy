import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone:true,
  imports:[FormsModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    if (this.authService.register(this.username, this.password)) {
      // Registration successful, navigate to login page
      this.router.navigate(['/login']);
    } else {
      alert('Username already exists');
    }
  }
}
