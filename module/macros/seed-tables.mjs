/**
 * MACRO — Popola le Tabelle Casuali LotM
 * Esegui questa macro in-game per creare le RollTable nel compendio lotm-tables.
 *
 * USO: Crea una macro di tipo "script" in Foundry e incolla questo codice,
 *      oppure eseguila dalla console del browser.
 */

const TABLES = [
  {
    name: "Sussurri nella Nebbia",
    description: "Messaggi misteriosi uditi nella nebbia grigia del Fool's Tarot Meeting.",
    formula: "1d20",
    results: [
      "Un sussurro recita un nome che non conosci, eppure ti sembra familiare.",
      "«La nebbia non mente mai, ma non dice mai tutta la verità.»",
      "Senti passi dietro di te. Quando ti volti, non c'è nessuno.",
      "Una voce di bambino conta lentamente all'indietro da dieci.",
      "Il profumo di rose rosse permea l'aria — un segno di pericolo.",
      "Qualcuno sta pregando in una lingua morta da mille anni.",
      "«Sopra la nebbia, esisteva un essere simile a Dio.»",
      "Un orologio ticchetta, ma non c'è orologio visibile.",
      "Vedi l'ombra di qualcuno che non cammina — fluttua.",
      "«Il Folle non ha un percorso definito. Può andare ovunque.»",
      "Il suono di carte che vengono mescolate si diffonde nell'aria.",
      "Una risata soffocata echeggia da molto lontano.",
      "«Le Sequenze sono prigioni dorate che ci rendiamo da soli.»",
      "Senti il tuo nome pronunciato con una voce non tua.",
      "L'odore di inchiostro fresco e vecchie biblioteche.",
      "Una campana rintocca sette volte, poi silenzio.",
      "«La contaminazione è il prezzo della grandezza.»",
      "Vedi il tuo riflesso muoversi da solo in uno specchio.",
      "Un uccello nero ti segue, ma non sei sicuro che sia reale.",
      "La nebbia si addensa e per un istante vedi una figura enorme.",
    ],
  },
  {
    name: "Incontri Notturni — Backlund",
    description: "Incontri casuali nelle strade di Backlund di notte.",
    formula: "1d12",
    results: [
      "Un Cacciatore di Ricompense ti osserva da un vicolo buio.",
      "Un predicatore di strada urla profezie sull'Apocalisse.",
      "Una carrozza senza cocchiere sfreccia a tutta velocità.",
      "Tre Beyonder di Sequenza ignota stanno trattando qualcosa.",
      "Una poliziotta di Nighthaven nota la tua presenza.",
      "Un Osservatore camuffato da mendicante studia i passanti.",
      "Un membro della Chiesa della Tempesta porta un messaggio urgente.",
      "Una creatura di dimensione media si nasconde tra le ombre.",
      "Un alchimista vende pozioni dubbie di notte per evitare le tasse.",
      "La polizia insegue qualcuno — potrebbe essere un Beyonder.",
      "Un assassino professionista valuta i tuoi punti deboli.",
      "Silenzio assoluto — qualcosa ha spaventato tutti gli animali della zona.",
    ],
  },
  {
    name: "Conseguenze Rituali",
    description: "Cosa succede quando un rituale Beyonder va storto.",
    formula: "1d10",
    results: [
      "La contaminazione spirituale aumenta di 1 livello.",
      "Il costo in Punti Spirito è doppio rispetto al normale.",
      "Il rituale attira l'attenzione di un'entità indesiderata.",
      "Gli effetti durano il doppio del previsto — nel bene e nel male.",
      "Il costo ricade sul luogo invece che sul praticante.",
      "Un Beyonder nelle vicinanze percepisce l'uso di magia.",
      "La razionalità diminuisce temporaneamente di 1D4.",
      "Il rituale riesce, ma produce un effetto collaterale inaspettato.",
      "La formula era corretta, ma gli ingredienti erano adulterati.",
      "Successo parziale — solo metà degli effetti si manifestano.",
    ],
  },
  {
    name: "Voci del Mercato Nero",
    description: "Informazioni che circolano nel mercato Beyonder sotterraneo.",
    formula: "1d8",
    results: [
      "Qualcuno sta vendendo una formula di Sequenza 7 — potrebbe essere contraffatta.",
      "Un Bevitore di Sangue è stato avvistato nel distretto portuale.",
      "La Chiesa della Tempesta sta cercando un'Artefatta di Sequenza 5.",
      "Un rito proibito verrà officiato nella villa abbandonata a nord.",
      "Girano voci di una pozione di Sequenza 6 senza mittente.",
      "Un Osservatore ha perso il controllo — è diventato un mostro.",
      "Le Figlie della Marea offrono tre favori in cambio di un nome.",
      "Il Custode della Notte ha cambiato territorio — pericolo nell'est.",
    ],
  },
];

async function populateTables() {
  const packName = "lotm.lotm-tables";
  let pack = game.packs.get(packName);

  if (!pack) {
    ui.notifications.error(`Compendio '${packName}' non trovato. Verifica system.json.`);
    return;
  }

  await pack.configure({ locked: false });
  const existing = await pack.getDocuments();
  const existingNames = new Set(existing.map(t => t.name));
  let created = 0;

  for (const tableData of TABLES) {
    if (existingNames.has(tableData.name)) {
      console.log(`LotM | Tabella già esistente: ${tableData.name}`);
      continue;
    }

    const results = tableData.results.map((text, i) => ({
      type:   0,
      text,
      weight: 1,
      range:  [i + 1, i + 1],
      drawn:  false,
    }));

    await RollTable.create({
      name:        tableData.name,
      description: tableData.description,
      formula:     tableData.formula,
      replacement: true,
      displayRoll: true,
      results,
    }, { pack: packName });

    console.log(`LotM | Tabella creata: ${tableData.name}`);
    created++;
  }

  await pack.configure({ locked: true });
  ui.notifications.info(`LotM | ${created} tabelle casuali create nel compendio.`);
}

populateTables();
