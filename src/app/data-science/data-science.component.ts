import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-data-science',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './data-science.component.html',
  styleUrl: './data-science.component.scss',
})
export class DataScienceComponent {}
