import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface ServiceItem {
  title: string;
  text: string;
  categories: string[]; // 'Schnellstart' | 'Strategie' | 'Umsetzung'
}

export type ServicesMode = 'both' | 'programming' | 'ai';

@Component({
  selector: 'app-services-grid',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services-grid.component.html',
  styleUrl: './services-grid.component.scss',
  host: { '[attr.data-mode]': 'mode' },
})
export class ServicesGridComponent {
  @Input() mode: ServicesMode = 'both';
  @Input() sectionTitle = 'Leistungen';
  @Input() subHeadline =
    'Beratung, Strategie & Umsetzung für moderne Software- und KI-Initiativen';

  filterCategories = ['Alle', 'Schnellstart', 'Strategie', 'Umsetzung'];
  activeCategory: string = 'Alle';

  // Leistungen Programmierung (links auf Home)
  private servicesProgramming: ServiceItem[] = [
    {
      title: 'MVP-Sprint',
      text: 'In kurzer Zeit entsteht ein klickbarer Prototyp mit den wichtigsten Funktionen, ideal für Nutzerfeedback und Stakeholder-Validierung. Senkt Projektrisiko und beschleunigt die Entscheidung für den nächsten Investitionsschritt.',
      categories: ['Schnellstart', 'Umsetzung'],
    },
    {
      title: 'Web-App',
      text: 'Entwicklung einer performanten, wartbaren Web-App mit moderner Architektur und sauberem CI/CD. Resultat: schnellere Ladezeiten, effizientere Teams und messbar bessere Conversion-Raten.',
      categories: ['Umsetzung'],
    },
    {
      title: 'Refactoring',
      text: 'Projekt-Rescue und Architektur-Check mit priorisiertem Maßnahmenplan. Bringt Projekte schnell zurück in den grünen Bereich und stellt die Lieferfähigkeit wieder her.',
      categories: ['Strategie', 'Umsetzung'],
    },
    {
      title: 'Legacy-Modernisierung',
      text: 'Schrittweise Modernisierung mit Migrationsplan und Messpunkten. Reduziert technische Schulden, minimiert Risiken und verlängert die Nutzungsdauer bestehender Systeme.',
      categories: ['Strategie', 'Umsetzung'],
    },
    {
      title: 'API-Entwicklung',
      text: 'Saubere, versionierte APIs mit Auth, Rate-Limits und verständlicher Dokumentation. Reduziert Integrationsaufwände, erhöht Stabilität und beschleunigt die Anbindung von Partnern.',
      categories: ['Umsetzung'],
    },
    {
      title: 'Mobile-App',
      text: 'Cross-Platform-App für iOS und Android mit gemeinsamer Codebasis und nativen Funktionen. Verkürzt die Entwicklungszeit, senkt Kosten und sorgt für konsistente User Experience.',
      categories: ['Umsetzung'],
    },
    {
      title: 'E-Commerce',
      text: 'Konzeption und Umsetzung eines schnellen, conversion-starken Shops inkl. Checkout, Payment und PIM/ERP-Anbindung. Führt zu mehr Umsatz, besserer Sichtbarkeit und weniger Warenkorbabbrüchen.',
      categories: ['Strategie', 'Umsetzung'],
    },
    {
      title: 'Content-Strategie',
      text: 'Implementierung eines Headless CMS mit klaren Content-Modellen und Workflows. Ermöglicht schnellen Content-Rollout ohne Entwickler-Bottleneck und steigert die Publikationsfrequenz.',
      categories: ['Strategie', 'Umsetzung'],
    },
    {
      title: 'Integrationen',
      text: 'Ob ERP, CRM, Payment oder Logistik. Robuste Schnittstellen mit Mapping, Monitoring und Retry-Strategien verbinden Ihre Systeme nahtlos. Eliminieren Doppelpflege, senken Fehlerkosten und schaffen durchgängige Prozesse.',
      categories: ['Umsetzung'],
    },
    {
      title: 'Auth, SSO & Rollen)',
      text: 'Sichere Authentifizierung mit SSO, 2FA und granularen Rollen. Erhöht Sicherheit und Compliance, reduziert Support-Tickets und erleichtert Audits.',
      categories: ['Umsetzung'],
    },
    {
      title: 'Cloud-Architektur',
      text: 'Skalierbare Cloud-Architektur mit Infrastructure as Code, Observability und Kostenkontrolle. Senkt Betriebskosten, verbessert Verfügbarkeit und verhindert Rechnungsspitzen.',
      categories: ['Strategie', 'Umsetzung'],
    },
    {
      title: 'Qualität & Sicherheit',
      text: 'Ganzheitliche Teststrategie, Sicherheits-Audits und Hardening sichern stabile Releases. Ergebnis: weniger Incidents, schnellere Auslieferung und höheres Kundenvertrauen.',
      categories: ['Umsetzung'],
    },
    {
      title: 'Performance & SEO-Technik',
      text: 'Technische Optimierung von Rendering-Pfad, Caching und Core Web Vitals. Führt zu spürbar schnelleren Seiten, besseren Rankings und mehr organischen Leads.',
      categories: ['Umsetzung'],
    },
    {
      title: 'Wartung, Monitoring & SLA',
      text: 'Proaktives Monitoring, regelmäßige Updates und klare Reaktionszeiten per SLA. Sichert verlässlichen Betrieb, minimiert Ausfälle und schafft Planungssicherheit.',
      categories: ['Umsetzung'],
    },
  ];

  // Leistungen KI (rechts auf Home)
  private servicesAI: ServiceItem[] = [
    {
      title: 'KI-Workshop',
      text: 'Strategische Bestandsanylse. In einem strukturierten Workshop werden wirtschaftlich tragfähige Use Cases identifiziert und grob nach Aufwand/ROI bewertet. Ergebnis: klarer Fokus und schnelle Entscheidungen für die nächsten Schritte.',
      categories: ['Schnellstart', 'Strategie'],
    },
    {
      title: 'Use-Case-Portfolio & Roadmap',
      text: 'Priorisierung der Use Cases nach Nutzen, Aufwand und Risiko sowie Planung eines 6–12-Monats-Rollouts. Enthält Budget-, Ressourcen- und Meilensteinplan für verlässliche Umsetzung.',
      categories: ['Strategie'],
    },
    {
      title: 'Build-vs-Buy & Anbieterwahl',
      text: 'Objektiver Vergleich von Eigenentwicklung und Plattformlösungen inkl. TCO, Risiken und Time-to-Value. Liefert eine belastbare Entscheidungsvorlage und reduziert Fehlinvestitionen.',
      categories: ['Strategie'],
    },
    {
      title: 'DSGVO & Governance',
      text: 'Definition von Datenquellen, Qualität, Zugriffsrechten und Aufbewahrung mit DSGVO-konformen Prozessen. Schafft eine skalierbare, revisionssichere Basis für KI-Initiativen.',
      categories: ['Strategie'],
    },
    {
      title: 'Unternehmens-Chatbot (RAG)',
      text: 'Chatbot auf Firmenwissen (RAG) für präzise Antworten aus Dokumenten, Tickets und Wikis. Verringert Suchzeiten und Supportaufwand und steigert Zufriedenheit bei Mitarbeitenden und Kunden.',
      categories: ['Umsetzung'],
    },
    {
      title: 'Dokumenten-Automation',
      text: 'KI-gestützte Extraktion, Validierung und Weiterleitung von Rechnungen, Verträgen oder E-Mails. Senkt Bearbeitungszeiten und Fehlerquoten messbar und erhöht Prozesstransparenz.',
      categories: ['Umsetzung'],
    },
    {
      title: 'Vertriebs-Copilot',
      text: 'Generiert Angebote, E-Mails und Einwandbehandlung mit CRM-Anbindung und Leitfäden. Beschleunigt den Sales-Funnel, steigert Abschlussraten und verbessert Forecast-Genauigkeit.',
      categories: ['Umsetzung'],
    },
    {
      title: 'Service-/Onboarding-Copilot',
      text: 'Rollenbasierte Wissenspfade und Q&A-Assistent für Mitarbeitende. Verkürzt Einarbeitungszeiten, reduziert Rückfragen und sichert eine gleichbleibende Servicequalität.',
      categories: ['Umsetzung'],
    },
    {
      title: 'Prognosen & Scoring',
      text: 'Modelle für Nachfrage, Churn oder Lead-Scoring samt Dashboards und Alerts. Unterstützt präzisere Planung, gezieltere Budgets und höhere Conversion/CLV.',
      categories: ['Strategie', 'Umsetzung'],
    },
    {
      title: 'Computer Vision & OCR',
      text: 'Erkennung, Klassifizierung und OCR für Qualitätssicherung, Belegerfassung oder Lagerprozesse. Automatisiert Prüfungen, senkt Fehlerkosten und verkürzt Durchlaufzeiten.',
      categories: ['Umsetzung'],
    },
    {
      title: 'Voice-/Telefon-Assistenz',
      text: 'Sprachassistent für Hotline, Routing und Terminierung mit CRM-Sync und Protokollen. Reduziert Wartezeiten, entlastet Teams und verbessert Erreichbarkeit rund um die Uhr.',
      categories: ['Umsetzung'],
    },
    {
      title: 'LLMOps/MLOps & QA',
      text: 'Versionierung von Prompts/Modellen, Offline-Evaluation und Produkt-Monitoring. Macht KI reproduzierbar, messbar und sicher skalierbar im Betrieb.',
      categories: ['Strategie', 'Umsetzung'],
    },
    {
      title: 'KI-Richtlinien & Risiko-Assessment',
      text: 'Praxisnahe Policies zu Rollen, Zulässigkeiten, Datenumgang und Audit-Checklisten. Minimiert rechtliche und operative Risiken und schafft Vertrauen im Unternehmen.',
      categories: ['Strategie'],
    },
    {
      title: 'Enablement & Training',
      text: 'Workshops, Playbooks und Hands-on-Sessions passgenau für Fachbereiche. Führt zu schneller Adoption, höherer Eigenständigkeit und messbaren Produktivitätsgewinnen.',
      categories: ['Schnellstart', 'Strategie'],
    },
  ];

  get filteredProgramming(): ServiceItem[] {
    if (this.activeCategory === 'Alle') return this.servicesProgramming;
    return this.servicesProgramming.filter((s) =>
      s.categories.includes(this.activeCategory)
    );
  }

  get filteredAI(): ServiceItem[] {
    if (this.activeCategory === 'Alle') return this.servicesAI;
    return this.servicesAI.filter((s) =>
      s.categories.includes(this.activeCategory)
    );
  }

  setFilter(cat: string) {
    this.activeCategory = cat;
  }
}
