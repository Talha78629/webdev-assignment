import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen = false;
  activeRoute: string = '/'; // Default selected route

  constructor(private router: Router) {
    this.activeRoute = this.router.url; // Set the initial active route
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateTo(route: string) {
    this.activeRoute = route; // Update active link
    this.router.navigate([route]); // Navigate to the clicked route
    this.isMenuOpen = false; // Close menu on mobile
  }
}
