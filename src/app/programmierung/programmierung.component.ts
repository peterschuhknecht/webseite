import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesGridComponent } from '../_shared/services-grid/services-grid.component';

@Component({
  selector: 'app-programmierung',
  standalone: true,
  imports: [CommonModule, ServicesGridComponent],
  templateUrl: './programmierung.component.html',
  styleUrl: './programmierung.component.scss',
})
export class ProgrammierungComponent {}
