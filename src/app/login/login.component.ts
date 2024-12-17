import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router'; // Import Router for navigation
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.authService.login(this.username, this.password)) {
      console.log('Login successful, attempting to navigate...');
      this.router.navigate(['/home']).then(success => {
        console.log('Navigation Success:', success);
      }).catch(error => {
        console.error('Navigation Error:', error);
      });
    } else {
      alert('Invalid username or password');
    }
  }
  
}
