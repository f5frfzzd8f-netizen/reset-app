const storageKey = "reset-pwa.state.v4";

const statusLabels = {
  clean: "Clean",
  "not-clean": "Nicht clean",
  stopped: "Abgebrochen"
};

const emergencyActions = [
  {
    time: "90 sek",
    title: "Urge surfen",
    text: "Sag dir: Das ist nur eine Welle. Beobachte den Drang, ohne zu handeln, bis er schwächer wird."
  },
  {
    time: "2 min",
    title: "Raum wechseln",
    text: "Steh sofort auf. Geh in Küche, Bad, Balkon oder vor die Tür. Kein Handy im selben Raum."
  },
  {
    time: "3 min",
    title: "Kalter Reset",
    text: "Wasch Gesicht und Hände kalt. Danach zehn ruhige Atemzüge mit beiden Füssen am Boden."
  },
  {
    time: "5 min",
    title: "Blocker-Modus",
    text: "Lege das Gerät weg, aktiviere Fokuszeit oder gib es einer Person in deiner Nähe."
  },
  {
    time: "10 min",
    title: "Körper bewegen",
    text: "Mach Liegestütze, Spaziergang oder Treppen. Ziel ist nicht Fitness, sondern Unterbrechung."
  },
  {
    time: "1 Nachricht",
    title: "Jemandem schreiben",
    text: "Schick eine kurze Nachricht: 'Ich brauche gerade Ablenkung. Kannst du kurz schreiben?'"
  },
  {
    time: "2 min",
    title: "Handy weglegen",
    text: "Lege das Handy ausser Reichweite: Flur, Küche oder in eine Schublade. Nicht neben dich."
  },
  {
    time: "3 min",
    title: "Browser schliessen",
    text: "Schliesse alle Tabs, die in Richtung Konsum führen. Danach öffne nur diese App."
  },
  {
    time: "5 min",
    title: "Wasser trinken",
    text: "Trink ein grosses Glas Wasser langsam aus und bleib dabei stehen."
  },
  {
    time: "4 min",
    title: "Atem zählen",
    text: "Atme vier Sekunden ein, sechs aus. Zähle zehn Atemzüge, ohne nebenbei zu scrollen."
  },
  {
    time: "1 min",
    title: "Licht an",
    text: "Mach helles Licht an und öffne Vorhang oder Fenster. Raus aus der heimlichen Stimmung."
  },
  {
    time: "6 min",
    title: "Duschen",
    text: "Geh direkt duschen. Warm starten, am Ende kalt. Danach frische Kleidung anziehen."
  },
  {
    time: "8 min",
    title: "Spaziergang",
    text: "Schuhe an, Wohnung verlassen, eine kleine Runde. Kein Verhandeln mit dem Drang."
  },
  {
    time: "2 min",
    title: "Trigger benennen",
    text: "Sag laut: Was fühle ich gerade? Stress, Einsamkeit, Langeweile, Müdigkeit oder Druck?"
  },
  {
    time: "3 min",
    title: "Ziel erinnern",
    text: "Schreib einen Satz: Warum will ich pornofrei leben? Mach ihn konkret."
  },
  {
    time: "5 min",
    title: "Push-ups",
    text: "Mach so viele saubere Wiederholungen wie gehen. Danach 30 Sekunden ruhig stehen."
  },
  {
    time: "5 min",
    title: "Treppen",
    text: "Geh ein paar Stockwerke hoch und runter. Körper zuerst, Kopf danach."
  },
  {
    time: "2 min",
    title: "Fokusmodus",
    text: "Aktiviere Fokuszeit, Bildschirmzeit oder App-Limit. Entferne die einfache Abkürzung."
  },
  {
    time: "10 min",
    title: "Öffentlicher Ort",
    text: "Setz dich an einen Ort, an dem Konsum unmöglich wäre: Küche, Café, Bibliothek, Wohnzimmer."
  },
  {
    time: "3 min",
    title: "Urge-Skala",
    text: "Bewerte den Drang von 1 bis 10. Warte zwei Minuten und bewerte erneut."
  },
  {
    time: "1 min",
    title: "Nicht anfassen",
    text: "Hände sichtbar auf den Tisch oder an die Seite. Körperliche Unterbrechung zählt."
  },
  {
    time: "5 min",
    title: "Mini-Aufräumen",
    text: "Räume genau eine Fläche auf: Schreibtisch, Bett, Boden oder Waschbecken."
  },
  {
    time: "7 min",
    title: "Musikwechsel",
    text: "Starte ein Lied, das dich aus der Stimmung holt. Keine traurige oder sexualisierte Playlist."
  },
  {
    time: "3 min",
    title: "Kaugummi",
    text: "Iss etwas Minziges oder kaue Kaugummi. Ein neuer Sinnesreiz kann die Schleife brechen."
  },
  {
    time: "10 min",
    title: "Podcast kurz",
    text: "Starte eine harmlose Folge oder ein Lernvideo und bleib dabei in Bewegung."
  },
  {
    time: "5 min",
    title: "Tagebuch-Satz",
    text: "Schreib: 'Ich will gerade konsumieren, weil ...' Dann schreib eine Alternative."
  },
  {
    time: "2 min",
    title: "Passwort-Hürde",
    text: "Logge dich aus riskanten Seiten aus oder entferne gespeicherte Zugänge."
  },
  {
    time: "5 min",
    title: "Bett verlassen",
    text: "Wenn du im Bett bist: sofort aufstehen. Bett ist Schlaf-Ort, kein Scroll-Ort."
  },
  {
    time: "4 min",
    title: "Fenster auf",
    text: "Öffne das Fenster, atme frische Luft, schau auf etwas Reales draussen."
  },
  {
    time: "8 min",
    title: "Snack machen",
    text: "Mach dir etwas Einfaches zu essen. Hunger oder Müdigkeit tarnen sich oft als Drang."
  },
  {
    time: "2 min",
    title: "Morgen vorstellen",
    text: "Stell dir vor, wie du dich morgen fühlst, wenn du jetzt clean bleibst."
  },
  {
    time: "2 min",
    title: "Rückfall vorspulen",
    text: "Spul ehrlich vor: Wie fühlst du dich zehn Minuten nach Konsum?"
  },
  {
    time: "1 min",
    title: "App wechseln",
    text: "Schliesse die riskante App komplett. Öffne Kalender, Notizen oder diese App."
  },
  {
    time: "5 min",
    title: "Kontaktliste",
    text: "Öffne Kontakte und wähle eine Person, der du notfalls schreiben kannst."
  },
  {
    time: "3 min",
    title: "Body Scan",
    text: "Spüre Füsse, Beine, Bauch, Schultern, Gesicht. Der Drang ist Körpergefühl, kein Befehl."
  },
  {
    time: "6 min",
    title: "Dehnen",
    text: "Dehne Rücken, Hüfte und Nacken. Langsam, ohne Bildschirm."
  },
  {
    time: "10 min",
    title: "Offline gehen",
    text: "WLAN oder mobile Daten aus. Timer stellen. Danach neu entscheiden."
  },
  {
    time: "3 min",
    title: "Accountability",
    text: "Schreib an eine Vertrauensperson: 'Ich bleibe gerade clean. Bitte kurz Daumen drücken.'"
  },
  {
    time: "5 min",
    title: "Warum-Liste",
    text: "Lies oder schreibe drei Gründe, warum du aufhören willst."
  },
  {
    time: "2 min",
    title: "Keine Debatte",
    text: "Sag: 'Ich diskutiere nicht mit dem Drang.' Dann mach eine konkrete Aktion."
  },
  {
    time: "15 min",
    title: "Ort mit Menschen",
    text: "Geh zu Mitbewohnern, Familie, ins Treppenhaus oder an einen belebten Ort."
  },
  {
    time: "4 min",
    title: "Ablenk-Aufgabe",
    text: "Rechne 17er-Schritte rückwärts von 300 oder sortiere zehn Gegenstände."
  },
  {
    time: "10 min",
    title: "Lesen",
    text: "Lies zehn Seiten oder einen Artikel, der nichts mit Sexualität zu tun hat."
  },
  {
    time: "5 min",
    title: "Wäsche",
    text: "Starte Wäsche, falte Kleidung oder räume fünf Kleidungsstücke weg."
  },
  {
    time: "2 min",
    title: "Auslöser entfernen",
    text: "Entferne das Bild, Profil, Video, Chat oder die App, die dich gerade triggert."
  },
  {
    time: "5 min",
    title: "Atem + Stand",
    text: "Steh breit, Schultern locker, atme langsam. Warte, bis dein Puls sinkt."
  },
  {
    time: "10 min",
    title: "Kurz trainieren",
    text: "Mach ein Mini-Workout: Kniebeugen, Plank, Hampelmänner, Pause."
  },
  {
    time: "3 min",
    title: "Heute markieren",
    text: "Drück hier auf Clean oder Abgebrochen. Sichtbarer Fortschritt hilft beim Aussteigen."
  },
  {
    time: "5 min",
    title: "Beten/Meditieren",
    text: "Falls es zu dir passt: bete, meditiere oder sitze still mit einer klaren Absicht."
  },
  {
    time: "2 min",
    title: "Stuhl wechseln",
    text: "Setz dich auf einen anderen Stuhl oder an den Tisch. Kleine Ortswechsel wirken."
  },
  {
    time: "8 min",
    title: "Plan schreiben",
    text: "Schreib die nächsten drei Schritte: aufstehen, Gerät weg, rausgehen."
  },
  {
    time: "5 min",
    title: "Sicherer Bildschirm",
    text: "Öffne etwas Neutrales im Vollbild: Lernstoff, Wetter, Rezept oder Musik."
  },
  {
    time: "3 min",
    title: "Scham stoppen",
    text: "Sag dir: 'Ich bin nicht mein Drang.' Dann wähle die nächste hilfreiche Handlung."
  },
  {
    time: "12 min",
    title: "Erledigung",
    text: "Mach eine kleine Aufgabe, die längst wartet. Abschlussgefühl schlägt Betäubung."
  },
  {
    time: "1 min",
    title: "Timer setzen",
    text: "Setze einen Timer auf zehn Minuten. Bis er klingelt, wird nichts konsumiert."
  }
];

const defaultTriggers = [
  "Kein Trigger",
  "Stress",
  "Langeweile",
  "Einsamkeit",
  "Müdigkeit",
  "Social Media",
  "Bett",
  "Nacht",
  "Druck",
  "Frust",
  "Bad",
  "Sofa",
  "Allein zuhause",
  "Handy im Bett",
  "Computer"
];
const badgeMilestones = [1, 3, 7, 14, 30, 60, 90, 180, 365];
const recoveryLevels = [
  { min: 0, title: "Starter", text: "Du sammelst ehrliche Daten." },
  { min: 3, title: "Aufbauer", text: "Du erkennst erste Muster." },
  { min: 7, title: "Stabiler", text: "Du hast eine echte Serie aufgebaut." },
  { min: 14, title: "Fokus-Profi", text: "Du schützt deine Energie sichtbar." },
  { min: 30, title: "Reset Champion", text: "Du hast ein starkes neues Normal trainiert." },
  { min: 90, title: "Freiheitsmodus", text: "Du spielst langfristig." }
];
const defaultReasons = [
  "Ich will frei entscheiden können.",
  "Ich will morgen stolz aufwachen.",
  "Ich will echte Nähe statt Betäubung.",
  "Ich will meine Energie zurück.",
  "Ich will klarer denken.",
  "Ich will weniger Scham fühlen.",
  "Ich will meine Zeit für echte Ziele nutzen.",
  "Ich will Beziehungen ehrlicher leben.",
  "Ich will nicht von Impulsen gesteuert werden.",
  "Ich will stärker werden, wenn es schwer wird.",
  "Ich will Schlaf und Erholung verbessern.",
  "Ich will mein Selbstvertrauen aufbauen.",
  "Ich will weniger heimlich leben.",
  "Ich will meine Werte ernst nehmen.",
  "Ich will mich wieder mehr spüren.",
  "Ich will nicht in alten Mustern bleiben.",
  "Ich will meine Konzentration schützen.",
  "Ich will meine Sexualität gesünder leben.",
  "Ich will langfristig stolz auf mich sein.",
  "Ich will echte Verbindung suchen.",
  "Ich will Stress anders regulieren lernen.",
  "Ich will mich nicht mehr danach leer fühlen.",
  "Ich will meine Grenzen respektieren.",
  "Ich will mein Handy bewusster nutzen.",
  "Ich will schwierige Gefühle aushalten können.",
  "Ich will ehrlich mit mir sein.",
  "Ich will weniger Zeit verlieren.",
  "Ich will mein Gehirn neu trainieren.",
  "Ich will nicht vor Einsamkeit fliehen.",
  "Ich will meine Zukunft nicht sabotieren.",
  "Ich will Geduld mit mir lernen.",
  "Ich will mehr Disziplin in kleinen Momenten.",
  "Ich will meinem Körper gut begegnen.",
  "Ich will nicht mehr automatisch reagieren.",
  "Ich will Rückfälle verstehen statt verdrängen.",
  "Ich will stolz auf meine Abende sein.",
  "Ich will bessere Gewohnheiten aufbauen.",
  "Ich will meinen Fokus zurückholen.",
  "Ich will weniger Trigger suchen.",
  "Ich will mein Leben aktiver gestalten.",
  "Ich will echten Trost statt schnellen Kick.",
  "Ich will Frieden mit mir selbst.",
  "Ich will Nähe nicht durch Bildschirm ersetzen.",
  "Ich will Verantwortung übernehmen.",
  "Ich will meine Ziele nicht aus den Augen verlieren.",
  "Ich will lernen, Nein zu sagen.",
  "Ich will meinen Fortschritt sehen.",
  "Ich will sauberer mit Rückschlägen umgehen.",
  "Ich will freier, ruhiger und klarer werden.",
  "Ich will heute gewinnen, nicht irgendwann."
];
const defaultMotivations = [
  "Heute reicht der nächste gute Schritt.",
  "Du musst nur diese eine Welle überstehen.",
  "Der Drang ist laut, aber nicht dein Chef.",
  "Zehn Minuten clean bleiben ist jetzt ein Sieg.",
  "Du musst dich nicht perfekt fühlen, um richtig zu handeln.",
  "Steh auf, wechsel den Ort, ändere den Verlauf.",
  "Morgen dankt dir für diese Entscheidung.",
  "Nicht verhandeln, handeln.",
  "Ein Rückfall beginnt oft mit einem kleinen Ja. Sag jetzt Nein.",
  "Du bist nicht dein Impuls.",
  "Scham will dich verstecken lassen. Fortschritt will Licht.",
  "Du trainierst Freiheit, nicht Perfektion.",
  "Jede unterbrochene Schleife zählt.",
  "Du kannst dich schlecht fühlen und trotzdem clean bleiben.",
  "Der Drang steigt, bleibt kurz und fällt wieder.",
  "Nimm das Handy aus dem Raum. Jetzt.",
  "Du brauchst keinen Kick, du brauchst einen Wechsel.",
  "Heute ist ein Baustein, kein Endurteil.",
  "Du kannst die nächsten zwei Minuten schaffen.",
  "Der Ausstieg beginnt mitten im Drang.",
  "Ehrlichkeit ist stärker als Heimlichkeit.",
  "Du bist schon weiter, sobald du stoppst.",
  "Nicht clean zu werden ist kein Zufall, sondern Übung.",
  "Dein Ziel ist wichtiger als diese Welle.",
  "Mach es dir schwer zu konsumieren und leicht zu gehen.",
  "Dein Körper braucht Bewegung, nicht Scrollen.",
  "Du willst frei sein. Handle wie jemand, der frei wird.",
  "Ein klarer Abend ist mehr wert als ein kurzer Kick.",
  "Du darfst neu starten, ohne dich fertigzumachen.",
  "Halte Abstand zum Trigger, nicht zu dir selbst.",
  "Kleine Schutzmaßnahmen retten große Ziele.",
  "Heute nicht. Das ist genug.",
  "Der Moment geht vorbei. Deine Entscheidung bleibt.",
  "Du musst den Gedanken nicht fertigdenken.",
  "Raus aus dem Zimmer, raus aus der Schleife.",
  "Wenn es dringend wirkt, ist genau dann Pause wichtig.",
  "Du schuldest dem Drang keine Antwort.",
  "Ein sauberer Morgen beginnt jetzt.",
  "Du baust Vertrauen in dich auf.",
  "Mach den nächsten Schritt sichtbar: Wasser, Licht, Bewegung.",
  "Du kannst abbrechen, auch wenn du schon angefangen hast.",
  "Clean bleiben ist Selbstrespekt in Aktion.",
  "Du wirst stärker durch wiederholtes Stoppen.",
  "Der schnellste Weg raus ist eine konkrete Handlung.",
  "Du brauchst gerade Unterstützung, nicht Verurteilung.",
  "Nicht allein im Kopf bleiben: schreib, geh, atme.",
  "Der Wunsch nach Konsum ist ein Signal, kein Befehl.",
  "Du hast schon schwierige Momente überstanden.",
  "Wähle die Version von dir, die morgen aufrechter steht.",
  "Jetzt ist der Trainingsmoment."
];

const builtInEmergencyActions = emergencyActions.map((action, index) => ({
  ...action,
  id: `built-in-${index}`
}));

const state = loadState();
let calendarCursor = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
let selectedEmergencyAction = null;
let timerInterval = null;
let timerTotalSeconds = 0;
let timerRemainingSeconds = 0;
let noteAutosaveTimer = null;
let noteFeedbackTimer = null;
let reasonRotationTimer = null;
let motivationRotationTimer = null;

const streakDays = document.querySelector("#streakDays");
const appEyebrow = document.querySelector(".topbar .eyebrow");
const heroTitle = document.querySelector(".hero h1");
const recordDays = document.querySelector("#recordDays");
const streakLabel = document.querySelector("#streakLabel");
const lastSetback = document.querySelector("#lastSetback");
const todayLabel = document.querySelector("#todayLabel");
const statusHint = document.querySelector("#statusHint");
const statusGrid = document.querySelector("#statusGrid");
const triggerGrid = document.querySelector("#triggerGrid");
const triggerForm = document.querySelector("#triggerForm");
const customTriggerInput = document.querySelector("#customTriggerInput");
const cravingRange = document.querySelector("#cravingRange");
const cravingValue = document.querySelector("#cravingValue");
const checkinNote = document.querySelector("#checkinNote");
const saveCheckinNoteButton = document.querySelector("#saveCheckinNoteButton");
const noteSaveStatus = document.querySelector("#noteSaveStatus");
const privacyButton = document.querySelector("#privacyButton");
const privacyCard = document.querySelector("#privacyCard");
const exportButton = document.querySelector("#exportButton");
const heroEmergencyButton = document.querySelector("#heroEmergencyButton");
const relapseBox = document.querySelector("#relapseBox");
const relapseTimeInput = document.querySelector("#relapseTimeInput");
const relapseSituationInput = document.querySelector("#relapseSituationInput");
const relapseTriggerInput = document.querySelector("#relapseTriggerInput");
const relapseBeforeInput = document.querySelector("#relapseBeforeInput");
const relapseEarlierInput = document.querySelector("#relapseEarlierInput");
const relapseNextInput = document.querySelector("#relapseNextInput");
const saveRelapseButton = document.querySelector("#saveRelapseButton");
const stoppedBox = document.querySelector("#stoppedBox");
const stoppedTimeInput = document.querySelector("#stoppedTimeInput");
const stoppedSituationInput = document.querySelector("#stoppedSituationInput");
const saveStoppedButton = document.querySelector("#saveStoppedButton");
const featuredTime = document.querySelector("#featuredTime");
const featuredTitle = document.querySelector("#featuredTitle");
const featuredText = document.querySelector("#featuredText");
const randomEmergency = document.querySelector("#randomEmergency");
const startFeaturedButton = document.querySelector("#startFeaturedButton");
const quickActions = document.querySelector("#quickActions");
const customEmergencyForm = document.querySelector("#customEmergencyForm");
const customEmergencyTitle = document.querySelector("#customEmergencyTitle");
const customEmergencyMinutes = document.querySelector("#customEmergencyMinutes");
const customEmergencyText = document.querySelector("#customEmergencyText");
const historyList = document.querySelector("#historyList");
const emptyHistory = document.querySelector("#emptyHistory");
const resetButton = document.querySelector("#resetButton");
const calendarTitle = document.querySelector("#calendarTitle");
const calendarGrid = document.querySelector("#calendarGrid");
const prevMonthButton = document.querySelector("#prevMonthButton");
const nextMonthButton = document.querySelector("#nextMonthButton");
const focusOverlay = document.querySelector("#focusOverlay");
const focusTitle = document.querySelector("#focusTitle");
const focusText = document.querySelector("#focusText");
const timerDisplay = document.querySelector("#timerDisplay");
const timerProgress = document.querySelector("#timerProgress");
const startTimerButton = document.querySelector("#startTimerButton");
const emergencySuccessButton = document.querySelector("#emergencySuccessButton");
const cancelTimerButton = document.querySelector("#cancelTimerButton");
const closeFocusButton = document.querySelector("#closeFocusButton");
const dayOverlay = document.querySelector("#dayOverlay");
const dayModalTitle = document.querySelector("#dayModalTitle");
const dayStatusPill = document.querySelector("#dayStatusPill");
const dayNoteText = document.querySelector("#dayNoteText");
const closeDayButton = document.querySelector("#closeDayButton");
const statCleanRate = document.querySelector("#statCleanRate");
const statCheckins = document.querySelector("#statCheckins");
const statAverageCraving = document.querySelector("#statAverageCraving");
const statBestMonth = document.querySelector("#statBestMonth");
const statEmergencyUses = document.querySelector("#statEmergencyUses");
const statEmergencySuccess = document.querySelector("#statEmergencySuccess");
const statBestEmergency = document.querySelector("#statBestEmergency");
const triggerAnalysis = document.querySelector("#triggerAnalysis");
const trendAnalysis = document.querySelector("#trendAnalysis");
const triggerRiskAnalysis = document.querySelector("#triggerRiskAnalysis");
const protectiveAnalysis = document.querySelector("#protectiveAnalysis");
const weeklyReport = document.querySelector("#weeklyReport");
const riskLevel = document.querySelector("#riskLevel");
const trendSummary = document.querySelector("#trendSummary");
const heroRiskLevel = document.querySelector("#heroRiskLevel");
const heroTrendSummary = document.querySelector("#heroTrendSummary");
const reflectionText = document.querySelector("#reflectionText");
const trendActions = document.querySelector("#trendActions");
const trendEmergencyButton = document.querySelector("#trendEmergencyButton");
const trendPlanButton = document.querySelector("#trendPlanButton");
const badgeGrid = document.querySelector("#badgeGrid");
const levelCard = document.querySelector("#levelCard");
const planForm = document.querySelector("#planForm");
const planInput = document.querySelector("#planInput");
const planList = document.querySelector("#planList");
const reasonForm = document.querySelector("#reasonForm");
const reasonInput = document.querySelector("#reasonInput");
const reasonCard = document.querySelector("#reasonCard");
const motivationCard = document.querySelector("#motivationCard");
const newMotivationButton = document.querySelector("#newMotivationButton");
const newReasonButton = document.querySelector("#newReasonButton");
const celebration = document.querySelector("#celebration");
const celebrationTitle = document.querySelector("#celebrationTitle");
const celebrationText = document.querySelector("#celebrationText");
const tabButtons = document.querySelectorAll("[data-tab-target]");
const tabSections = document.querySelectorAll("[data-tab]");
const dayStatusSelect = document.querySelector("#dayStatusSelect");
const dayNoteEdit = document.querySelector("#dayNoteEdit");
const saveDayButton = document.querySelector("#saveDayButton");
let selectedDayKey = dateKey();

function loadState() {
  const fallback = {
    checkins: [],
    featuredActionIndex: 0,
    favoriteEmergencyIds: [],
    customEmergencyActions: [],
    emergencyLog: [],
    emergencyOrder: [],
    customTriggers: [],
    reasons: defaultReasons,
    dailyPlans: {},
    privacyMode: false
  };

  try {
    const stored = JSON.parse(localStorage.getItem(storageKey));
    return {
      ...fallback,
      ...stored,
      favoriteEmergencyIds: stored?.favoriteEmergencyIds ?? [],
      customEmergencyActions: stored?.customEmergencyActions ?? [],
      emergencyLog: stored?.emergencyLog ?? [],
      emergencyOrder: stored?.emergencyOrder ?? [],
      customTriggers: normalizeCustomTriggers(stored?.customTriggers),
      reasons: normalizeReasons(stored?.reasons),
      dailyPlans: stored?.dailyPlans ?? {},
      privacyMode: Boolean(stored?.privacyMode)
    };
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function normalizeReasons(storedReasons) {
  if (!Array.isArray(storedReasons) || storedReasons.length === 0) {
    return defaultReasons;
  }

  const oldDefaults = ["Ich will frei entscheiden können.", "Ich will morgen stolz aufwachen."];
  const onlyOldDefaults =
    storedReasons.length <= oldDefaults.length && storedReasons.every((reason) => oldDefaults.includes(reason));

  if (onlyOldDefaults) {
    return defaultReasons;
  }

  return [...new Set([...storedReasons, ...defaultReasons])];
}

function normalizeCustomTriggers(storedTriggers) {
  if (!Array.isArray(storedTriggers)) {
    return [];
  }

  return [...new Set(storedTriggers.map((trigger) => String(trigger).trim()).filter(Boolean))]
    .filter((trigger) => !defaultTriggers.includes(trigger));
}

function createId(prefix) {
  if (globalThis.crypto?.randomUUID) {
    return `${prefix}-${globalThis.crypto.randomUUID()}`;
  }

  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function dateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDay(value) {
  return new Intl.DateTimeFormat("de-CH", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit"
  }).format(new Date(`${value}T12:00:00`));
}

function daysBetween(from, to) {
  const start = new Date(`${from}T00:00:00`);
  const end = new Date(`${to}T00:00:00`);
  return Math.round((end - start) / 86400000);
}

function getTodayCheckin() {
  return state.checkins.find((entry) => entry.date === dateKey());
}

function getCheckinByDate(value) {
  return state.checkins.find((entry) => entry.date === value);
}

function ensureCheckin(date = dateKey()) {
  let entry = getCheckinByDate(date);

  if (!entry) {
    entry = {
      id: createId("checkin"),
      date,
      status: "",
      note: "",
      triggers: [],
      craving: 0,
      relapseTrigger: "",
      relapseTime: "",
      relapseSituation: "",
      relapseBefore: "",
      relapseEarlier: "",
      stoppedTime: "",
      stoppedSituation: "",
      nextStep: "",
      updatedAt: new Date().toISOString()
    };
    state.checkins.unshift(entry);
  }

  return entry;
}

function getEmergencyActions() {
  const actions = [...builtInEmergencyActions, ...state.customEmergencyActions];
  const order = state.emergencyOrder.length ? state.emergencyOrder : actions.map((action) => action.id);
  return [...actions].sort((a, b) => {
    const aIndex = order.indexOf(a.id);
    const bIndex = order.indexOf(b.id);
    return (aIndex === -1 ? 9999 : aIndex) - (bIndex === -1 ? 9999 : bIndex);
  });
}

function getFeaturedAction() {
  const actions = getEmergencyActions();
  return actions[state.featuredActionIndex % actions.length] ?? actions[0];
}

function isFavorite(action) {
  return state.favoriteEmergencyIds.includes(action.id);
}

function sortEmergencyActions(actions) {
  return [...actions].sort((a, b) => {
    const favoriteScore = Number(isFavorite(b)) - Number(isFavorite(a));
    if (favoriteScore !== 0) {
      return favoriteScore;
    }

    return Number(Boolean(b.custom)) - Number(Boolean(a.custom));
  });
}

function bindPress(element, handler) {
  let lastPress = 0;

  element.addEventListener("pointerup", (event) => {
    lastPress = Date.now();
    event.preventDefault();
    handler(event);
  });

  element.addEventListener("touchend", (event) => {
    if (Date.now() - lastPress < 450) {
      return;
    }

    lastPress = Date.now();
    event.preventDefault();
    handler(event);
  });

  element.addEventListener("click", (event) => {
    if (Date.now() - lastPress < 450) {
      return;
    }

    handler(event);
  });
}

function setStatus(status) {
  const previousRecord = getRecordStreak();
  const today = dateKey();
  const entry = ensureCheckin(today);
  entry.status = status;
  entry.note = checkinNote.value.trim();
  entry.triggers = getSelectedTriggers();
  entry.craving = Number(cravingRange.value);
  entry.updatedAt = new Date().toISOString();

  saveState();
  render();
  maybeCelebrateMilestone(previousRecord, getRecordStreak());
}

function getCurrentStreak() {
  const sorted = [...state.checkins].sort((a, b) => b.date.localeCompare(a.date));
  let current = 0;
  let cursor = dateKey();

  for (const entry of sorted) {
    if (entry.date !== cursor) {
      const gap = daysBetween(entry.date, cursor);
      if (gap > 1) {
        break;
      }
      cursor = entry.date;
    }

    if (entry.status !== "clean") {
      break;
    }

    current += 1;
    const previous = new Date(`${cursor}T12:00:00`);
    previous.setDate(previous.getDate() - 1);
    cursor = dateKey(previous);
  }

  return current;
}

function getRecordStreak() {
  const sorted = [...state.checkins]
    .filter((entry) => entry.status)
    .sort((a, b) => a.date.localeCompare(b.date));

  let record = 0;
  let current = 0;
  let previousCleanDate = null;

  for (const entry of sorted) {
    if (entry.status !== "clean") {
      current = 0;
      previousCleanDate = null;
      continue;
    }

    if (previousCleanDate && daysBetween(previousCleanDate, entry.date) === 1) {
      current += 1;
    } else {
      current = 1;
    }

    previousCleanDate = entry.date;
    record = Math.max(record, current);
  }

  return record;
}

function getLastSetback() {
  return state.checkins.find((entry) => entry.status === "not-clean" || entry.status === "stopped");
}

function rotateEmergency() {
  const actions = getEmergencyActions();
  state.featuredActionIndex = Math.floor(Math.random() * actions.length);
  saveState();
  renderEmergency();
  openEmergency(getFeaturedAction());
}

function parseActionSeconds(action) {
  if (action.seconds) {
    return action.seconds;
  }

  const time = action.time;
  const number = Number.parseInt(time, 10);

  if (time.includes("sek")) {
    return Number.isNaN(number) ? 90 : number;
  }

  if (time.includes("Nachricht")) {
    return 180;
  }

  return (Number.isNaN(number) ? 5 : number) * 60;
}

function formatTimer(seconds) {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(rest).padStart(2, "0")}`;
}

function updateTimerDisplay() {
  timerDisplay.textContent = formatTimer(timerRemainingSeconds);
  const progress = timerTotalSeconds > 0 ? 1 - timerRemainingSeconds / timerTotalSeconds : 0;
  timerProgress.style.width = `${Math.max(0, Math.min(100, progress * 100))}%`;
}

function openEmergency(action) {
  selectedEmergencyAction = action;
  timerTotalSeconds = parseActionSeconds(action);
  timerRemainingSeconds = timerTotalSeconds;
  stopTimer(false);

  focusTitle.textContent = action.title;
  focusText.textContent = action.text;
  startTimerButton.textContent = "Start";
  startTimerButton.disabled = false;
  focusOverlay.hidden = false;
  document.body.classList.add("modal-open");
  updateTimerDisplay();
}

function closeEmergency() {
  stopTimer(false);
  focusOverlay.hidden = true;
  document.body.classList.remove("modal-open");
}

function markEmergencySuccess() {
  if (!selectedEmergencyAction) {
    return;
  }

  state.emergencyLog = [
    {
      id: createId("emergency"),
      actionId: selectedEmergencyAction.id,
      title: selectedEmergencyAction.title,
      success: true,
      createdAt: new Date().toISOString()
    },
    ...state.emergencyLog
  ];
  saveState();
  renderStats();
  closeEmergency();
  celebrationTitle.textContent = "Drang überwunden";
  celebrationText.textContent = "Du hast eine Notfallhilfe genutzt und bist ausgestiegen.";
  celebration.hidden = false;
  window.setTimeout(() => {
    celebration.hidden = true;
  }, 2200);
}

function startTimer() {
  if (!selectedEmergencyAction || timerInterval) {
    return;
  }

  startTimerButton.textContent = "Läuft";
  startTimerButton.disabled = true;
  updateTimerDisplay();

  timerInterval = window.setInterval(() => {
    timerRemainingSeconds -= 1;
    updateTimerDisplay();

    if (timerRemainingSeconds <= 0) {
      stopTimer(true);
    }
  }, 1000);
}

function stopTimer(completed) {
  if (timerInterval) {
    window.clearInterval(timerInterval);
    timerInterval = null;
  }

  if (completed) {
    timerRemainingSeconds = 0;
    updateTimerDisplay();
    startTimerButton.textContent = "Geschafft";
  }
}

function resetAll() {
  const confirmed = window.confirm("Alle lokalen Daten dieser App löschen?");
  if (!confirmed) {
    return;
  }

  state.checkins = [];
  state.featuredActionIndex = 0;
  state.favoriteEmergencyIds = [];
  state.customEmergencyActions = [];
  state.emergencyLog = [];
  state.emergencyOrder = [];
  state.customTriggers = [];
  state.reasons = defaultReasons;
  state.dailyPlans = {};
  state.privacyMode = false;
  saveState();
  render();
}

function saveRelapseReview() {
  const entry = ensureCheckin(dateKey());
  entry.relapseTime = relapseTimeInput.value;
  entry.relapseSituation = relapseSituationInput.value;
  entry.relapseTrigger = relapseTriggerInput.value.trim();
  entry.relapseBefore = relapseBeforeInput.value.trim();
  entry.relapseEarlier = relapseEarlierInput.value.trim();
  entry.nextStep = relapseNextInput.value.trim();
  entry.updatedAt = new Date().toISOString();
  saveState();
  showNoteFeedback("Auswertung gespeichert");
  render();
}

function saveStoppedReview() {
  const entry = ensureCheckin(dateKey());
  entry.stoppedTime = stoppedTimeInput.value;
  entry.stoppedSituation = stoppedSituationInput.value;
  entry.updatedAt = new Date().toISOString();
  saveState();
  showNoteFeedback("Abbruch gespeichert");
  render();
}

function showNoteFeedback(text) {
  noteSaveStatus.textContent = text;
  window.clearTimeout(noteFeedbackTimer);
  noteFeedbackTimer = window.setTimeout(() => {
    noteSaveStatus.textContent = "";
    saveCheckinNoteButton.classList.remove("saved");
  }, 2200);
}

function animateNoteSave() {
  saveCheckinNoteButton.classList.remove("saving", "saved");
  saveCheckinNoteButton.textContent = "Speichert...";
  window.requestAnimationFrame(() => {
    saveCheckinNoteButton.classList.add("saving");
  });

  window.setTimeout(() => {
    saveCheckinNoteButton.classList.remove("saving");
    saveCheckinNoteButton.classList.add("saved");
    saveCheckinNoteButton.textContent = "Gespeichert";
  }, 260);

  window.setTimeout(() => {
    saveCheckinNoteButton.classList.remove("saved");
    saveCheckinNoteButton.textContent = "Notiz speichern";
  }, 1600);
}

function saveTodayNote({ feedback = true, renderAfterSave = false } = {}) {
  const entry = ensureCheckin(dateKey());
  entry.note = checkinNote.value.trim();
  entry.triggers = getSelectedTriggers();
  entry.craving = Number(cravingRange.value);
  entry.updatedAt = new Date().toISOString();

  saveState();

  if (renderAfterSave) {
    render();
  } else {
    renderCalendar();
    renderTrendWarnings();
  }

  if (feedback) {
    animateNoteSave();
    showNoteFeedback("Notiz gespeichert");
  }
}

function getSelectedTriggers() {
  return [...triggerGrid.querySelectorAll(".trigger-chip.active")]
    .map((button) => button.dataset.trigger)
    .filter((trigger) => trigger && trigger !== "Kein Trigger");
}

function saveTodayMeta() {
  const entry = ensureCheckin(dateKey());
  entry.triggers = getSelectedTriggers();
  entry.craving = Number(cravingRange.value);
  entry.updatedAt = new Date().toISOString();
  saveState();
  renderStats();
  renderTrendWarnings();
  renderCalendar();
}

function scheduleNoteAutosave() {
  window.clearTimeout(noteAutosaveTimer);
  noteAutosaveTimer = window.setTimeout(() => {
    saveTodayNote({ feedback: true, renderAfterSave: false });
  }, 450);
}

function getTriggerOptions() {
  return [...new Set([...defaultTriggers, ...state.customTriggers])];
}

function addCustomTrigger(event) {
  event.preventDefault();
  const value = customTriggerInput.value.trim();
  if (!value) {
    customTriggerInput.focus();
    return;
  }

  if (!getTriggerOptions().includes(value)) {
    state.customTriggers.unshift(value);
    saveState();
  }

  const entry = ensureCheckin(dateKey());
  entry.triggers = [...new Set([...(entry.triggers ?? []).filter((trigger) => trigger !== "Kein Trigger"), value])];
  entry.updatedAt = new Date().toISOString();
  customTriggerInput.value = "";
  saveState();
  renderCounter();
  renderStats();
  renderTrendWarnings();
  customTriggerInput.focus();
}

function toggleFavorite(actionId) {
  if (state.favoriteEmergencyIds.includes(actionId)) {
    state.favoriteEmergencyIds = state.favoriteEmergencyIds.filter((id) => id !== actionId);
  } else {
    state.favoriteEmergencyIds = [actionId, ...state.favoriteEmergencyIds];
  }

  saveState();
  renderEmergency();
}

function addCustomEmergency(event) {
  event.preventDefault();

  const title = customEmergencyTitle.value.trim();
  const minutes = Number.parseInt(customEmergencyMinutes.value, 10);
  const text = customEmergencyText.value.trim();

  if (!title || Number.isNaN(minutes) || minutes < 1) {
    customEmergencyTitle.focus();
    return;
  }

  const safeMinutes = Math.min(minutes, 60);
  state.customEmergencyActions = [
    {
      id: createId("custom"),
      title,
      time: `${safeMinutes} min`,
      seconds: safeMinutes * 60,
      text: text || "Fuehre diese Taetigkeit aus, bis der Timer abgelaufen ist.",
      custom: true
    },
    ...state.customEmergencyActions
  ];

  customEmergencyForm.reset();
  saveState();
  renderEmergency();
}

function deleteCustomEmergency(actionId) {
  state.customEmergencyActions = state.customEmergencyActions.filter((action) => action.id !== actionId);
  state.favoriteEmergencyIds = state.favoriteEmergencyIds.filter((id) => id !== actionId);
  saveState();
  renderEmergency();
}

function renderCounter() {
  const streak = getCurrentStreak();
  const record = getRecordStreak();
  const today = getTodayCheckin();
  const setback = getLastSetback();

  streakDays.textContent = streak;
  recordDays.textContent = record;
  streakLabel.textContent = streak === 1 ? "1 Tag bewusst gewählt" : `${streak} Tage bewusst gewählt`;
  todayLabel.textContent = new Intl.DateTimeFormat("de-CH", { weekday: "long" }).format(new Date());

  if (today?.status === "clean") {
    statusHint.textContent = "Stark. Heute ist eingetragen. Morgen zählt wieder nur der nächste Schritt.";
  } else if (today?.status === "not-clean") {
    statusHint.textContent = "Ehrlich markiert. Kein Selbsthass: Umgebung ändern, Auslöser notieren, neu starten.";
  } else if (today?.status === "stopped") {
    statusHint.textContent = "Wichtig: Du hast abgebrochen. Das ist ein trainierter Ausstieg, nicht egal.";
  } else {
    statusHint.textContent = "Ein ehrlicher Check-in reicht. Kein Drama, nur nächster Schritt.";
  }

  if (document.activeElement !== checkinNote) {
    checkinNote.value = today?.note ?? "";
  }
  relapseBox.hidden = today?.status !== "not-clean";
  stoppedBox.hidden = today?.status !== "stopped";
  if (document.activeElement !== relapseTimeInput) {
    relapseTimeInput.value = today?.relapseTime ?? "";
  }
  if (document.activeElement !== relapseSituationInput) {
    relapseSituationInput.value = today?.relapseSituation ?? "";
  }
  if (document.activeElement !== relapseTriggerInput) {
    relapseTriggerInput.value = today?.relapseTrigger ?? "";
  }
  if (document.activeElement !== relapseBeforeInput) {
    relapseBeforeInput.value = today?.relapseBefore ?? "";
  }
  if (document.activeElement !== relapseEarlierInput) {
    relapseEarlierInput.value = today?.relapseEarlier ?? "";
  }
  if (document.activeElement !== relapseNextInput) {
    relapseNextInput.value = today?.nextStep ?? "";
  }
  if (document.activeElement !== stoppedTimeInput) {
    stoppedTimeInput.value = today?.stoppedTime ?? "";
  }
  if (document.activeElement !== stoppedSituationInput) {
    stoppedSituationInput.value = today?.stoppedSituation ?? "";
  }
  cravingRange.value = today?.craving ?? 0;
  cravingValue.textContent = cravingRange.value;

  lastSetback.textContent = setback
    ? `Letzter Rückfall/Abbruch: ${formatDay(setback.date)}`
    : "Noch kein Rückfall eingetragen.";

  statusGrid.querySelectorAll("[data-status]").forEach((button) => {
    button.classList.toggle("active", button.dataset.status === today?.status);
    button.setAttribute("aria-pressed", String(button.dataset.status === today?.status));
  });
  renderTriggers(today?.triggers ?? []);
}

function renderTriggers(selected = []) {
  triggerGrid.innerHTML = "";
  const selectedSet = new Set(selected);

  getTriggerOptions().forEach((trigger) => {
    const button = document.createElement("button");
    button.type = "button";
    const noTriggerActive = trigger === "Kein Trigger" && selectedSet.size === 0;
    button.className = `trigger-chip${selectedSet.has(trigger) || noTriggerActive ? " active" : ""}${trigger === "Kein Trigger" ? " none" : ""}`;
    button.dataset.trigger = trigger;
    button.textContent = trigger;
    bindPress(button, () => {
      if (trigger === "Kein Trigger") {
        triggerGrid.querySelectorAll(".trigger-chip.active").forEach((chip) => chip.classList.remove("active"));
        button.classList.add("active");
      } else {
        triggerGrid.querySelector('[data-trigger="Kein Trigger"]')?.classList.remove("active");
        button.classList.toggle("active");
      }
      saveTodayMeta();
    });
    triggerGrid.append(button);
  });
}

function renderEmergency() {
  const featured = getFeaturedAction();
  featuredTime.textContent = featured.time;
  featuredTitle.textContent = featured.title;
  featuredText.textContent = featured.text;

  quickActions.innerHTML = "";
  sortEmergencyActions(getEmergencyActions())
    .filter((action) => action.id !== featured.id)
    .slice(0, 50)
    .forEach((action) => {
      const row = document.createElement("div");
      row.className = `quick-action${isFavorite(action) ? " favorite" : ""}${action.custom ? " custom" : ""}`;

      const openButton = document.createElement("button");
      openButton.type = "button";
      openButton.className = "quick-action-main";
      openButton.innerHTML = `<strong>${action.title}</strong><span>${action.time}</span>`;
      bindPress(openButton, () => {
        state.featuredActionIndex = getEmergencyActions().findIndex((item) => item.id === action.id);
        saveState();
        renderEmergency();
        openEmergency(action);
      });

      const heartButton = document.createElement("button");
      heartButton.type = "button";
      heartButton.className = "heart-button";
      heartButton.setAttribute("aria-label", isFavorite(action) ? "Favorit entfernen" : "Favorisieren");
      heartButton.title = isFavorite(action) ? "Favorit entfernen" : "Favorisieren";
      heartButton.textContent = isFavorite(action) ? "♥" : "♡";
      bindPress(heartButton, () => toggleFavorite(action.id));

      row.append(openButton, heartButton);

      const upButton = document.createElement("button");
      upButton.type = "button";
      upButton.className = "move-emergency-button";
      upButton.setAttribute("aria-label", "Nach oben");
      upButton.textContent = "↑";
      bindPress(upButton, () => moveEmergencyAction(action.id, -1));

      const downButton = document.createElement("button");
      downButton.type = "button";
      downButton.className = "move-emergency-button";
      downButton.setAttribute("aria-label", "Nach unten");
      downButton.textContent = "↓";
      bindPress(downButton, () => moveEmergencyAction(action.id, 1));

      row.append(upButton, downButton);

      if (action.custom) {
        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "delete-emergency-button";
        deleteButton.setAttribute("aria-label", "Eigene Aktion löschen");
        deleteButton.title = "Eigene Aktion löschen";
        deleteButton.textContent = "×";
        bindPress(deleteButton, () => deleteCustomEmergency(action.id));
        row.append(deleteButton);
      }

      quickActions.append(row);
    });
}

function moveEmergencyAction(actionId, direction) {
  const ids = getEmergencyActions().map((action) => action.id);
  const index = ids.indexOf(actionId);
  const nextIndex = index + direction;
  if (index < 0 || nextIndex < 0 || nextIndex >= ids.length) return;

  [ids[index], ids[nextIndex]] = [ids[nextIndex], ids[index]];
  state.emergencyOrder = ids;
  saveState();
  renderEmergency();
}

function renderCalendar() {
  const year = calendarCursor.getFullYear();
  const month = calendarCursor.getMonth();
  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const leadingBlanks = (firstDay.getDay() + 6) % 7;

  calendarTitle.textContent = new Intl.DateTimeFormat("de-CH", {
    month: "long",
    year: "numeric"
  }).format(calendarCursor);

  calendarGrid.innerHTML = "";

  for (let index = 0; index < leadingBlanks; index += 1) {
    const empty = document.createElement("span");
    empty.className = "calendar-day empty";
    calendarGrid.append(empty);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(year, month, day);
    const key = dateKey(date);
    const checkin = getCheckinByDate(key);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `calendar-day${checkin?.status ? ` ${checkin.status}` : ""}${checkin?.note ? " has-note" : ""}${key === dateKey() ? " today" : ""}`;
    const ariaStatus = checkin?.status ? statusLabels[checkin.status] : "kein Check-in";
    button.setAttribute("aria-label", `${formatDay(key)}: ${ariaStatus}`);
    button.textContent = day;
    bindPress(button, () => openDayDetails(key));
    calendarGrid.append(button);
  }
}

function openDayDetails(dayKey) {
  selectedDayKey = dayKey;
  const checkin = getCheckinByDate(dayKey);
  const status = checkin?.status ? statusLabels[checkin.status] : "Kein Check-in";

  dayModalTitle.textContent = formatDay(dayKey);
  dayStatusPill.textContent = status;
  dayStatusPill.className = `day-status-pill${checkin?.status ? ` ${checkin.status}` : ""}`;
  const details = [
    checkin?.note || "Keine Notiz gespeichert.",
    checkin?.triggers?.length ? `\nTrigger: ${checkin.triggers.join(", ")}` : "",
    checkin?.craving ? `\nDrang: ${checkin.craving}/10` : "",
    checkin?.relapseTime ? `\nUhrzeit: ${checkin.relapseTime}` : "",
    checkin?.relapseSituation ? `\nSituation: ${checkin.relapseSituation}` : "",
    checkin?.relapseTrigger ? `\nAuslöser: ${checkin.relapseTrigger}` : "",
    checkin?.relapseBefore ? `\n30 Minuten vorher: ${checkin.relapseBefore}` : "",
    checkin?.relapseEarlier ? `\nHätte früher geholfen: ${checkin.relapseEarlier}` : "",
    checkin?.stoppedTime ? `\nAbbruch-Uhrzeit: ${checkin.stoppedTime}` : "",
    checkin?.stoppedSituation ? `\nAbbruch-Situation: ${checkin.stoppedSituation}` : "",
    checkin?.nextStep ? `\nNächstes Mal früher: ${checkin.nextStep}` : ""
  ].join("");
  dayNoteText.textContent = details;
  dayStatusSelect.value = checkin?.status ?? "";
  dayNoteEdit.value = checkin?.note ?? "";
  dayOverlay.hidden = false;
  document.body.classList.add("modal-open");
}

function saveDayDetails() {
  const status = dayStatusSelect.value;
  const note = dayNoteEdit.value.trim();
  let entry = getCheckinByDate(selectedDayKey);

  if (!entry && (status || note)) {
    entry = ensureCheckin(selectedDayKey);
  }

  if (!entry) {
    closeDayDetails();
    return;
  }

  entry.status = status;
  entry.note = note;
  entry.updatedAt = new Date().toISOString();
  saveState();
  render();
  openDayDetails(selectedDayKey);
}

function closeDayDetails() {
  dayOverlay.hidden = true;
  document.body.classList.remove("modal-open");
}

function renderHistory() {
  historyList.innerHTML = "";

  state.checkins.filter((entry) => entry.status).slice(0, 14).forEach((entry) => {
    const item = document.createElement("li");
    item.className = entry.status;
    item.innerHTML = `<span>${formatDay(entry.date)}</span><strong>${statusLabels[entry.status]}</strong>`;
    historyList.append(item);
  });

  emptyHistory.hidden = getStatusEntries().length > 0;
}

function getStatusEntries() {
  return state.checkins.filter((entry) => entry.status);
}

function getPreviousDateKey(value, offset = 1) {
  const date = new Date(`${value}T12:00:00`);
  date.setDate(date.getDate() - offset);
  return dateKey(date);
}

function getTimeBucket(time = "") {
  const hour = Number(time.split(":")[0]);
  if (Number.isNaN(hour)) return "";
  if (hour < 6) return "Nacht";
  if (hour < 12) return "Morgen";
  if (hour < 18) return "Nachmittag";
  if (hour < 22) return "Abend";
  return "Spätabend";
}

function addPattern(patterns, key, label, score = 1) {
  const item = patterns.get(key) ?? { key, label, score: 0, count: 0 };
  item.score += score;
  item.count += 1;
  patterns.set(key, item);
}

function noteTokens(text = "") {
  const stopWords = new Set([
    "aber",
    "auch",
    "dann",
    "dass",
    "eine",
    "einen",
    "einer",
    "heute",
    "immer",
    "mein",
    "meine",
    "nicht",
    "noch",
    "oder",
    "schon",
    "weil",
    "wenn",
    "wieder",
    "wurde"
  ]);

  return text
    .toLowerCase()
    .replace(/[^a-zäöüß\s-]/g, " ")
    .split(/\s+/)
    .map((word) => word.trim())
    .filter((word) => word.length >= 5 && !stopWords.has(word));
}

function learnRiskPatterns() {
  const byDate = new Map(state.checkins.map((entry) => [entry.date, entry]));
  const setbacks = state.checkins.filter((entry) => entry.status === "not-clean");
  const nearMisses = state.checkins.filter((entry) => entry.status === "stopped");
  const patterns = new Map();

  setbacks.forEach((entry) => {
    (entry.triggers ?? []).forEach((trigger) => addPattern(patterns, `trigger:${trigger}`, `Trigger: ${trigger}`, 2));

    if (entry.relapseSituation) {
      addPattern(patterns, `situation:${entry.relapseSituation}`, `Situation: ${entry.relapseSituation}`, 2);
    }

    const timeBucket = getTimeBucket(entry.relapseTime);
    if (timeBucket) {
      addPattern(patterns, `time:${timeBucket}`, `Uhrzeit: ${timeBucket}`, 1);
    }

    const craving = Number(entry.craving || 0);
    if (craving >= 7) {
      addPattern(patterns, "craving:7", "Drang 7/10 oder höher", 2);
    } else if (craving >= 5) {
      addPattern(patterns, "craving:5", "Drang 5/10 oder höher", 1);
    }

    noteTokens(`${entry.note ?? ""} ${entry.relapseTrigger ?? ""} ${entry.relapseBefore ?? ""}`).forEach((word) => {
      addPattern(patterns, `word:${word}`, `Notizwort: ${word}`, 1);
    });

    for (let offset = 1; offset <= 2; offset += 1) {
      const previous = byDate.get(getPreviousDateKey(entry.date, offset));
      if (!previous) continue;

      (previous.triggers ?? []).forEach((trigger) => {
        addPattern(patterns, `pretrigger:${trigger}`, `Vorher oft: ${trigger}`, 1);
      });

      if (Number(previous.craving || 0) >= 6) {
        addPattern(patterns, "precraving:6", "Vortage mit Drang 6/10+", 1);
      }

      if (previous.status === "stopped") {
        addPattern(patterns, "previous:stopped", "Kurz vorher abgebrochen", 2);
      }
    }
  });

  nearMisses.forEach((entry) => {
    (entry.triggers ?? []).forEach((trigger) => addPattern(patterns, `near:${trigger}`, `Abbruch-Moment: ${trigger}`, 1));
    if (entry.stoppedSituation) {
      addPattern(patterns, `near-situation:${entry.stoppedSituation}`, `Abbruch-Situation: ${entry.stoppedSituation}`, 1);
    }
    const stoppedBucket = getTimeBucket(entry.stoppedTime);
    if (stoppedBucket) {
      addPattern(patterns, `near-time:${stoppedBucket}`, `Abbruch-Zeit: ${stoppedBucket}`, 1);
    }
  });

  return [...patterns.values()].sort((a, b) => b.score - a.score || b.count - a.count);
}

function getTodaysRisk() {
  const today = getTodayCheckin() ?? { triggers: [], craving: 0, note: "" };
  const patterns = learnRiskPatterns();
  const setbackCount = state.checkins.filter((entry) => entry.status === "not-clean").length;
  const nearMissCount = state.checkins.filter((entry) => entry.status === "stopped").length;
  const totalCheckins = getStatusEntries().length;
  const learnedEnough = setbackCount >= 2 || (setbackCount >= 1 && nearMissCount >= 2);
  const hasBaseline = totalCheckins >= 5;
  const reasons = [];
  let score = 0;

  const selectedTriggers = today.triggers ?? [];
  const tokens = noteTokens(today.note ?? "");
  const nowBucket = getTimeBucket(new Intl.DateTimeFormat("de-CH", { hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date()));
  const yesterday = getCheckinByDate(getPreviousDateKey(dateKey()));
  const twoDaysAgo = getCheckinByDate(getPreviousDateKey(dateKey(), 2));
  const currentCraving = Number(today.craving || 0);
  const previousEntries = [yesterday, twoDaysAgo];
  const addRisk = (points, reason) => {
    score += points;
    reasons.push(reason);
  };

  if (currentCraving >= 8) {
    addRisk(5, "Drang 8/10 oder höher");
  } else if (currentCraving >= 6) {
    addRisk(3, "Drang 6/10 oder höher");
  }

  if (selectedTriggers.length >= 3) {
    addRisk(2, "mehrere Trigger gleichzeitig");
  }

  if (previousEntries.some((entry) => entry?.status === "stopped")) {
    addRisk(2, "kürzlich abgebrochen");
  }

  if (previousEntries.some((entry) => Number(entry?.craving || 0) >= 7)) {
    addRisk(2, "kürzlich hoher Drang");
  }

  patterns.forEach((pattern) => {
    if (!learnedEnough && !pattern.key.startsWith("near")) return;
    if (pattern.count < 2 && !pattern.key.startsWith("craving")) return;
    const [type, value] = pattern.key.split(":");
    let matches = false;

    if ((type === "trigger" || type === "near") && selectedTriggers.includes(value)) matches = true;
    if (type === "pretrigger" && selectedTriggers.includes(value)) matches = true;
    if (type === "situation" && selectedTriggers.includes(value)) matches = true;
    if (type === "near-situation" && selectedTriggers.includes(value)) matches = true;
    if (type === "time" && value === nowBucket) matches = true;
    if (type === "near-time" && value === nowBucket) matches = true;
    if (type === "word" && tokens.includes(value)) matches = true;
    if (pattern.key === "craving:7" && Number(today.craving || 0) >= 7) matches = true;
    if (pattern.key === "craving:5" && Number(today.craving || 0) >= 5) matches = true;
    if (pattern.key === "precraving:6" && [yesterday, twoDaysAgo].some((entry) => Number(entry?.craving || 0) >= 6)) matches = true;
    if (pattern.key === "previous:stopped" && [yesterday, twoDaysAgo].some((entry) => entry?.status === "stopped")) matches = true;

    if (!matches) return;

    const confidenceBoost = hasBaseline ? 1 : 0;
    addRisk(Math.min(pattern.score + confidenceBoost, 5), pattern.label);
  });

  let level = "low";
  if (!learnedEnough && score < 3) level = "learning";
  else if (score >= 8) level = "high";
  else if (score >= 4) level = "medium";

  return {
    level,
    score,
    reasons: [...new Set(reasons)].slice(0, 4),
    patterns,
    learnedEnough,
    setbackCount,
    nearMissCount,
    totalCheckins
  };
}

function renderTrendWarnings() {
  const risk = getTodaysRisk();
  riskLevel.className = `risk-pill ${risk.level}`;
  heroRiskLevel.className = `risk-pill ${risk.level}`;
  trendActions.hidden = risk.level !== "medium" && risk.level !== "high";

  if (risk.level === "learning") {
    riskLevel.textContent = "Lernt";
    heroRiskLevel.textContent = "Lernt";
    trendSummary.textContent = `Noch nicht genug Daten für persönliche Rückfallmuster. Aktuell gespeichert: ${risk.setbackCount} Nicht-clean und ${risk.nearMissCount} Abbruch.`;
    heroTrendSummary.textContent = "Frühwarnsystem sammelt noch Daten.";
  } else if (risk.level === "high") {
    riskLevel.textContent = "Hoch";
    heroRiskLevel.textContent = "Hoch";
    trendSummary.textContent = `${risk.learnedEnough ? "Warnung: Das sieht nach einem alten Risikomuster aus." : "Warnung trotz wenig Daten: Die aktuellen Signale sind stark."} Sichtbar: ${risk.reasons.join(", ")}. Starte lieber jetzt eine Notfall-Hilfe.`;
    heroTrendSummary.textContent = `Warnung: ${risk.reasons[0] ?? "Risikomuster sichtbar"}.`;
  } else if (risk.level === "medium") {
    riskLevel.textContent = "Achtung";
    heroRiskLevel.textContent = "Achtung";
    trendSummary.textContent = `${risk.learnedEnough ? "Da ist ein Muster erkennbar" : "Noch wenig Daten, aber heute ist ein Warnsignal sichtbar"}: ${risk.reasons.join(", ")}. Plane jetzt eine Unterbrechung, bevor es stärker wird.`;
    heroTrendSummary.textContent = `Achtung: ${risk.reasons[0] ?? "Muster erkennbar"}.`;
  } else {
    riskLevel.textContent = "Ruhig";
    heroRiskLevel.textContent = "Ruhig";
    trendSummary.textContent = "Aktuell ist kein starkes Rückfallmuster sichtbar. Bleib beim Check-in und halte den Tagesplan einfach.";
    heroTrendSummary.textContent = "Aktuell kein starkes Rückfallmuster sichtbar.";
  }

  trendAnalysis.innerHTML = "";
  const topPatterns = risk.patterns.slice(0, 7);
  if (!topPatterns.length) {
    trendAnalysis.textContent = "Noch keine gelernten Warnzeichen.";
    return;
  }

  topPatterns.forEach((pattern) => {
    const item = document.createElement("span");
    item.textContent = `${pattern.label}: ${pattern.count}x`;
    trendAnalysis.append(item);
  });
}

function getTriggerRiskScores(entries) {
  const scores = new Map();
  entries.forEach((entry) => {
    (entry.triggers ?? []).forEach((trigger) => {
      const score = scores.get(trigger) ?? { trigger, total: 0, setbacks: 0, clean: 0 };
      score.total += 1;
      if (entry.status === "not-clean") score.setbacks += 1;
      if (entry.status === "clean") score.clean += 1;
      scores.set(trigger, score);
    });
  });

  return [...scores.values()]
    .filter((score) => score.total >= 1)
    .map((score) => ({ ...score, risk: Math.round((score.setbacks / score.total) * 100) }))
    .sort((a, b) => b.risk - a.risk || b.total - a.total);
}

function renderTriggerRisk(entries) {
  triggerRiskAnalysis.innerHTML = "";
  const scores = getTriggerRiskScores(entries).filter((score) => score.setbacks > 0).slice(0, 7);

  if (!scores.length) {
    triggerRiskAnalysis.textContent = "Noch keine Risiko-Scores sichtbar.";
    return;
  }

  scores.forEach((score) => {
    const item = document.createElement("span");
    item.textContent = `${score.trigger}: ${score.risk}% Risiko`;
    triggerRiskAnalysis.append(item);
  });
}

function renderProtectiveFactors(entries) {
  protectiveAnalysis.innerHTML = "";
  const scores = getTriggerRiskScores(entries).filter((score) => score.clean > 0).slice(0, 7);
  const helpfulNotes = entries
    .filter((entry) => entry.status === "clean" && entry.note)
    .flatMap((entry) => noteTokens(entry.note))
    .reduce((map, word) => map.set(word, (map.get(word) ?? 0) + 1), new Map());

  const protection = scores
    .map((score) => ({ label: score.trigger, value: Math.round((score.clean / score.total) * 100), count: score.clean }))
    .filter((score) => score.value >= 50);

  const noteItems = [...helpfulNotes.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([word, count]) => ({ label: word, value: 100, count }));

  [...protection, ...noteItems].slice(0, 8).forEach((item) => {
    const el = document.createElement("span");
    el.textContent = `${item.label}: ${item.count}x hilfreich`;
    protectiveAnalysis.append(el);
  });

  if (!protectiveAnalysis.children.length) {
    protectiveAnalysis.textContent = "Noch zu wenig Clean-Tage mit Triggern/Notizen.";
  }
}

function startOfWeek(date = new Date()) {
  const copy = new Date(date);
  const day = (copy.getDay() + 6) % 7;
  copy.setHours(12, 0, 0, 0);
  copy.setDate(copy.getDate() - day);
  return copy;
}

function renderWeeklyReport(entries) {
  const weekStart = startOfWeek();
  const weekEntries = entries.filter((entry) => new Date(`${entry.date}T12:00:00`) >= weekStart);
  const clean = weekEntries.filter((entry) => entry.status === "clean").length;
  const setbacks = weekEntries.filter((entry) => entry.status === "not-clean").length;
  const stopped = weekEntries.filter((entry) => entry.status === "stopped").length;
  const topTrigger = getTriggerRiskScores(weekEntries).sort((a, b) => b.total - a.total)[0]?.trigger ?? "-";
  const bestTool = state.emergencyLog.filter((entry) => entry.success).slice(0, 1)[0]?.title ?? "-";

  weeklyReport.innerHTML = "";
  [
    [`${clean}/${weekEntries.length || 0}`, "Clean diese Woche"],
    [setbacks, "Nicht clean"],
    [stopped, "Abgebrochen"],
    [topTrigger, "Häufigstes Thema"],
    [bestTool, "Letzte starke Hilfe"]
  ].forEach(([value, label]) => {
    const item = document.createElement("div");
    const strong = document.createElement("strong");
    const span = document.createElement("span");
    strong.textContent = value;
    span.textContent = label;
    item.append(strong, span);
    weeklyReport.append(item);
  });
}

function renderReflection(entries) {
  const recent = [...entries].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 7);
  const risk = getTodaysRisk();
  const cleanNotes = recent.filter((entry) => entry.status === "clean" && entry.note);
  const setbacks = recent.filter((entry) => entry.status === "not-clean");
  const strongestTrigger = getTriggerRiskScores(recent)[0]?.trigger;

  if (!recent.length) {
    reflectionText.textContent = "Deine Reflexion erscheint hier, sobald genug Check-ins vorhanden sind.";
    return;
  }

  if (risk.level === "learning") {
    reflectionText.textContent = "Reflexion: Das System sammelt noch persönliche Muster. Trag weiter ehrlich Status, Trigger und Drang ein.";
    return;
  }

  if (risk.level === "high" || risk.level === "medium") {
    reflectionText.textContent = `Reflexion: Heute passt etwas zu alten Mustern. ${risk.reasons[0] ?? "Hoher Drang"} ist sichtbar. Der beste Schritt ist jetzt eine konkrete Unterbrechung.`;
    return;
  }

  if (setbacks.length && strongestTrigger) {
    reflectionText.textContent = `Reflexion: In den letzten Tagen taucht "${strongestTrigger}" auffällig auf. Wenn es heute erscheint, früher Umgebung wechseln.`;
    return;
  }

  if (cleanNotes.length) {
    reflectionText.textContent = `Reflexion: Deine Clean-Tage haben Hinweise. Lies die letzte gute Notiz nochmal: "${cleanNotes[0].note.slice(0, 90)}"`;
    return;
  }

  reflectionText.textContent = "Reflexion: Diese Woche wirkt ruhig. Halte den Check-in einfach und lass den Tagesplan klein genug, dass du ihn wirklich machst.";
}

function renderStats() {
  const entries = getStatusEntries();
  const clean = entries.filter((entry) => entry.status === "clean").length;
  const cravings = entries.map((entry) => Number(entry.craving || 0)).filter((value) => value > 0);
  const byMonth = new Map();

  entries.forEach((entry) => {
    const month = entry.date.slice(0, 7);
    const data = byMonth.get(month) ?? { clean: 0, total: 0 };
    data.total += 1;
    if (entry.status === "clean") data.clean += 1;
    byMonth.set(month, data);
  });

  const bestMonth = [...byMonth.entries()].sort((a, b) => b[1].clean / b[1].total - a[1].clean / a[1].total)[0];
  statCleanRate.textContent = entries.length ? `${Math.round((clean / entries.length) * 100)}%` : "0%";
  statCheckins.textContent = entries.length;
  statAverageCraving.textContent = cravings.length ? (cravings.reduce((sum, value) => sum + value, 0) / cravings.length).toFixed(1) : "0";
  statBestMonth.textContent = bestMonth ? `${bestMonth[0].slice(5)}/${bestMonth[0].slice(2, 4)}` : "-";
  const emergencyUses = state.emergencyLog.length;
  const emergencySuccesses = state.emergencyLog.filter((entry) => entry.success).length;
  statEmergencyUses.textContent = emergencyUses;
  statEmergencySuccess.textContent = emergencyUses ? `${Math.round((emergencySuccesses / emergencyUses) * 100)}%` : "0%";

  const emergencyCounts = new Map();
  state.emergencyLog.forEach((entry) => emergencyCounts.set(entry.title, (emergencyCounts.get(entry.title) ?? 0) + 1));
  statBestEmergency.textContent = [...emergencyCounts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? "-";

  const triggerCounts = new Map();
  entries
    .filter((entry) => entry.status !== "clean")
    .flatMap((entry) => entry.triggers ?? [])
    .forEach((trigger) => triggerCounts.set(trigger, (triggerCounts.get(trigger) ?? 0) + 1));

  triggerAnalysis.innerHTML = "";
  const topTriggers = [...triggerCounts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);
  if (!topTriggers.length) {
    triggerAnalysis.textContent = "Noch keine Risikomuster sichtbar.";
  } else {
    topTriggers.forEach(([trigger, count]) => {
      const item = document.createElement("span");
      item.textContent = `${trigger}: ${count}`;
      triggerAnalysis.append(item);
    });
  }

  renderTriggerRisk(entries);
  renderProtectiveFactors(entries);
  renderWeeklyReport(entries);
  renderReflection(entries);
}

function renderBadges() {
  const record = getRecordStreak();
  const emergencySuccesses = state.emergencyLog.filter((entry) => entry.success).length;
  const stoppedCount = state.checkins.filter((entry) => entry.status === "stopped").length;
  const level = [...recoveryLevels].reverse().find((item) => record >= item.min) ?? recoveryLevels[0];
  const nextLevel = recoveryLevels.find((item) => item.min > record);

  levelCard.innerHTML = "";
  const levelTitle = document.createElement("strong");
  const levelText = document.createElement("span");
  levelTitle.textContent = level.title;
  levelText.textContent = `${level.text}${nextLevel ? ` Noch ${nextLevel.min - record} Rekord-Tage bis ${nextLevel.title}.` : " Maximales Level erreicht."}`;
  levelCard.append(levelTitle, levelText);

  badgeGrid.innerHTML = "";
  badgeMilestones.forEach((milestone) => {
    const badge = document.createElement("div");
    badge.className = `badge${record >= milestone ? " unlocked" : ""}`;
    badge.innerHTML = `<strong>${milestone}</strong><span>Tage</span>`;
    badgeGrid.append(badge);
  });

  [
    { unlocked: stoppedCount >= 3, title: "3", text: "Abbrüche trainiert" },
    { unlocked: emergencySuccesses >= 5, title: "5", text: "Notfälle gemeistert" },
    { unlocked: getStatusEntries().length >= 14, title: "14", text: "Check-ins gemacht" }
  ].forEach((extra) => {
    const badge = document.createElement("div");
    badge.className = `badge special${extra.unlocked ? " unlocked" : ""}`;
    badge.innerHTML = `<strong>${extra.title}</strong><span>${extra.text}</span>`;
    badgeGrid.append(badge);
  });
}

function maybeCelebrateMilestone(oldRecord, newRecord) {
  const hit = badgeMilestones.find((milestone) => newRecord >= milestone && oldRecord < milestone);
  if (!hit) {
    return;
  }

  celebrationTitle.textContent = `${hit} Tage geschafft`;
  celebrationText.textContent = "Meilenstein freigeschaltet. Kurz stehen bleiben und merken: Das ist Fortschritt.";
  celebration.hidden = false;
  window.setTimeout(() => {
    celebration.hidden = true;
  }, 2600);
}

function getTodayPlan() {
  const today = dateKey();
  state.dailyPlans[today] ??= [
    { id: createId("plan"), text: "Handy nicht ins Bett nehmen", done: false },
    { id: createId("plan"), text: "Abends Fokusmodus aktivieren", done: false }
  ];
  return state.dailyPlans[today];
}

function renderPlan() {
  planList.innerHTML = "";
  getTodayPlan().forEach((item) => {
    const li = document.createElement("li");
    li.className = item.done ? "done" : "";
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.textContent = item.done ? "✓" : "○";
    bindPress(toggle, () => {
      item.done = !item.done;
      saveState();
      renderPlan();
    });
    const text = document.createElement("span");
    text.textContent = item.text;
    li.append(text, toggle);
    planList.append(li);
  });
}

function addPlanItem(event) {
  event.preventDefault();
  const text = planInput.value.trim();
  if (!text) return;
  getTodayPlan().unshift({ id: createId("plan"), text, done: false });
  planInput.value = "";
  saveState();
  renderPlan();
}

function renderReasons() {
  const pool = state.reasons.length ? state.reasons : defaultReasons;
  reasonCard.textContent = pool[Math.floor(Math.random() * pool.length)] ?? "Ich will frei entscheiden können.";
  reasonCard.classList.remove("swap");
  window.requestAnimationFrame(() => reasonCard.classList.add("swap"));
}

function addReason(event) {
  event.preventDefault();
  const reason = reasonInput.value.trim();
  if (!reason) return;
  state.reasons.unshift(reason);
  reasonInput.value = "";
  saveState();
  renderReasons();
  renderMotivation();
}

function renderMotivation() {
  const noteLines = state.checkins.map((entry) => entry.note).filter(Boolean).slice(0, 8);
  const pool = [...defaultMotivations, ...state.reasons, ...noteLines];
  motivationCard.textContent = pool[Math.floor(Math.random() * pool.length)] ?? "Heute clean bleiben.";
  motivationCard.classList.remove("swap");
  window.requestAnimationFrame(() => motivationCard.classList.add("swap"));
}

function startRotations() {
  window.clearInterval(reasonRotationTimer);
  window.clearInterval(motivationRotationTimer);
  reasonRotationTimer = window.setInterval(renderReasons, 12000);
  motivationRotationTimer = window.setInterval(renderMotivation, 14000);
}

function togglePrivacy() {
  state.privacyMode = !state.privacyMode;
  saveState();
  renderPrivacy();
}

function renderPrivacy() {
  document.body.classList.toggle("privacy-mode", state.privacyMode);
  privacyButton.textContent = state.privacyMode ? "Anzeigen" : "Privat";
  privacyCard.hidden = !state.privacyMode;
  appEyebrow.textContent = state.privacyMode ? "Fokus" : "Reset";
  heroTitle.textContent = state.privacyMode ? "Tagesfokus." : "Heute clean bleiben.";
}

function exportData() {
  const payload = {
    exportedAt: new Date().toISOString(),
    app: "Reset",
    data: state
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `reset-export-${dateKey()}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function switchTab(tabName) {
  tabButtons.forEach((button) => button.classList.toggle("active", button.dataset.tabTarget === tabName));
  tabSections.forEach((section) => {
    section.hidden = section.dataset.tab !== tabName;
  });
}

function render() {
  renderCounter();
  renderEmergency();
  renderHistory();
  renderCalendar();
  renderStats();
  renderTrendWarnings();
  renderBadges();
  renderPlan();
  renderReasons();
  renderMotivation();
  renderPrivacy();
}

statusGrid.querySelectorAll("[data-status]").forEach((button) => {
  bindPress(button, () => setStatus(button.dataset.status));
});
bindPress(saveCheckinNoteButton, () => saveTodayNote({ feedback: true, renderAfterSave: true }));
checkinNote.addEventListener("input", scheduleNoteAutosave);
cravingRange.addEventListener("input", () => {
  cravingValue.textContent = cravingRange.value;
  saveTodayMeta();
});

randomEmergency.addEventListener("click", rotateEmergency);
heroEmergencyButton.addEventListener("click", rotateEmergency);
trendEmergencyButton.addEventListener("click", rotateEmergency);
trendPlanButton.addEventListener("click", () => switchTab("today"));
startFeaturedButton.addEventListener("click", () => {
  openEmergency(getFeaturedAction());
});
customEmergencyForm.addEventListener("submit", addCustomEmergency);
startTimerButton.addEventListener("click", startTimer);
emergencySuccessButton.addEventListener("click", markEmergencySuccess);
cancelTimerButton.addEventListener("click", closeEmergency);
closeFocusButton.addEventListener("click", closeEmergency);
focusOverlay.addEventListener("click", (event) => {
  if (event.target === focusOverlay) {
    closeEmergency();
  }
});
closeDayButton.addEventListener("click", closeDayDetails);
saveDayButton.addEventListener("click", saveDayDetails);
dayOverlay.addEventListener("click", (event) => {
  if (event.target === dayOverlay) {
    closeDayDetails();
  }
});
saveRelapseButton.addEventListener("click", saveRelapseReview);
saveStoppedButton.addEventListener("click", saveStoppedReview);
resetButton.addEventListener("click", resetAll);
exportButton.addEventListener("click", exportData);
prevMonthButton.addEventListener("click", () => {
  calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() - 1, 1);
  renderCalendar();
});
nextMonthButton.addEventListener("click", () => {
  calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() + 1, 1);
  renderCalendar();
});
planForm.addEventListener("submit", addPlanItem);
triggerForm.addEventListener("submit", addCustomTrigger);
reasonForm.addEventListener("submit", addReason);
newMotivationButton.addEventListener("click", renderMotivation);
newReasonButton.addEventListener("click", renderReasons);
bindPress(privacyButton, togglePrivacy);
tabButtons.forEach((button) => {
  button.addEventListener("click", () => switchTab(button.dataset.tabTarget));
});
startRotations();

if (location.protocol !== "file:" && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js");
  });
}

render();
switchTab("today");
