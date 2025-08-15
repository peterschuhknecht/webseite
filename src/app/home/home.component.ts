import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Review {
  text: string;
  author: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  // Reviews wie im JSX Beispiel
  reviews: Review[] = [
    {
      text: `Wir danken Herrn Schuhknecht für seine äußerst kompetente und freundliche Zusammenarbeit. In seinem Aufgabenbereich lag die Optimierung und Weiterentwicklung von Anwendungen zur Abwicklung von Retouren sowie eine Neuentwicklung einer Anwendung zur Auswertung von Leistungsdaten. Auch agierte er als Lead Developer und schulte seine Kollegen im Frontend Bereich durch Code Reviews, Pair Programming und Demo-Anwendungen. Alle Aufgaben wurden zeitnah, routiniert und professionell umgesetzt. Herr Schuhknecht war sehr aktiv in der Kommunikation mit dem Fachbereich und klärte Umfänge und Umsetzungsmöglichkeiten verständlich und stets freundlich. Sein jahrelanges Know-how konnte in viele Bereiche einfließen und bietet einen Mehrwert für den weiteren Betrieb der Software. Wir freuen uns, dass Herr Schuhknecht uns auch in Zukunft für Fragen seines Themengebietes zur Verfügung steht.`,
      author: 'www.klingel.de',
    },
    {
      text: `Wir danken Herrn Schuhknecht für die professionelle Zusammenarbeit. Er erfüllte unsere Anforderungen bzgl. einer grafischen Darstellung von Live-Calldaten stets zu unserer vollsten Zufriedenheit. Die Ausführung erfolgte dabei zügig und korrekt und wir konnten stets auf die fachliche Expertise von Herrn Schuhknecht zurückgreifen. Die Kommunikation während der Ausführung war ebenfalls einwandfrei und stets zielorientiert. Wir freuen uns auf weitere Projekte mit Herrn Schuhknecht!`,
      author: 'www.questnet.de',
    },
    {
      text: `Wir danken Herrn Schuhknecht für seine Unterstützung. Wir schätzen unsere Zusammenarbeit, die jederzeit erfolgreich und unkompliziert verlief, ungemein und empfehlen ihn sehr gerne weiter. Auch die Qualität sowie die Ergebnisse seiner Arbeit waren immer ausgezeichnet.`,
      author: 'www.schaeffler.de',
    },
    {
      text: `Vielen Dank für die konstruktive Zusammenarbeit und das Engagement im Projekt. Die maßgebliche Mitarbeit im Bereich des State-Management hilft uns perspektivisch weiter.`,
      author: 'www.gea.com',
    },
    {
      text: `Ich danke Herrn Schuhknecht für die effektive und professionelle Zusammenarbeit. Bei der Erstellung einer durchaus komplexen Webanwendung wurden unsere Anforderungen sehr gut umgesetzt. Durch eigene Ideen und Vorschläge wurde das Projekt gemeinsam optimiert und in der Regel im ersten Versuch ein überzeugendes Ergebnis abgeliefert. Die Kommunikation über E-Mail und Ticketsystem lief ebenso optimal. Bei entsprechendem Bedarf greifen wir gerne wieder auf Sie zurück.`,
      author: 'www.holm-laue.de',
    },
  ];

  currentIndex = 0;

  prevReview(): void {
    this.currentIndex =
      this.currentIndex === 0 ? this.reviews.length - 1 : this.currentIndex - 1;
  }

  nextReview(): void {
    this.currentIndex =
      this.currentIndex === this.reviews.length - 1 ? 0 : this.currentIndex + 1;
  }
}
