import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // Root Shell + Footer
  readonly currentYear = new Date().getFullYear();

  // Mobile Menu State
  isMobileMenuOpen = false;
  isMobileLeistungenOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.isMobileLeistungenOpen = false;
  }

  toggleMobileLeistungen() {
    this.isMobileLeistungenOpen = !this.isMobileLeistungenOpen;
  }
}
