import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-casestudies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './casestudies.component.html',
  styleUrl: './casestudies.component.scss',
})
export class CaseStudiesComponent {
  caseStudies = [
    {
      title: 'Plattform für digitale Zusammenarbeit',
      metrics: [
        'Zusammenarbeit optimiert',
        'Arbeitsaufwand reduziert',
        'Durchlaufzeiten verkürzt',
        'Nachvollziehbarkeit erhöht',
        'DSGVO-Standards gestärkt',
        'Mobiler Zugriff ermöglicht',
        'Fehlerquoten bei Unterlagen verringert',
      ],
      description: [
        'Viele Verwaltungen und Organisationen kämpfen mit verstreuten Dokumenten, endlosen E-Mail-Schleifen und unklaren Zuständigkeiten. Abläufe werden dadurch langsam vorbereitet, Änderungen erreichen Beteiligte zu spät und Beschlüsse lassen sich nur schwer nachverfolgen. Datenschutz- und Compliance-Anforderungen erhöhen zusätzlich die Komplexität.',
        'Umgesetzt wurde eine Webanwendung, die das komplette Management und die Zusammenarbeit an einem zentralen Ort bündelt – von der Vorbereitung bis zur Nachbereitung. Alle Beteiligten arbeiten in einem einheitlichen Ablauf, Unterlagen bleiben aktuell, und Prozessschritte werden nachvollziehbar gesteuert. Der organisatorische Aufwand sinkt spürbar, weil Abläufe in deutlich kürzerer Zeit durchlaufen werden können. ',
        'Erreicht wurde, dass Unterlagen versioniert, sicher bereitgestellt und mit wenigen Klicks verteilt werden. Änderungen sind sofort für alle ersichtlich; Protokolle, Entscheidungen und Aufgaben bleiben lückenlos dokumentiert. So entsteht Transparenz – von der Einladung bis zur Umsetzung.',
        'Eingebunden wurden intelligente Funktionen, die die tägliche Arbeit spürbar erleichtern: Inhalte lassen sich automatisch ordnen und wiederfinden, Zusammenfassungen unterstützen die Vorbereitung, Hinweise zu Termin- und Fristkonflikten reduzieren Fehler, und die Nachverfolgung von Beschlüssen wird beschleunigt. Die Lösung stärkt zudem Sicherheit, ermöglicht revisionssichere Arbeitsweisen und unterstützt digitale Freigaben – ohne Medienbrüche.',
        'Aus der Perspektive der Beteiligten bedeutet das: weniger Suchzeiten, weniger Doppelarbeit, schnellere Entscheidungen. Abläufe werden besser vorbereitet, Unterlagen sind unterwegs verfügbar, und Verantwortlichkeiten sind klar. Auch mobiles Arbeiten wird unterstützt, sodass Vor- und Nachbereitung flexibel erfolgen kann.',
        'Organisatorisch wurde die Einführung so gestaltet, dass bestehende Systeme weiter genutzt werden können. Prozesse wurden schlank modelliert, Rollen und Rechte klar definiert und Mitarbeitende gezielt befähigt. Dadurch konnte die Plattform zügig produktiv gehen und liefert seitdem messbaren Mehrwert: kürzere Durchlaufzeiten, höhere Qualität in der Entscheidungsfindung und mehr Zufriedenheit bei Mitgliedern sowie Verwaltung.',
        'Die Lösung ist bewusst zukunftsfähig gehalten. Sie lässt sich auf weitere Zentren, Standorte oder Fachbereiche übertragen und modular ausbauen – etwa um öffentliche Informationsportale, automatisierte Berichtswege oder tiefere Integrationen in Dokumentenmanagement und Kollaborationswerkzeuge. So wächst die Plattform mit den Anforderungen, ohne an Komplexität zu gewinnen.',
      ],
    },
    {
      title: 'Anlagen KPI Analyse Plattform',
      metrics: [
        'kürzere Feature Durchlaufzeit',
        'schnelleres Entwickler Onboarding',
        'höhere Code Wiederverwendung',
      ],
      description: [
        'Ausgangslage: Stark wachsender Umfang an Visualisierungen, divergierende Komponentenstile, inkonsistente Datenadapter. Neue Features verlangsamten sich wegen duplizierter Logik.',
        'Architekturüberlegungen: Gegenüberstellung „monolithische Page Layer“ vs. „vertikale Slices“ vs. „komponentenorientierte Datendomänen“. Workshops ergaben, dass domänengerichtete Feature-Pakete mit Shared Metric-Komponenten höchste Wiederverwendung liefern. Zusätzlich Evaluierung von Query-Caching vs. Push-Signal Streams → Hybrid gewählt (statische KPIs gecached, Live-Kanäle als Signals).',
        'Optimierungen: Einführung einer streng typisierten API-Fassade, automatisierte Generierung von Typen aus OpenAPI, visuelle Regressionstests für kritische Charts, Split-Bundle Heuristiken (Nutzungshäufigkeit & Erstaufruf-Latenz). Resultat: Stabilere Codebasis, verkürzte Ramp-Up Zeit und planbare Erweiterbarkeit.',
      ],
    },
    {
      title: 'Hochvolumen Retouren & Bewertungsplattform',
      metrics: [
        'höherer Durchsatz',
        'reduzierte Antwortzeiten',
        'weniger Fehlerbearbeitung',
      ],
      description: [
        'Ausgangslage: Spitzenlast mit massivem Datenstrom erzeugte Latenzspitzen, UI-Blocking bei Filterwechseln und erhöhte Fehlerrate durch Race Conditions.',
        'Analyse: Flame-Charts und Long Task Tracing zeigten Hauptkosten in synchronen Aggregationen & ungedrosselten State Updates. Evaluierte Optionen: Serverseitige Voraggregation, inkrementelle Client-Pipeline oder Web Worker Offload. Proofs ergaben beste Balance mit Workern + differenzieller Patch-Strategie.',
        'Maßnahmen: Worker-basierte Aggregation, normalisierte Entities, selektive Change Detection via Zonen-Umgehung, adaptive Caching (LRU pro Filter-Set) und zentrale Fehler-Triage mit automatisierten Reproduce-Skripten. Ergebnis: Stabiler Betrieb unter Last und reduziert manuelle Nachbearbeitung.',
      ],
    },
    {
      title: 'Datenvalidierungs Dashboard Energie',
      metrics: [
        'schnellere Plausibilisierung',
        'konsistente Drilldowns',
        'vereinheitlichte Interaktionen',
      ],
      description: [
        'Ausgangslage: Validierungsregeln lagen verteilt in UI, Backend und Ad-hoc Skripten. Nutzer mussten mehrfach exportieren, um Fehlerquellen zu finden.',
        'Lösungsfindung: Modellierung eines deklarativen Regel-Metadatenformats (Priorität, Schwere, Abhängigkeiten). Entscheidung gegen rein serverseitige Auswertung zugunsten hybrider Pre-Filter (Server) und Low-Latency Detailchecks (Client).',
        'Implementierung: Regel-Katalog Parser, konsistente Drilldown Navigation, virtuelle Tabellenfensterung, differenzielle Highlight-Strategie. Ergebnis: Schnellere Identifikation von Anomalien und weniger Kontextwechsel.',
      ],
    },
    {
      title: 'Globales Reporting & Benchmarking Portal',
      metrics: [
        'höhere Datenkonsistenz',
        'vereinheitlichte Komponenten',
        'stabilere Builds',
      ],
      description: [
        'Ausgangslage: Fragmentierte Widget-Landschaft, divergierende Formatierungen und wachsende Build-Zeiten.',
        'Evaluierung: Vergleich „Refactor in place“ vs. „Strangler Pattern UI Layer“. Gewählt: schrittweise Extraktion in Kernbibliothek mit Migrations-Adapter. Build-Analyse deckte redundante Polyfills und mehrfaches Charting-Bundling auf.',
        'Optimierungen: Konsolidierte Zahlformat-Pipeline, themenfähige Komponenten, getriggerte Teil-Builds über veränderte Scopes, visuelle Regressionstests. Ergebnis: Stabilere Auslieferung und berechenbare Erweiterungen.',
      ],
    },
    {
      title: 'Interaktive Geo Daten Visualisierung',
      metrics: [
        'flüssige Interaktion',
        'skalierbare Daten Pipelines',
        'reduzierte Rendering Last',
      ],
      description: [
        'Ausgangslage: Karte fror bei hoher Punktdichte; Nutzer verloren Orientierung beim Zoomen.',
        'Ideenphase: Vergleich QuadTree vs. Hilbert Raster vs. Server-Side Clustering. Kombination gewählt: serverseitige Vorgruppierung + clientseitiges adaptives Re-Clustering unter Zoom-Schwellen.',
        'Resultierende Lösung: Progressive Datenanreicherung, GPU-freundliche Canvas Layer, Debounce für Interaktions-Events und Kompressionspipeline. Outcome: Flüssiges Navigieren trotz Datenwachstum.',
      ],
    },
    {
      title: 'Technische Berechnungs Suite',
      metrics: [
        'konsistente Ergebnisse',
        'schnellere Eingabe Abläufe',
        'erweiterbares Modul System',
      ],
      description: [
        'Ausgangslage: Unterschiedliche Implementierungen ähnlicher Formeln führten zu widersprüchlichen Ausgaben.',
        'Bewertung: Zentraler Formel-Kern vs. modulare Plugin-Strategie. Entscheidung für Kernel + validierte Plugins (Snapshot Tests).',
        'Umsetzung: Deterministische Rundung, Parameter-Metadaten, Undo/Redo Stack, Performance-Guards für teure Iterationen. Ergebnis: Vertrauenswürdige Ergebnisse und schnelle Erweiterbarkeit.',
      ],
    },
    {
      title: 'Produkt Konfigurations Plattform',
      metrics: [
        'klarere Auswahlpfade',
        'reduzierte Abbrüche',
        'vereinfachte Pflege',
      ],
      description: [
        'Ausgangslage: Nutzer brachen bei komplexen Abhängigkeiten ab; Regeländerungen erforderten Code-Anpassungen.',
        'Lösungsentwurf: Regel-Engine in deklarativem JSON DSL mit Validierungsgraph. Analyse ergab 80% wiederholte Abhängigkeiten → Normalisierung und Cache.',
        'Optimierungen: Schrittweise Progressive Disclosure, Pre-Fetch relevanter Optionspfade, differenzielle UI-Patches. Outcome: Klarere Pfade und geringerer Pflegeaufwand.',
      ],
    },
    {
      title: 'Leasing Angebots & Matching Portal',
      metrics: [
        'reduzierte Suchzeit',
        'bessere Ergebnis Relevanz',
        'einheitlicher Pflegeprozess',
      ],
      description: [
        'Ausgangslage: Langsame Filteranfragen und inkonsistente Relevanz sortierter Ergebnisse.',
        'Analyse: Ranking-Strategien (gewichtete Felder vs. lernbasiert). Kurzfristig gewichtetes Modell implementiert mit Telemetrie zur späteren Feinjustierung.',
        'Optimierungen: Facetten-Cache, inkrementelle Index-Updates, Skeleton States. Ergebnis: Schnelleres Auffinden relevanter Angebote und einheitliche Pflegeprozesse.',
      ],
    },
    {
      title: 'Agrar Betriebs Management Suite',
      metrics: [
        'zentralisierte Stammdaten',
        'vereinfachte Compliance Dokumentation',
        'schnellere Planungszyklen',
      ],
      description: [
        'Ausgangslage: Planungsdaten in Einzel-Excel, rechtliche Nachweise fragmentiert.',
        'Architekturwahl: Domänenzentrierte Module (Flächen, Nährstoffe, Maßnahmen) mit gemeinsamem Ereignisbus für Konsistenz. Evaluierung GIS Integration vs. vereinfachte Layer → Lightweight Mapping reicht für Anwendungsfälle.',
        'Lösung: Versionierte Stammobjekte, Audit Trail, Exportprofil für Behördenformate, kontextsensitive Validierungs-Hinweise. Effekt: Schnellere Planung und sichere Dokumentation.',
      ],
    },
    {
      title: 'Sensor & Bestands Monitoring Plattform',
      metrics: [
        'stabile Live Aktualisierung',
        'intuitive Status Übersicht',
        'reduzierter Analyseaufwand',
      ],
      description: [
        'Ausgangslage: Polling verursachte Lastspitzen und veraltete Statusdarstellung.',
        'Evaluation: WebSockets vs. SSE vs. Poll Backoff. Gewählt: WebSockets mit adaptivem Fallback; Delta-Payloads statt Vollobjekte.',
        'Implementierung: State Normalisierung, Priorisierung kritischer Events, visuelle Dichtesteuerung. Ergebnis: Übersichtliche Live Ansichten bei geringerer Bandbreite.',
      ],
    },
    {
      title: 'Service Portal Luftfahrt',
      metrics: [
        'konsistente Markenerfahrung',
        'optimierte Ladepfade',
        'vereinheitlichte UI Muster',
      ],
      description: [
        'Ausgangslage: Uneinheitliches Look & Feel über Legacy Seiten hinweg.',
        'Ansatz: Design Token System + komponentenbasierte Migration in Wellen. Performance Audit identifizierte render-blockierende Assets → kritische CSS Extraktion.',
        'Ergebnis: Stabiles Markenbild, verbesserte Startzeit und vereinfachte Content-Erweiterung.',
      ],
    },
    {
      title: 'Ladepunkt Finder Elektromobilität',
      metrics: [
        'präzisere Standort Treffer',
        'reduzierte Ladeverzögerung',
        'einheitliche Gerätedarstellung',
      ],
      description: [
        'Ausgangslage: Heterogene Standortdaten und träge Karteninteraktionen.',
        'Optionen: Client Side Merge vs. Server Normalisierung. Gewählt: Vor-Normalisierung & kategoriale Indizes, Client nutzt delta-basierte Updates.',
        'Optimierungen: Tile-Level Prefetch, progressive Marker-Auflösung, Caching strategischer Suchradien. Outcome: Schnelle Orientierung & konsistente Darstellung.',
      ],
    },
    {
      title: 'Fahrer Auftragsportal Fuhrpark',
      metrics: [
        'zuverlässige Offline Nutzung',
        'vereinfachte Datenerfassung',
        'reduzierte Support Rückfragen',
      ],
      description: [
        'Ausgangslage: Feldnutzung mit schwankender Konnektivität führte zu Datenverlust & Doppelpflege.',
        'Evaluierung: Full PWA Cache vs. selektive Queue. Implementiert: Offline Command Queue mit Konfliktlösung (Last-Write + Merge-Hooks).',
        'Ergebnis: Verlustfreie Synchronisation, reduzierte Rückfragen und fokussierte Fahreroberfläche.',
      ],
    },
    {
      title: 'Kampagnen Microsite Framework',
      metrics: [
        'schnelle Initial Darstellung',
        'konsistentes Kampagnen Design',
        'vereinfachte Wiederverwendung',
      ],
      description: [
        'Ausgangslage: Jede Kampagne eigenständig gebaut, hohe Setup-Zeiten.',
        'Lösungsweg: Template Engine mit variablen Design Tokens, dynamischer Komponenten-Katalog und Build Time Bildoptimierung.',
        'Resultat: Kürzere Produktionszyklen, einheitliches Erscheinungsbild und skalierbare Ausspielung bei Peaks.',
      ],
    },
    {
      title: 'Echtzeit Sensor Dashboard',
      metrics: [
        'stabile Streaming Verarbeitung',
        'schnelle Ausreißer Erkennung',
        'geringere Bedienkomplexität',
      ],
      description: [
        'Ausgangslage: Batch-basiertes Aktualisieren erzeugte UI Sprünge und verspätete Alarme.',
        'Ideen: Streaming Patch, Snapshot Intervall oder Hybrid. Hybrid gewählt → kritische Metriken sofort, Bulk im Intervall.',
        'Lösung: Frame-gebundene Rendering Queue, Kompressionsfilter, adaptive Verdichtung. Outcome: Flüssige Darstellung und frühere Anomalie-Sichtbarkeit.',
      ],
    },
    {
      title: 'Lade Infrastruktur Analyse UI',
      metrics: [
        'robuste Daten Pipeline',
        'reduzierte Visualisierungs Latenz',
        'erweiterbare Chart Module',
      ],
      description: [
        'Ausgangslage: Variierende Datenquellen mit unregelmäßigen Takten führten zu springenden Grafiken.',
        'Analyse: Zwischenpuffer vs. Resampling. Resampling Layer mit adaptiven Buckets glättet Anzeige ohne Informationsverlust.',
        'Optimierungen: Modularer Chart-Kern, Deferred Rendering außerhalb des Viewports, heuristische Vorab-Skalierung. Ergebnis: Mehr Übersicht und erweiterbare Visuals.',
      ],
    },
    {
      title: 'Multi Plattform Produktivitäts Portal',
      metrics: [
        'vereinheitlichte Navigationslogik',
        'reduzierte Kontextwechsel',
        'bessere Wartbarkeit',
      ],
      description: [
        'Ausgangslage: Verteilter Funktionsmix über mehrere Silos verlangsamte Wechsel und erschwerte Wartung.',
        'Strategie: Monorepo-Einführung mit Segmentierung nach Domänen; konsistente Auth & Layout-Shell, Migrationspfad mit Parallelbetrieb.',
        'Ergebnis: Vereinheitlichte UX, kürzere Wechselzeiten und klar strukturierte Erweiterungsprozesse.',
      ],
    },
  ];
}
