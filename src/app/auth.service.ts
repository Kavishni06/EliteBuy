import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USERS_KEY = 'users';
  private readonly TOKEN_KEY = 'authToken';

  constructor(private router: Router) {}

  // Register a new user
  register(username: string, password: string): boolean {
    let users = JSON.parse(localStorage.getItem(this.USERS_KEY) || '[]');

    // Check if username already exists
    if (users.find((user: any) => user.username === username)) {
      return false; // Username already exists
    }

    // Add new user
    users.push({ username, password });
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
    return true; // Registration successful
  }

  // Login a user
  login(username: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((user: any) => user.username === username && user.password === password);

    if (user) {
      localStorage.setItem(this.TOKEN_KEY, 'your-auth-token'); // Set a sample token
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.TOKEN_KEY) !== null;
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
