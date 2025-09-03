import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FeatureItem {
  title: string;
  text: string;
}

interface CaseStudy {
  title: string;
  subtitle: string;
  situation: string; // "Ausgangssituation"
  challenges: string[];
  solution: string;
  features: FeatureItem[];
  results: string[];
  gridCols?: 'xl:grid-cols-4' | 'xl:grid-cols-3'; // steuert Feature-Grid-Spalten
}

@Component({
  selector: 'app-casestudies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './casestudies.component.html',
  styleUrl: './casestudies.component.scss',
})
export class CaseStudiesComponent {
  pageTitle = 'Case Studies';
  pageIntro1 = 'Ausgewählte Projektbeispiele mit kompaktem Impact-Fokus.';
  pageIntro2 = 'Mehr Details gerne im persönlichen Gespräch.';
  pageNote =
    'Aus Vertrags- und Datenschutzgründen wurden die Case Studies verfremdet.';

  // Steuerung für Aus-/Einklappen je Case Study
  private expanded = new Set<number>();

  trackByIndex(index: number) {
    return index;
  }

  isExpanded(index: number): boolean {
    return this.expanded.has(index);
  }

  toggleExpand(index: number): void {
    if (this.expanded.has(index)) {
      this.expanded.delete(index);
    } else {
      this.expanded.add(index);
    }
  }

  formatCount(count: number, singular: string, plural: string): string {
    return `${count} ${count === 1 ? singular : plural}`;
  }

  caseStudies: CaseStudy[] = [
    {
      title: 'KI-gestützte Außendienstplattform',
      subtitle:
        'Wie steigert man Effizienz, Geschwindigkeit und Abschlussquoten im Außendienst durch KI?',
      situation:
        'Die Außendienstmitarbeiter waren für die Betreuung von Bestandskunden und die Akquise neuer Geschäftskunden zuständig.',
      challenges: [
        'Sehr unterschiedliche Kundenbedürfnisse (Produktion, Handel, Dienstleister)',
        'Komplexes Produktportfolio mit ständig neuen Updates',
        'Hoher administrativer Aufwand für Vorbereitung, Dokumentation und Angebotsstellung',
        'Lange Reaktionszeiten bei Kundenfragen, da Informationen oft nachträglich eingeholt werden mussten',
      ],
      solution:
        'Einführung einer KI-gestützten Außendienstplattform, die mehrere Technologien integriert.',
      features: [
        {
          title: 'Chatbot',
          text: 'Wissensdatenbank für Außendienstmitarbeiter. Diese können sofort technische Informationen, Installationshinweise oder Lizenzmodelle abrufen. Zusätzlich steht eine KI-gestützte Suche für interne Handbücher, Produkte und Dokumentationen zur Verfügung.',
        },
        {
          title: 'KI Kundendatenbank',
          text: 'Leads werden durch Predictive Analytics automatisch priorisiert (höchste Wahrscheinlichkeit zum Abschluss). Die KI schlägt Cross- und Upselling-Potenziale vor.',
        },
        {
          title: 'KI Produktkatalog',
          text: 'KI erstellt personalisierte und kundenspezifische Vorschläge. Darstellung wird auf Kunden zugeschnitten.',
        },
        {
          title: 'Workflow',
          text: 'Automatische Gesprächsnotizen und E-Mail-Nachbereitung senkten den Aufwand in der Nachbereitung.',
        },
      ],
      results: [
        'Weniger Rückfragen an die Zentrale',
        'Höhere Kundenzufriedenheit',
        'Mehr Abschlüsse pro Mitarbeiter',
        'Umsatzwachstum im Außendienst',
        'Schnellere Angebotszyklen',
      ],
      gridCols: 'xl:grid-cols-4',
    },
    {
      title: 'Plattform für digitale Zusammenarbeit',
      subtitle: 'Wie orchestriert man hochkomplexe Arbeits-Abläufe?',
      situation:
        'Dokumente, Protokolle und Aufgaben lagen über E-Mail, Netzlaufwerke und Spezialtools verteilt. Status und Verantwortlichkeiten waren unklar, Fristen wurden mehrfach verpasst, Compliance-Anforderungen (insb. DSGVO) erschwerten die Zusammenarbeit – besonders mit externen Beteiligten.',
      challenges: [
        'Medienbrüche und Doppelablagen führten zu Suchaufwand und Inkonsistenzen',
        'Intransparenter Bearbeitungsstatus über Teams und Abteilungen hinweg',
        'Viele Rollen, Freigaben und Fristen – schwer zuverlässig zu steuern',
        'Fehlende Versionierung und Nachvollziehbarkeit bei Unterlagen',
        'Datenschutz- und Compliance-Vorgaben schwer durchzusetzen',
        'Mobiles Arbeiten und Offline-Szenarien unzureichend unterstützt',
        'Hohe E-Mail-Last, redundante Meetings und manuelle Nachverfolgung',
      ],
      solution:
        'Einführung einer zentralen Plattform für digitale Zusammenarbeit: Vorgangsakten bündeln Dokumente, Entscheidungen und Aufgaben. Gesteuerte Workflows mit Rollen- und Rechtemodell, automatische Protokolle, Vorlagen, Volltextsuche und Benachrichtigungen sorgen für Klarheit. Schnittstellen binden Kalender, E-Mail und Drittsysteme an.',
      features: [
        {
          title: 'Vorgangsakte & DMS',
          text: 'Zentrale Akte mit versionierten Dokumenten, Metadaten, Kommentaren und Aufgaben – inklusive Fristenverwaltung und Erinnerungen.',
        },
        {
          title: 'Workflow-Engine',
          text: 'Konfigurierbare Prozesse, Eskalationen und Checklisten; automatische Zuweisung, Erinnerungen und SLA-Überwachung.',
        },
        {
          title: 'Rollen & Rechte',
          text: 'Feingranulare Berechtigungen, externe Beteiligte, Datenschutz-by-Design und revisionssichere Protokolle.',
        },
        {
          title: 'Protokolle & Audit',
          text: 'Automatische Ereignisprotokolle, Versionierung, Nachvollziehbarkeit für Audits und interne/externe Prüfungen.',
        },
        {
          title: 'Templates & Wissen',
          text: 'Standardisierte Vorlagen, Textbausteine und wiederverwendbare Checklisten reduzieren Fehler und Einarbeitungszeiten.',
        },
        {
          title: 'Integrationen',
          text: 'Kalender, E-Mail, Single Sign-on und Fachverfahren via APIs – nahtlos, sicher und wartbar.',
        },
      ],
      results: [
        'Durchlaufzeiten verkürzt',
        'Klarer Status je Vorgang',
        'Weniger E-Mails und Meetings',
        'Höhere Datenqualität & Compliance',
        'Mobile Zusammenarbeit verbessert',
        'Schnelleres Onboarding',
      ],
      gridCols: 'xl:grid-cols-3',
    },
    {
      title: 'Analyse-Plattform für Industrieanlagen',
      subtitle:
        'Wie macht man weltweit führende Industrieanlagen noch effizienter?',
      situation:
        'Aus Anlagen, Sensorik und Prüfungen fielen täglich große Datenmengen an – verteilt über Linien, Standorte und Systeme. Auswertungen waren langsam, Ursachenanalysen aufwendig und Entscheidungen verzögert. KPIs waren uneinheitlich definiert.',
      challenges: [
        'Heterogene Datenquellen (MES, ERP, Sensorik) ohne einheitliches Schema',
        'Keine Near-Real-Time-Transparenz über Anlagenzustände',
        'Manuelle Excel-Auswertungen, hoher Pflege- und Fehleraufwand',
        'Erschwerte Ursachenanalyse bei Abweichungen und Stillständen',
        'Uneinheitliche KPI-Definitionen (z. B. OEE, Ausschuss, Taktzeiten)',
        'Skalierbarkeit und Performance bei wachsenden Datenmengen',
        'Rollen, Rechte und Audit-anforderungen in regulierten Umgebungen',
      ],
      solution:
        'Aufbau einer zentralen Analyse-Plattform: standardisierte Datenaufbereitung, Zeitreihen-Speicherung, einheitliches KPI-Modell und rollenbasierte Dashboards. Intelligente Auswertungen erkennen Muster und Abweichungen, Alerts informieren proaktiv; Integrationen binden Produktions- und Service-Prozesse an.',
      features: [
        {
          title: 'Daten-Pipeline',
          text: 'Ingestion und Normalisierung aus MES/ERP/Sensorik; Validierung, Anreicherung und Historisierung als Zeitreihen.',
        },
        {
          title: 'KPI & OEE-Modul',
          text: 'Standardisierte KPI-Definitionen, OEE-Berechnung und Drilldowns bis auf Linien-, Schicht- und Maschinenebene.',
        },
        {
          title: 'Anomalie-Erkennung',
          text: 'Detektion von Mustern und Abweichungen mit Alerts für Qualitäts- und Stillstandsrisiken.',
        },
        {
          title: 'Root-Cause-Analyse',
          text: 'Verknüpfung von Ereignissen, Parametern und Ergebnissen zur schnellen Ursachenfindung.',
        },
        {
          title: 'Wartung & Service',
          text: 'Hinweise für Instandhaltung, präventive Maßnahmen und Übergabe an Service-Tickets.',
        },
        {
          title: 'Reporting & Export',
          text: 'Standardberichte, Self-Service-Exporte und API-Zugriff für Fachbereiche.',
        },
      ],
      results: [
        'Durchlaufzeiten für Auswertungen verkürzt',
        'Stillstandszeiten und Ausschuss reduziert',
        'Transparenz über Anlagenleistung erhöht',
        'Onboarding und Schulungsaufwand verringert',
        'Release-Zyklen beschleunigt',
        'Bessere Audit- und Berichtsfähigkeit',
      ],
      gridCols: 'xl:grid-cols-3',
    },
    {
      title: 'Modernisierung im Retourenmanagement',
      subtitle:
        'Wie kann man die Verarbeitung von 100.000 Retouren pro Tag optimieren?',
      situation:
        'Retouren wurden über mehrere gewachsene Anwendungen und manuelle Schritte bearbeitet. Hohe Mengen mit Peaks und uneinheitliche Kriterien führten zu langen Durchlaufzeiten, Fehlern und steigenden Kosten – Transparenz über Status und Qualität fehlte.',
      challenges: [
        'Zerklüftete Systemlandschaft ohne durchgängige End-to-End-Prozesse',
        'Volatilität: starke Mengenspitzen, Engpässe bei Annahme und Bewertung',
        'Manuelle Klassifikation und Prüfung – fehleranfällig und langsam',
        'Uneinheitliche Kriterien für Wiederverkauf, Reparatur, Entsorgung',
        'Medienbrüche zwischen Lager, Reparatur und Abrechnung',
        'Fehlende Near-Real-Time-Kennzahlen für Steuerung und Forecast',
        'Skalierbarkeit und Robustheit im 24/7-Betrieb',
      ],
      solution:
        'Einführung einer durchgängigen Retourenplattform: standardisierte Datenflüsse, regelbasierte Bewertung, geführte Workflows und Integrationen zu WMS/ERP/Versand. Plausibilitäts- prüfungen und Scans reduzieren Fehler; Dashboards und Alerts schaffen operative Transparenz.',
      features: [
        {
          title: 'Annahme & Scanning',
          text: 'Barcode-/RFID-Scan, automatische Erfassung von Sendung, Zustand und Foto-Belegen, direkte Zuordnung zur Retourenakte.',
        },
        {
          title: 'Regel- & Scoring-Engine',
          text: 'Bewertung nach Kriterien wie Zustand, Wert, Nachfrage; Empfehlungen für Wiederverkauf, Reparatur oder Ausschleusung.',
        },
        {
          title: 'Geführte Workflows',
          text: 'Schritt-für-Schritt-Anleitung, Checklisten und Pflichtfelder; reduzierte Fehlbedienungen und schnellere Entscheidungen.',
        },
        {
          title: 'Qualitätsprüfungen',
          text: 'Plausibilitätschecks, Bildbelege, Zweitprüfung bei Abweichungen; dokumentierte Entscheidungen.',
        },
        {
          title: 'Automationen & Integrationen',
          text: 'Anbindung an WMS/ERP/Versand; Etiketten, Buchungen und Gutschriften automatisch auslösen.',
        },
        {
          title: 'Monitoring & Betrieb',
          text: 'Dashboards, Alerts und SLAs; Kapazitätsplanung und operative Steuerung in Near-Real-Time.',
        },
      ],
      results: [
        'Durchsatz erhöht',
        'Bearbeitungszeiten verkürzt',
        'Fehlerquoten reduziert',
        'Prozesskosten gesenkt',
        'Transparenz & Steuerbarkeit erhöht',
        'Wiederverwertungserlöse gesteigert',
      ],
      gridCols: 'xl:grid-cols-3',
    },
    {
      title: 'Analyse-Tools für Standorte im Energiesektor',
      subtitle:
        'Wie stellt man Standort-KPIs bei 40 Mrd. Euro Umsatz im Detail dar?',
      situation:
        'Verteilte Datenquellen und abweichende KPI-Definitionen erschwerten eine einheitliche Sicht auf Standorte, Netze und Einheiten. Excel-basierte Prozesse waren langsam und fehleranfällig; Entscheidungen verzögerten sich, Vertrauen in Zahlen litt.',
      challenges: [
        'Heterogene Quellen (ERP, DWH, operative Systeme) und inkonsistente Stammdaten',
        'Uneinheitliche KPI-Definitionen und Berechnungslogiken je Bereich',
        'Hoher manueller Validierungs- und Konsolidierungsaufwand',
        'Fehlende Vergleichbarkeit über Standorte, Regionen und Zeiträume',
        'Langsame Berichtszyklen, eingeschränkter Self-Service',
        'Governance/Transparenz zu Quellen, Versionen und Freigaben',
      ],
      solution:
        'Aufbau eines zentralen KPI-Cockpits mit automatisierter Datenvalidierung, kanonischem KPI-Katalog und rollenbasierten Dashboards. Drilldowns bis Standort/Linie/Schicht, Self-Service-Analysen, Export/Reporting und klare Governance schaffen Verlässlichkeit und Tempo.',
      features: [
        {
          title: 'Datenaufnahme & Validierung',
          text: 'Automatisiertes Ingest, Dubletten-/Vollständigkeits- checks, Plausibilitäten und Harmonisierung von Stammdaten.',
        },
        {
          title: 'KPI-Katalog & Governance',
          text: 'Kanonische Definitionen, Owner, Freigaben und Versionen – nachvollziehbar für Fachbereiche und Revision.',
        },
        {
          title: 'Qualitätsregeln',
          text: 'Geschäftsregel-Engine für Schwellen, Ausreißer, Korrekturen und Hinweissysteme.',
        },
        {
          title: 'Dashboards & Drilldowns',
          text: 'Rollenbasierte Sichten, Vergleich über Standorte/ Perioden, Ursachenanalyse bis zur Einzeldatenebene.',
        },
        {
          title: 'Planung & Szenarien',
          text: 'Soll/Ist-Vergleich, Was-wäre-wenn, Benchmarks und Ableitung konkreter Maßnahmen.',
        },
        {
          title: 'Export & Integrationen',
          text: 'Self-Service-Exporte, Reporting-Pipelines und Schnittstellen für angrenzende Systeme.',
        },
      ],
      results: [
        'Datenvalidierung automatisiert',
        'KPI-Transparenz hergestellt',
        'Standort-übergreifende Vergleichbarkeit',
        'Analysezeiten verkürzt',
        'Vertrauen in Zahlen gestärkt',
        'Self-Service & Reporting verbessert',
      ],
      gridCols: 'xl:grid-cols-3',
    },
    {
      title: 'Interaktive Kartenplattform für Verbindungsdaten',
      subtitle:
        'Wie werden tausende Datenpunkte verständlich – in Echtzeit und sicher?',
      situation:
        'Verbindungs- und Standortdaten wuchsen stark an; ohne räumlichen Kontext blieben Muster verborgen. Datenqualität war inkonsistent, Berichte dauerten lange und mobil war die Nutzung eingeschränkt.',
      challenges: [
        'Heterogene Quellen mit unterschiedlichen Formaten und Genauigkeiten',
        'Geokodierung, Deduplikation und Zusammenführung von Standorten',
        'Leistungsfähiges Rendering großer Punktmengen auf Karte',
        'Echtzeit-Updates und Filter bei hoher Nutzerlast',
        'Datenschutz, Zugriffskontrolle und Mandantentrennung',
        'Berichtserstellung und Export ohne Medienbrüche',
      ],
      solution:
        'Aufbau einer interaktiven Kartenplattform: standardisierte ETL-Pipeline, Geokodierung und Datenanreicherung, performantes Kartenlayering und Clustering. Rollenbasierte Sichten, Live-Filter, Such- und Exportfunktionen sowie DSGVO-konforme Datenflüsse.',
      features: [
        {
          title: 'ETL & Geokodierung',
          text: 'Import, Bereinigung, Geokodierung und Anreicherung; Duplikate erkennen, Qualität sichern.',
        },
        {
          title: 'Karten-Rendering',
          text: 'Clustering, Heatmaps und Layering für tausende Punkte – flüssig auf Desktop und Mobile.',
        },
        {
          title: 'Suche & Filter',
          text: 'Volltext, Radius- und Attributfilter; kombinierbar und in Echtzeit anwendbar.',
        },
        {
          title: 'Live-Updates',
          text: 'Push-basierte Aktualisierungen, Streaming von Statusänderungen und Metriken.',
        },
        {
          title: 'Exports & Reporting',
          text: 'Berichte und Self-Service-Exporte, Integration in bestehende Reporting-Strecken.',
        },
        {
          title: 'Sicherheit & DSGVO',
          text: 'Rollen, Rechte, Pseudonymisierung, Mandantentrennung und Protokollierung.',
        },
      ],
      results: [
        'Datenqualität erhöht',
        'Transparenz gesteigert',
        'Berichtserstellung beschleunigt',
        'Nutzungsrate erhöht',
        'Entscheidungswege verkürzt',
        'Mobile Performance verbessert',
      ],
      gridCols: 'xl:grid-cols-3',
    },
    {
      title: 'Interaktive Montage- und Berechnungs-Plattform',
      subtitle:
        'Wie kann ich Montageabläufe und Berechnungen in der Automobilindustrie interaktiv darstellen?',
      situation:
        'Montagewissen war verteilt über Excel, PDFs und Erfahrungsträger. Abläufe unterschieden sich je Standort/Variante, Berechnungen wurden manuell durchgeführt – fehleranfällig und langsam. Schulung und Einarbeitung dauerten lange.',
      challenges: [
        'Uneinheitliche Arbeitsanweisungen und Variantenvielfalt',
        'Manuelle Berechnungen (Drehmoment, Toleranzen, Reihenfolgen)',
        'Fehlende Schrittführung, Prüf- und Abnahmeprotokolle',
        'Abhängigkeiten zu Werkzeugen, Materialien und Freigaben',
        'Wissenssicherung bei Personalwechsel schwer möglich',
        'Offline- und Shopfloor-taugliche Nutzung erforderlich',
      ],
      solution:
        'Interaktive Plattform mit geführten Montage-Schritten, integrierten Berechnungen und Prüfungen. Varianten- und Regel-Logik verhindert ungültige Schritte; Protokolle und Nachweise entstehen automatisch. Suche, Vorlagen und Medien unterstützen Schulung und On-the-Job.',
      features: [
        {
          title: 'Digitale Arbeitsanweisungen',
          text: 'Schritt-für-Schritt, mit Bildern/Videos, Checks und Werkzeug-/Materialhinweisen.',
        },
        {
          title: 'Interaktive Berechnungen',
          text: 'Drehmoment/Toleranzen live berechnen; Eingaben validieren und dokumentieren.',
        },
        {
          title: 'Varianten- & Regel-Logik',
          text: 'Zulässige Reihenfolgen, Teilelisten und Alternativen je Baureihe/Variante.',
        },
        {
          title: 'Prüf- & Abnahmeprotokolle',
          text: 'Automatische Protokolle, Signaturen und Nachweise für Qualität und Audit.',
        },
        {
          title: 'Wissensdatenbank & Suche',
          text: 'Schnelle Auffindbarkeit von Anweisungen, Lösungen und Lessons Learned.',
        },
        {
          title: 'Integration & Offline',
          text: 'Anbindung an ERP/MES; Offline-Modus für Shopfloor mit späterer Synchronisation.',
        },
      ],
      results: [
        'Fehlerquote gesenkt',
        'Stillstandzeiten verringert',
        'Schulungsaufwand reduziert',
        'Qualität & Auditfähigkeit erhöht',
        'Time-to-Deploy verkürzt',
        'Service- und Garantiekosten gesenkt',
      ],
      gridCols: 'xl:grid-cols-3',
    },
    {
      title: 'Konfigurator für Nutz- und Flottenfahrzeuge',
      subtitle:
        'Wie werden komplexe Transporter- und Baufahrzeug-Varianten verkaufsfähig konfiguriert?',
      situation:
        'Baureihen, Aufbauten und Sonderausstattungen führten zu enormer Variantenvielfalt. Regelwerke, Abhängigkeiten und Freigaben waren schwer überschaubar – Excel/PDF-basierte Angebote waren langsam und fehleranfällig.',
      challenges: [
        'Komplexe Abhängigkeits- und Ausschlussregeln zwischen Optionen',
        'Preis- und Rabattlogiken je Kunde/Flotte/Region',
        'Technische Machbarkeit, Gewichte, Zuladung und Homologation',
        'Medienbrüche zwischen Vertrieb, Aufbauherstellern und Disposition',
        'Uneinheitliche Dokumente (Datenblätter, Lastenhefte, Angebote)',
        'Schnelle Visualisierung und Vergleich mehrerer Varianten',
      ],
      solution:
        'Ein regelbasierter Konfigurator führt durch den Verkaufsprozess, gewährleistet gültige Kombinationen und erstellt vollständige Angebots- und Übergabedokumente. Preise, Verfügbarkeiten und technische Einschränkungen werden laufend geprüft; Integrationen verbinden CRM, ERP und Aufbaupartner.',
      features: [
        {
          title: 'Regel- & Constraint-Engine',
          text: 'Validiert Optionen, Ausschlüsse und Pflichtausstattungen in Echtzeit.',
        },
        {
          title: 'Preis- & Angebotsmodul',
          text: 'Rabattstaffeln, Kundenkonditionen und Bundles; erzeugt konsistente Angebote und PDFs.',
        },
        {
          title: 'Technische Prüfung',
          text: 'Gewicht/Last, Maße, Energieversorgung und Homologationskriterien automatisch prüfen.',
        },
        {
          title: 'Visualisierung',
          text: 'Variantenvergleich, Bilder/3D, Stücklisten-Überblick und Änderungs-Historie.',
        },
        {
          title: 'Dokumente & Übergabe',
          text: 'Datenblätter, Übergabe an Aufbaupartner/Produktion, vollständige Nachweise.',
        },
        {
          title: 'Integrationen',
          text: 'Anbindung an CRM/ERP, Preislisten, Teilekataloge und Lieferzeiten.',
        },
      ],
      results: [
        'Angebotserstellung beschleunigt',
        'Fehlerquoten in Angeboten gesenkt',
        'Abschlussquote gesteigert',
        'Erlöse pro Auftrag erhöht',
        'Einarbeitung und Konsistenz verbessert',
        'Compliance & Nachweise sichergestellt',
      ],
      gridCols: 'xl:grid-cols-3',
    },
    {
      title: 'Intelligente Plattform für Agrarbetriebe',
      subtitle:
        'Wie bringe ich eine der ältesten Industrien ins digitale Zeitalter?',
      situation:
        'Flächendaten, Fruchtfolgen, Düngung und Pflanzenschutz wurden in separaten Systemen oder Tabellen gepflegt. Entscheidungen mussten unter Zeitdruck getroffen werden, während Nachweise für Behörden und Förderstellen aufwendig zu erstellen waren.',
      challenges: [
        'Schlag-/Flächendaten, Fruchtfolgen und Nährstoffbilanzen konsistent halten',
        'Düngung/Pflanzenschutz regelkonform planen (Sperrfristen, Auflagen, Dokumentation)',
        'Integration von Wetter-, Satelliten- und Bodensensordaten',
        'Maschinendaten/Telemetrie (ISO-BUS) und Offline-Nutzung auf dem Feld',
        'Compliance, Cross-Compliance, Förderanträge und Nachweise',
        'Teamaufgaben, Saisonplanung und mobile Nutzung',
      ],
      solution:
        'Zentrale Plattform mit Kartenansicht für Schläge, Planung von Anbau und Maßnahmen, Regel-Engine für Düngung und Pflanzenschutz sowie automatische Dokumentation. Telemetrie-Import, Wetter- und Satellitenintegration liefern Hinweise in Echtzeit; Offline-first Apps unterstützen den Feldeinsatz.',
      features: [
        {
          title: 'Flächen- & Schlagmanagement',
          text: 'Karten, Grenzen, Kulturen, Bodenproben und Stammdaten zentral pflegen.',
        },
        {
          title: 'Planung & Fruchtfolge',
          text: 'Anbauplanung, Rotationen, Zeitfenster und Maßnahmenplanung über Saisons.',
        },
        {
          title: 'Nährstoff- & Mittel-Management',
          text: 'Düngeplanung, Sperrfristen, Zulassungen und Dokumentation regelkonform steuern.',
        },
        {
          title: 'Telemetrie & Maschinen',
          text: 'ISO-BUS/Arbeitsdaten importieren, Fahrspuren, Ausbringmengen und Einsatzzeiten auswerten.',
        },
        {
          title: 'Wetter & Satellit',
          text: 'Wetterfenster, NDVI/Indexe und Alerts für optimale Maßnahmen-Termine.',
        },
        {
          title: 'Dokumentation & Compliance',
          text: 'Nachweise, Förderanträge und Audit-Trails automatisiert erstellen.',
        },
      ],
      results: [
        'Erträge stabilisiert bzw. verbessert',
        'Betriebskosten gesenkt',
        'Planungssicherheit erhöht',
        'Nachweise & Compliance sichergestellt',
        'Zeitaufwand für Dokumentation reduziert',
        'Transparenz über Flächen & Einsätze erhöht',
      ],
      gridCols: 'xl:grid-cols-3',
    },
    {
      title: 'Ladestations-Finder für Elektromobilität',
      subtitle:
        'Wie finden Nutzer verlässlich eine passende Ladesäule – schnell und ohne Umwege?',
      situation:
        'Ladedaten stammten aus heterogenen Quellen; Verfügbarkeiten waren unklar, Standortangaben unvollständig und die mobile Nutzung träge. Nutzer brachen die Suche ab – Betreiber litten unter geringer Auslastung und vielen Supportfragen.',
      challenges: [
        'Aggregation aus OCPI/OCPP/Partner-APIs mit unterschiedlichen Qualitäten',
        'Echtzeit-Verfügbarkeit, Belegung und Störungsmeldungen',
        'Filter für Steckertypen, Leistung, Zugang, Tarif und Verfügbarkeit',
        'Vollständige Metadaten: Öffnungszeiten, Barrierefreiheit, Preise, Fotos',
        'Routenplanung mit Reichweite, Zwischenstopps und Live-Umplanung',
        'Hohe mobile Performance und Offline-Fallback',
      ],
      solution:
        'Ein zentraler Finder bündelt Quellen, normalisiert Daten und aktualisiert Verfügbarkeiten in Near-Real-Time. Nutzer wählen per Karte/Liste mit leistungsfähigen Filtern; ein Routenmodul plant Ladestopps. Caching, Komprimierung und zugängliches UI sichern Tempo und Nutzbarkeit.',
      features: [
        {
          title: 'Datenaggregation & Normalisierung',
          text: 'Zusammenführen aus OCPI/OCPP/Partnern, Dubletten, Geokodierung und Plausibilisierung.',
        },
        {
          title: 'Live-Status & Telemetrie',
          text: 'Verfügbarkeit, Belegung, Störungen und Wartungen in Near-Real-Time anzeigen.',
        },
        {
          title: 'Suche, Filter & Präferenzen',
          text: 'Steckertyp, Leistung, Zugang, Tarif, Betreiber – mit speicherbaren Präferenzen.',
        },
        {
          title: 'Karte, Liste & Details',
          text: 'Schnelle Karte mit Clustering, Detailseiten mit Fotos, Öffnungszeiten und Ausstattung.',
        },
        {
          title: 'Routenplanung & Reichweite',
          text: 'Ladestopp-Vorschläge, Verbrauchsmodelle, Live-Umplanung bei Verfügbarkeit.',
        },
        {
          title: 'Tarife, Bezahlung & Roaming',
          text: 'Tarifinfos, Roaming-Partner, QR/Link zu Bezahl-Apps und Betreiberportalen.',
        },
      ],
      results: [
        'Nutzerzufriedenheit erhöht',
        'Konversion gesteigert',
        'Supportanfragen reduziert',
        'Zeit bis zum Ladevorgang verkürzt',
        'Datenqualität & Abdeckung verbessert',
        'Mobile Performance & Barrierefreiheit erhöht',
      ],
      gridCols: 'xl:grid-cols-3',
    },
  ];
}
