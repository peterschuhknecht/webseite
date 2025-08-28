import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
})
export class NewsletterComponent implements OnInit {
  email = '';
  submitted = false;

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Peters KI Impact – Newsletter');
    this.meta.updateTag({
      name: 'description',
      content:
        'KI & Automatisierung in 5 Minuten: konkrete Hebel, Best Practices und Mini-Use-Cases für Unternehmer – verständlich und direkt umsetzbar.',
    });
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) return;
    this.submitted = true;
  }
}
