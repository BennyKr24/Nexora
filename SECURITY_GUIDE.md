# Security Best Practices – Nexora Website

## 🔐 Sicherheits-Übersicht

Diese Website ist standardmäßig sicher aufgebaut:

✅ No external dependencies (keine Plugins = weniger Angriffsfläche)  
✅ No database (kein SQL-Injection möglich)  
✅ Static HTML/CSS/JS (schwer zu hacken)  
✅ DSGVO-konform (Datenschutz-Riegel)  
✅ SSL/TLS bereit (HTTPS wird erzwungen)  

---

## 🛡️ Sicherheits-Maßnahmen (implementiert)

### 1. ✅ Keine externen Abhängigkeiten
- **Vorteil:** Keine unsicheren Plug-ins / Libraries
- **Vorteil:** Keine automatisch exploitable Sicherheitslücken
- **Vorteil:** Schneller & zuverlässiger

### 2. ✅ Statische Website (HTML/CSS/JS)
- **Vorteil:** Keine Server-seitigen Fehler
- **Vorteil:** Keine Datenbankverbindung (no SQL-Injection)
- **Vorteil:** Kaum Angriffsvektoren

### 3. ✅ Inline CSS & JS
- **Vorteil:** Keine externen Requests nötig
- **Vorteil:** Schneller laden
- **Vorteil:** Weniger abhängig von CDNs

### 4. ✅ Keine Cookies (optional Tracking)
- **Standard:** Keine Tracking-Cookies
- **Optional:** Nur Session-Cookies, falls nötig
- **Benefit:** DSGVO-konform, keine Cookie-Banners nötig

### 5. ✅ Responsive & Mobile-First
- **Vorteil:** Sicher auf allen Geräten
- **Vorteil:** Keine speziellen Mobile-Angebote (= keine speziellen Sicherheits-Probleme)

---

## 🚀 Best Practices für den Server

### 1. HTTPS/SSL-Zertifikat

**MUSS haben before launch:**

```bash
# Let's Encrypt (kostenlos)
certbot certonly --webroot -w /var/www/html -d nexora.de -d www.nexora.de

# Oder kaufen (€5-50/Jahr)
# Comodo, Sectigo, GoDaddy, etc.
```

**Überprüfe:**
- https://nexora.de funktioniert (grünes Schloss)
- Zertifikat ist nicht abgelaufen

### 2. HTTP → HTTPS Redirect

**Apache (.htaccess):**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

**Nginx (nginx.conf):**
```nginx
server {
    listen 80;
    server_name nexora.de www.nexora.de;
    return 301 https://$server_name$request_uri;
}
```

### 3. Security Headers

Add to `.htaccess` (Apache):
```apache
Header set X-Content-Type-Options "nosniff"
Header set X-Frame-Options "SAMEORIGIN"
Header set X-XSS-Protection "1; mode=block"
Header set Referrer-Policy "strict-origin-when-cross-origin"
Header set Permissions-Policy "geolocation=(), microphone=(), camera=()"
```

**Nginx:**
```nginx
add_header X-Content-Type-Options "nosniff";
add_header X-Frame-Options "SAMEORIGIN";
add_header X-XSS-Protection "1; mode=block";
add_header Referrer-Policy "strict-origin-when-cross-origin";
add_header Permissions-Policy "geolocation=(), microphone=(), camera=()";
```

### 4. File Permissions

```bash
# Read-only für HTML/CSS/JS (Security)
chmod 644 /public_html/*.html
chmod 644 /public_html/*.css
chmod 644 /public_html/*.js

# Executable für Ordner (Access)
chmod 755 /public_html/
chmod 755 /public_html/*/

# Verstecke sensitive Dateien
chmod 600 ~/.ssh/config
chmod 700 ~/.ssh/
```

### 5. Backups

**Essentiell für Sicherheit:**

```bash
# Automatisches Backup (tägliche via Cron)
0 2 * * * /usr/local/bin/backup-site.sh

# Backup-Skript
#!/bin/bash
cd /var/www/html
tar -czf backup-$(date +%Y%m%d).tar.gz nexora/
cp backup-$(date +%Y%m%d).tar.gz /backup/on/external/drive/
```

### 6. Firewall Konfiguration

**UFW (Ubuntu):**
```bash
sudo ufw enable
sudo ufw allow 22      # SSH
sudo ufw allow 80      # HTTP
sudo ufw allow 443     # HTTPS
sudo ufw default deny incoming
sudo ufw default allow outgoing
```

---

## 🚨 Was kann gehackt werden? (Worst-Case)

### 1. **Server selbst (z.B. SSH-Brute-Force)**

**Schutz:**
```bash
# Fail2Ban installieren (brute-force protection)
sudo apt install fail2ban

# SSH auf nicht-Standard-Port
Port 2222  # statt 22 (in /etc/ssh/sshd_config)

# SSH-Keys statt Passwort
ssh-keygen -t ed25519
ssh-copy-id -i ~/.ssh/id_ed25519.pub user@host
```

### 2. **DDoS-Angriff (viele Requests)**

**Schutz:**
- Hosting-Provider mit DDoS-Schutz wählen
- Rate-limiting konfigurieren
- CDN nutzen (Cloudflare, Akamai)

### 3. **Malware in Datei (z.B. gehacktes Plugin)**

**Schutz:**
- Nur statische Date (keine Plugins nötig). ✅
- Regelmäßige Backups. ✅
- File Integrity Monitoring (optional):
```bash
sudo apt install aide
aide --init
aide --check
```

### 4. **SQL-Injection / Database-Hack**

**Status:** ✅ NOT VULNERABLE (keine Datenbank)

### 5. **Cross-Site Scripting (XSS)**

**Status:** ✅ PROTECTED
- Keine user inputs
- Keine dynamic Inhalte
- Alle Texte sind gehärtet (HTML-escape)

### 6. **Social Engineering (Phishing E-Mails)**

**Nicht technisch zu lösen:**
- Trainiere dich selbst
- Authentifizierung überprüfen (echte E-Mail?)
- Klicke nicht auf verdächtige Links

---

## 🔍 Regelmäßige Sicherheits-Checks

### Monatlich:

- [ ] **Backup überprüfen:** Funktioniert das Restore?
  ```bash
  cd /tmp && tar -xzf /backup/backup-latest.tar.gz
  ls -la nexora/
  ```

- [ ] **Server-Logs überprüfen:** Irgendwelche verdächtigen Einträge?
  ```bash
  tail -50 /var/log/apache2/access.log     # Apache
  tail -50 /var/log/nginx/access.log       # Nginx
  tail -50 /var/log/auth.log               # Auth
  ```

- [ ] **Website lädt noch:** https://nexora.de
- [ ] **HTTPS funktioniert:** Grünes Schloss?
- [ ] **Keine JS-Fehler:** F12 → Console sauber?

### Jährlich:

- [ ] **SSL-Zertifikat Ablauf:** >= 6 Monate gültig?
  ```bash
  echo | openssl s_client -servername nexora.de -connect nexora.de:443 2>/dev/null | openssl x509 -noout -dates
  ```

- [ ] **Penetration Test:** (optional, von Profi)
  ```bash
  nmap -A nexora.de           # Port-Scan
  nikto -h nexora.de          # Web-Schwachstellen
  ```

- [ ] **Security Audit:** Auf SSL Labs
  ```
  https://www.ssllabs.com/ssltest/analyze.html?d=nexora.de
  ```

---

## 🔑 Passwort-Management

### FTP/SFTP-Passwort

```bash
# Starkes Passwort generieren
openssl rand -base64 32

# z.B.: 7mXkL9pRjQwZ4vB2nHsF1uA8cD3eG5tY6wI0oJmK9lP
```

**Speichern in:**
- Password Manager (1Password, Bitwarden)
- NICHT in Dateien speichern
- NICHT mit anderen teilen

### SSH-Keys

```bash
# Erstelle Key-Paar (nur einmal)
ssh-keygen -t ed25519 -f ~/.ssh/nexora_key

# Hochladen zum Server
ssh-copy-id -i ~/.ssh/nexora_key.pub user@nexora.de

# Nutze den Key
ssh -i ~/.ssh/nexora_key user@nexora.de
```

**Deaktiviere Password-Authentifizierung:**

```bash
# In /etc/ssh/sshd_config
PasswordAuthentication no
PubkeyAuthentication yes

# Neu laden
sudo systemctl restart sshd
```

---

## 🧪 Security Testing

### Eigene Website testen

**Online Tools:**
- https://www.ssllabs.com/ssltest/ (SSL/TLS)
- https://www.securityheaders.com/ (HTTP-Header)
- https://www.zap.zaproxy.org/ (lokale Tests)
- https://www.owasp.org/ (Security Best Practices)

**Commands:**
```bash
# SSL-Test
openssl s_client -connect nexora.de:443

# Port-Scan
nmap -sV nexora.de

# HTTP-Header anschauen
curl -I https://nexora.de

# Check for common vulns
nikto -h nexora.de
```

---

## 🚨 Was tun bei Sicherheits-Vorfall?

### 1. Website ist gehackt (fremde Inhalte sichtbar)

**Sofort:**
1. Website offline nehmen (rename index.html → index.html.bak)
2. Vollständigen Backup einspielen
3. Server-Logs überprüfen (wann wurde gehackt?)
4. Passwörter ändern
5. Website wieder online

```bash
# Schneller Workaround
mv index.html index.html.hacked
# oder
chmod 000 index.html         # Unzugänglich machen
```

### 2. DDoS-Angriff (Website reagiert nicht)

**Sofort:**
1. Hosting-Provider kontaktieren
2. Rate-limiting aktivieren
3. Evtl. CloudFlare aktivieren (kostenlos)
4. Backup starten (ist aber nicht die normale Lösung)

### 3. Malware infiziert

**Sofort:**
1. Vollständigen Server-Backup einspielen
2. Alle Passwörter neu setzen
3. SSL-Zertifikat neu genieren
4. Virus-Scanner auf lokalem PC laufen lassen

### 4. Datenleck (z.B. E-Mail-Listen geleakt)

**Sofort:**
1. Datenschutz-Aufsichtsbehörde informieren (innerhalb 72h)
2. Betroffene Kunden informieren
3. Anwalt kontaktieren
4. Post-mortem durchführen

---

## ✅ Sicherheits-Checkliste vor Launch

- [ ] HTTPS/SSL funktioniert
- [ ] HTTP → HTTPS redirect aktiv
- [ ] Security Headers konfiguriert
- [ ] File Permissions korrekt (755, 644)
- [ ] Passwörter stark & gespeichert
- [ ] Backups automatisiert
- [ ] Firewall konfiguriert
- [ ] SSH-Keys (statt Passwort) setup
- [ ] Logs überprüft (keine verdächtigen Einträge)
- [ ] SSL Labs Score A+ (optional)
- [ ] Security Headers OK (https://securityheaders.com)

---

## 📚 Ressourcen

### Sicherheits-Guides
- **OWASP Top 10:** https://owasp.org/www-project-top-ten/
- **CIS Benchmarks:** https://www.cisecurity.org/
- **Mozilla Security:** https://infosec.mozilla.org/
- **INCIBE (Spanisch):** https://www.incibe.es/

### Tools & Scanner
- **SSL Labs:** https://www.ssllabs.com/
- **Security Headers:** https://securityheaders.com/
- **Qualys SSL:** https://www.qualys.com/
- **Nessus:** https://www.tenable.com/products/nessus
- **Burp Suite:** https://portswigger.net/burp

### Online Kurse
- **Coursera Security:** https://coursera.org/
- **Udemy Web Security:** https://udemy.com/
- **TryHackMe:** https://tryhackme.com/ (Anfänger)

---

## 🎯 Zusammenfassung

| Bereich | Status | Action |
|---------|--------|--------|
| HTTPS/SSL | ℹ️ Konfigurierbar | Setup ASAP |
| Passwörter | ✅ Stark | Wechsel monatlich |
| Backups | ⚠️ Empfohlen | Automatisiere |
| Firewall | ℹ️ Konfigurierbar | Setup vor Launch |
| Updates | ✅ Keine nötig | (kein Framework) |
| Datenbank | ✅ Keine | (kein Risiko) |
| Plugins | ✅ Keine | (kein Risiko) |

---

**Version:** 1.0  
**Gültig ab:** February 2024  
**Zielgruppe:** Server-Administratoren / IT-Profis
