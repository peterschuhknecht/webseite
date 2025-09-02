import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-api-schnittstellen',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './api-schnittstellen.component.html',
  styleUrl: './api-schnittstellen.component.scss',
})
export class ApiSchnittstellenComponent {}
