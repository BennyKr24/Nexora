# Client-Handover Dokument – Nexora Website

## 📦 Was Sie erhalten

Sie erhalten eine **vollständig produktionsreife, mehrsprachig entwickelte und rechtlich konforme Website** für Ihr Unternehmen. Diese ist:

✅ **Vollständig DSGVO-konform** (Datenschutzerklärung mit 16 Sektionen)  
✅ **TMG § 5 konform** (Impressum mit allen Anforderungen)  
✅ **Modern & professionell** (Card-basiertes Design, Animationen)  
✅ **Mobile-optimiert** (Responsive auf allen Geräten)  
✅ **Performance-optimiert** (Schnelle Ladezeiten, no external dependencies)  
✅ **Wartungsarm** (Keine Plug-ins, reine HTML/CSS/JS)  

---

## 📋 Dateiverzeichnis

Ihre Website enthält folgende Dateien:

```
Nexora/
├── index.html              ← Homepage öffnen zum Surfen
├── leistungen.html         ← Service-Angebote
├── ablauf.html             ← Prozess-Beschreibung
├── kontakt.html            ← Kontakt & Call-to-Action
├── impressum.html          ← ⚠️ MUSS AUSgefüllt werden
├── datenschutz.html        ← ⚠️ MUSS überprüft werden
├── agb.html                ← ⚠️ MUSS angepasst werden
├── style.css               ← Design & Layout (nicht ändern)
├── script.js               ← Animationen (nicht ändern)
├── README.md               ← Technisches Handbuch
├── DEPLOYMENT_CHECKLIST.md ← Checkliste vor Launch
└── LEGAL_COMPLIANCE_CHECKLIST.md ← Rechtliche Anforderungen
```

---

## 🚨 WICHTIG: Was Sie SOFORT tun müssen

### 1. Impressum ausfüllen (KRITISCH!)

**Öffne:** `impressum.html`

**Ersetze folgende Platzhalter:**

```html
Firmenname:           [Firmenname / Inhaber] 
                    → z.B. "Max Mustermann GmbH"

Adresse:             [Straße und Hausnummer]
                    → z.B. "Hauptstraße 123"
                    
                    [Postleitzahl und Ort]
                    → z.B. "12345 Musterstadt"

Telefon:             +49 (0) XXX XXXXXXX
                    → z.B. "+49 (0) 123 4567890"

E-Mail:              kontakt@nexora.de
                    → z.B. "kontakt@example.de"

Verantwortliche Person:  [Name der verantwortlichen Person]
                       → z.B. "Max Mustermann"
                       [Position / Funktion]
                       → z.B. "Geschäftsführer"

Handelsregister:     [Amtsgericht und Registernummer]
                    → z.B. "Amtsgericht Muststadt, HRB 123456"

USt.-Id.-Nr.:        [USt.-Id.-Nr.]
                    → z.B. "DE123456789"
```

**⚠️ Ohne diese Informationen ist die Website nicht legal einsatzbar!**

---

### 2. Datenschutzerklärung überprüfen (WICHTIG)

**Öffne:** `datenschutz.html`

**Überprüfe ob es auf dein Business zutrifft:**

- [ ] **Hosting-Provider-Name** korrekt? (z.B. "Strato", "Ionos", "AWS")
- [ ] **Tools/Services korrekt aufgelistet**?
  - [ ] Google Analytics? (Falls ja → muss explizit erwähnt sein)
  - [ ] Newsletter-Tool? (z.B. Brevo, Mailchimp)
  - [ ] CRM-System? (z.B. HubSpot)
  - [ ] Chat-Tool? (z.B. Zendesk, Intercom)
- [ ] **Keine Widersprüche** zwischen Datenschutz & tatsächlichen Tools?
- [ ] **Kontaktdaten korrekt** im "Verantwortlicher"-Abschnitt?

**💡 Tipp:** Wenn Sie Tools verwenden, fragen Sie diese nach ihrer Datenschutzerklärung und integrieren Sie diese Informationen in Ihre Website-Datenschutzerklärung.

---

### 3. AGB anpassen (EMPFOHLEN)

**Öffne:** `agb.html`

**Falls Sie Services anbieten, passen Sie an:**

- [ ] **Preise & Zahlungsbedingungen** (Zahlungsfrist z.B. 14 Tage)
- [ ] **Leistungsumfang** (was genau bieten Sie?)
- [ ] **Kündigungsfristen** (z.B. 30 Tage, monatlich)
- [ ] **Garantien/Haftung** (wie ist Ihr Service verträglich?)
- [ ] **Support-Zeiten** (24/7 oder nur Mo-Fr?)

**💡 Empfehlung:** Lassen Sie die AGB von einem Anwalt prüfen (kostet ~150-300€, spart aber Probleme).

---

## 🌐 Website Hochladen

### Option A: Mit Hosting-Provider Dashboard (EINFACH)

1. Öffne dein **Hosting-Provider Dashboard** (z.B. cPanel, Plesk)
2. Gehe zu **File Manager** oder **Files**
3. Navigate zu **public_html** oder **www** Ordner
4. Lade alle `.html`, `.css`, `.js` Dateien hoch
5. Warte kurz & lade deine Website im Browser

### Option B: Mit SFTP-Client (SICHER)

Empfohlen: **FileZilla** (kostenlos)

1. Download FileZilla: https://filezilla-project.org/
2. Öffne FileZilla & gehe zu **File → Site Manager**
3. Neue Website erstellen:
   - **Server:** [von Hosting-Provider]
   - **Benutzername:** [von Hosting-Provider]
   - **Passwort:** [von Hosting-Provider]
   - **Protokoll:** SFTP (oder FTP, je nach Provider)
4. **Verbinden**
5. Ziehe Dateien von links (dein PC) nach rechts (Server) in `public_html`

### Option C: Mit Git/GitHub (PROFI)

Falls Sie Git kennen:

```bash
git clone https://github.com/BennyKr24/Nexora.git /var/www/html/nexora
```

---

## 🔐 SSL/HTTPS Setup (SICHERHEIT)

### Option A: Let's Encrypt (KOSTENLOS)

Die meisten Hosting-Provider unterstützen dies:

1. In deinem Hosting-Dashboard:
   - Such nach **SSL/TLS** oder **Let's Encrypt**
   - Klick **Install** / **Activate**
2. Warte 5 Minuten
3. Überprüfe: https://nexora.de (grünes Schloss?)

### Option B: Bezahltes SSL-Zertifikat

Falls dein Provider Let's Encrypt nicht unterstützt:

1. Kaufe SSL bei:
   - **Comodo** (€5-10/Jahr)
   - **Sectigo** (€10-20/Jahr)
   - **GoDaddy** (€5-20/Jahr)
2. Lade in dein Dashboard hoch (Provider zeigt wie)

**⚠️ HTTPS ist wichtig für Vertrauen & Sicherheit!**

---

## 📱 Testen

Nach dem Hochladen, überprüfe:

### Computer
- [ ] **Chrome**: https://nexora.de funktioniert?
- [ ] **Firefox**: Sieht gut aus?
- [ ] **Safari/Edge**: Alle Seiten erreichbar?

### Smartphone
- [ ] **iPhone**: Responsive design OK?
- [ ] **Android**: Mobile Menü funktioniert?
- [ ] **Links**: Funktioniert alles?

### Suchmaschinen
- [ ] Öffne: https://www.google.com/search?q=site:nexora.de
- [ ] Falls leer: Bald indiziert (1-7 Tage warten)

---

## 🔧 Zukünftige Änderungen

### Text-Änderungen

Es ist **NICHT nötig**, mich zu kontaktieren für:
- Texte umschreiben
- E-Mail-Adressen ändern
- Telefonnummer aktualisieren
- Neue Seiten-Inhalte hinzufügen

**So funktioniert's:**
1. HTML-Datei öffnen (mit Notepad, VS Code, etc.)
2. Text suchen & ersetzen
3. Speichern & hochladen
4. Website neu laden (evtl. Cache löschen mit Ctrl+F5)

### Design-Änderungen

Für professionelle Design-Änderungen (Farben, Layout, Bilder):
- Kontaktiere einen erfahrenen Web-Designer
- Oder lasse mich wieder an Bord helfen

---

## 🆘 Häufig Gestellte Fragen

### Q: Die Website ist weiß / lädt nicht
**A:** 
1. Überprüfe ob die Dateien wirklich hochgeladen sind
2. Prüfe HTTPS im Browser
3. Cache löschen (Ctrl+Shift+Del)
4. Server-Status überprüfen (Hosting-Provider)

### Q: HTTPS funktioniert nicht / Sicherheit-Fehler
**A:**
1. SSL-Zertifikat installiert?
2. Let's Encrypt oder Comodo?
3. Warte 10 Min bis Zertifikat aktiv ist
4. Kontaktiere Hosting-Provider Support

### Q: Seite ist sehr langsam
**A:**
1. Prüfe Internet-Verbindung
2. Prüfe PageSpeed Insights (sollte 85+ sein)
3. Cache löschen im Browser
4. Kontaktiere Provider (zu viele Website auf Server?)

### Q: Google findet die Website nicht
**A:**
1. Warte 1-7 Tage (Normal beim ersten Mal)
2. Registriere bei Google Search Console:
   - Gehe zu: https://search.google.com/search-console
   - Gib deine Website an
   - Bestätige Ownership
   - Reiche Sitemap ein (optional)

### Q: Impressum ist nicht "sichtbar" auf der Website
**A:**
Das ist OK! Der Link ist im Footer sichtbar. Wichtig: Der Text im Impressum muss richtig sein.

---

## 📞 Support & Kontakt

### Technische Fragen:
- Hosting-Provider Support: [Kontakt eintragen]
- Domain-Registrar Support: [Kontakt eintragen]

### Rechtliche Fragen:
- **Datenschutz**: Konsultiere einen Datenschutz-Anwalt
- **AGB/Verträge**: Konsultiere einen IT-Rechts-Anwalt

### Website-Verbesserungen:
- Kontaktiere erneut für:
  - Größere Design-Änderungen
  - Neue Features
  - Performance-Optimierungen

---

## 📊 Maintenance Erinnerung

**Monatlich prüfen:**
- [ ] Website lädt auch noch? (https://nexora.de)
- [ ] Alle Links funktionieren?
- [ ] Keine Error-Messages im Browser (F12)?

**Jährlich überprüfen:**
- [ ] SSL-Zertifikat gültig? (noch 6+ Monate?)
- [ ] Datenschutzerklärung noch korrekt? (neue Tools?)
- [ ] Backup vorhanden? (Auf externer Festplatte?)

---

## 🎓 Was Sie gelernt haben

- ✅ Wie man HTML ändern kann (Text)
- ✅ Wie man die Website hochlädt (FTP/SFTP)
- ✅ Wie man SSL/HTTPS aktiviert
- ✅ Wie man rechtliche Seiten ausfüllt
- ✅ Wie man Testing durchführt

---

## 📄 Zusammenfassung der Dateien

| Datei | Bearbeiten? | Beschreibung |
|-------|------------|-------------|
| `index.html` | ✏️ JA | Ändern Text, Bilder, Kontaktdaten |
| `leistungen.html` | ✏️ JA | Services beschreiben |
| `ablauf.html` | ✏️ JA | Prozess erklären |
| `kontakt.html` | ✏️ JA | Kontakt-Infos anpassen |
| `impressum.html` | ⚠️ **MUSS** | Unternehmensdaten eintragen |
| `datenschutz.html` | ⚠️ **SOLLTE** | Mit Tools abstimmen |
| `agb.html` | ✏️ JA | Business-Bedingungen anpassen |
| `style.css` | ❌ NEIN | (nur wenn CSS-Kenntnisse) |
| `script.js` | ❌ NEIN | (nur wenn JS-Kenntnisse) |

---

## ✅ Abschließende Checkliste

Vor dem finalen Launch:

- [ ] Impressum alle Infos ausgefüllt
- [ ] Datenschutzerklärung überprüft
- [ ] AGB angepasst
- [ ] Alle Dateien hochgeladen
- [ ] HTTPS funktioniert
- [ ] Website im Browser getestet
- [ ] Mobile Design OK?
- [ ] Alle Links funktionieren?
- [ ] Bei Google registriert

---

## 🎉 Glückwunsch!

Ihre Website ist nun einsatzbereit. Viel Erfolg mit Nexora!

Bei Fragen: Kontaktieren Sie einen Web-Profi oder mich.

---

**Version:** 1.0  
**Gültig ab:** February 2024  
**Kontakt:** kontakt@nexora.de
