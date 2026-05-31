# theirenemartellato.it — Guida rapida

## Struttura del progetto

```
theirenemartellato/
├── index.html        ← Il sito completo (non toccare salvo aggiornamenti strutturali)
├── articles.js       ← IL TUO FILE. Qui aggiungi articoli e case history
├── netlify.toml      ← Configurazione deploy Netlify
└── README.md         ← Questo file
```

---

## Come aggiungere un articolo

Apri `articles.js` e cerca la sezione `const ARTICLES = [`.

Copia e incolla questo blocco dentro le parentesi quadre `[...]`,
poi compila i campi:

```javascript
{
  id: "nome-fiera-anno",           // es. "identita-golose-2026"
  type: "case",                    // "case" per Case History, "tsi" per Trade Show Intelligence
  category: "HoReCa · Food",      // Tag visibile
  event: "Identità Golose",        // Nome della fiera
  location: "Milano",              // Città
  date: "Giugno 2026",            // Data
  title: {
    it: "Titolo in italiano",
    en: "Title in English"
  },
  excerpt: {
    it: "Breve descrizione in italiano (2-3 righe)",
    en: "Short description in English (2-3 lines)"
  },
  content: {
    it: `
      <h2>Il contesto</h2>
      <p>Il tuo testo qui...</p>
      
      <h3>I tre benchmark applicati</h3>
      <ul>
        <li><strong>Flusso di persone:</strong> cosa hai osservato</li>
        <li><strong>Necessità non coperte:</strong> cosa hai visto che mancava</li>
        <li><strong>Player fuori contesto:</strong> chi era fuori posto</li>
      </ul>
      
      <h2>Le opportunità identificate</h2>
      <p>Cosa significa per le aziende del settore...</p>
    `,
    en: `
      <h2>Context</h2>
      <p>Your text here...</p>
    `
  }
},
```

Salva il file → fai git commit → Netlify pubblica automaticamente in 1-2 minuti.

---

## Come rimuovere una "coming soon"

In `articles.js`, trova `const CASE_COMING_SOON = [` e rimuovi
il blocco corrispondente alla fiera che hai appena pubblicato come articolo.

---

## Deploy su Netlify (prima volta)

1. Vai su [netlify.com](https://netlify.com) e crea un account gratuito
2. Clicca "Add new site" → "Import an existing project"
3. Collega il tuo account GitHub
4. Seleziona il repository `theirenemartellato`
5. Build settings: lascia tutto vuoto (è un sito statico)
6. Clicca "Deploy site"

**Collegare il dominio Register.it:**
1. In Netlify → Domain settings → Add custom domain → `theirenemartellato.it`
2. Netlify ti darà due nameserver (es. `dns1.p01.nsone.net`)
3. Vai su Register.it → Gestione DNS → cambia i nameserver con quelli Netlify
4. Attendi 24-48h per la propagazione DNS
5. Netlify aggiunge SSL/HTTPS automaticamente e gratuitamente

---

## Aggiornamenti rapidi via GitHub

Dopo la prima configurazione, ogni volta che vuoi aggiungere un articolo:

```bash
# Nel terminale (VS Code)
git add articles.js
git commit -m "Aggiungo case history Identità Golose 2026"
git push
```

Netlify pubblica in automatico entro 1-2 minuti.

---

## Note SEO

Il sito è già ottimizzato per:
- Meta tag italiani e inglesi
- Schema.org structured data
- Hreflang IT/EN
- Open Graph per LinkedIn
- Canonical URL

Per ogni articolo, il titolo che scrivi in `title.it` viene usato
automaticamente come titolo SEO della pagina.
