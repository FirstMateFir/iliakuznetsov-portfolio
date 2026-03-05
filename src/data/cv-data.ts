export type Lang = "en" | "de";

export interface ContactItem {
  type: "email" | "phone" | "telegram" | "instagram" | "whatsapp";
  label: string;
  href: string;
}

export interface TimelineEntry {
  year: string;
  title: { en: string; de: string };
  organization: string;
  type: "work" | "education";
}

export interface TeamMember {
  role: { en: string; de: string };
  name: string;
}

export interface ProjectItem {
  id: number;
  year: string;
  title: string;
  role: { en: string; de: string };
  description: { en: string; de: string };
  myRole: { en: string; de: string };
  team: TeamMember[];
  images: string[]; 
}

export interface LanguageProficiency {
  language: { en: string; de: string };
  level: string;
  note: { en: string; de: string };
}

export interface PersonalData {
  name: string;
  firstName: string;
  lastName: string;
  photo: string;
  birthDate: string;
  title: { en: string; de: string };
  tagline: { en: string; de: string };
  location: string;
  availability: { en: string; de: string };
}

export const BIRTH_DATE = new Date(2001, 0, 5); // 05.01.2001

export function calculateAge(): number {
  const today = new Date();
  let age = today.getFullYear() - BIRTH_DATE.getFullYear();
  const m = today.getMonth() - BIRTH_DATE.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < BIRTH_DATE.getDate())) age--;
  return age;
}

export const personalData: PersonalData = {
  name: "Ilia Kuznetsov",
  firstName: "Ilia",
  lastName: "Kuznetsov",
  photo: "myphoto.png",
  birthDate: "05.01.2001",
  title: {
    en: "Theatre Manager & Producer",
    de: "Theaterleiter & Produzent",
  },
  tagline: {
    en: "Shaping live performance at the intersection of artistic vision and operational precision.",
    de: "Lebendige Aufführungen an der Schnittstelle von künstlerischer Vision und operativer Präzision.",
  },
  location: "Berlin, Germany",
  availability: {
    en: "Open to collaborations",
    de: "Offen für Zusammenarbeit",
  },
};

export const languageProficiencies: LanguageProficiency[] = [
  {
    language: { en: "Russian", de: "Russisch" },
    level: "Native",
    note: { en: "Mother tongue", de: "Muttersprache" },
  },
  {
    language: { en: "English", de: "Englisch" },
    level: "B2",
    note: { en: "Upper Intermediate", de: "Obere Mittelstufe" },
  },
  {
    language: { en: "German", de: "Deutsch" },
    level: "A2",
    note: { en: "Elementary", de: "Grundkenntnisse" },
  },
];

export const contacts: ContactItem[] = [
  {
    type: "email",
    label: "eliaskuznets@gmail.com",
    href: "mailto:eliaskuznets@gmail.com",
  },
  {
    type: "phone",
    label: "+49 17654274325",
    href: "tel:+4917654274325",
  },
  {
    type: "telegram",
    label: "@FirstMateFir",
    href: "https://t.me/FirstMateFir",
  },
  {
    type: "instagram",
    label: "@FirstMateFir",
    href: "https://instagram.com/FirstMateFir",
  },
  {
    type: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/4917654274325",
  },
];

export const navLinks = {
  en: ["Timeline", "Projects", "Contact"],
  de: ["Zeitlinie", "Projekte", "Kontakt"],
};

export const sectionTitles = {
  timeline: { en: "Professional Timeline", de: "Berufliche Zeitlinie" },
  projects: { en: "Selected Productions", de: "Ausgewählte Produktionen" },
  contact: { en: "Get In Touch", de: "Kontakt aufnehmen" },
};

// Unified timeline: work + education merged by year (descending)
export const timeline: TimelineEntry[] = [
  {
    year: "2025 — Pres.",
    title: { en: "Stage Manager", de: "Bühnenmanager" },
    organization: '"Inostranka"',
    type: "work",
  },
  {
    year: "Dec 2025",
    title: { en: "Production Assistant", de: "Produktionsassistent" },
    organization: '"3 Days to Liberation II" by Constanza Macras (Volksbühne)',
    type: "work",
  },
  {
    year: "Sep — Nov 2025",
    title: { en: "Production Assistant", de: "Produktionsassistent" },
    organization: "Voices Berlin Festival",
    type: "work",
  },
  {
    year: "Feb — Sep 2025",
    title: { en: "Stage Manager & Tour Manager", de: "Bühnenmanager & Tour Manager" },
    organization: '"Man with No Name"',
    type: "work",
  },
  {
    year: "Sep — Nov 2024",
    title: { en: "Production Assistant", de: "Produktionsassistent" },
    organization: '"Nachspiel" with Klangforum Wien',
    type: "work",
  },
  {
    year: "2023 — 2025",
    title: { en: "Executive Producer & Stage Manager", de: "Exekutivproduzent & Bühnenmanager" },
    organization: '"Cremulator"',
    type: "work",
  },
  {
    year: "2023 — 2026",
    title: { en: "Executive Producer & Stage Manager", de: "Exekutivproduzent & Bühnenmanager" },
    organization: '"Leaving? Leave!"',
    type: "work",
  },
  {
    year: "2022 — 2025",
    title: { en: "Production Assistant & Tour Manager", de: "Produktionsassistent & Tour Manager" },
    organization: '"In the Solitude of Cotton Fields"',
    type: "work",
  },
  {
    year: "2023",
    title: { en: "Stage Manager", de: "Bühnenmanager" },
    organization: '"The Last Word" (Gorky Theater Berlin)',
    type: "work",
  },
  {
    year: "2022",
    title: { en: "Production Assistant", de: "Produktionsassistent" },
    organization: 'Summer Arts Festival "Access Point"',
    type: "work",
  },
  {
    year: "2022",
    title: { en: "Director Assistant", de: "Regieassistent" },
    organization: "Film «Trauma of being a witness»",
    type: "work",
  },
  {
    year: "2021 — 2022",
    title: { en: "Artist / Actor", de: "Künstler / Schauspieler" },
    organization: '"Demons" (Drama Theater on Bronnaya)',
    type: "work",
  },
  {
    year: "2021",
    title: { en: "Production Assistant", de: "Produktionsassistent" },
    organization: 'Festival "NET" (New European Theater)',
    type: "work",
  },
  {
    year: "Nov 2021",
    title: { en: "Performer", de: "Performer" },
    organization: "Sun & Sea (Venice Biennale Project)",
    type: "work",
  },
  {
    year: "2021",
    title: { en: "Executive Producer", de: "Exekutivproduzent" },
    organization: 'Street-art Festival "Okrasheno"',
    type: "work",
  },
  {
    year: "2019 — 2020",
    title: { en: "Administrator", de: "Administrator" },
    organization: 'Theater "Old House"',
    type: "work",
  },
  {
    year: "2019",
    title: { en: "Director Assistant", de: "Regieassistent" },
    organization: 'International Theater Festival "Chaos"',
    type: "work",
  },
  {
    year: "2021",
    title: { en: "Drama Theater & Film Director", de: "Regie für Drama & Film" },
    organization: "Novosibirsk State Theater Institute",
    type: "education",
  }
];

export const projects: ProjectItem[] = [
  {
    id: 1,
    year: "2022 — 2025",
    title: "In the Solitude of Cotton Fields",
    role: { 
      en: "Production Assistant & Tour Manager", 
      de: "Produktionsassistent & Tour Manager" 
    },
    description: {
      en: `A production of Bernard-Marie Koltès' masterpiece, featuring John Malkovich and Ingeborga Dapkunaite.

The production toured internationally from February 2023 to June 2025 across 12 countries. Notable venues included the Thalia Theater in Hamburg and the Internationale Maifestspiele in Wiesbaden. The performance was staged over 40 times worldwide.`,
      de: `Eine Inszenierung von Bernard-Marie Koltès' Meisterwerk mit John Malkovich und Ingeborga Dapkunaite.

Die Produktion tourte von Februar 2023 bis Juni 2025 international durch 12 Länder. Zu den namhaften Spielstätten gehörten das Thalia Theater in Hamburg und die Internationalen Maifestspiele in Wiesbaden. Die Aufführung wurde weltweit über 40 Mal gezeigt.`,
    },
    myRole: {
      en: "Managed complex logistics for the international cast and scenery, developed tour schedules, and handled hospitality riders and accommodation coordination for the crew.",
      de: "Leitung der komplexen Logistik für das internationale Ensemble und das Bühnenbild, Erstellung von Tourneeplänen, Betreuung des Hospitality-Riders und Koordination der Unterbringung.",
    },
    team: [
      { role: { en: "Director", de: "Regie" }, name: "Timofey Kulyabin" },
      { role: { en: "Dramaturg", de: "Dramaturgie" }, name: "Roman Dolzhanskiy" },
      { role: { en: "Stage Designer", de: "Bühnenbild" }, name: "Oleg Golovko" },
      { role: { en: "Sound Designer", de: "Sounddesign" }, name: "Timofei Pastukhov" },
      { role: { en: "Executive Producer", de: "Exekutivproduzentin" }, name: "Irina Paradnaya" },
      { role: { en: "General Producer", de: "Generalproduzentin" }, name: "Ekaterina Yakimova" },
    ],
images: ["project85.jpg", "project86.jpg", "project87.jpg"],
  },
  {
    id: 2,
    year: "2025",
    title: "MAN WITH NO NAME",
    role: { 
      en: "Tour Manager & Props Manager", 
      de: "Tourmanager & Requisitenleiter" 
    },
    description: {
      en: `The stunning theatrical phantasmagoria "Man with No Name" was composed by people with big names: Gogol Center leading actor Nikita Kukushkin, designer Alexander Barmenkov and, finally, the founder of the Gogol Center himself, Kirill Serebrennikov. The show is an amazing example of "horizontal theatre" where each participant is a star.`,
      de: `Die beeindruckende theatralische Phantasmagorie "Man with No Name" wurde von namhaften Künstlern geschaffen: dem Hauptdarsteller des Gogol-Zentrums Nikita Kukushkin, dem Designer Alexander Barmenkov und schließlich dem Gründer des Gogol-Zentrums selbst, Kirill Serebrennikov. Die Show ist ein herausragendes Beispiel für "horizontales Theater", bei dem jeder Teilnehmer ein Star ist.`,
    },
    myRole: {
      en: "Managed scenery logistics and organized team travel and accommodation. Also worked on stage as a props manager, handling the preparation and execution of the performance from the European premiere in Tallinn (March 2025) to the final show in Amsterdam (September 2025).",
      de: "Leitung der Kulissenlogistik sowie Organisation von Reise und Unterbringung des Teams. Zudem Arbeit auf der Bühne als Requisitenleiter, verantwortlich für die Vorbereitung und Durchführung der Aufführung von der Europapremiere in Tallinn (März 2025) bis zur letzten Vorstellung in Amsterdam (September 2025).",
    },
    team: [
      { role: { en: "Director", de: "Regie" }, name: "Kirill Serebrennikov" },
      { role: { en: "Actor and Director", de: "Schauspieler und Regie" }, name: "Nikita Kukushkin" },
      { role: { en: "Stage Designer", de: "Bühnenbild" }, name: "Alexander Barmenkov" },
      { role: { en: "General Producer", de: "Generalproduzentin" }, name: "Irina Paradnaya" },
      { role: { en: "Executive Producer", de: "Exekutivproduzentin" }, name: "Yara Ziva-Chernova" },
    ],
    images: ["/man-with-no-name1.jpg", "/man-with-no-name2.jpg"],
  },
  {
    id: 3, 
    year: "2024",
    title: "Nachspiel",
    role: { 
      en: "Production Assistant", 
      de: "Produktionsassistent" 
    },
    description: {
      en: `Contemporary music and butoh dance take over three floors of Berlin's creative venue Kühlhaus on the opening night of the festival. The performance is a collaboration between Klangforum Wien, the VOICES Festival, the staging team of director Philipp Grigorian, and a group of butoh dancers specially assembled for this event by performer Valentin Tszin. At the heart of the event are musical pieces performed by Klangforum Wien across the three floors of the Kühlhaus. The format of the evening is a promenade concert, meaning the audience can move freely through the different spaces.`,
      de: `Zeitgenössische Musik und Butoh-Tanz bespielen drei Etagen des Berliner Kühlhauses am Eröffnungsabend des Festivals. Die Aufführung ist eine Zusammenarbeit zwischen dem Klangforum Wien, dem VOICES Festival, dem Inszenierungsteam von Regisseur Philipp Grigorian und einer Gruppe von Butoh-Tänzern, die von Valentin Tszin zusammengestellt wurde. Im Mittelpunkt stehen Musikstücke, die vom Klangforum Wien auf den drei Etagen des Kühlhauses aufgeführt werden. Das Format des Abends ist ein Wandelkonzert, bei dem sich das Publikum frei durch die Räume bewegen kann.`,
    },
    myRole: {
      en: "Assisted in project budgeting, material procurement and delivery, and developing the production schedule. Acted as Stage Manager during the performance and handled subsequent financial reporting for the festival.",
      de: "Unterstützung bei der Budgetierung, Materialbeschaffung und Logistik sowie Erstellung des Produktionsplans. Arbeit als Stage Manager während der Aufführungen und anschließende Erstellung der Finanzberichte für das Festival.",
    },
    team: [
      { role: { en: "Director", de: "Regie" }, name: "Philipp Grigorian" },
      { role: { en: "Dramaturg", de: "Dramaturgie" }, name: "Olga Fedianina" },
      { role: { en: "Choreographer", de: "Choreografie" }, name: "Valentin Tszin" },
      { role: { en: "General Producer", de: "Generalproduzentin" }, name: "Ekaterina Yakimova" },
      { role: { en: "Set Designer", de: "Bühnenbild" }, name: "Vanya Bowden" },
      { role: { en: "Light Designer", de: "Lichtdesign" }, name: "Iana Boitсova" },
      { role: { en: "Media Artist", de: "Medienkünstler" }, name: "Mike Iv" },
    ],
    images: ["/nachspiel1.jpg", "/nachspiel2.jpg"], 
  },
  {
    id: 4,
    year: "2024 — 2025",
    title: "Cremulator",
    role: { 
      en: "Executive Producer & Stage Manager", 
      de: "Exekutivproduzent & Bühnenmanager" 
    },
    description: {
      en: `"Cremulator" is the first production of Sasha Filipenko's novel of the same name, based on the interrogation documents of the director of the first crematorium in the USSR. It is the story of Peter Nesterenko, a White Guard pilot-officer who returns to his homeland after the ordeal of emigration. It is a story of forging and choosing one's truth, of its burning and blotting out across generations, and of a great love that means nothing if its devoted audience is a tyrant.`,
      de: `"Cremulator" ist die erste Inszenierung von Sascha Filipenkos gleichnamigem Roman, basierend auf den Verhörprotokollen des Direktors des ersten Krematoriums in der UdSSR. Es ist die Geschichte von Peter Nesterenko, einem weißgardistischen Piloten und Offizier, der nach den Strapazen der Emigration in seine Heimat zurückkehrt. Eine Erzählung über das Schmieden und Wählen der eigenen Wahrheit, über deren Verbrennung und Auslöschung über Generationen hinweg und über eine große Liebe, die nichts bedeutet, wenn ihr treuestes Publikum ein Tyrann ist.`,
    },
    myRole: {
      en: "Organized the rehearsal process from venue selection to catering. Managed production schedules, stage preparation, equipment rental, and supervised the manufacture, delivery, and assembly of scenery. For touring: managed logistics for the crew and scenery, conducted rehearsals, supervised set assembly, and executed performances as Stage Manager.",
      de: "Organisation des Probenprozesses von der Auswahl des Probenraums bis zum Catering. Leitung der Zeitplanung, Bühnenvorbereitung, Equipment-Miete sowie Überwachung von Produktion, Lieferung und Montage des Bühnenbilds. Auf Tournee: Logistikmanagement für Team und Dekorationen, Leitung der Proben, Supervision des Aufbaus und Durchführung der Vorstellungen als Stage Manager.",
    },
    team: [
      { role: { en: "Author", de: "Autor" }, name: "Sasha Filipenko" },
      { role: { en: "Director", de: "Regie" }, name: "Maxim Didenko" },
      { role: { en: "Cast (Peter Nesterenko)", de: "Besetzung (Peter Nesterenko)" }, name: "Maxim Sukhanov" },
      { role: { en: "Cast (Vera)", de: "Besetzung (Vera)" }, name: "Svetlana Mamresheva" },
      { role: { en: "Cast (Investigator P.)", de: "Besetzung (Ermittler P.)" }, name: "Igor Titov" },
      { role: { en: "Cast (Investigator with camera)", de: "Besetzung (Ermittler mit Kamera)" }, name: "Frol Podlesny" },
      { role: { en: "Set & Costume Design", de: "Bühne & Kostüme" }, name: "Alexander Barmenkov" },
      { role: { en: "Composer", de: "Komponist" }, name: "Sergej Newski" },
      { role: { en: "Playwright", de: "Dramaturg" }, name: "Johannes Kirsten" },
      { role: { en: "General Producer", de: "Generalproduzentin" }, name: "Svetlana Dolya" },
    ],
    images: ["/cremulator1.jpg", "/cremulator2.jpg"], 
  },
 {
    id: 14, // Порядковый номер
    year: "2022 — 2023",
    title: "The Last Word",
    role: { 
      en: "Stage Manager", 
      de: "Bühnenmanager" 
    },
    description: {
      en: `The performance is based on last words of women accused of political crimes in Russian courts. Their outspoken message in a court room becomes the only matter of free speech one can imagine in contemporary Russia. The performance gathered »last words« of defendants such as Maria Alyokhina, Nadezhda Tolokonnikova, Alla Gutnikova, Sasha Skochilenko, Zarifa Sautieva and others to shine light on their courage and to paint a picture of Russia’s current regime.`,
      de: `Die Performance basiert auf den Schlussplädoyers von Frauen, die vor russischen Gerichten wegen politischer Verbrechen angeklagt waren. Ihre unverblümte Aussage im Gerichtssaal wird zum einzigen Moment der freien Rede, die im heutigen Russland noch existiert. Die Performance versammelt »letzte Worte« von Angeklagten wie Maria Alyokhina, Nadezhda Tolokonnikova, Alla Gutnikova, Sasha Skochilenko, Zarifa Sautieva und anderen, beleuchtet ihren Mut und zeichnet ein Bild des derzeitigen russischen Regimes.`,
    },
    myRole: {
      en: "Creation and monitoring of the production and performance schedules. Preparation of the stage, scenery, and props for shows. Executed performances as Show Caller & Stage Manager.",
      de: "Erstellung und Überwachung des Produktions- und Aufführungsplans. Vorbereitung von Bühne, Bühnenbild und Requisiten für die Vorstellungen. Durchführung der Aufführungen als Show Caller & Bühnenmanager.",
    },
    team: [
      { role: { en: "Dramaturg", de: "Dramaturgie" }, name: "Anna Narinskaya" },
      { role: { en: "Actress", de: "Schauspielerin" }, name: "Alisa Khazanova" },
      { role: { en: "Actor", de: "Schauspieler" }, name: "Valentin Tszin" },
      { role: { en: "Director", de: "Regie" }, name: "Maxim Didenko" },
      { role: { en: "Set Design", de: "Bühnenbild" }, name: "Pavel Semchenko" },
      { role: { en: "Composition", de: "Komposition" }, name: "Vladimir Rannev" },
    ],
    images: ["/last-word1.jpg", "/last-word2.jpg"],
  },
  {
    id: 6,
    year: "2021",
    title: "Körper / Body",
    role: { en: "Producer", de: "Produzent" },
    description: {
      en: "A contemporary dance-theatre piece exploring corporeality and identity. Presented at HAU Hebbel am Ufer, Berlin. Six sold-out performances, extended by popular demand.",
      de: "Ein zeitgenössisches Tanztheaterstück über Körperlichkeit und Identität. Im HAU Hebbel am Ufer Berlin. Sechs ausverkaufte Vorstellungen, verlängert nach großer Nachfrage.",
    },
    myRole: {
      en: "Independent production from initial pitch to closing night. Sourced funding through Berliner Senat für Kultur, negotiated venue contract, and coordinated marketing.",
      de: "Unabhängige Produktion vom Erstpitch bis zur Schlussvorstellung. Förderung über Berliner Senat für Kultur, Vertragsverhandlungen mit der Venue, Marketing-Koordination.",
    },
    team: [
      { role: { en: "Choreographer & Director", de: "Choreografin & Regisseurin" }, name: "Amara Traoré" },
      { role: { en: "Dancer", de: "Tänzer" }, name: "Paul Seidel" },
      { role: { en: "Dancer", de: "Tänzerin" }, name: "Jana Hofer" },
      { role: { en: "Lighting Designer", de: "Lichtdesignerin" }, name: "Ruth Engel" },
      { role: { en: "Composer", de: "Komponist" }, name: "Samuel Obi" },
    ],
    images: ["project-6.jpg", "project-7.jpg", "project-8.jpg"],
  },
  {
    id: 7,
    year: "2020",
    title: "Die Stille danach",
    role: { en: "Production Assistant → Co-Producer", de: "Produktionsassistent → Co-Produzent" },
    description: {
      en: "A pandemic-era production created in hybrid format: live performance with simultaneous livestream to 4,000 online viewers. Premiered at Volksbühne Berlin.",
      de: "Eine Pandemie-Produktion im Hybridformat: Live-Aufführung mit simultaner Übertragung an 4.000 Online-Zuschauer. Uraufführung an der Volksbühne Berlin.",
    },
    myRole: {
      en: "Managed health & safety protocols for in-person crew, coordinated with streaming technical team, and handled post-production of archive material.",
      de: "Gesundheits- und Sicherheitsprotokolle für das Präsenz-Team, Koordination mit dem Streaming-Technikteam, Nachbereitung des Archivmaterials.",
    },
    team: [
      { role: { en: "Director", de: "Regisseur" }, name: "Olaf Renz" },
      { role: { en: "Stream Director", de: "Stream-Regisseur" }, name: "Tobias Lenz" },
      { role: { en: "Lead Actress", de: "Hauptdarstellerin" }, name: "Miriam Koch" },
      { role: { en: "Dramaturg", de: "Dramaturgin" }, name: "Sara Blum" },
    ],
    images: ["project-9.jpg", "project-10.jpg", "project-1.jpg"],
  },
  {
    id: 8,
    year: "2019",
    title: "Schwarzer Freitag",
    role: { en: "Production Coordinator", de: "Produktionskoordinator" },
    description: {
      en: "A devised piece exploring economic anxiety in contemporary Germany. Created collaboratively over eight weeks. Performed at Theater Neukölln with community audiences.",
      de: "Ein kollektiv erarbeitetes Stück über wirtschaftliche Angst in Deutschland. Acht Wochen Entwicklungszeit. Aufgeführt im Theater Neukölln mit Stadtteilpublikum.",
    },
    myRole: {
      en: "Day-to-day coordination of rehearsals, budget tracking, community outreach programme, and front-of-house management during the run.",
      de: "Tageskoordination der Proben, Budgetverfolgung, Community-Outreach-Programm und Einlassmanagement während der Laufzeit.",
    },
    team: [
      { role: { en: "Director & Author", de: "Regisseur & Autor" }, name: "Martin Zeiske" },
      { role: { en: "Actor", de: "Schauspieler" }, name: "Ben Arndt" },
      { role: { en: "Actress", de: "Schauspielerin" }, name: "Claire Dumont" },
      { role: { en: "Set Designer", de: "Bühnenbildnerin" }, name: "Helena Voss" },
    ],
    images: ["project-2.jpg", "project-3.jpg", "project-4.jpg"],
  },
  {
    id: 9,
    year: "2018",
    title: "Nachtstücke",
    role: { en: "Event & Venue Manager", de: "Veranstaltungs- & Venue-Manager" },
    description: {
      en: "A late-night performance series at Sophiensaele Berlin, pairing emerging theatre makers with composers. Six editions, twelve artists, over 800 attendees per season.",
      de: "Eine Nachtveranstaltungsreihe in den Sophiensaelen Berlin mit Theater- und Kompositionsduos. Sechs Ausgaben, zwölf Künstler, über 800 Besucher pro Saison.",
    },
    myRole: {
      en: "Conceived and managed the entire series: artist selection, scheduling, technical setup, bar & venue operations, and season marketing.",
      de: "Konzeption und Management der gesamten Reihe: Künstlerauswahl, Terminplanung, Technik, Bar- und Venue-Betrieb und Saisonmarketing.",
    },
    team: [
      { role: { en: "Artistic Co-Curator", de: "Künstlerische Co-Kuratorin" }, name: "Iris Bauer" },
      { role: { en: "Resident Composer", de: "Resident Komponist" }, name: "Jens Mehl" },
      { role: { en: "Technical Coordinator", de: "Technische Koordinatorin" }, name: "Petra Wolf" },
    ],
    images: ["project-5.jpg", "project-6.jpg", "project-7.jpg"],
  },
  {
    id: 10,
    year: "2017",
    title: "Grenzen / Borders",
    role: { en: "Assistant Producer", de: "Assistent Produzent" },
    description: {
      en: "An international co-production between Maxim Gorki Theater and partners in Istanbul and Tbilisi. Examined migration and belonging through testimonial performance.",
      de: "Eine internationale Koproduktion des Maxim Gorki Theaters mit Partnern in Istanbul und Tiflis. Thema: Migration und Zugehörigkeit durch Zeugnistheater.",
    },
    myRole: {
      en: "Coordinated partner communications across three countries, supported international travel logistics, and assisted in grant reporting to the EU Creative Europe programme.",
      de: "Koordination der Partnerkommunikation in drei Ländern, internationale Reiselogistik, Unterstützung bei der Berichterstattung an das EU Creative Europe-Programm.",
    },
    team: [
      { role: { en: "Director", de: "Regisseurin" }, name: "Selin Yıldız" },
      { role: { en: "Co-Director", de: "Ko-Regisseur" }, name: "Giorgi Asatiani" },
      { role: { en: "Performer", de: "Performerin" }, name: "Nadia Müller" },
      { role: { en: "Performer", de: "Performer" }, name: "Sasha Ibram" },
      { role: { en: "Dramaturg", de: "Dramaturgin" }, name: "Maya Popov" },
    ],
    images: ["project-8.jpg", "project-9.jpg", "project-10.jpg"],
  },
];
