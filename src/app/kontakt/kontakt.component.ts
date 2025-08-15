import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// RouterLink aktuell nicht genutzt -> entfernt für sauberen Build
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

interface Web3FormsResponse {
  success: boolean;
  message?: string;
  data?: unknown;
}

@Component({
  selector: 'app-kontakt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kontakt.component.html',
  styleUrl: './kontakt.component.scss',
})
export class KontaktComponent implements OnInit {
  // Web3Forms Public Access Key (öffentlich, bereits vom Nutzer bereitgestellt)
  readonly accessKey = '12ae929c-1d96-4391-b219-d7f2743e04ac';
  // UI State via Signals (leichtgewichtig, kein Reactive Forms nötig)
  sending = signal(false);
  success = signal(false);
  error = signal('');

  prefilledMessage = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const serviceTitle = this.route.snapshot.queryParamMap.get('service');
    if (serviceTitle) {
      // Gewünschtes Format: "Betreff {Titel}\n"
      this.prefilledMessage = `Betreff: ${serviceTitle}\n`;
    }
  }

  onSubmit(event: Event) {
    // Progressive Enhancement: Wenn JS aktiv, per AJAX senden
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    if (!form || this.sending()) return;
    this.error.set('');

    const formData = new FormData(form);

    // Optional zusätzliche Metadaten
    if (!formData.get('subject')) {
      formData.append('subject', 'Neue Nachricht über Website');
    }

    // Honeypot prüfen (Feld name="botcheck")
    if (formData.get('botcheck')) {
      this.success.set(true); // still tun wir so als wäre alles ok
      form.reset();
      return;
    }

    // Pflichtfelder einfache Prüfung (Browser baut sonst eigenes Validation UI)
    // Web3Forms erwartet u.a. "name", "email" und typischerweise ein Textfeld (message)
    if (
      !formData.get('name') ||
      !formData.get('email') ||
      !(formData.get('message') || formData.get('nachricht'))
    ) {
      this.error.set('Bitte alle Pflichtfelder ausfüllen.');
      return;
    }

    // Falls textarea noch "nachricht" heißt, kopieren wir es nach "message"
    if (!formData.get('message') && formData.get('nachricht')) {
      formData.append('message', String(formData.get('nachricht')));
    }

    this.sending.set(true);
    this.http
      .post<Web3FormsResponse>('https://api.web3forms.com/submit', formData, {
        headers: { Accept: 'application/json' },
      })
      .subscribe({
        next: (res) => {
          this.sending.set(false);
          if (res.success) {
            this.success.set(true);
            form.reset();
          } else {
            this.error.set(res.message || 'Senden fehlgeschlagen.');
          }
        },
        error: (err) => {
          this.sending.set(false);
          console.error('Web3Forms Fehler', err);
          this.error.set('Serverfehler beim Senden.');
        },
      });
  }
}
