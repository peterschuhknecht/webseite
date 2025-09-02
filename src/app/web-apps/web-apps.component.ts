import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-web-apps',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './web-apps.component.html',
  styleUrl: './web-apps.component.scss',
})
export class WebAppsComponent {}
