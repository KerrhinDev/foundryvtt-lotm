/**
 * MACRO — Popola il Compendio Abilità LotM (tutti i 22 Percorsi Beyonder)
 *
 * Esegui questa macro in-game da un utente GM per popolare il compendio
 * "Abilità dei Percorsi LotM" con le abilità base di ogni Sequenza.
 *
 * I nomi delle Sequenze seguono il romanzo originale (Lord of the Mysteries).
 * Le descrizioni sono segnaposto — modificale in-game dopo la generazione.
 */

const PATHWAYS = [
  // ── 0 — Il Folle ──────────────────────────────────────────────────────────
  {
    pathway: "Il Folle",
    sequences: [
      { seq: 9, name: "Veggente",                  abilities: ["Chiaroveggenza", "Lettura Tarocchi", "Senso del Pericolo"] },
      { seq: 8, name: "Pagliaccio",                abilities: ["Maschera d'Illusione", "Voce Alterata", "Fortuna Sfacciata"] },
      { seq: 7, name: "Mago",                      abilities: ["Costruzione Spirituale", "Marionetta Mentale", "Velo di Nebbia"] },
      { seq: 6, name: "Senza Volto",               abilities: ["Cambio d'Aspetto Perfetto", "Furto d'Identità", "Presenza Cancellata"] },
      { seq: 5, name: "Marionettista",              abilities: ["Controllo Multiplo", "Filo d'Anima", "Danza dei Burattini"] },
      { seq: 4, name: "Stregone Bizzarro",          abilities: ["Distorsione della Realtà", "Magia Caotica", "Sogno Parlante"] },
      { seq: 3, name: "Invocatore di Miracoli",     abilities: ["Miracolo Minore", "Grazia Divina", "Alterazione del Destino"] },
      { seq: 2, name: "Celeste della Torre Bianca", abilities: ["Ascensione Spirituale", "Campo di Luce Pura", "Profezia Vincolante"] },
      { seq: 1, name: "Inevitabilità",              abilities: ["Certezza Assoluta", "Negazione del Caso", "Volontà del Cosmo"] },
      { seq: 0, name: "Fonte della Magia",          abilities: ["Origine Arcana", "Creazione di Sequenze", "Trascendenza"] },
    ],
  },
  // ── I — Il Mago ───────────────────────────────────────────────────────────
  {
    pathway: "Il Mago",
    sequences: [
      { seq: 9, name: "Studente",                   abilities: ["Studio Arcano", "Memoria Fotografica", "Analisi dei Simboli"] },
      { seq: 8, name: "Sapiente",                   abilities: ["Conoscenza Istantanea", "Linguaggio delle Rune", "Decodifica Rapida"] },
      { seq: 7, name: "Studioso dell'Antico",       abilities: ["Archeologia Mistica", "Rituale di Recupero", "Visione Storica"] },
      { seq: 6, name: "Arcanologo",                 abilities: ["Analisi Beyonder", "Dissipazione Magica", "Biblioteca Mentale"] },
      { seq: 5, name: "Scrutatore di Misteri",      abilities: ["Rivelazione dei Segreti", "Visione dell'Occulto", "Lettura delle Intenzioni"] },
      { seq: 4, name: "Notaio della Verità",        abilities: ["Vincolo di Verità", "Patto Infrangibile", "Registrazione Cosmica"] },
      { seq: 3, name: "Studioso del Linguaggio Divino", abilities: ["Parola di Potere", "Riscrittura della Realtà", "Nome Vero"] },
      { seq: 2, name: "Mistico",                    abilities: ["Comprensione Universale", "Manipolazione delle Leggi", "Equazione Cosmica"] },
      { seq: 1, name: "Custode dei Segreti",        abilities: ["Archivio dell'Universo", "Conoscenza Proibita", "Sigillo Eterno"] },
      { seq: 0, name: "Il Mago",                    abilities: ["Dominio della Conoscenza", "Onniscienza Parziale", "Creazione di Leggi"] },
    ],
  },
  // ── II — La Sacerdotessa ──────────────────────────────────────────────────
  {
    pathway: "La Sacerdotessa",
    sequences: [
      { seq: 9, name: "Spettatore",                 abilities: ["Lettura delle Emozioni", "Osservazione Passiva", "Invisibilità Sociale"] },
      { seq: 8, name: "Sensitivo",                  abilities: ["Telepatia di Base", "Ascolto dei Pensieri Superficiali", "Eco Mentale"] },
      { seq: 7, name: "Ascoltatore",                abilities: ["Visione dei Sogni", "Connessione Onirica", "Viaggio nel Sogno"] },
      { seq: 6, name: "Tessitore di Incubi",        abilities: ["Incubo Controllato", "Trauma Impianto", "Paura Ancestrale"] },
      { seq: 5, name: "Sonnambulo",                 abilities: ["Corpo nel Sogno", "Proiezione Onirica", "Realtà Sovrapposta"] },
      { seq: 4, name: "Tessitore di Sogni",         abilities: ["Architettura Onirica", "Sogno Collettivo", "Trappola dei Sogni"] },
      { seq: 3, name: "Maestro dei Sogni",          abilities: ["Signoria Onirica", "Fusione Mente-Sogno", "Profetismo Onirico"] },
      { seq: 2, name: "Camminatore nei Sogni",      abilities: ["Realtà Alternativa", "Ponte tra Mondi", "Archivio Onirico Cosmico"] },
      { seq: 1, name: "Giudice del Destino",        abilities: ["Visione del Fato Assoluto", "Alterazione del Karma", "Sentenza Cosmica"] },
      { seq: 0, name: "La Sacerdotessa",            abilities: ["Signoria sui Sogni", "Conoscenza Arcana Totale", "Oracolo Supremo"] },
    ],
  },
  // ── III — L'Imperatrice ───────────────────────────────────────────────────
  {
    pathway: "L'Imperatrice",
    sequences: [
      { seq: 9, name: "Bardo",                      abilities: ["Voce Incantata", "Canzone di Emozione", "Improvvisazione Mistica"] },
      { seq: 8, name: "Danzatore",                  abilities: ["Danza delle Illusioni", "Movimento Incantatorio", "Ritmo dell'Anima"] },
      { seq: 7, name: "Musa",                       abilities: ["Ispirazione Soprannaturale", "Aura Artistica", "Creatività Magica"] },
      { seq: 6, name: "Strega",                     abilities: ["Maledizione d'Amore", "Charme Irresistibile", "Patto di Bellezza"] },
      { seq: 5, name: "Signora delle Arti",         abilities: ["Creazione Vivente", "Animazione dell'Arte", "Capolavoro Eterno"] },
      { seq: 4, name: "Incantatrice",               abilities: ["Controllo delle Passioni", "Legame d'Anima", "Dominio Emotivo"] },
      { seq: 3, name: "Dea dell'Arte",              abilities: ["Creazione di Realtà", "Bellezza Cosmica", "Perfezione Manifestata"] },
      { seq: 2, name: "Regina delle Muse",          abilities: ["Ispirazione Divina", "Architettura della Realtà", "Arte che Crea"] },
      { seq: 1, name: "Madre Creativa",             abilities: ["Creazione dal Nulla", "Origine della Vita", "Fertilità Cosmica"] },
      { seq: 0, name: "L'Imperatrice",              abilities: ["Dominio della Creazione", "Vita Manifesta", "Amore Assoluto"] },
    ],
  },
  // ── IV — L'Imperatore ─────────────────────────────────────────────────────
  {
    pathway: "L'Imperatore",
    sequences: [
      { seq: 9, name: "Farmacista",                 abilities: ["Preparazione di Pozioni", "Identificazione Alchemica", "Antidoto"] },
      { seq: 8, name: "Potiomante",                 abilities: ["Pozione Potenziata", "Miscela Esplosiva", "Elisir Temporaneo"] },
      { seq: 7, name: "Psicologo",                  abilities: ["Manipolazione Psicologica", "Condizionamento", "Valutazione Mentale"] },
      { seq: 6, name: "Ipnotista",                  abilities: ["Ipnosi Profonda", "Suggestione Post-Ipnotica", "Controllo della Memoria"] },
      { seq: 5, name: "Manipolatore",               abilities: ["Controllo a Distanza", "Fantoccio Vivente", "Rete di Controllo"] },
      { seq: 4, name: "Propagandista",              abilities: ["Isteria di Massa", "Rivoluzione Guidata", "Dominio del Gruppo"] },
      { seq: 3, name: "Cospiratore",                abilities: ["Rete Invisibile", "Piano Infallibile", "Controllo delle Fazioni"] },
      { seq: 2, name: "Istigatore",                 abilities: ["Conflitto Inevitabile", "Caos Controllato", "Guida nell'Ombra"] },
      { seq: 1, name: "Mago Frenetico",             abilities: ["Potere Senza Limiti", "Controllo Totale", "Volontà Assoluta"] },
      { seq: 0, name: "L'Imperatore",               abilities: ["Dominio Assoluto", "Comando Supremo", "Legge Personificata"] },
    ],
  },
  // ── V — Il Papa ───────────────────────────────────────────────────────────
  {
    pathway: "Il Papa",
    sequences: [
      { seq: 9, name: "Marinaio",                   abilities: ["Senso del Mare", "Resistenza alle Tempeste", "Navigazione Istintiva"] },
      { seq: 8, name: "Pescatore",                  abilities: ["Richiamo dei Pesci", "Respirazione Subacquea", "Nuoto Potenziato"] },
      { seq: 7, name: "Traduttore Oceanico",        abilities: ["Linguaggio delle Onde", "Comunicazione Marina", "Visione Subacquea"] },
      { seq: 6, name: "Camminatore di Nebbia",      abilities: ["Nebbia Controllata", "Invisibilità nella Nebbia", "Senso della Nebbia"] },
      { seq: 5, name: "Marinaio d'Acque Profonde",  abilities: ["Comunione con il Mare", "Porta Oceanica", "Pressione Addominale"] },
      { seq: 4, name: "Burrasca",                   abilities: ["Controllo dei Venti", "Tempesta Locale", "Fulmini del Mare"] },
      { seq: 3, name: "Cataclisma",                 abilities: ["Maremoto", "Uragano Invocato", "Abisso Aperto"] },
      { seq: 2, name: "Re del Mare",                abilities: ["Dominio degli Oceani", "Leviatano Risvegliato", "Corrente dell'Eternità"] },
      { seq: 1, name: "Calamità",                   abilities: ["Distruzione di Massa", "Forza Primordiale", "Fine delle Acque"] },
      { seq: 0, name: "Il Papa",                    abilities: ["Dominio Assoluto del Mare", "Legge Oceanica", "Origine delle Acque"] },
    ],
  },
  // ── VI — Gli Amanti ───────────────────────────────────────────────────────
  {
    pathway: "Gli Amanti",
    sequences: [
      { seq: 9, name: "Chiaroveggente",             abilities: ["Visione del Futuro Prossimo", "Premonizione", "Senso del Pericolo Amoroso"] },
      { seq: 8, name: "Strega del Cuore",           abilities: ["Maledizione di Amore", "Incantesimo Romantico", "Pozione d'Attrazione"] },
      { seq: 7, name: "Incantatrice",               abilities: ["Charme Assoluto", "Fascinazione", "Controllo delle Passioni"] },
      { seq: 6, name: "Cacciatrice",                abilities: ["Caccia al Bersaglio Emotivo", "Sentiero del Cuore", "Legame Invisibile"] },
      { seq: 5, name: "Fantasma d'Amore",           abilities: ["Forma Spettrale d'Amore", "Possessione Passionale", "Legame d'Anima Forte"] },
      { seq: 4, name: "Maga del Cuore",             abilities: ["Rottura di Vincoli", "Creazione di Legami", "Manipolazione del Fato Amoroso"] },
      { seq: 3, name: "Dea dell'Amore",             abilities: ["Amore Assoluto", "Odio Eterno", "Passione Distruttiva"] },
      { seq: 2, name: "Regina dei Cuori",           abilities: ["Dominio delle Emozioni", "Signoria sul Desiderio", "Architettura Emotiva"] },
      { seq: 1, name: "Anima Gemella",              abilities: ["Fusione d'Anime", "Connessione Cosmica", "Completezza"] },
      { seq: 0, name: "Gli Amanti",                 abilities: ["Amore e Odio Cosmici", "Dualità Assoluta", "Origine del Sentimento"] },
    ],
  },
  // ── VII — Il Carro ────────────────────────────────────────────────────────
  {
    pathway: "Il Carro",
    sequences: [
      { seq: 9, name: "Avventuriero",               abilities: ["Agilità Aumentata", "Senso del Pericolo", "Fuga Tattica"] },
      { seq: 8, name: "Esploratore",                abilities: ["Orientamento Perfetto", "Resistenza alle Intemperie", "Vista Lunga"] },
      { seq: 7, name: "Guerriero",                  abilities: ["Tecnica di Combattimento", "Resistenza ai Colpi", "Furia da Battaglia"] },
      { seq: 6, name: "Cavaliere",                  abilities: ["Comando della Cavalcatura", "Carica Devastante", "Aura di Comando"] },
      { seq: 5, name: "Campione",                   abilities: ["Sfida al Duello", "Potere del Vincitore", "Protezione degli Alleati"] },
      { seq: 4, name: "Eroe",                       abilities: ["Coraggio Eroico", "Ispirazione di Massa", "Sacrificio Potenziato"] },
      { seq: 3, name: "Leggenda",                   abilities: ["Presenza Leggendaria", "Impresa Impossibile", "Nome che Ispira"] },
      { seq: 2, name: "Dio della Guerra",           abilities: ["Dominio del Conflitto", "Senso del Campo di Battaglia", "Aura di Vittoria"] },
      { seq: 1, name: "Invincibile",                abilities: ["Invulnerabilità Temporanea", "Vittoria Garantita", "Barriera Assoluta"] },
      { seq: 0, name: "Il Carro",                   abilities: ["Dominio del Movimento", "Vittoria Cosmica", "Forza della Volontà"] },
    ],
  },
  // ── VIII — La Forza ───────────────────────────────────────────────────────
  {
    pathway: "La Forza",
    sequences: [
      { seq: 9, name: "Artigiano",                  abilities: ["Crafting Potenziato", "Senso dei Materiali", "Riparazione Rapida"] },
      { seq: 8, name: "Fabbro",                     abilities: ["Forgiatura Mistica", "Tempra Magica", "Arma Personalizzata"] },
      { seq: 7, name: "Artefice",                   abilities: ["Creazione di Artefatti Minori", "Incantamento degli Oggetti", "Disegno Runico"] },
      { seq: 6, name: "Ingegnere Mistico",           abilities: ["Macchina da Guerra", "Trappola Meccanica", "Automazione Arcana"] },
      { seq: 5, name: "Inventore",                  abilities: ["Invenzione Rivoluzionaria", "Modifica Beyonder", "Prototipo Funzionante"] },
      { seq: 4, name: "Maestro Artefice",           abilities: ["Artefatto di Alto Livello", "Sigillo Permanente", "Macchina Vivente"] },
      { seq: 3, name: "Forgiatore di Destini",      abilities: ["Arma Leggendaria", "Armatura dell'Anima", "Oggetto Unico"] },
      { seq: 2, name: "Demiurgo",                   abilities: ["Creazione di Esseri", "Forgiatura di Realtà", "Materia Prima Assoluta"] },
      { seq: 1, name: "Grande Forgiatore",          abilities: ["Creazione di Leggi Fisiche", "Fondamento della Materia", "Ordine Cosmico"] },
      { seq: 0, name: "La Forza",                   abilities: ["Dominio della Materia", "Creazione dal Nulla", "Forza Primordiale"] },
    ],
  },
  // ── IX — L'Eremita ────────────────────────────────────────────────────────
  {
    pathway: "L'Eremita",
    sequences: [
      { seq: 9, name: "Assassino",                  abilities: ["Furtività Migliorata", "Colpo Silenzioso", "Analisi del Bersaglio"] },
      { seq: 8, name: "Istigatore",                 abilities: ["Seminare Discordia", "Manipolazione delle Informazioni", "Rete di Spie"] },
      { seq: 7, name: "Dottore Stregone",           abilities: ["Medicina Occulta", "Veleno Beyonder", "Cura Mistica"] },
      { seq: 6, name: "Sciamano",                   abilities: ["Comunione con gli Spiriti", "Rituale di Purificazione", "Totem Spirituale"] },
      { seq: 5, name: "Misticologo",                abilities: ["Ricerca Occulta", "Accesso a Conoscenze Proibite", "Analisi degli Artefatti"] },
      { seq: 4, name: "Cacciatore di Demoni",       abilities: ["Rilevamento Demoniaco", "Arma Sacra", "Esorcismo"] },
      { seq: 3, name: "Sottomettitore di Demoni",   abilities: ["Legame Demoniaco", "Controllo Bestiale", "Patto di Servitù"] },
      { seq: 2, name: "Guardiano Notturno",         abilities: ["Vista nel Buio Assoluto", "Sentinella Cosmica", "Barriera dell'Ombra"] },
      { seq: 1, name: "Imperatore delle Tenebre",   abilities: ["Dominio delle Ombre", "Notte Eterna Locale", "Assenza di Luce"] },
      { seq: 0, name: "L'Eremita",                  abilities: ["Saggezza Assoluta", "Isolamento Cosmico", "Luce nella Tenebra"] },
    ],
  },
  // ── X — La Ruota della Fortuna ────────────────────────────────────────────
  {
    pathway: "La Ruota della Fortuna",
    sequences: [
      { seq: 9, name: "Fortunato",                  abilities: ["Bonus Fortuna Passivo", "Coincidenza Fortunata", "Schivata Istintiva"] },
      { seq: 8, name: "Giocatore Principiante",     abilities: ["Trucco del Giocatore", "Lettura delle Probabilità", "Bluff"] },
      { seq: 7, name: "Giocatore Professionista",   abilities: ["Calcolo delle Probabilità", "Controllo degli Esiti", "Memoria delle Carte"] },
      { seq: 6, name: "Giudice Corrotto",           abilities: ["Manipolazione dei Giudizi", "Sentenza Alterata", "Corruzione del Destino"] },
      { seq: 5, name: "Veggente",                   abilities: ["Preveggenza Accurata", "Oroscopo Beyonder", "Profezia Personale"] },
      { seq: 4, name: "Mietitore",                  abilities: ["Raccolta del Karma", "Debito del Destino", "Vita Sottratta"] },
      { seq: 3, name: "Arbitro",                    abilities: ["Giudizio Assoluto", "Karma Immediato", "Legge del Destino"] },
      { seq: 2, name: "Tessitore del Fato",         abilities: ["Riscrittura del Destino", "Filo della Vita", "Connessione Karmica"] },
      { seq: 1, name: "Calamità del Caso",          abilities: ["Sfortuna di Massa", "Evento Catastrofico", "Inversione della Fortuna"] },
      { seq: 0, name: "La Ruota",                   abilities: ["Dominio del Caso", "Ciclo Eterno", "Origine del Destino"] },
    ],
  },
  // ── XI — La Giustizia ─────────────────────────────────────────────────────
  {
    pathway: "La Giustizia",
    sequences: [
      { seq: 9, name: "Soldato",                    abilities: ["Addestramento Militare", "Resistenza al Dolore", "Disciplina Ferrea"] },
      { seq: 8, name: "Guardia del Corpo",          abilities: ["Scudo Umano", "Senso del Pericolo per il Protetto", "Intercettazione"] },
      { seq: 7, name: "Detective",                  abilities: ["Osservazione Acuta", "Deduzione Logica", "Analisi della Scena"] },
      { seq: 6, name: "Inquisitore",                abilities: ["Rilevamento della Menzogna", "Interrogatorio Psicologico", "Giudizio di Colpa"] },
      { seq: 5, name: "Arbitro della Legge",        abilities: ["Aura di Autorità", "Sentenza Vincolante", "Ordine Imposto"] },
      { seq: 4, name: "Custode della Giustizia",    abilities: ["Punizione del Colpevole", "Protezione dell'Innocente", "Bilanciamento Cosmico"] },
      { seq: 3, name: "Campione della Giustizia",   abilities: ["Spada della Verità", "Invulnerabilità Morale", "Legge Divina"] },
      { seq: 2, name: "Esecutore Divino",           abilities: ["Punizione Cosmica", "Retribuzione Automatica", "Giustizia Implacabile"] },
      { seq: 1, name: "Giudice Supremo",            abilities: ["Sentenza Finale", "Peso della Colpa Assoluto", "Purificazione Forzata"] },
      { seq: 0, name: "La Giustizia",               abilities: ["Equilibrio Cosmico", "Legge Assoluta", "Ordine Universale"] },
    ],
  },
  // ── XII — L'Appeso ────────────────────────────────────────────────────────
  {
    pathway: "L'Appeso",
    sequences: [
      { seq: 9, name: "Prigioniero",                abilities: ["Resistenza alla Prigionia", "Adattamento Estremo", "Sopravvivenza"] },
      { seq: 8, name: "Predone",                    abilities: ["Furto Beyonder", "Nascondersi tra la Folla", "Fuga Rapida"] },
      { seq: 7, name: "Lottatore",                  abilities: ["Combattimento a Mani Nude", "Presa Mortale", "Resistenza ai Colpi"] },
      { seq: 6, name: "Combattente",                abilities: ["Tecnica di Combattimento Avanzata", "Adattamento in Battaglia", "Contro-Attacco"] },
      { seq: 5, name: "Gladiatore",                 abilities: ["Arena di Controllo", "Combattimento Spettacolare", "Volontà del Pubblico"] },
      { seq: 4, name: "Guardiano",                  abilities: ["Muro Invalicabile", "Protocollo di Difesa", "Barriera Fisica"] },
      { seq: 3, name: "Campione",                   abilities: ["Invincibilità Temporanea", "Forza del Campione", "Aura Intimidatoria"] },
      { seq: 2, name: "Oscurità Eterna",            abilities: ["Ombra Vivente", "Consumare la Luce", "Vuoto Assoluto"] },
      { seq: 1, name: "Grande Calamità",            abilities: ["Forza Distruttiva", "Impatto Sismico", "Onda d'Urto Cosmica"] },
      { seq: 0, name: "L'Appeso",                   abilities: ["Sacrificio che Libera", "Inversione Cosmica", "Saggezza del Paradosso"] },
    ],
  },
  // ── XIII — La Morte ───────────────────────────────────────────────────────
  {
    pathway: "La Morte",
    sequences: [
      { seq: 9, name: "Non Morto",                  abilities: ["Resistenza alla Morte", "Aura di Morte", "Freddo della Morte"] },
      { seq: 8, name: "Vampiro",                    abilities: ["Drenaggio Vitale", "Volo Notturno", "Affascinamento"] },
      { seq: 7, name: "Signore degli Scheletri",    abilities: ["Controllo degli Scheletri", "Esercito dei Morti", "Barriera Ossea"] },
      { seq: 6, name: "Necromante",                 abilities: ["Resurrezione Temporanea", "Comunicazione coi Morti", "Legame dell'Anima"] },
      { seq: 5, name: "Lich",                       abilities: ["Filopatria dell'Anima", "Immunità al Corpo", "Magia della Morte"] },
      { seq: 4, name: "Portatore di Morte",         abilities: ["Tocco di Morte", "Malattia Istantanea", "Campo di Morte"] },
      { seq: 3, name: "Signore della Morte",        abilities: ["Dominio dei Morti", "Portale dell'Aldilà", "Mietitura delle Anime"] },
      { seq: 2, name: "Re dei Non Morti",           abilities: ["Armata Spettrale", "Immunità alla Vita", "Aura della Fine"] },
      { seq: 1, name: "Principe Oscuro",            abilities: ["Oscurità Cosmica", "Fine della Vita", "Dominio dell'Aldilà"] },
      { seq: 0, name: "La Morte",                   abilities: ["Mietitura Cosmica", "Ciclo della Vita e della Morte", "Necessità Assoluta"] },
    ],
  },
  // ── XIV — La Temperanza ───────────────────────────────────────────────────
  {
    pathway: "La Temperanza",
    sequences: [
      { seq: 9, name: "Sacerdote",                  abilities: ["Benedizione Minore", "Guarigione di Base", "Senso del Sacro"] },
      { seq: 8, name: "Guaritore",                  abilities: ["Cura Ferite", "Rimozione Veleni", "Aura Purificante"] },
      { seq: 7, name: "Esorcista",                  abilities: ["Esorcismo Semplice", "Barriera Santa", "Rilevamento del Male"] },
      { seq: 6, name: "Inquisitore Sacro",          abilities: ["Marchio Sacro", "Punizione dei Corrotti", "Protezione Divina"] },
      { seq: 5, name: "Paladino",                   abilities: ["Aura di Protezione", "Colpo Sacro", "Resistenza al Caos"] },
      { seq: 4, name: "Alto Sacerdote",             abilities: ["Miracolo di Guarigione", "Benedizione di Massa", "Scudo Divino"] },
      { seq: 3, name: "Campione Divino",            abilities: ["Incarnazione della Fede", "Arma Divina", "Grazia Assoluta"] },
      { seq: 2, name: "Santo",                      abilities: ["Santità Irradiante", "Miracolo Maggiore", "Aura di Redenzione"] },
      { seq: 1, name: "Profeta",                    abilities: ["Profezia Divina", "Volontà Divina Canalizzata", "Miracolo Cosmico"] },
      { seq: 0, name: "La Temperanza",              abilities: ["Equilibrio Assoluto", "Guarigione Cosmica", "Armonia Universale"] },
    ],
  },
  // ── XV — Il Diavolo ───────────────────────────────────────────────────────
  {
    pathway: "Il Diavolo",
    sequences: [
      { seq: 9, name: "Schiavo",                    abilities: ["Obbedienza Forzata", "Resistenza alla Tortura", "Sopravvivenza Disperata"] },
      { seq: 8, name: "Demonista",                  abilities: ["Evocazione di Demoni Minori", "Patto Demoniaco", "Marchio del Diavolo"] },
      { seq: 7, name: "Corruttore",                 abilities: ["Corruzione dell'Anima", "Tentazione Irresistibile", "Vizio Amplificato"] },
      { seq: 6, name: "Tiranno",                    abilities: ["Controllo attraverso la Paura", "Dominio Assoluto", "Volontà Schiacciante"] },
      { seq: 5, name: "Signore del Peccato",        abilities: ["I Sette Peccati Capitali", "Potenziamento del Vizio", "Corruzione di Massa"] },
      { seq: 4, name: "Principe dei Demoni",        abilities: ["Esercito Demoniaco", "Portale Infernale", "Contratto d'Anime"] },
      { seq: 3, name: "Arcidiavolo",                abilities: ["Possessione Totale", "Dominio del Buio", "Corruzione Cosmica"] },
      { seq: 2, name: "Re dei Demoni",              abilities: ["Signoria sull'Inferno", "Reclutamento delle Anime", "Legge Demoniaca"] },
      { seq: 1, name: "Tentatore Supremo",          abilities: ["Corruzione Irresistibile", "Caduta Garantita", "Peccato Originale"] },
      { seq: 0, name: "Il Diavolo",                 abilities: ["Signoria sul Male", "Seduzione Cosmica", "Catene Assolute"] },
    ],
  },
  // ── XVI — La Torre ────────────────────────────────────────────────────────
  {
    pathway: "La Torre",
    sequences: [
      { seq: 9, name: "Fuochista",                  abilities: ["Controllo del Fuoco", "Resistenza alle Fiamme", "Lanciafiamme"] },
      { seq: 8, name: "Esplosivista",               abilities: ["Bomba Arcana", "Deflagrazione Controllata", "Onda d'Urto"] },
      { seq: 7, name: "Artificiere",                abilities: ["Armi Esplosive", "Trappole Mortali", "Granata Mistica"] },
      { seq: 6, name: "Distruttore",                abilities: ["Colpo Demolitore", "Campo di Distruzione", "Struttura Indebolita"] },
      { seq: 5, name: "Catastrofe",                 abilities: ["Sisma Locale", "Crollo Strutturale", "Tempesta di Fuoco"] },
      { seq: 4, name: "Signore della Distruzione",  abilities: ["Distruzione di Massa", "Onda Devastante", "Annientamento"] },
      { seq: 3, name: "Agente del Caos",            abilities: ["Caos Puro", "Distorsione della Realtà", "Rottura delle Leggi"] },
      { seq: 2, name: "Forza Primordiale",          abilities: ["Energia Caotica Assoluta", "Deflagrazione Cosmica", "Rinascita dal Fuoco"] },
      { seq: 1, name: "Grande Catastrofe",          abilities: ["Apocalisse Locale", "Fine Inevitabile", "Distruzione Totale"] },
      { seq: 0, name: "La Torre",                   abilities: ["Distruzione Cosmica", "Rinnovamento attraverso la Rovina", "Origine del Caos"] },
    ],
  },
  // ── XVII — La Stella ──────────────────────────────────────────────────────
  {
    pathway: "La Stella",
    sequences: [
      { seq: 9, name: "Osservatore di Stelle",      abilities: ["Navigazione Stellare", "Oroscopo Preciso", "Lettura dei Cieli"] },
      { seq: 8, name: "Astronomo",                  abilities: ["Calcolo Astronomico", "Previsione degli Astri", "Mappa Celeste"] },
      { seq: 7, name: "Astrologo",                  abilities: ["Profezia Stellare", "Destino Scritto nelle Stelle", "Portale Stellare"] },
      { seq: 6, name: "Veggente Stellare",          abilities: ["Visione attraverso le Stelle", "Comunicazione Cosmica", "Luce Stellare Offensiva"] },
      { seq: 5, name: "Guardiano del Cosmo",        abilities: ["Protezione Cosmica", "Schermo Stellare", "Viaggio tra le Stelle"] },
      { seq: 4, name: "Araldo delle Stelle",        abilities: ["Messaggio Cosmico", "Decreto Stellare", "Voce dell'Universo"] },
      { seq: 3, name: "Signore delle Stelle",       abilities: ["Creazione di Stelle", "Dominio Astronomico", "Gravità Stellare"] },
      { seq: 2, name: "Sovrano Cosmico",            abilities: ["Controllo di Sistemi Stellari", "Legge del Cosmo", "Spazio Piegato"] },
      { seq: 1, name: "Divinità Stellare",          abilities: ["Potere di una Stella", "Calore Stellare Assoluto", "Luce Infinita"] },
      { seq: 0, name: "La Stella",                  abilities: ["Essere Cosmico", "Speranza Universale", "Luce nel Buio Eterno"] },
    ],
  },
  // ── XVIII — La Luna ───────────────────────────────────────────────────────
  {
    pathway: "La Luna",
    sequences: [
      { seq: 9, name: "Licantropo",                 abilities: ["Trasformazione Parziale", "Sensi Acuiti", "Forza Lunare"] },
      { seq: 8, name: "Mutaforma",                  abilities: ["Cambiamento di Forma", "Mimesi Perfetta", "Adattamento Fisico"] },
      { seq: 7, name: "Cacciatore Lunare",          abilities: ["Visione Notturna Assoluta", "Agilità della Notte", "Istinto di Caccia"] },
      { seq: 6, name: "Bestia Lunare",              abilities: ["Forma Bestiale Avanzata", "Ruggito Paralizzante", "Artigli Lunari"] },
      { seq: 5, name: "Signore dei Lupi",           abilities: ["Branco Obbediente", "Comando dei Predatori", "Aura Lunare"] },
      { seq: 4, name: "Grande Bestia",              abilities: ["Trasformazione Gigante", "Dominio sulle Bestie", "Ciclo Lunare Controllato"] },
      { seq: 3, name: "Guardiano della Luna",       abilities: ["Scudo Lunare", "Luce della Luna Offensiva", "Marea Cosmica"] },
      { seq: 2, name: "Aspetto della Luna",         abilities: ["Forma Lunare Completa", "Marcia delle Maree", "Illusione Lunare"] },
      { seq: 1, name: "Incarnazione Lunare",        abilities: ["Potere della Luna Piena", "Ciclo Eterno", "Dualità Luce-Buio"] },
      { seq: 0, name: "La Luna",                    abilities: ["Ciclo Cosmico", "Riflesso dell'Assoluto", "Dualità dell'Essere"] },
    ],
  },
  // ── XIX — Il Sole ─────────────────────────────────────────────────────────
  {
    pathway: "Il Sole",
    sequences: [
      { seq: 9, name: "Fotomante",                  abilities: ["Raggio di Luce", "Luce Accecante", "Calore Solare"] },
      { seq: 8, name: "Guaritore della Luce",       abilities: ["Guarigione con la Luce", "Purificazione Radiante", "Aura Solare"] },
      { seq: 7, name: "Guardiano della Luce",       abilities: ["Scudo di Luce", "Barriera Solare", "Luce Santa"] },
      { seq: 6, name: "Propagatore della Luce",     abilities: ["Diffusione Solare", "Campo di Luce", "Illuminazione Mistica"] },
      { seq: 5, name: "Luce del Mattino",           abilities: ["Alba Artificiale", "Dissolvenza delle Tenebre", "Rinascita Solare"] },
      { seq: 4, name: "Campione della Luce",        abilities: ["Spada Solare", "Armatura di Raggi", "Giudizio Luminoso"] },
      { seq: 3, name: "Servo del Sole",             abilities: ["Canalizzazione Solare", "Riflesso Divino", "Benedizione del Sole"] },
      { seq: 2, name: "Aspetto del Sole",           abilities: ["Aura Solare Totale", "Calore Assoluto", "Luce Penetrante"] },
      { seq: 1, name: "Incarnazione del Sole",      abilities: ["Fiamma Eterna", "Energia Solare Infinita", "Purificazione Cosmica"] },
      { seq: 0, name: "Il Sole",                    abilities: ["Fonte di Luce Cosmica", "Calore dell'Universo", "Origine della Vita"] },
    ],
  },
  // ── XX — Il Giudizio ──────────────────────────────────────────────────────
  {
    pathway: "Il Giudizio",
    sequences: [
      { seq: 9, name: "Predicatore",                abilities: ["Sermone Convincente", "Aura di Fede", "Voce Amplificata"] },
      { seq: 8, name: "Missionario",                abilities: ["Conversione di Massa", "Resistenza alla Tentazione", "Fede Scudo"] },
      { seq: 7, name: "Angelo Caduto",              abilities: ["Ali Residue", "Lama Sacra", "Emissione Sacra"] },
      { seq: 6, name: "Espiatore",                  abilities: ["Assorbimento del Peccato", "Purificazione Altrui", "Sacrificio Volontario"] },
      { seq: 5, name: "Arcangelo Minore",           abilities: ["Comando degli Angeli", "Tromba del Giudizio", "Luce Divina"] },
      { seq: 4, name: "Arcangelo",                  abilities: ["Forma Angelica", "Parola Divina", "Protezione Assoluta"] },
      { seq: 3, name: "Giudice Cosmico",            abilities: ["Sentenza di Massa", "Risveglio dei Morti", "Fine Annunciata"] },
      { seq: 2, name: "Angelo del Giudizio",        abilities: ["Resurrezione Giudicante", "Separazione degli Spiriti", "Trombetta Cosmica"] },
      { seq: 1, name: "Primo Angelo",               abilities: ["Volere Divino Assoluto", "Annuncio Cosmico", "Alba del Giudizio"] },
      { seq: 0, name: "Il Giudizio",                abilities: ["Fine e Nuovo Inizio", "Resurrezione Universale", "Ciclo Cosmico Completato"] },
    ],
  },
  // ── XXI — Il Mondo ────────────────────────────────────────────────────────
  {
    pathway: "Il Mondo",
    sequences: [
      { seq: 9, name: "Animista",                   abilities: ["Comunicazione con la Natura", "Risveglio delle Piante", "Legame Naturale"] },
      { seq: 8, name: "Druidico",                   abilities: ["Trasformazione Animale", "Guarigione della Terra", "Magia Verde"] },
      { seq: 7, name: "Custode della Terra",        abilities: ["Controllo del Terreno", "Terraformazione Minore", "Radici Armate"] },
      { seq: 6, name: "Signore della Natura",       abilities: ["Tempesta Naturale", "Risveglio degli Alberi", "Piaghe Naturali"] },
      { seq: 5, name: "Avatar della Terra",         abilities: ["Forma della Terra", "Creazione di Vita", "Controllo Geologico"] },
      { seq: 4, name: "Voce del Mondo",             abilities: ["Decreto della Natura", "Legge Naturale", "Equilibrio Ecologico"] },
      { seq: 3, name: "Guardiano Planetario",       abilities: ["Protezione Planetaria", "Guarigione della Terra", "Aura del Mondo"] },
      { seq: 2, name: "Aspetto del Mondo",          abilities: ["Controllo dei Biomi", "Rete Planetaria", "Coscienza della Terra"] },
      { seq: 1, name: "Spirito del Mondo",          abilities: ["Incarnazione Planetaria", "Volere del Pianeta", "Ciclo della Vita"] },
      { seq: 0, name: "Il Mondo",                   abilities: ["Perfezione Cosmica", "Totalità dell'Essere", "Fine e Origine"] },
    ],
  },
];

// ── Funzione principale ──────────────────────────────────────────────────────
async function populateCompendium() {
  const packName = "lotm.lotm-abilities";
  const pack = game.packs.get(packName);
  if (!pack) {
    ui.notifications.error(`Compendio '${packName}' non trovato.`);
    return;
  }

  await pack.configure({ locked: false });

  const existing      = await pack.getDocuments();
  const existingNames = new Set(existing.map(i => i.name));
  let created = 0;

  for (const pathway of PATHWAYS) {
    for (const seq of pathway.sequences) {
      for (const abilityName of seq.abilities) {
        const fullName = `[${pathway.pathway}] Seq.${seq.seq} ${seq.name} — ${abilityName}`;
        if (existingNames.has(fullName)) continue;

        await Item.create({
          name: fullName,
          type: "ability",
          system: {
            abilityType: seq.seq <= 6 ? "ritual" : seq.seq === 7 ? "passive" : "active",
            sequence:    seq.seq,
            pathway:     pathway.pathway,
            cost:        "",
            range:       "",
            duration:    "",
            description: `<p><em>${abilityName}</em> — Abilità della Sequenza ${seq.seq} del percorso <strong>${pathway.pathway}</strong> (${seq.name}).</p><p>Inserisci qui la descrizione dettagliata dell'abilità.</p>`,
          },
        }, { pack: packName });

        created++;
      }
    }
  }

  await pack.configure({ locked: true });
  ui.notifications.info(`LotM | Compendio popolato: ${created} abilità create (${PATHWAYS.length} percorsi × 10 sequenze × 3 abilità).`);
}

populateCompendium();
