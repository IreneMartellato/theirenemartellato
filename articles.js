/**
 * ============================================================
 *  ARTICLES.JS — DATABASE CONTENUTI
 *  theirenemartellato.it
 * ============================================================
 *
 *  COME AGGIUNGERE UN ARTICOLO:
 *  1. Copia il blocco di esempio qui sotto
 *  2. Cambia l'id (deve essere unico, es. "identita-golose-2026")
 *  3. Compila i campi in italiano e in inglese
 *  4. type: "case" per Case History, "tsi" per Trade Show Intelligence
 *  5. Salva il file — il sito si aggiorna automaticamente
 * ============================================================
 */

// ============================================================
//  CASE HISTORY IN ARRIVO (non ancora pubblicati)
//  Appaiono come "Coming soon" nella sezione Case History
// ============================================================
const CASE_COMING_SOON = [
  {
    event: "Identità Golose",
    location: "Milano",
    date: "Giugno 2026",
    category: "HoReCa · Food Excellence",
    excerpt_it: "Analisi del mercato dell'alta gastronomia italiana. Flussi, opportunità non presidiate, player emergenti.",
    excerpt_en: "Analysis of the Italian high gastronomy market. Flows, uncovered opportunities, emerging players."
  },
  {
    event: "Dolomiti Horeca",
    location: "Longarone",
    date: "2026",
    category: "HoReCa · Regional",
    excerpt_it: "Osservazione del mercato HoReCa regionale e delle dinamiche tra produttori locali e distribuzione.",
    excerpt_en: "Observation of the regional HoReCa market and dynamics between local producers and distribution."
  }
];

// ============================================================
//  ARTICOLI PUBBLICATI
//  type: "case" = Case History | type: "tsi" = Trade Show Intelligence
// ============================================================
const ARTICLES = [

  // ============================================================
  //  ESEMPIO — DECOMMENTA E MODIFICA PER AGGIUNGERE UN ARTICOLO
  // ============================================================
  /*
  {
    id: "vinitaly-2025",                        // ID unico, usato negli URL
    type: "case",                               // "case" o "tsi"
    category: "Spirits · Wine",                 // Tag visibile
    event: "Vinitaly",                          // Nome fiera
    location: "Verona",                         // Città
    date: "Aprile 2025",                        // Data
    title: {
      it: "Vinitaly 2025: il segmento che nessuno stava presidiando",
      en: "Vinitaly 2025: The segment nobody was covering"
    },
    excerpt: {
      it: "Nel padiglione spirits di Vinitaly, un gap competitivo evidente nel segmento lavaggio professionale. Nessuno lo vedeva. Ecco cosa ho osservato.",
      en: "In the Vinitaly spirits pavilion, a clear competitive gap in the professional washing segment. Nobody saw it. Here's what I observed."
    },
    content: {
      it: `
        <h2>Il contesto</h2>
        <p>Vinitaly 2025. Padiglione dedicato agli spirits, contesto internazionale, player rilevanti da tutto il mondo.</p>
        <p>Ho guardato i flussi. Ho guardato gli stand. Ho guardato cosa <strong>mancava</strong>.</p>

        <h3>I tre benchmark applicati</h3>
        <ul>
          <li><strong>Flusso di persone:</strong> concentrato nelle ore pomeridiane, non al mattino come previsto dal programma ufficiale</li>
          <li><strong>Necessità non coperte:</strong> segmento lavaggio professionale completamente assente nonostante domanda operativa visibile</li>
          <li><strong>Player fuori contesto:</strong> due espositori tecnologici posizionati in modo isolato, senza integrazione con l'ecosistema spirits</li>
        </ul>

        <h2>Il gap</h2>
        <p>Il segmento lavaggio professionale non era presidiato da nessuno — a fronte di una domanda operativa continua e visibile da parte degli operatori presenti.</p>
        <p>Non serviva essere nel posto giusto. Serviva guardare nel posto giusto.</p>

        <h2>Le opportunità identificate</h2>
        <p>Per le aziende che operano nel segmento HoReCa professionale, Vinitaly rappresenta un punto di accesso diretto a decision maker che normalmente richiedono mesi di approccio commerciale tradizionale.</p>
      `,
      en: `
        <h2>Context</h2>
        <p>Vinitaly 2025. Spirits pavilion, international context, relevant players from around the world.</p>
        <p>I looked at the flows. I looked at the stands. I looked at what was <strong>missing</strong>.</p>

        <h3>Three benchmarks applied</h3>
        <ul>
          <li><strong>People flow:</strong> concentrated in afternoon hours, not in the morning as the official program suggested</li>
          <li><strong>Uncovered needs:</strong> professional washing segment completely absent despite visible operational demand</li>
          <li><strong>Out-of-context players:</strong> two technology exhibitors positioned in isolation, without integration with the spirits ecosystem</li>
        </ul>

        <h2>The gap</h2>
        <p>The professional washing segment was not covered by anyone — despite continuous and visible operational demand from operators present.</p>
        <p>You didn't need to be in the right place. You needed to look in the right place.</p>
      `
    }
  },
  */

  // Aggiungi qui i tuoi articoli seguendo il formato sopra

];

/**
 * ============================================================
 *  ARTICOLO TSI — ESEMPIO FORMATO
 * ============================================================
 *
 * {
 *   id: "tsi-flussi-2026",
 *   type: "tsi",
 *   category: "Trade Show Intelligence",
 *   event: "Trade Show Intelligence",
 *   location: "",
 *   date: "Maggio 2026",
 *   title: {
 *     it: "Non tutti i gap di mercato si vedono nei dati",
 *     en: "Not all market gaps show up in the data"
 *   },
 *   excerpt: {
 *     it: "Le fiere non sono solo vetrine. Sono mercati compressi in tre giorni. Tre benchmark per leggerle.",
 *     en: "Trade shows are not just showcases. They are markets compressed into three days. Three benchmarks to read them."
 *   },
 *   content: {
 *     it: `<p>Il tuo contenuto qui...</p>`,
 *     en: `<p>Your content here...</p>`
 *   }
 * }
 *
 * ============================================================
 */
