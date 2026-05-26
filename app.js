// Bio Sarah - Multi-chapter Quiz App
'use strict';

// ── Chapter config ──
const CHAPTERS = {
  H3: {
    file: 'data/vragen_H3.json',
    title: 'Erfelijkheid en DNA',
    subtitle: 'H3',
    icon: '\u{1F9EC}',
    storageKey: 'bio-sarah-h3-progress',
    badges: {
      1: { name: 'Meiosemeester', emoji: '\u{1F52C}' },
      2: { name: 'Chromosoomkenner', emoji: '\u{1F9EC}' },
      3: { name: 'Kruisingsexpert', emoji: '\u{1F331}' },
      4: { name: 'XY-specialist', emoji: '\u{1F9E9}' },
      5: { name: 'Dihybride pro', emoji: '\u{1F3AF}' },
      6: { name: 'Erfelijkheidsonderzoeker', emoji: '\u{1F50E}' },
      7: { name: 'DNA-decodeerder', emoji: '\u{1F4BB}' },
      8: { name: 'Genetisch ingenieur', emoji: '\u{1F9EA}' }
    },
    correctMsgs: [
      'Je kruist sneller dan Mendel, Sarah!',
      'DNA? Geen geheimen meer voor jou!',
      'Die allelen zitten perfect in je geheugen!',
      'Je bent een echte genetica-genie!',
      'Sterk! Je kent de meiose als je broekzak!',
      'Sarah, je dominante allel voor biologie is duidelijk aanwezig!',
      'Beter dan Watson en Crick samen!',
      'Je chromosomen stralen van de kennis!',
      'Die kruisingsschema\'s beheerst je als een pro!',
      'Je genenpool zit vol biologiekennis!',
      'Die codons heb je feilloos vertaald!',
      'Mendel zou je assistent willen zijn!',
      'Je DNA-kennis is dubbelstrengs sterk!',
      'Recessief of dominant? Jij weet het direct!',
      'Je genotype voor biologiekennis is AA!',
      'Die koppelingsgroepen houd je moeiteloos uit elkaar!',
      'Sarah, je splitst kruisingen sneller dan een cel!',
      'Je mutatiekennis is foutloos!',
      'De eiwitsynthese heeft geen geheimen meer voor jou!',
      'Je fenotype? Briljante bioleerlinge!'
    ],
    wrongMsgs: [
      'Die mutatie in je kennis herstellen we zo, Sarah!',
      'Oeps! Dat allel zat even verkeerd... maar je leert snel!',
      'Foutje! Maar zelfs DNA maakt soms een kopieerfout.',
      'Even een crossing-over in je geheugen nodig!',
      'Dat antwoord was recessief, maar het goede komt bovendrijven!',
      'Net als meiose: soms gaat het fout, maar het resultaat wordt beter!',
      'Die base was even verkeerd gepaard, Sarah.',
      'Nog niet helemaal goed, maar je geeft niet op!',
      'Die kruising liep even anders dan verwacht!',
      'Oeps! Maar oefening baart een geneticus.',
      'Een klein foutje in de transcriptie, Sarah.',
      'Dat codon moet je even opnieuw aflezen!',
      'Mis! Maar je DNA voor doorzettingsvermogen is top.',
      'Die fenotype-voorspelling was net niet goed.',
      'Zelfs Mendel had zijn erwten soms door elkaar!'
    ],
    resultsMsgs: {
      perfect: ['Perfecte score! Je DNA zit vol biologiekennis, Sarah!', '100%! Mendel zou trots op je zijn!'],
      great: ['Uitstekend, Sarah! Je beheerst genetica als een expert!', 'Geweldig! Nog een klein foutje, maar je zit er bijna!'],
      good: ['Goed bezig, Sarah! Focus op de rode vragen en je haalt een 10!', 'Prima score! De lastige kruisingen worden nog beter met oefening.'],
      okay: ['Een goede start! Gebruik de flashcards voor de moeilijke leerdoelen.', 'Je bent op weg, Sarah! Herhaal de zwakke topics.'],
      low: ['Niet getreurd! Genetica is ook lastig. Probeer de flashcards!', 'Dit is je startpunt, Sarah. Lees de uitleg en probeer opnieuw!']
    }
  },
  H4: {
    file: 'data/vragen_H4.json',
    title: 'Zenuwstelsel en spieren',
    subtitle: 'H4',
    icon: '\u{1F9E0}',
    storageKey: 'bio-sarah-h4-progress',
    badges: {
      1: { name: 'Prikkelkenner', emoji: '⚡' },
      2: { name: 'Zenuwcelexpert', emoji: '\u{1F52C}' },
      3: { name: 'Impulsgeleider', emoji: '\u{1F4AB}' },
      4: { name: 'Zenuwstelselmeester', emoji: '\u{1F9E0}' },
      5: { name: 'Hersenspecialist', emoji: '\u{1F3E5}' },
      6: { name: 'Reflexkampioen', emoji: '\u{1F9B5}' },
      7: { name: 'Spierkampioen', emoji: '\u{1F4AA}' }
    },
    correctMsgs: [
      'Die impuls kwam razendsnel, Sarah!',
      'Je reflexen zijn scherper dan een kniepeesreflex!',
      'Briljant! Je zenuwcellen vuren op volle kracht!',
      'Die synaps is perfect overgestoken!',
      'Sarah, je hersenkennis is indrukwekkend!',
      'De neurotransmitters stromen door je antwoorden!',
      'Je kent het zenuwstelsel als een neuroloog!',
      'Sterker dan een motorisch neuron!',
      'Je thalamus selecteert de juiste antwoorden!',
      'Die reflexboog beheers je perfect!',
      'Sarah, je impulsgeleiding is foutloos!',
      'De hersenstam buigt voor jouw kennis!',
      'Je weet meer over synapsen dan de meeste artsen!',
      'Die spiercontractie van kennis is maximaal!',
      'Autonome of willekeurige spieren? Jij weet het verschil!',
      'Je kleine hersenen coördineren perfect!',
      'Sarah, je scoort hoger dan een actiepotentiaal!',
      'Die antagonisten houd je moeiteloos uit elkaar!',
      'Je myeline-isolatie voor biologiekennis is dik!',
      'Sneller dan een impuls door een gemyeliniseerde zenuw!'
    ],
    wrongMsgs: [
      'Die synaps heeft even een verkeerde neurotransmitter afgegeven, Sarah!',
      'Oeps! Je impuls ging even de verkeerde kant op.',
      'Dat antwoord had een sterkere prikkel nodig!',
      'Even een kort circuit in je zenuwbanen, maar we herstellen!',
      'Die reflexboog maakte even een omweg, Sarah.',
      'Net onder de prikkeldrempel! Probeer het nog eens.',
      'De thalamus filterde het goede antwoord even weg!',
      'Foutje! Maar je doorzettingsvermogen is sterker dan elke spier.',
      'Die impuls bereikte even niet de juiste plek.',
      'Oeps! Maar oefening versterkt je synapsverbindingen.',
      'Even een verkeerde reflex, Sarah!',
      'Dat sensorische neuron ving even een verkeerd signaal op.',
      'Mis! Maar je ruggengraatkennis wordt elke keer sterker.',
      'Die spieraanhechting zat net niet goed.',
      'Niet erg! Zelfs de hersenschors heeft even rust nodig.'
    ],
    resultsMsgs: {
      perfect: ['Perfecte score! Je zenuwstelsel werkt feilloos, Sarah!', '100%! Je bent de Nobelprijswinnaar van de biologie!'],
      great: ['Uitstekend, Sarah! Je hersenkennis is bijna compleet!', 'Geweldig! Je impulsgeleiding is bijna perfect.'],
      good: ['Goed bezig! Nog een paar synapsverbindingen versterken.', 'Prima score, Sarah! De moeilijke reflexbogen worden nog beter.'],
      okay: ['Een goede start! Herhaal de zwakke leerdoelen met de flashcards.', 'Je bent op weg! Het zenuwstelsel is ook erg complex, Sarah.'],
      low: ['Niet getreurd! Het zenuwstelsel heeft veel details. Probeer de flashcards!', 'Dit is je startpunt. Gebruik de uitleg en probeer opnieuw!']
    }
  },
  H5: {
    file: 'data/vragen_H5.json',
    title: 'Zintuigen',
    subtitle: 'H5',
    icon: '\u{1F441}️',
    storageKey: 'bio-sarah-h5-progress',
    badges: {
      1: { name: 'Reukdetective', emoji: '\u{1F443}' },
      2: { name: 'Smaakexpert', emoji: '\u{1F445}' },
      3: { name: 'Gehoorspecialist', emoji: '\u{1F442}' },
      4: { name: 'Tastmeester', emoji: '\u{1F590}️' },
      5: { name: 'Oogexpert', emoji: '\u{1F441}️' }
    },
    correctMsgs: [
      'Dat zag je scherp, Sarah!',
      'Je reukzin voor biologie is top!',
      'Je hoort de juiste antwoorden al van ver!',
      'Scherper dan een netvlies!',
      'Sarah, je smaak voor biologie is uitstekend!',
      'Die receptoren werken perfect bij jou!',
      'Je evenwichtsorgaan voor kennis is in balans!',
      'Beter dan 20/20 gezichtsvermogen!',
      'Je trommelvlies trilt van enthousiasme!',
      'Die adequate prikkel heb je perfect herkend!',
      'Je staafjes en kegeltjes werken op volle kracht!',
      'Sarah, je zintuigkennis is fenomenaal!',
      'Het slakkenhuis heeft geen geheimen meer voor jou!',
      'Je lens stelt zich perfect scherp op biologie!',
      'Die papillen proeven de juiste antwoorden!',
      'Je halfcirkelvormige kanalen draaien op volle toeren!',
      'Sarah, je zintuigen voor biologie staan op scherp!',
      'Netvlies, ooglens, glasvocht — jij kent ze allemaal!',
      'Die huidreceptoren voelen het goede antwoord feilloos!',
      'Je gehoorbeentjes trillen van trots!'
    ],
    wrongMsgs: [
      'Even een blinde vlek in je kennis, Sarah!',
      'Die geluidsgolf bereikte net niet het juiste antwoord.',
      'Oeps! Je netvlies moet even opnieuw scherpstellen.',
      'Dat antwoord smaakte net niet goed, Sarah.',
      'Even een verkeerd signaal van je reukzenuwen!',
      'Die prikkel bereikte net niet de juiste receptor.',
      'Je evenwicht was even verstoord, maar je komt terug!',
      'Foutje! Maar je treedt niet uit balans, Sarah.',
      'Die trilling bereikte even het verkeerde gehoorbeentje.',
      'Oeps! Maar je zintuigen voor doorzettingsvermogen werken prima.',
      'Even een verkeerde breking van het licht op je kennis.',
      'Die temperatuurreceptor gaf even een verkeerd signaal af.',
      'Mis! Maar je tastzin voor biologie wordt steeds beter.',
      'Net niet goed, maar je hoort het juiste antwoord al aankomen!',
      'Zelfs de beste oogartsen moesten ooit studeren, Sarah!'
    ],
    resultsMsgs: {
      perfect: ['Perfecte score! Je zintuigen zijn scherper dan ooit, Sarah!', '100%! Je ziet, hoort en voelt biologie als geen ander!'],
      great: ['Uitstekend, Sarah! Je zintuigkennis is bijna perfect!', 'Geweldig! Nog even scherp stellen en je haalt een 10.'],
      good: ['Goed bezig! Je zintuigen worden steeds scherper.', 'Prima score, Sarah! Focus op de rode vragen.'],
      okay: ['Een goede start! De zintuigen hebben veel details. Probeer de flashcards!', 'Je bent op weg! Herhaal de zwakke leerdoelen, Sarah.'],
      low: ['Niet getreurd! De vijf zintuigen zijn ook veel om te leren!', 'Dit is je startpunt, Sarah. Begin met de flashcards!']
    }
  },
  H17: {
    file: 'data/vragen_H17.json',
    title: 'Biodiversiteit & evolutie',
    subtitle: 'H17',
    icon: '\u{1F30D}',
    storageKey: 'bio-sarah-h17-progress',
    badges: {
      1: { name: 'Biodiversiteitskenner', emoji: '\u{1F30D}' },
      2: { name: 'Soortexpert', emoji: '\u{1F426}' },
      3: { name: 'Selectiespecialist', emoji: '\u{1F3C6}' },
      4: { name: 'Evolutiemeester', emoji: '\u{1F995}' },
      5: { name: 'Fossielenonderzoeker', emoji: '\u{1F9B4}' },
      6: { name: 'Ordeningskenner', emoji: '\u{1F4CA}' },
      7: { name: 'Viroloog', emoji: '\u{1F9A0}' }
    },
    correctMsgs: [
      'Darwin zou trots op je zijn, Sarah!',
      'Je evolueert naar een 10!',
      'Die natuurlijke selectie van kennis werkt perfect!',
      'Sarah, je bent de fittest van alle biologieleerlingen!',
      'Linnaeus zou je classificeren als Studentus brilliantus!',
      'Je fossielenkennis is rotsvast!',
      'Die binaire nomenclatuur beheers je als een taxonom!',
      'Je adaptatie aan biologievragen is indrukwekkend!',
      'Sterker dan een berkenspanner in een schone omgeving!',
      'Sarah, je genenpool van kennis groeit elke vraag!',
      'Die eilandtheorie heb je perfect begrepen!',
      'Je selecteert het juiste antwoord als een professional!',
      'Beter dan een DNA-analyse!',
      'Je classificeert sneller dan Linnaeus zelf!',
      'Die homologe organen herken je feilloos!',
      'Sarah, je viruskennis is sterker dan een vaccin!',
      'Je reproduceert biologiekennis als een bacteriofaag!',
      'Die evolutionaire stamboom ken je van buiten!',
      'Je biodiversiteitskennis is rijker dan het Amazonegebied!',
      'Recombinant-DNA? Kinderspel voor jou, Sarah!'
    ],
    wrongMsgs: [
      'Die mutatie in je kennis herstellen we met extra studie, Sarah!',
      'Oeps! Dat fossiel lag even in de verkeerde aardlaag.',
      'Zelfs Darwin moest lang nadenken over evolutie!',
      'Die selectiedruk op het goede antwoord was net niet genoeg.',
      'Even een verkeerde afslag op de evolutionaire stamboom, Sarah!',
      'Dat organisme heb je net verkeerd geclassificeerd.',
      'Foutje! Maar je leert sneller dan een bacterie zich deelt.',
      'Die halfwaardetijd van je fout is heel kort, Sarah!',
      'Even een extinctie van het goede antwoord, maar het komt terug!',
      'Oeps! Maar je doorzettingsvermogen is sterker dan reproductieve isolatie.',
      'Die analoge organen verwarde je even met de homologe.',
      'Net niet goed, maar je fitness voor biologie groeit!',
      'Mis! Maar je DNA voor doorzettingsvermogen is top.',
      'Die virus-levenscyclus was even lastig, Sarah.',
      'Niet getreurd! Zelfs Linnaeus moest ooit beginnen.'
    ],
    resultsMsgs: {
      perfect: ['Perfecte score! Darwin zou je als assistent willen, Sarah!', '100%! Je bent geëvolueerd naar de ultieme biologiekenner!'],
      great: ['Uitstekend, Sarah! Je evolutiekennis is bijna compleet!', 'Geweldig! Nog een klein foutje, maar je bent er bijna.'],
      good: ['Goed bezig! Je biodiversiteitskennis wordt steeds rijker.', 'Prima score, Sarah! Focus op de rode vragen.'],
      okay: ['Een goede start! Evolutie is ook complex. Probeer de flashcards!', 'Je bent op weg! Herhaal de zwakke leerdoelen, Sarah.'],
      low: ['Niet getreurd! Biodiversiteit en evolutie zijn ook veel stof!', 'Dit is je startpunt, Sarah. Begin met de flashcards!']
    }
  }
};

// ── State ──
let currentChapter = null;
let db = null;
let allQuestions = [];
let quizQuestions = [];
let currentIndex = 0;
let answers = [];
let answered = false;
let selectedCount = 10;
let selectedLeerdoelen = [];
let multiSelectChoices = new Set();
let volgordeOrder = [];
let flashcards = [];
let flashIndex = 0;
let flashFlipped = false;

const LETTERS = 'ABCDEFGHIJ';

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  updateChapterProgress();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
  document.querySelectorAll('#count-selector .btn-option').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#count-selector .btn-option').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedCount = parseInt(btn.dataset.count);
    });
  });
});

function updateChapterProgress() {
  for (const [key, ch] of Object.entries(CHAPTERS)) {
    const fill = document.getElementById('ch-fill-' + key);
    if (!fill) continue;
    try {
      const p = JSON.parse(localStorage.getItem(ch.storageKey));
      if (p && p.totalAnswered > 0) {
        const pct = Math.round((p.totalCorrect / p.totalAnswered) * 100);
        fill.style.width = pct + '%';
      } else {
        fill.style.width = '0%';
      }
    } catch { fill.style.width = '0%'; }
  }
}

async function selectChapter(key) {
  currentChapter = key;
  const ch = CHAPTERS[key];
  try {
    const resp = await fetch(ch.file);
    db = await resp.json();
    flattenQuestions();
    setupConfigScreen();
    updateBadgeShelf();
    updateHomeStats();
    document.getElementById('home-chapter-title').textContent = ch.subtitle + ' — ' + ch.title;
    document.getElementById('home-chapter-icon').textContent = ch.icon;
    showScreen('home');
  } catch (e) {
    console.error('Failed to load chapter:', e);
    alert('Kon het hoofdstuk niet laden. Controleer je internetverbinding.');
  }
}

function flattenQuestions() {
  allQuestions = [];
  for (const ld of db.leerdoelen) {
    for (const sd of ld.subdoelen) {
      for (const v of sd.vragen) {
        allQuestions.push({
          ...v,
          leerdoel_id: ld.leerdoel_id,
          leerdoel_titel: ld.leerdoel_titel,
          subdoel_id: sd.subdoel_id,
          subdoel_titel: sd.subdoel_titel
        });
      }
    }
  }
}

// ── Progress helpers ──
function getStorageKey() {
  return CHAPTERS[currentChapter].storageKey;
}

function getProgress() {
  try {
    return JSON.parse(localStorage.getItem(getStorageKey())) || defaultProgress();
  } catch { return defaultProgress(); }
}

function defaultProgress() {
  return { questionHistory: {}, badges: {}, totalAnswered: 0, totalCorrect: 0 };
}

function saveProgress(p) {
  localStorage.setItem(getStorageKey(), JSON.stringify(p));
}

function resetProgress() {
  if (!confirm('Weet je zeker dat je alle voortgang voor dit hoofdstuk wilt wissen?')) return;
  localStorage.removeItem(getStorageKey());
  updateBadgeShelf();
  updateHomeStats();
  renderProgressScreen();
}

function getQuestionPriority(qId) {
  const p = getProgress();
  const hist = p.questionHistory[qId];
  if (!hist || hist.length === 0) return 0;
  const recent = hist.slice(-3);
  const rate = recent.filter(Boolean).length / recent.length;
  if (rate < 0.34) return 1;
  if (rate < 0.67) return 2;
  return 3;
}

function getLeerdoelMastery(leerdoelId) {
  const p = getProgress();
  const questions = allQuestions.filter(q => q.leerdoel_id === leerdoelId);
  if (questions.length === 0) return { pct: 0, seen: 0, total: 0 };
  let seen = 0, correctRecent = 0, totalRecent = 0;
  for (const q of questions) {
    const hist = p.questionHistory[q.id];
    if (hist && hist.length > 0) {
      seen++;
      const recent = hist.slice(-3);
      correctRecent += recent.filter(Boolean).length;
      totalRecent += recent.length;
    }
  }
  const pct = totalRecent > 0 ? Math.round((correctRecent / totalRecent) * 100) : 0;
  return { pct, seen, total: questions.length };
}

// ── Screen navigation ──
function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');
  window.scrollTo(0, 0);
  if (name === 'home') { updateBadgeShelf(); updateHomeStats(); }
  if (name === 'progress') renderProgressScreen();
  if (name === 'chapters') updateChapterProgress();
}

// ── Config screen ──
function setupConfigScreen() {
  const container = document.getElementById('leerdoel-filter');
  container.innerHTML = '';
  for (const ld of db.leerdoelen) {
    const row = document.createElement('div');
    row.className = 'leerdoel-cb';
    row.innerHTML = `
      <input type="checkbox" value="${ld.leerdoel_id}">
      <span class="leerdoel-cb-check">&#10003;</span>
      <span class="leerdoel-cb-text">${ld.leerdoel_titel} <span class="leerdoel-cb-par">&sect;${ld.paragraaf}</span></span>
    `;
    const cb = row.querySelector('input');
    row.addEventListener('click', () => {
      cb.checked = !cb.checked;
      row.classList.toggle('checked', cb.checked);
    });
    container.appendChild(row);
  }
}

// ── Start quiz ──
function startQuiz() {
  const checked = [...document.querySelectorAll('#leerdoel-filter input:checked')].map(cb => parseInt(cb.value));
  selectedLeerdoelen = checked.length > 0 ? checked : db.leerdoelen.map(ld => ld.leerdoel_id);

  const pool = allQuestions.filter(q => selectedLeerdoelen.includes(q.leerdoel_id));
  const scored = pool.map(q => ({ q, priority: getQuestionPriority(q.id), rand: Math.random() }));
  scored.sort((a, b) => a.priority - b.priority || a.rand - b.rand);
  quizQuestions = scored.slice(0, selectedCount).map(s => s.q);
  for (let i = quizQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quizQuestions[i], quizQuestions[j]] = [quizQuestions[j], quizQuestions[i]];
  }

  currentIndex = 0;
  answers = [];
  showScreen('quiz');
  renderQuestion();
}

function exitQuiz() {
  if (answers.length > 0 && !confirm('Wil je de quiz stoppen? Je voortgang wordt opgeslagen.')) return;
  showScreen('home');
}

// ── Render question ──
function renderQuestion() {
  answered = false;
  multiSelectChoices = new Set();
  const q = quizQuestions[currentIndex];
  const total = quizQuestions.length;

  document.getElementById('quiz-progress-text').textContent = `${currentIndex + 1} / ${total}`;
  document.getElementById('quiz-progress-fill').style.width = `${((currentIndex) / total) * 100}%`;
  document.getElementById('quiz-leerdoel-badge').textContent = q.leerdoel_titel;
  document.getElementById('question-text').textContent = q.vraag;

  const imgContainer = document.getElementById('question-image-container');
  imgContainer.innerHTML = '';
  if (q.afbeelding) {
    const img = document.createElement('img');
    img.src = q.afbeelding;
    img.alt = 'Afbeelding bij de vraag';
    img.className = 'question-image';
    imgContainer.appendChild(img);
  }

  const typeLabels = { multiple_choice: 'Meerkeuze', choose_all_that_apply: 'Meerdere antwoorden', invullen: 'Invullen', volgorde: 'Volgorde' };
  document.getElementById('question-type-badge').textContent = typeLabels[q.type] || q.type;

  const container = document.getElementById('options-container');
  container.innerHTML = '';

  if (q.type === 'multiple_choice') renderMC(q, container);
  else if (q.type === 'choose_all_that_apply') renderCATA(q, container);
  else if (q.type === 'invullen') renderInvullen(q, container);
  else if (q.type === 'volgorde') renderVolgorde(q, container);

  document.getElementById('feedback-panel').style.display = 'none';
}

// ── Multiple Choice ──
function renderMC(q, container) {
  q.opties.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-letter">${LETTERS[i]}</span><span>${opt}</span>`;
    btn.addEventListener('click', () => submitMC(i));
    container.appendChild(btn);
  });
}

function submitMC(index) {
  if (answered) return;
  answered = true;
  const q = quizQuestions[currentIndex];
  const isCorrect = index === q.juiste_antwoord;
  const btns = document.querySelectorAll('#options-container .option-btn');
  btns.forEach((btn, i) => {
    btn.classList.add('disabled');
    if (i === q.juiste_antwoord) btn.classList.add('correct');
    if (i === index && !isCorrect) btn.classList.add('wrong');
    if (i !== index && i !== q.juiste_antwoord) btn.classList.add('dimmed');
  });
  recordAnswer(isCorrect, q);
  showFeedback(isCorrect, q);
}

// ── Choose All That Apply ──
function renderCATA(q, container) {
  const hint = document.createElement('div');
  hint.className = 'cata-hint';
  hint.textContent = 'Selecteer alle juiste antwoorden';
  container.appendChild(hint);

  q.opties.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="check-box">&#10003;</span><span>${opt}</span>`;
    btn.addEventListener('click', () => toggleCATA(i, btn));
    container.appendChild(btn);
  });

  const submit = document.createElement('button');
  submit.className = 'btn-submit-multi';
  submit.textContent = 'Controleer';
  submit.addEventListener('click', () => submitCATA());
  container.appendChild(submit);
}

function toggleCATA(index, btn) {
  if (answered) return;
  if (multiSelectChoices.has(index)) {
    multiSelectChoices.delete(index);
    btn.classList.remove('selected');
  } else {
    multiSelectChoices.add(index);
    btn.classList.add('selected');
  }
  document.querySelector('.btn-submit-multi').classList.toggle('active', multiSelectChoices.size > 0);
}

function submitCATA() {
  if (answered || multiSelectChoices.size === 0) return;
  answered = true;
  const q = quizQuestions[currentIndex];
  const correctSet = new Set(q.juiste_antwoorden);
  const isCorrect = correctSet.size === multiSelectChoices.size &&
    [...correctSet].every(i => multiSelectChoices.has(i));

  const btns = document.querySelectorAll('#options-container .option-btn');
  btns.forEach((btn, i) => {
    btn.classList.add('disabled');
    if (correctSet.has(i)) btn.classList.add('correct');
    if (multiSelectChoices.has(i) && !correctSet.has(i)) btn.classList.add('wrong');
    if (!correctSet.has(i) && !multiSelectChoices.has(i)) btn.classList.add('dimmed');
  });
  document.querySelector('.btn-submit-multi').style.display = 'none';

  recordAnswer(isCorrect, q);
  showFeedback(isCorrect, q);
}

// ── Invullen ──
function renderInvullen(q, container) {
  const div = document.createElement('div');
  div.className = 'invul-container';
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'invul-input';
  input.placeholder = 'Typ je antwoord...';
  input.autocomplete = 'off';
  input.autocapitalize = 'off';

  const submit = document.createElement('button');
  submit.className = 'invul-submit';
  submit.textContent = 'OK';

  const doSubmit = () => submitInvullen(input);
  submit.addEventListener('click', doSubmit);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') doSubmit(); });

  div.appendChild(input);
  div.appendChild(submit);
  container.appendChild(div);
  setTimeout(() => input.focus(), 100);
}

function normalize(str) {
  return str.toLowerCase().trim().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ');
}

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const d = Array.from({ length: m + 1 }, (_, i) => [i]);
  for (let j = 1; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] !== b[j - 1] ? 1 : 0));
  return d[m][n];
}

function checkInvullen(userAnswer, correctAnswer) {
  const u = normalize(userAnswer);
  const c = normalize(correctAnswer);
  if (u === c) return true;
  if (!c.includes(' ') && !u.includes(' ')) return levenshtein(u, c) <= 1;
  return false;
}

function submitInvullen(input) {
  if (answered) return;
  const userAnswer = input.value.trim();
  if (!userAnswer) return;
  answered = true;
  const q = quizQuestions[currentIndex];
  const isCorrect = checkInvullen(userAnswer, q.juiste_antwoord);

  input.classList.add(isCorrect ? 'correct' : 'wrong');
  input.disabled = true;
  document.querySelector('.invul-submit').disabled = true;

  if (!isCorrect) {
    const correctDiv = document.createElement('div');
    correctDiv.className = 'invul-correct-answer';
    correctDiv.textContent = `Juiste antwoord: ${q.juiste_antwoord}`;
    document.getElementById('options-container').appendChild(correctDiv);
  }

  recordAnswer(isCorrect, q);
  showFeedback(isCorrect, q);
}

// ── Volgorde ──
function parseVolgordeAntwoord(str) {
  return str.split(',').map(s => s.trim().split(':')[1].trim());
}

function renderVolgorde(q, container) {
  const entries = Object.entries(q.opties).map(([letter, text]) => ({ letter, text }));
  for (let i = entries.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [entries[i], entries[j]] = [entries[j], entries[i]];
  }
  volgordeOrder = entries;
  renderVolgordeItems(container);

  const submit = document.createElement('button');
  submit.className = 'btn-submit-volgorde';
  submit.textContent = 'Controleer volgorde';
  submit.addEventListener('click', () => submitVolgorde());
  container.appendChild(submit);
}

function renderVolgordeItems(container) {
  const existing = container.querySelector('.volgorde-list');
  if (existing) existing.remove();

  const list = document.createElement('div');
  list.className = 'volgorde-list';
  volgordeOrder.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'volgorde-item';
    div.innerHTML = `
      <span class="volgorde-num">${i + 1}</span>
      <span class="volgorde-text">${item.text}</span>
      <span class="volgorde-arrows">
        <button onclick="moveVolgorde(${i}, -1)" ${i === 0 ? 'disabled' : ''}>&uarr;</button>
        <button onclick="moveVolgorde(${i}, 1)" ${i === volgordeOrder.length - 1 ? 'disabled' : ''}>&darr;</button>
      </span>
    `;
    list.appendChild(div);
  });
  const submitBtn = container.querySelector('.btn-submit-volgorde');
  if (submitBtn) container.insertBefore(list, submitBtn);
  else container.appendChild(list);
}

function moveVolgorde(index, dir) {
  if (answered) return;
  const newIndex = index + dir;
  if (newIndex < 0 || newIndex >= volgordeOrder.length) return;
  [volgordeOrder[index], volgordeOrder[newIndex]] = [volgordeOrder[newIndex], volgordeOrder[index]];
  renderVolgordeItems(document.getElementById('options-container'));
}

function submitVolgorde() {
  if (answered) return;
  answered = true;
  const q = quizQuestions[currentIndex];
  const correctLetters = parseVolgordeAntwoord(q.juiste_antwoord);
  const userLetters = volgordeOrder.map(item => item.letter);
  const isCorrect = userLetters.every((letter, i) => letter === correctLetters[i]);

  const items = document.querySelectorAll('.volgorde-item');
  items.forEach((item, i) => {
    if (userLetters[i] === correctLetters[i]) item.classList.add('correct-pos');
    else item.classList.add('wrong-pos');
    item.querySelectorAll('button').forEach(b => b.disabled = true);
  });
  document.querySelector('.btn-submit-volgorde').style.display = 'none';

  if (!isCorrect) {
    const correctText = correctLetters.map((letter, i) => `${i + 1}. ${q.opties[letter]}`).join(' → ');
    const correctDiv = document.createElement('div');
    correctDiv.className = 'invul-correct-answer';
    correctDiv.textContent = 'Juiste volgorde: ' + correctText;
    correctDiv.style.marginTop = '8px';
    correctDiv.style.fontSize = '0.85rem';
    correctDiv.style.lineHeight = '1.5';
    document.getElementById('options-container').appendChild(correctDiv);
  }

  recordAnswer(isCorrect, q);
  showFeedback(isCorrect, q);
}

// ── Record answer & feedback ──
function recordAnswer(isCorrect, q) {
  answers.push({ question: q, correct: isCorrect });
  const p = getProgress();
  if (!p.questionHistory[q.id]) p.questionHistory[q.id] = [];
  p.questionHistory[q.id].push(isCorrect);
  if (p.questionHistory[q.id].length > 5) p.questionHistory[q.id] = p.questionHistory[q.id].slice(-5);
  p.totalAnswered++;
  if (isCorrect) p.totalCorrect++;
  saveProgress(p);
}

function showFeedback(isCorrect, q) {
  const panel = document.getElementById('feedback-panel');
  panel.style.display = 'block';

  const result = document.getElementById('feedback-result');
  result.textContent = isCorrect ? 'Goed!' : 'Helaas, fout!';
  result.className = 'feedback-result ' + (isCorrect ? 'correct' : 'wrong');

  const ch = CHAPTERS[currentChapter];
  const msgs = isCorrect ? ch.correctMsgs : ch.wrongMsgs;
  document.getElementById('feedback-encouragement').textContent = msgs[Math.floor(Math.random() * msgs.length)];
  document.getElementById('feedback-explanation').textContent = q.uitleg;

  const btn = document.getElementById('btn-next');
  btn.textContent = currentIndex < quizQuestions.length - 1 ? 'Volgende' : 'Bekijk resultaten';

  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < quizQuestions.length) {
    renderQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    showResults();
  }
}

// ── Results ──
function showResults() {
  showScreen('results');
  const total = answers.length;
  const correct = answers.filter(a => a.correct).length;
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (pct / 100) * circumference;
  const fg = document.getElementById('score-fg');
  fg.style.strokeDasharray = circumference;
  fg.style.strokeDashoffset = circumference;
  setTimeout(() => { fg.style.strokeDashoffset = offset; }, 50);

  if (pct >= 80) fg.style.stroke = 'var(--green)';
  else if (pct >= 50) fg.style.stroke = 'var(--orange)';
  else fg.style.stroke = 'var(--red)';

  document.getElementById('score-text').textContent = pct + '%';
  document.getElementById('results-summary').textContent = `${correct} van ${total} vragen goed`;

  let msgKey = 'low';
  if (pct === 100) msgKey = 'perfect';
  else if (pct >= 80) msgKey = 'great';
  else if (pct >= 60) msgKey = 'good';
  else if (pct >= 40) msgKey = 'okay';
  const ch = CHAPTERS[currentChapter];
  const msgs = ch.resultsMsgs[msgKey];
  document.getElementById('results-encouragement').textContent = msgs[Math.floor(Math.random() * msgs.length)];

  const breakdown = document.getElementById('results-leerdoel-breakdown');
  breakdown.innerHTML = '';
  const leerdoelMap = {};
  for (const a of answers) {
    const lid = a.question.leerdoel_id;
    if (!leerdoelMap[lid]) leerdoelMap[lid] = { title: a.question.leerdoel_titel, correct: 0, total: 0 };
    leerdoelMap[lid].total++;
    if (a.correct) leerdoelMap[lid].correct++;
  }
  for (const [, data] of Object.entries(leerdoelMap)) {
    const p = Math.round((data.correct / data.total) * 100);
    const color = p >= 80 ? 'var(--green)' : p >= 50 ? 'var(--orange)' : 'var(--red)';
    breakdown.innerHTML += `
      <div class="breakdown-row">
        <span class="breakdown-label">${data.title}</span>
        <div class="breakdown-bar"><div class="breakdown-bar-fill" style="width:${p}%;background:${color}"></div></div>
        <span class="breakdown-pct">${p}%</span>
      </div>
    `;
  }

  const missed = document.getElementById('results-missed-list');
  missed.innerHTML = '';
  const wrongAnswers = answers.filter(a => !a.correct);
  if (wrongAnswers.length === 0) {
    missed.innerHTML = '<div style="color:var(--green);font-weight:600;">Alles goed! Geen gemiste vragen.</div>';
  } else {
    for (const a of wrongAnswers) {
      let correctText = '';
      const q = a.question;
      if (q.type === 'multiple_choice') correctText = q.opties[q.juiste_antwoord];
      else if (q.type === 'choose_all_that_apply') correctText = q.juiste_antwoorden.map(i => q.opties[i]).join(', ');
      else if (q.type === 'invullen') correctText = q.juiste_antwoord;
      else if (q.type === 'volgorde') {
        const letters = parseVolgordeAntwoord(q.juiste_antwoord);
        correctText = letters.map((l, i) => `${i + 1}. ${q.opties[l]}`).join(' → ');
      }
      missed.innerHTML += `
        <div class="missed-item">
          <div class="missed-q">${q.vraag}</div>
          <div class="missed-a">Antwoord: ${correctText}</div>
        </div>
      `;
    }
  }

  checkNewBadges();
  if (pct >= 80) spawnConfetti();
}

// ── Badges ──
function getBadges() {
  return CHAPTERS[currentChapter].badges;
}

function checkNewBadges() {
  const p = getProgress();
  const badges = getBadges();
  const newBadges = [];
  for (const ld of db.leerdoelen) {
    const m = getLeerdoelMastery(ld.leerdoel_id);
    const alreadyEarned = p.badges[ld.leerdoel_id]?.earned;
    if (!alreadyEarned && m.pct >= 80 && m.seen >= Math.ceil(m.total * 0.6)) {
      if (!p.badges[ld.leerdoel_id]) p.badges[ld.leerdoel_id] = {};
      p.badges[ld.leerdoel_id].earned = true;
      p.badges[ld.leerdoel_id].date = new Date().toISOString().slice(0, 10);
      newBadges.push(ld.leerdoel_id);
    }
  }
  if (newBadges.length > 0) {
    saveProgress(p);
    const container = document.getElementById('new-badges-container');
    const list = document.getElementById('new-badges-list');
    container.style.display = 'block';
    list.innerHTML = '';
    for (const bid of newBadges) {
      const b = badges[bid];
      if (b) list.innerHTML += `<div class="new-badge-item"><div class="new-badge-emoji">${b.emoji}</div><div class="new-badge-name">${b.name}</div></div>`;
    }
  } else {
    document.getElementById('new-badges-container').style.display = 'none';
  }
}

function updateBadgeShelf() {
  const p = getProgress();
  const badges = getBadges();
  const shelf = document.getElementById('badge-shelf-list');
  shelf.innerHTML = '';
  for (const [id, b] of Object.entries(badges)) {
    const earned = p.badges[id]?.earned;
    shelf.innerHTML += `
      <div class="badge-item ${earned ? 'earned' : 'locked'}" ${earned ? `onclick="showBadgePopup(${id})"` : ''}>
        <span class="badge-emoji">${b.emoji}</span>
        <span class="badge-name">${b.name}</span>
      </div>
    `;
  }
}

function showBadgePopup(id) {
  const badges = getBadges();
  const b = badges[id];
  const p = getProgress();
  document.getElementById('badge-popup-icon').textContent = b.emoji;
  document.getElementById('badge-popup-title').textContent = b.name;
  document.getElementById('badge-popup-desc').textContent = `Verdiend op ${p.badges[id]?.date || 'onbekend'}`;
  document.getElementById('badge-overlay').style.display = 'flex';
}

function closeBadgeOverlay() {
  document.getElementById('badge-overlay').style.display = 'none';
}

// ── Home stats ──
function updateHomeStats() {
  const p = getProgress();
  const badges = getBadges();
  const totalBadges = Object.keys(badges).length;
  const el = document.getElementById('home-stats');
  if (p.totalAnswered === 0) {
    el.textContent = 'Begin met een quiz om je voortgang te zien!';
  } else {
    const pct = Math.round((p.totalCorrect / p.totalAnswered) * 100);
    const badgeCount = Object.values(p.badges).filter(b => b.earned).length;
    el.textContent = `${p.totalAnswered} vragen beantwoord • ${pct}% goed • ${badgeCount}/${totalBadges} badges`;
  }
}

// ── Progress screen ──
function renderProgressScreen() {
  const p = getProgress();
  const badges = getBadges();

  const overall = document.getElementById('overall-progress');
  if (p.totalAnswered === 0) {
    overall.innerHTML = '<div class="overall-pct">-</div><div class="overall-detail">Nog geen vragen beantwoord</div>';
  } else {
    const pct = Math.round((p.totalCorrect / p.totalAnswered) * 100);
    overall.innerHTML = `
      <div class="overall-pct">${pct}%</div>
      <div class="overall-detail">${p.totalCorrect} van ${p.totalAnswered} vragen goed</div>
    `;
  }

  const list = document.getElementById('leerdoel-progress-list');
  list.innerHTML = '';
  for (const ld of db.leerdoelen) {
    const m = getLeerdoelMastery(ld.leerdoel_id);
    const badge = badges[ld.leerdoel_id];
    const earned = p.badges[ld.leerdoel_id]?.earned;
    const color = m.pct >= 80 ? 'var(--green)' : m.pct >= 50 ? 'var(--orange)' : m.seen > 0 ? 'var(--red)' : 'var(--gray-border)';

    list.innerHTML += `
      <div class="progress-card">
        <div class="progress-card-header">
          <span class="progress-card-title">${ld.leerdoel_titel}</span>
          <span class="progress-card-badge">${earned && badge ? badge.emoji : ''}</span>
        </div>
        <div class="progress-bar">
          <div class="progress-bar-fill" style="width:${m.pct}%;background:${color}"></div>
        </div>
        <div class="progress-card-detail">
          <span>${m.pct}% beheersing</span>
          <span>${m.seen}/${m.total} vragen gezien</span>
        </div>
      </div>
    `;
  }
}

// ── Flashcards ──
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function startAllFlashcards() {
  flashcards = [];
  for (const ld of db.leerdoelen) {
    for (const sd of ld.subdoelen) {
      if (sd.uitleg_tekst) {
        flashcards.push({ front: sd.subdoel_titel, back: sd.uitleg_tekst });
      }
    }
  }
  shuffle(flashcards);
  showFlashcardScreen();
}

function startFlashcards() {
  flashcards = [];
  for (const ld of db.leerdoelen) {
    const m = getLeerdoelMastery(ld.leerdoel_id);
    if (m.pct < 80 || m.seen === 0) {
      flashcards.push({ front: ld.leerdoel_titel, back: ld.uitleg_tekst });
      for (const sd of ld.subdoelen) {
        if (sd.uitleg_tekst) {
          flashcards.push({ front: sd.subdoel_titel, back: sd.uitleg_tekst });
        }
      }
    }
  }
  showFlashcardScreen();
}

function showFlashcardScreen() {
  showScreen('flashcards');
  if (flashcards.length === 0) {
    document.getElementById('flash-empty').style.display = 'block';
    document.getElementById('flashcard-container').style.display = 'none';
    document.querySelector('.flash-nav').style.display = 'none';
    document.getElementById('flash-hint').style.display = 'none';
    document.getElementById('flash-counter').textContent = '';
  } else {
    document.getElementById('flash-empty').style.display = 'none';
    document.getElementById('flashcard-container').style.display = 'block';
    document.querySelector('.flash-nav').style.display = 'flex';
    document.getElementById('flash-hint').style.display = 'block';
    flashIndex = 0;
    flashFlipped = false;
    renderFlashcard();
  }
}

function renderFlashcard() {
  const card = flashcards[flashIndex];
  document.getElementById('flashcard-front').textContent = card.front;
  document.getElementById('flashcard-back').textContent = card.back;
  document.getElementById('flashcard').classList.remove('flipped');
  flashFlipped = false;
  document.getElementById('flash-counter').textContent = `${flashIndex + 1} / ${flashcards.length}`;
  document.getElementById('btn-flash-prev').disabled = flashIndex === 0;
  document.getElementById('btn-flash-next').disabled = flashIndex === flashcards.length - 1;
}

function flipCard() {
  flashFlipped = !flashFlipped;
  document.getElementById('flashcard').classList.toggle('flipped', flashFlipped);
}

function nextFlashcard() {
  if (flashIndex < flashcards.length - 1) { flashIndex++; renderFlashcard(); }
}

function prevFlashcard() {
  if (flashIndex > 0) { flashIndex--; renderFlashcard(); }
}

// ── Confetti ──
function spawnConfetti() {
  const colors = ['#8b5cf6', '#a78bfa', '#f59e0b', '#ec4899', '#3b82f6', '#22c55e'];
  for (let i = 0; i < 40; i++) {
    const el = document.createElement('div');
    el.className = 'confetti';
    el.style.left = Math.random() * 100 + 'vw';
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    el.style.animationDuration = (1.5 + Math.random() * 2) + 's';
    el.style.animationDelay = Math.random() * 0.5 + 's';
    el.style.width = (6 + Math.random() * 8) + 'px';
    el.style.height = (6 + Math.random() * 8) + 'px';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 4000);
  }
}
