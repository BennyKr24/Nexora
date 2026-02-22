# Deployment-Checklist – Nexora Website

## 🚀 Pre-Deployment (3-5 Tage vor Launch)

### Domain & Hosting
- [ ] **Domain registriert** (z.B. bei GoDaddy, Namecheap, IONOS)
- [ ] **Hosting-Plan aktiviert** (Shared Hosting oder VPS)
- [ ] **FTP/SFTP-Zugang** funktioniert
- [ ] **SSH-Zugang** (falls vorhanden) getestet
- [ ] **cPanel/Plesk/Dashboard** Zugang überprüft
- [ ] **Root-Zugang** gesichert (starkes Passwort)

### SSL/TLS-Zertifikat
- [ ] **Let's Encrypt Zertifikat** installiert ODER
- [ ] **Bezahltes SSL-Zertifikat** erworben & installiert
- [ ] **Zertifikat ist gültig** für 1+ Jahre
- [ ] **HTTPS erzwungen** (HTTP → HTTPS Redirect)
- [ ] **Zertifikat-Renewal automatisiert** (z.B. via Certbot)

### Rechtliche Seiten gefüllt
- [ ] **impressum.html** → Alle Platzhalter ausgefüllt:
  - [ ] Firmenname
  - [ ] Vollständige Adresse
  - [ ] Telefon & E-Mail
  - [ ] Handelsregister-Nr. (HRB/PR-Nummer)
  - [ ] USt.-Id.-Nr. eingefügt
- [ ] **datenschutz.html** → Mit Provider abgestimmt:
  - [ ] Hosting-Provider Name → eingefügt
  - [ ] DPA (Data Processing Agreement) erhalten
  - [ ] Keine Widersprüche mit Provider-Datenschutz
  - [ ] Falls Tools/Analytics: Hinzugefügt
- [ ] **agb.html** → Angepasst an dein Business:
  - [ ] Zahlungsbedingungen korrekt
  - [ ] Kündigungsfristen realistisch
  - [ ] Leistungsumfang detailliert
  - [ ] Von Anwalt durchgesehen (empfohlen)

### Website-Inhalte
- [ ] **Logo & Branding** korrekt (Falls vorhanden)
- [ ] **Kontaktdaten** überall konsistent
- [ ] **E-Mail-Adresse** funktioniert
- [ ] **Alle externen Links** funktionieren
- [ ] **Kontaktformular** (falls vorhanden) konfiguriert
- [ ] **Alle Seiten besucht & gelesen** (Tippfehler prüfen)

### Performance & Optimierung
- [ ] **CSS/JS minifiziert** (optional, aktuell nicht nötig)
- [ ] **Images komprimiert** (nur SVG, OK)
- [ ] **Caching-Header** konfiguriert (Server)
- [ ] **Gzip-Kompression** aktiviert (Server)
- [ ] **Sitemap.xml** erstellt (optional, aber empfohlen)
- [ ] **robots.txt** konfiguriert (optional)

### Backups
- [ ] **Backup-Plan erstellt** (z.B. automatisch täglich)
- [ ] **Backup-Speicher** (extern oder Cloud)
- [ ] **Restore-Prozess getestet** (funktioniert das Backup?)
- [ ] **Dokumentiert wo Backups sind** (für Zukunft)

### Sicherheit
- [ ] **Starke Passwörter** für alle Accounts
- [ ] **SSH-Keys** (falls vorhanden) konfiguriert
- [ ] **File-Permissions** korrekt (644 für HTML/CSS, 755 für Ordner)
- [ ] **wp-config.php** (falls WordPress): außerhalb public_html
- [ ] **.htaccess** (falls Apache): Sicherheits-Rules (optional)
- [ ] **Security-Headers** setzen (X-Frame-Options, CSP, etc.)

### Browser-Kompatibilität
- [ ] **Chrome/Chromium** → Getestet ✅
- [ ] **Firefox** → Getestet ✅
- [ ] **Safari** → Getestet ✅
- [ ] **Edge** → Getestet ✅
- [ ] **Mobile (iOS)** → Responsive OK ✅
- [ ] **Mobile (Android)** → Responsive OK ✅

---

## 🌐 Deployment Selbst

### 1. Dateien hochladen
```bash
# Option A: Mit SCP/SFTP (empfohlen)
scp -r /local/path/Nexora/* user@host:/public_html/

# Option B: Mit SFTP-Client (z.B. FileZilla)
# 1. Server-Daten eingeben
# 2. Mit Server verbinden
# 3. Dateien in public_html uploaden

# Option C: Mit GitHub (falls configured)
git clone https://github.com/BennyKr24/Nexora.git /var/www/html/nexora
```

### 2. File-Permissions setzen
```bash
# HTML/CSS/JS-Dateien
chmod 644 /public_html/*.html
chmod 644 /public_html/*.css
chmod 644 /public_html/*.js

# Ordner
chmod 755 /public_html/
```

### 3. Server-Konfiguration (.htaccess für Apache)
```bash
# Erstelle .htaccess in public_html mit:
```

**Inhalt (.htaccess):**
```apache
# HTTPS erzwingen
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>

# Gzip-Kompression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Cache-Control
<FilesMatch "\.(jpg|jpeg|png|gif|ico|css|js|woff|woff2|ttf|svg)$">
  Header set Cache-Control "max-age=2592000, public"
</FilesMatch>

# Datenschutz-Header
Header set X-Content-Type-Options "nosniff"
Header set X-Frame-Options "SAMEORIGIN"
Header set X-XSS-Protection "1; mode=block"
```

### 4. nginx-Konfiguration (falls nginx)
```nginx
server {
    listen 443 ssl http2;
    server_name nexora.de www.nexora.de;

    # SSL
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    # Root
    root /var/www/html/nexora;
    index index.html;

    # Gzip
    gzip on;
    gzip_types text/html text/css application/javascript;

    # Cache
    location ~* \.(css|js|jpg|jpeg|png|gif|ico|woff|woff2|ttf|svg)$ {
        expires 30d;
    }

    # Security Headers
    add_header X-Content-Type-Options "nosniff";
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
}
```

### 5. DNS konfigurieren (falls nicht bereits geschehen)
```bash
# A-Record setzen auf Server-IP
# z.B. in Registrar-Interface:
# nexora.de    A    123.45.67.89
# www.nexora.de CNAME nexora.de

# Warte 15-30 Min für DNS-Propagation
nslookup nexora.de
```

---

## ✅ Post-Deployment (1 Stunde nach Launch)

### Funktionsprüfung
- [ ] **Website lädt**: https://nexora.de ← OK?
- [ ] **Homepage deutet**: Alle Seiten erreichbar?
- [ ] **Links funktionieren**: Leistungen → Ablauf → Kontakt → Impressum?
- [ ] **HTTPS aktiv**: Grünes Schloss im Browser?
- [ ] **Keine 404-Fehler**: Console sauber (F12)?
- [ ] **Mobile responsive**: Auf Handy ansehen?

### Google & Suchmaschinen
- [ ] **Google Search Console** registriert
  - [ ] Sitemap.xml eingereicht (falls vorhanden)
  - [ ] URL-Parameter überprüft
- [ ] **Bing Webmaster Tools** registriert (optional)
- [ ] **Robots.txt** vorhanden (optional)
- [ ] Verzeichnis-Links (optional):
  - [ ] Google Business Profile (lokal?)
  - [ ] Yelp, Maps, etc. (falls relevant)

### Monitoring & Analytics (optional)
- [ ] **Google Analytics** (optional):
  - [ ] Tracking-Code eingefügt
  - [ ] Cookie-Call hinzugefügt (falls verwendet)
- [ ] **Uptime Monitoring** (optional):
  - [ ] UptimeRobot konfiguriert
  - [ ] Alert bei Ausfallzeiten
- [ ] **Error Logging** (optional):
  - [ ] Server-Logs überprüfen
  - [ ] 404/500 Fehler prüfen

### Benchmarking
- [ ] **Performance testen**:
  - [ ] Google PageSpeed Insights: 80+
  - [ ] GTmetrix: 90+
  - [ ] Lighthouse: 85+
- [ ] **Security testen**:
  - [ ] SSL Labs: A+ Rating
  - [ ] Mozilla SSL Config Generator: empfohlene Settings

---

## 🔄 Laufende Wartung (Monatlich)

### Monitoring
- [ ] **Website lädt noch**: Regelmäßiger Test
- [ ] **HTTPS funktioniert**: Noch gültig?
- [ ] **Backups laufen**: Automatische Backups OK?
- [ ] **Error Logs prüfen**: Irgendwelche Fehler?

### Sicherheit
- [ ] **SSL-Zertifikat Ablauf**: Noch 3+ Monate gültig?
- [ ] **Server-Software**: Updates verfügbar?
- [ ] **Passwörter überprüfen**: Noch sicher?
- [ ] **Missbrauch prüfen**: Irgendwelche Anomalien?

### Inhalte & Legal
- [ ] **Rechtliche Seiten aktuell**:
  - [ ] Datenschutzerklärung noch korrekt?
  - [ ] Neue Tools/Services? → Datenschutz updaten
  - [ ] AGB noch gültig?
- [ ] **Kontaktdaten aktuell**: E-Mail noch gültig?
- [ ] **Externe Links**: Noch erreichbar (404 check)?

### Performance
- [ ] **Seite noch schnell**: PageSpeed Insights > 80?
- [ ] **Mobile noch optimiert**: Responsive OK?
- [ ] **Datenbank/Cache**: Falls vorhanden → Aufgeräumt?

---

## 🚨 Troubleshooting

| Problem | Ursache | Lösung |
|---------|---------|--------|
| Website lädt nicht / 500 Error | Server-Fehler | Logs prüfen, Hosting-Provider kontaktieren |
| HTTPS-Fehler / SSL-Zertifikat Problem | Zertifikat abgelaufen/falsch | Let's Encrypt neu installieren oder kaufen |
| Seite sehr langsam | Caching/Kompression aus | .htaccess prüfen, Gzip aktivieren |
| 404 Fehler auf Seiten | Falsche Pfade/broken Links | Links überprüfen, Dateine-Namen prüfen |
| Mobile sieht falsch aus | CSS responsive Problem | Chrome DevTools prüfen, Media-Queries testen |
| DNS funktioniert nicht | A-Record falsch | DNS-Propagation warten (15-30 Min) oder Registrar prüfen |

---

## 📞 Kontakt bei Notfällen

- **Hosting-Provider Support**: [Kontakt eintragen]
- **Domain-Registrar Support**: [Kontakt eintragen]
- **Datenschutz-Fragen**: [Anwalt eintragen]
- **Technischer Support**: [Dein IT-Partner eintragen]

---

**Gültig ab:** [Launch-Datum]  
**Version:** 1.0  
**Letzte Aktualisierung:** February 2024
