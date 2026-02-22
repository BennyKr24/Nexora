# Customization Guide – Nexora Website

## 🎨 So passen Sie die Website an

Diese Anleitung zeigt, wie Sie die Website selbst anpassen können, ohne Programmier-Kenntnisse zu benötigen.

---

## 📝 Text ändern (EINFACH)

### 1. Datei öffnen

Mit einem beliebigen Editor (z.B. Notepad, VS Code):

```
Windows: Rechtsklick → Öffnen mit → Notepad
Mac: Finder → Rechtsklick → Öffnen mit → TextEdit
```

### 2. Text suchen & ersetzen

**Beispiel:** Telefonnummer ändern

**ALT (von):**
```html
<a href="tel:+49XXXXXXXXXX">+49 (0) XXX XXXXXXX</a>
```

**NEU (zu):**
```html
<a href="tel:+491234567890">+49 (0) 123 4567890</a>
```

### 3. Speichern & Hochladen

- Speichern (Ctrl+S)
- Mit SFTP/FTP hochladen
- Im Browser neu laden (Ctrl+F5) & testen

---

## 🎨 Farben ändern

### Primär-Farbe (Dunkelblau)

**Datei:** `style.css`

**Suche nach:**
```css
--color-primary: #0f2438;
```

**Ändere zu** (z.B. Rot):
```css
--color-primary: #c41e3a;
```

### Akzent-Farbe (Hellblau)

**Suche:**
```css
--color-accent: #2d5a7f;
```

**Ändere zu:**
```css
--color-accent: #e74c3c;
```

### Hintergrund-Farbe (Hellgrau)

**Suche:**
```css
--color-secondary: #f8fafb;
```

**Ändere zu:**
```css
--color-secondary: #ecf0f1;
```

### Teste die Änderungen

Nach dem Speichern & Hochladen:
- Lade die Website im Browser neu (Ctrl+F5)
- Alle Farben sollten sich ändern

---

## 📱 Spacing/Abstände ändern

### Container-Breite (wie breit ist der Text?)

**Datei:** `style.css`

**Suche:**
```css
.container {
    max-width: 1200px;
    ...
}
```

**Ändere max-width:**
- `1200px` = Breit (Standard)
- `1000px` = Normal
- `900px` = Enger (mobiler wirken)

### Abstände zwischen Elementen

**Suche:**
```css
:root {
    --spacing-1: 4px;
    --spacing-2: 8px;
    --spacing-3: 12px;
    ...
}
```

**Alle Abstand-Variablen verdoppeln:**

```css
:root {
    --spacing-1: 8px;    /* statt 4px */
    --spacing-2: 16px;   /* statt 8px */
    --spacing-3: 24px;   /* statt 12px */
    ...
}
```

---

## 🔤 Schriftarten ändern

### System Fonts wechseln

**Datei:** `style.css`

**Suche:**
```css
body {
    font-family: -apple-system, "Segoe UI", Roboto, sans-serif;
}
```

**Ändere zu:**

**Option A: Eleganter**
```css
font-family: Georgia, serif;
```

**Option B: Modern**
```css
font-family: "Arial", sans-serif;
```

**Option C: Monospace**
```css
font-family: "Courier New", monospace;
```

---

## 🖼️ Bilder/Icons hinzufügen

### SVG-Icons ersetzen

**Beispiel:** Service-Icon ändern

**Datei:** `leistungen.html`

**Suche:**
```html
<svg class="service-icon" ...>
    <!-- SVG-Code hier -->
</svg>
```

**Ersetze mit:**
```html
<img src="mein-icon.svg" alt="Website-Erstellung" class="service-icon">
```

### Externe Bilder einfügen

```html
<!-- Beispiel: Teamfoto hinzufügen -->
<img src="team.jpg" alt="Unser Team" style="width: 100%; max-width: 600px;">
```

**Wichtig:**
- Bild mit SFTP/FTP im gleichen Ordner wie HTML hochladen
- `src="team.jpg"` muss auf den Dateinamen passen
- `alt="..."` ist wichtig für Suchmaschinen

---

## 📝 Neue Seite hinzufügen

### 1. Neue HTML-Datei erstellen

Kopiere `index.html` & benenne zu `beispiel.html`

### 2. Titel & Inhalt anpassen

**Ändere im `<head>`:**
```html
<title>Neue Seite – Nexora</title>
<meta name="description" content="Hier beschreibung der Seite">
```

**Ändere im `<body>` nach Hero:**
```html
<section class="legal-section">
    <div class="container">
        <h2>Meine neue Seite</h2>
        <p>Inhalt hier...</p>
    </div>
</section>
```

### 3. Link in Navigation hinzufügen

**In allen HTML-Dateien im `<nav>`:**

```html
<nav class="nav">
    <a href="leistungen.html" class="nav-link">Leistungen</a>
    <a href="ablauf.html" class="nav-link">Ablauf</a>
    <a href="kontakt.html" class="nav-link">Kontakt</a>
    <a href="beispiel.html" class="nav-link">Neue Seite</a>  ← NEU
</nav>
```

### 4. Footer-Link hinzufügen (optional)

```html
<div class="footer-links">
    <a href="impressum.html" class="footer-link">Impressum</a>
    <span class="footer-divider">·</span>
    <a href="datenschutz.html" class="footer-link">Datenschutz</a>
    <span class="footer-divider">·</span>
    <a href="agb.html" class="footer-link">AGB</a>
    <span class="footer-divider">·</span>
    <a href="beispiel.html" class="footer-link">Neue Seite</a>  ← NEU
</div>
```

### 5. Speichern & testen

---

## 🎬 Animationen anpassen/deaktivieren

### Animation-Geschwindigkeit ändern

**Datei:** `style.css`

**Suche:**
```css
@keyframes fadeInUp {
    ...
    animation: fadeInUp 0.6s ease-out forwards;
}
```

**Ändere `0.6s`:**
- `0.3s` = Schneller
- `0.6s` = Normal (Standard)
- `1s` = Langsamer

### Animationen komplett deaktivieren

**Suche alle Zeilen mit `animation:` in style.css**

**Ändere:**
```css
animation: fadeInUp 0.6s ease-out forwards;
```

**Zu:**
```css
animation: none;
```

---

## 🔗 Links & Navigation

### Lokale Links (auf andere Seite)

```html
<a href="leistungen.html">Zu Leistungen</a>
```

### Externe Links (zu anderer Website)

```html
<a href="https://example.com" target="_blank">Externe Seite</a>
```

**`target="_blank"`** = öffnet im neuen Tab

### E-Mail-Link

```html
<a href="mailto:kontakt@nexora.de">E-Mail schreiben</a>
```

### Telefon-Link (klickbar auf Handy)

```html
<a href="tel:+491234567890">Anrufen</a>
```

---

## 📊 CMS / Datenbank Integration (FORTGESCHRITTENE)

Falls Sie später ein CMS mögen (wie WordPress), können Sie:

1. **WordPress installieren** auf Hosting
2. **Diese HTML-Dateien** importieren als Inhalte
3. **Einfacher bearbeiten** im Dashboard

**Beliebte CMS:**
- **WordPress** (einfach, beliebt)
- **Statamic** (moderner)
- **Webflow** (keine Programmierung nötig)

---

## 🔧 HTML Struktur (Basis)

Alle HTML-Seiten folgen diesem Muster:

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <!-- Metadata, Title, CSS -->
</head>
<body>
    <!-- HEADER mit Navigation -->
    <header class="header">
        ...
    </header>

    <!-- HERO / Page Title -->
    <section class="page-hero">
        ...
    </section>

    <!-- MAIN CONTENT -->
    <section class="..."
        ...
    </section>

    <!-- FOOTER -->
    <footer class="footer">
        ...
    </footer>

    <!-- JAVASCRIPT -->
    <script src="script.js"></script>
</body>
</html>
```

---

## 🎨 CSS Klassen für Custom Styling

### Text-Klassen

```css
.section-title { }        /* Große Überschrift */
.section-subtitle { }     /* Unterüberschrift */
.text-small { }          /* Kleine Schrift */
.text-center { }         /* Zentriert */
.text-highlight { }      /* Hervorgehoben */
```

### Layout-Klassen

```css
.container { }           /* Max-Width Container */
.grid { }                /* Grid-Layout */
.grid-2 { }              /* 2 Spalten Grid */
.grid-3 { }              /* 3 Spalten Grid */
.flex { }                /* Flex-Layout */
```

### Farb-Klassen

```css
.text-primary { }        /* Dunkelblau */
.text-secondary { }      /* Hellgrau */
.text-accent { }         /* Hellblau */
.bg-primary { }          /* Hintergrund Dunkelblau */
```

---

## 🆘 Troubleshooting

| Problem | Lösung |
|---------|--------|
| Text sieht falsch aus nach Änderung | Cache löschen (Ctrl+Shift+Del) |
| Farbe ändert sich nicht | CSS speichern & Browser neu laden |
| Bilder laden nicht | Dateinamen prüfen, evtl. Pfad anpassen |
| Seite sieht kaputt aus | HTML-Syntax prüfen (fehlende `>`, `</div>`, etc.) |
| Link funktioniert nicht | URL überprüfen, `http://` oder `/` zu Beginn prüfen |
| Animation/Effekt fehlt | Animation deaktiviert? Browser unterstützt? |

---

## 📚 Ressourcen zum Lernen

### HTML Grundlagen
- https://www.w3schools.com/html/ (Englisch)
- https://www.html-lernen.de/ (Deutsch)

### CSS Styling
- https://www.w3schools.com/css/ (Englisch)
- https://cssreference.io/ (Englisch)

### Online Editoren (zum Üben)
- https://codepen.io/
- https://jsfiddle.net/
- https://replit.com/ (mit Hosting)

### Farb-Generatoren
- https://coolors.co/ (Farb-Paletten)
- https://colormind.io/ (AI-Farb-Vorschläge)

---

## ☑️ Customization-Checkliste

- [ ] Farben angepasst (if gewünscht)
- [ ] Logo/Branding eingefügt
- [ ] Text überall korrekt
- [ ] Kontaktdaten aktualisiert
- [ ] Neue Seiten hinzugefügt (if nötig)
- [ ] Links alle funktionierend
- [ ] Mobile Design getestet
- [ ] Im Browser getestet

---

## 💡 Pro-Tipps

1. **Immer eine Kopie machen** bevor du änderst (backup-index.html)
2. **Cache löschen** wenn Änderungen nicht sichtbar (Ctrl+Shift+Del)
3. **Mobile testen** nach jeder Änderung
4. **InspectElement** (F12) nutzen zum Debuggen
5. **CSS-Variablen** verwenden für Konsistenz

---

**Version:** 1.0  
**Gültig ab:** February 2024  
**Zielgruppe:** Anfänger bis Fortgeschrittene
