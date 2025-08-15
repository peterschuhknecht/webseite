import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly keyPoints: string[] = [
    '20 Jahre Erfahrung in Software- & Web-Entwicklung',
    'Schnelle Einarbeitung & klare, proaktive Kommunikation',
    '10 Jahre Erfahrung in Machinellem Lernen, Neuronalen Netzen und KI',
    'Architektur mit Fokus auf Time-to-Market & Skalierbarkeit',
    'Führung, Code-Qualität & moderne Engineering-Praktiken',
    'Modernste KI für messbare Wettbewerbsvorteile',
  ];

  readonly valueAdds: string[] = [
    'Schnelle Analyse bestehender Codebasen & Engpass-Identifikation',
    'Priorisierte Maßnahmenpläne statt theoretischer Folien',
    'Iterative MVP- und Roadmap-Ansätze für frühe Validierung',
    'Architektur-Modernisierung ohne Big-Bang-Risiko',
    'Saubere APIs, Observability & Security-by-Design',
  ];

  readonly focusAreas: string[] = [
    'Individuelle Web- & Cloud-Anwendungen (Angular, Node, APIs)',
    'Legacy-Modernisierung & Architektur-Guidance',
    'Automatisierung & KI-gestützte Produktivität (RAG, Copilots, Workflows)',
    'Data & Integration: stabile Schnittstellen, Datenflüsse, Governance',
    'Performance-, Qualität- & Security-Optimierungen',
  ];
}
