import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Review {
  text: string;
  author: string;
}

interface ServiceItem {
  title: string;
  text: string; // Kurzbeschreibung
  categories: string[]; // z.B. 'Schnellstart' | 'Strategie' | 'Umsetzung'
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  reviews: Review[] = [
    {
      text: `Wir danken Herrn Schuhknecht für seine Unterstützung. Wir schätzen unsere Zusammenarbeit, die jederzeit erfolgreich und unkompliziert verlief, ungemein und empfehlen ihn sehr gerne weiter. Auch die Qualität sowie die Ergebnisse seiner Arbeit waren immer ausgezeichnet.`,
      author: 'Schaeffler',
    },
    {
      text: `Vielen Dank für die konstruktive Zusammenarbeit und das Engagement im Projekt. Die maßgebliche Mitarbeit im Bereich des State-Management hilft uns perspektivisch weiter.`,
      author: 'GEA Farm Technologies',
    },
    {
      text: `Wir danken Herrn Schuhknecht für seine äußerst kompetente und freundliche Zusammenarbeit. In seinem Aufgabenbereich lag die Optimierung und Weiterentwicklung von Anwendungen zur Abwicklung von Retouren sowie eine Neuentwicklung einer Anwendung zur Auswertung von Leistungsdaten. Auch agierte er als Lead Developer und schulte seine Kollegen im Frontend Bereich durch Code Reviews, Pair Programming und Demo-Anwendungen. Alle Aufgaben wurden zeitnah, routiniert und professionell umgesetzt. Herr Schuhknecht war sehr aktiv in der Kommunikation mit dem Fachbereich und klärte Umfänge und Umsetzungsmöglichkeiten verständlich und stets freundlich. Sein jahrelanges Know-how konnte in viele Bereiche einfließen und bietet einen Mehrwert für den weiteren Betrieb der Software. Wir freuen uns, dass Herr Schuhknecht uns auch in Zukunft für Fragen seines Themengebietes zur Verfügung steht.`,
      author: 'Klingel.de',
    },
    {
      text: `Wir danken Herrn Schuhknecht für die professionelle Zusammenarbeit. Er erfüllte unsere Anforderungen bzgl. einer grafischen Darstellung von Live-Calldaten stets zu unserer vollsten Zufriedenheit. Die Ausführung erfolgte dabei zügig und korrekt und wir konnten stets auf die fachliche Expertise von Herrn Schuhknecht zurückgreifen. Die Kommunikation während der Ausführung war ebenfalls einwandfrei und stets zielorientiert. Wir freuen uns auf weitere Projekte mit Herrn Schuhknecht!`,
      author: 'questnet GmbH',
    },
    {
      text: `Ich danke Herrn Schuhknecht für die effektive und professionelle Zusammenarbeit. Bei der Erstellung einer durchaus komplexen Webanwendung wurden unsere Anforderungen sehr gut umgesetzt. Durch eigene Ideen und Vorschläge wurde das Projekt gemeinsam optimiert und in der Regel im ersten Versuch ein überzeugendes Ergebnis abgeliefert. Die Kommunikation über E-Mail und Ticketsystem lief ebenso optimal. Bei entsprechendem Bedarf greifen wir gerne wieder auf Sie zurück.`,
      author: 'Holm & Laue',
    },
    {
      text: `Wir haben lange nach einem passenden Partner für die komplette Überarbeitung unserer Homepage gesucht. Auf unserer Suche sind wir auf Herrn Schuhknecht aufmerksam geworden. Die schnelle Umsetzung unserer Wünsche und auch die Bereitschaft, unbürokratisch bei Problemen zu helfen hat uns überzeugt. Die Seiten sind sehr gut programmiert, laden sehr schnell und überzeugen unsere Kunden durch ihr Design. Wir können die Dienstleistungen von Herrn Schuhknecht sehr empfehlen!`,
      author: 'Rime GmbH',
    },
    {
      text: `Auf der Suche nach einem passenden Internetauftritt für mich, führte ich viele Gespräche und habe mich auch selbst im Netz nach dem besten Anbieter für mich umgeschaut! Was dann durch eine wirklich gute Empfehlung kam, sehen Sie wenn Sie meine Seite besuchen! Vom ersten Telefonat an, der Beratung vor Ort und den ganzen wichtigen Details bei der Erstellung der Homepage war ich von Anfang an begeistert! Selbst die Kosten hierfür sind wirklich akzeptabel und auch die Betreuung ist das was Herrn Schuhknecht auszeichnet! Ich sage nochmals Danke schön für alles und weiter so!`,
      author: 'Jan Doberenz',
    },
    {
      text: `Wir wollten den Relaunch unserer Websites und fanden dabei Design-Insel! Nachdem wir all unsere Wünsche geäußert hatten, machte Design-Insel einen modernen und professionellen Internetauftritt aus unseren alten Webseiten mit neugestalteten Strukturen, Inhalten und Design. Schnell und zuverlässig werden die ständige Erweiterung und Pflege unserer so wichtigen Medien umgesetzt. Neben der kompetenten Abwicklung der Projekte überzeugt Design-Insel vor allem durch nette, innovative und unkomplizierte Zusammenarbeit.`,
      author: 'Energiepark Süptitz',
    },
    {
      text: `Ich bin überaus zufrieden mit den Dienstleistungen und Angeboten der Firma Design-Insel.de! In Sachen eCommerce, Onlineshops und Design stand mir das Unternehmen mit professionellem Rat und Tat zur Seite. Die Bearbeitung meiner Anliegen werden schnell, kompetent und zuversichtlich erledigt.`,
      author: 'www.handy-grosshandel.com',
    },
    {
      text: `Ich danke Herrn Schuhknecht für die kreative Überarbeitung meiner Homepage. Sowohl die schnelle Angebotslieferung als auch eine immer kurzfristig mögliche Kommunikation und Umsetzung von Änderungswünschen unterscheidet ihn stark von anderen Anbietern. Vielen Dank! Ich empfehle Sie gern weiter!`,
      author: 'Rechtsanwalt Ricardo Kny',
    },
    {
      text: `Wir waren auf der Suche nach einer professionellen Entlastung für unser Entwickler-Team. Herr Schuhknecht hat sich schnell und zielstrebig in die übergebenen Aufgaben eingearbeitet und sehr gute Leistungen abgeliefert. Wir freuen uns auch in den nächsten Monaten mit ihm zusammenarbeiten zu dürfen.`,
      author: 'www.leben-und-erziehen.de',
    },
    {
      text: `Als langjähriger Kunde von Design-Insel.de bin ich mit der kompetenten Arbeit von Herrn Schuhknecht sehr zufrieden. Ich brauchte ihm immer nur meine Vorstellungen zu schildern und daraus entstanden binnen kurzer Zeit phänomenale und kreative Vorschläge, die sofort umgesetzt werden konnten. Wenn ich an Webdesign denke, fällt mir immer sofort Design-Insel ein. Absolut empfehlenswert. Weiter so.`,
      author: 'www.gerner24.de',
    },
    {
      text: `Ich danke Design-Insel für die kreative Gestaltung meiner Homepage. Besonders hervorheben möchte ich die schnelle Angebotslieferung, den sehr netten Kontakt und die sehr gute Umsetzung. Da unsere Kommunikation ausschließlich über E-Mail und Telefon erfolgte, zeigt sich Ihre Professionalität in einem wirklich tollem Ergebnis. Herzlichen Dank dafür. Ich empfehle Sie sehr gerne weiter.`,
      author: 'www.livingpure.de',
    },
    {
      text: `Als ich nach einem Webdesigner suchte fiel mir die Designinsel besonders auf. Die Darstellung spricht alle Sinne an, macht gute Laune und bringt ein Lächeln hervor. Meine Entscheidung stand fest. Eine solche Webseite konnte ich mir gut für meine Coachingpraxis in Frankfurt/M. vorstellen. Innerhalb von zwei Wochen bekam ich einige Vorschläge und zu meiner großen Überraschung fand ich meine Lieblingsfarben, lila und grün, wieder ohne das wir darüber gesprochen hatten. Ich spürte sofort, Herr Schuhknecht hatte mich verstanden, ich fühle mich so dargestellt, wie ich wirklich bin. Jeder, der die neue Webseite sieht sagt spontan, ja das sind sie. Auch die Optimierung hat mich innerhalb von einem Monat nach vorne gebracht, nächsten Monat werde ich wahrscheinlich schon auf Seite 1 stehen. Vielen Dank für die gute Zusammenarbeit.`,
      author: 'www.skcoaching.de',
    },
    {
      text: `Mit der Dienstleistung von Design-Insel sind wir überaus zufrieden. Mittlerweile wurden einige anspruchsvolle und umfangreiche Projekte unterschiedlicher Art umgesetzt. Ob Webseiten, Apps oder Web-Anwendungen, sämtliche Arbeiten wurden gewissenhaft, professionell und mit dem nötigen KnowHow durchgeführt. Ein wichtiger Pluspunkt ist die routinierte und durchdachte Arbeitsweise, welches das Budget überschaubar hält und unnötige Fehler sowie Verzögerungen vermeidet. Die Zusammenarbeit fand stets auf Basis einer netten und unkomplizierten Kommunikation statt.`,
      author: 'www.pandf.de',
    },
  ];

  currentIndex = 0;
  // Steuert, ob der aktuell sichtbare Review voll angezeigt wird
  showFull = false;

  prevReview(): void {
    this.currentIndex =
      this.currentIndex === 0 ? this.reviews.length - 1 : this.currentIndex - 1;
    this.showFull = false; // Bei Wechsel wieder einklappen
  }

  nextReview(): void {
    this.currentIndex =
      this.currentIndex === this.reviews.length - 1 ? 0 : this.currentIndex + 1;
    this.showFull = false; // Bei Wechsel wieder einklappen
  }

  toggleFull(): void {
    this.showFull = !this.showFull;
  }

  filterCategories = ['Alle', 'Schnellstart', 'Strategie', 'Umsetzung'];
  activeCategory: string = 'Alle';

  servicesProgramming: ServiceItem[] = [
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

  // KI Leistungen (rechts)
  servicesAI: ServiceItem[] = [
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
