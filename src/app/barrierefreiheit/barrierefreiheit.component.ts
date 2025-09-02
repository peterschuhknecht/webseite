import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-barrierefreiheit',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './barrierefreiheit.component.html',
  styleUrl: './barrierefreiheit.component.scss',
})
export class BarrierefreiheitComponent {}
