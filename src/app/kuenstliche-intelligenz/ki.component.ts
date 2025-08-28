import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesGridComponent } from '../_shared/services-grid/services-grid.component';

@Component({
  selector: 'app-ki',
  standalone: true,
  imports: [CommonModule, ServicesGridComponent],
  templateUrl: './ki.component.html',
  styleUrl: './ki.component.scss',
})
export class KIComponent {}
