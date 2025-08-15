import { useState } from "react";

export default function Hero() {
  const reviews = [
    { text: `Wir danken Herrn Schuhknecht für seine äußerst kompetente und freundliche Zusammenarbeit. In seinem Aufgabenbereich lag die Optimierung und Weiterentwicklung von Anwendungen zur Abwicklung von Retouren sowie eine Neuentwicklung einer Anwendung zur Auswertung von Leistungsdaten. Auch agierte er als Lead Developer und schulte seine Kollegen im Frontend Bereich durch Code Reviews, Pair Programming und Demo-Anwendungen. Alle Aufgaben wurden zeitnah, routiniert und professionell umgesetzt. Herr Schuhknecht war sehr aktiv in der Kommunikation mit dem Fachbereich und klärte Umfänge und Umsetzungsmöglichkeiten verständlich und stets freundlich. Sein jahrelanges Know-how konnte in viele Bereiche einfließen und bietet einen Mehrwert für den weiteren Betrieb der Software. Wir freuen uns, dass Herr Schuhknecht uns auch in Zukunft für Fragen seines Themengebietes zur Verfügung steht.`, author: "www.klingel.de" },
    { text: `Wir danken Herrn Schuhknecht für die professionelle Zusammenarbeit. Er erfüllte unsere Anforderungen bzgl. einer grafischen Darstellung von Live-Calldaten stets zu unserer vollsten Zufriedenheit. Die Ausführung erfolgte dabei zügig und korrekt und wir konnten stets auf die fachliche Expertise von Herrn Schuhknecht zurückgreifen. Die Kommunikation während der Ausführung war ebenfalls einwandfrei und stets zielorientiert. Wir freuen uns auf weitere Projekte mit Herrn Schuhknecht!`, author: "www.questnet.de" },
    { text: `Wir danken Herrn Schuhknecht für seine Unterstützung. Wir schätzen unsere Zusammenarbeit, die jederzeit erfolgreich und unkompliziert verlief, ungemein und empfehlen ihn sehr gerne weiter. Auch die Qualität sowie die Ergebnisse seiner Arbeit waren immer ausgezeichnet.`, author: "www.schaeffler.de" },
    { text: `Vielen Dank für die konstruktive Zusammenarbeit und das Engagement im Projekt. Die maßgebliche Mitarbeit im Bereich des State-Management hilft uns perspektivisch weiter.`, author: "www.gea.com" },
    { text: `Ich danke Herrn Schuhknecht für die effektive und professionelle Zusammenarbeit. Bei der Erstellung einer durchaus komplexen Webanwendung wurden unsere Anforderungen sehr gut umgesetzt. Durch eigene Ideen und Vorschläge wurde das Projekt gemeinsam optimiert und in der Regel im ersten Versuch ein überzeugendes Ergebnis abgeliefert. Die Kommunikation über E-Mail und Ticketsystem lief ebenso optimal. Bei entsprechendem Bedarf greifen wir gerne wieder auf Sie zurück.`, author: "www.holm-laue.de" },
    // Weitere vollständige Reviews hier ergänzen...
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
      {/* Hero Text & Image */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28 lg:px-10">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
            <span>Ihre digitale Zukunft</span>
          </div>
          <h1 className="text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            KI und Software, die Probleme löst – und Umsatz schafft.
          </h1>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-emerald-500/5">
            <p className="mb-3 text-sm font-medium text-white/80">Intelligente Softwarelösungen verwandeln:</p>
            <ul className="space-y-2 text-white/90">
              <li className="flex items-start gap-3"><span className="select-none text-emerald-400">&gt;</span><span>Daten-Chaos in klare Dashboards</span></li>
              <li className="flex items-start gap-3"><span className="select-none text-emerald-400">&gt;</span><span>Zeitfresser in automatisierte Tools</span></li>
              <li className="flex items-start gap-3"><span className="select-none text-emerald-400">&gt;</span><span>Rückständige IT in strategische Lösungen</span></li>
              <li className="flex items-start gap-3"><span className="select-none text-emerald-400">&gt;</span><span>Wiederkehrende Aufgaben in KI-gestützte Abläufe</span></li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#kontakt" className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-neutral-950 shadow-lg transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300">Kontakt</a>
          </div>
        </div>
        <div className="mx-auto w-full max-w-md">
          <img src="/images/hero-image.png" alt="Hero App Vorschau" className="w-full h-auto rounded-2xl shadow-2xl border border-white/10" />
        </div>
      </div>

      {/* Trust Logos */}
      <div className="mx-auto max-w-7xl px-6 pb-10 lg:px-10">
        <p className="mb-6 text-center text-sm font-medium text-white/60">Vertrauen von führenden Unternehmen</p>
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-80 grayscale">
          <img src="/logos/audi.svg" alt="Audi" className="h-8" />
          <img src="/logos/condor.svg" alt="Condor" className="h-8" />
          <img src="/logos/mercedes.svg" alt="Mercedes Benz" className="h-8" />
          <img src="/logos/schaeffler.svg" alt="Schaeffler" className="h-8" />
          <img src="/logos/siemens.svg" alt="Siemens" className="h-8" />
          <img src="/logos/t-systems.svg" alt="T-Systems" className="h-8" />
          <img src="/logos/zalando.svg" alt="Zalando" className="h-8" />
        </div>
      </div>

      {/* Kundenstimmen mit Buttons */}
      <div className="mx-auto max-w-4xl px-6 pb-20 text-center">
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6 text-emerald-400"><path d="M12 .587l3.668 7.568L24 9.423l-6 5.851L19.335 24 12 19.897 4.665 24 6 15.274 0 9.423l8.332-1.268z" /></svg>
          ))}
        </div>
        <p className="text-lg font-semibold text-white/90 mb-6">Kundenstimmen</p>
        <div className="relative">
          <button onClick={prevReview} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full">◀</button>
          <div className="mx-10 rounded-xl border border-white/10 bg-white/5 p-6 text-left min-h-[200px] flex flex-col justify-between">
            <p className="text-sm text-white/80 mb-4 whitespace-pre-line">{reviews[currentIndex].text}</p>
            <p className="text-xs text-white/60">– {reviews[currentIndex].author}</p>
          </div>
          <button onClick={nextReview} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full">▶</button>
        </div>
      </div>
    </section>
  );
}
