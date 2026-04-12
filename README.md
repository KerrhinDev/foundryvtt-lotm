<div align="center">

![Lord of the Mysteries Banner](assets/banner.webp)

# Lord of the Mysteries — Sistema Foundry VTT

*"La nebbia non mente mai, ma non dice mai tutta la verità."*

[![Versione](https://img.shields.io/badge/versione-1.0.0-c9a227?style=for-the-badge&logo=github)](https://github.com/KerrhinDev/foundryvtt-lotm/releases/latest)
[![Foundry VTT](https://img.shields.io/badge/Foundry%20VTT-V12–V14-7b5ea7?style=for-the-badge)](https://foundryvtt.com)
[![Lingua](https://img.shields.io/badge/lingua-IT%20%7C%20EN-0b0c14?style=for-the-badge)](#)
[![Licenza](https://img.shields.io/badge/licenza-MIT-green?style=for-the-badge)](LICENSE)

</div>

---

## ✦ Cos'è questo sistema?

Un sistema completo per **Foundry VTT** basato su *Lord of the Mysteries* (*Il Signore dei Misteri*), il romanzo di **Cuttlefish That Loves Diving**.  
Permette di giocare sessioni di ruolo ambientate nel mondo Vittoriano/Steampunk di Beyonder, con meccaniche fedeli all'universo del romanzo.

---

## ⚗️ Funzionalità

### 📋 Scheda Personaggio
| Sezione | Contenuto |
|---|---|
| **Attributi** | 8 attributi (Forza, Agilità, Percezione…) con valori Fondamentale, Beyonder, Corruzione e Bonus |
| **Risorse** | Vita · Spirito · Razionalità · Punti Fortuna con barre visive in tempo reale |
| **Sequenze** | Tabella Sequenze 0–9 con bonus danno automatico e info percorso corrente |
| **Difesa** | Difesa fisica e mentale calcolate automaticamente |
| **Skills** | Abilità personalizzabili con tiro integrato |
| **Tab** | Panoramica · Difesa · Abilità · Poteri · Inventario · Note |

### 🎲 Sistema Dadi
- Dialogo tiro avanzato: **dado bonus**, **DC** configurabile, **Normale / Vantaggio / Svantaggio**
- Chat card stilizzata con indicatore **Successo / Fallimento** colorato
- Tiri generici da formula

### 🎭 Token
- Barre tracciabili sul token: **Vita**, **Spirito**, **Razionalità**, **Punti Fortuna**

### 📚 Compendio
- Pack *Abilità dei Percorsi LotM* con abilità Beyonder precaricate
- Macro inclusa per popolare il compendio con tutti i percorsi

### 🎨 Grafica
- Tema visivo ispirato all'estetica **Vittoriana e mistica** del romanzo
- Palette: blu notte · viola Beyonder · oro rituale
- Texture nebbia, glow sulle card attributi, chat card tematizzata

---

## 📦 Installazione

### Tramite Foundry VTT (consigliato)
1. Apri Foundry VTT → **Gestione Sistemi**
2. Clicca **Installa Sistema**
3. Incolla il manifesto e clicca **Installa**:
```
https://raw.githubusercontent.com/KerrhinDev/foundryvtt-lotm/main/system.json
```

### Manuale
1. Scarica `lotm.zip` dalla [pagina releases](https://github.com/KerrhinDev/foundryvtt-lotm/releases/latest)
2. Estrai nella cartella `Data/systems/` di Foundry VTT
3. Riavvia Foundry

---

## 🔧 Compatibilità

| Foundry VTT | Stato |
|---|---|
| V14 (Build 360+) | ✅ Verificato |
| V13 | ✅ Compatibile |
| V12 | ✅ Compatibile |

---

## 📖 Struttura del Progetto

```
lotm/
├── module/
│   ├── lotm.mjs              # Entry point
│   ├── data/                 # TypeDataModel (Actor & Item)
│   ├── documents/            # Actor & Item estesi
│   ├── sheets/               # Character Sheet & Ability Sheet
│   └── apps/                 # Dice Dialog
├── templates/
│   ├── actor/                # character-sheet.hbs
│   └── item/                 # ability-sheet.hbs
├── css/
│   └── lotm.css              # Tema visivo LotM
├── lang/
│   ├── it.json               # Italiano
│   └── en.json               # English
├── packs/
│   └── lotm-abilities/       # Compendio Beyonder
└── system.json               # Manifesto sistema
```

---

## 🤝 Contribuire

PR e issue benvenute! Se conosci bene i percorsi Beyonder e vuoi aiutare ad espandere il compendio delle abilità, sei il benvenuto.

---

<div align="center">

*Artwork © Tencent / Lord of Mysteries Production Committee*  
Sistema realizzato dalla community per la community.  
**"Above the Fog, there is a being like God."**

</div>
