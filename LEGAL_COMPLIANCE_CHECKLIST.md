# Rechtliche Compliance-Checkliste für Nexora

## ✅ Bereits implementiert

- ✅ **Impressum (TMG § 5)**: Vollständige Struktur mit Platzhalten
- ✅ **Datenschutzerklärung (DSGVO)**: 16 Abschnitte mit:
  - Verantwortlicher & Kontakt
  - Datenerfassung & automatische Daten
  - Datenverwendung & Speicherdauer
  - Datenweitergabe & Auftragsverarbeiter
  - Nutzerrechte (Zugriff, Berichtigung, Löschung, Portabilität)
  - Sicherheitsmaßnahmen (SSL/TLS, Backups, Firewalls)
  - Cookie-Richtlinie (nur Session/Sicherheit, kein Tracking)
  - Externe Links & Beschwerderecht
  - Internationale Datenübertragungen
- ✅ **Haftungsbeschränkung**: Implementiert im Impressum
- ✅ **Urheberrecht & Nutzungsrechte**: Implementiert
- ✅ **Streitbeilegung**: OS-Plattform Link vorhanden
- ✅ **Widerrufsrecht**: Referenz zu BGB § 312g

---

## 🔴 Erforderliche Aktionen BEFORE GO-LIVE

### 1. **Impressum ausfüllen** (KRITISCH)
- [ ] Firmenname eintragen (nicht nur "Nexora")
- [ ] Vollständige Adresse eintragen
- [ ] Telefonnummer aktualisieren
- [ ] E-Mail-Adresse bestätigen/aktualisieren
- [ ] Name des Vertretungsberechtigten eintragen
- [ ] Handelsregister-Informationen:
  - [ ] Amtsgericht
  - [ ] Registernummer (HRB/PR-Nummer)
- [ ] USt-Identifikationsnummer (USt.-Id.-Nr.) eintragen
- [ ] Bei Bedarf: Wirtschaftsidentifikationsnummer (WIIN) hinzufügen

### 2. **Datenschutzerklärung anpassen** (KRITISCH)
- [ ] "Verantwortlicher" Sektion mit echten Kontaktdaten ausfüllen
- [ ] Mit Ihrem Hosting-Provider abstimmen: Dessen DPA prüfen & ggf. anpassen
- [ ] Falls Analytics verwendet (Google Analytics, Matomo, etc.): Datenschutzerklärung erweitern
- [ ] Falls E-Mail-Dienst (Brevo, Mailgun, etc.): Entsprechend dokumentieren
- [ ] Falls CDN verwendet: Hinzufügen
- [ ] Falls externe APIs/Tools: Alle dokumentieren
- [ ] Cookie-Button: Falls noch nicht vorhanden und Third-Party-Cookies geplant → implementieren
- [ ] Subprozessoren-Liste: Mit Hosting-Provider koordinieren

### 3. **Allgemeine Geschäftsbedingungen (AGB) erstellen** (EMPFOHLEN)
- [ ] Entweder selbst verfassen oder
- [ ] Template für Art des Service verwenden
- [ ] Mindestens abdecken:
  - Geltungsbereich & Dienstleistungen
  - Preise & Zahlungsbedingungen
  - Leistingsumfang & Einschränkungen
  - Laufzeit & Kündigung
  - Haftung & Gewährleistung
  - Datenschutz & Vertraulichkeit
  - Änderungen der Bedingungen
- [ ] AGB-Link **in Impressum** hinzufügen
- [ ] AGB-Link **im Footer** aller Seiten hinzufügen

### 4. **Widerrufsbelehrung** (falls Dienstleistungen mit Gewährleistung)
- [ ] Falls Waren/digitale Inhalte verkauft: Muster-Widerrufsbelehrung hinzufügen
- [ ] Bei digitalen Services: Klarstellung, ob Widerruf nach Download ausgeschlossen ist

### 5. **Cookie-Banner / Consent-Tool** (je nach Aktivität)
- [ ] Wenn nur Session-Cookies: Ggf. okay ohne Banner
- [ ] Wenn Analytics/Tracking: **MUSS** Cookie-Consent-Banner implementiert werden
  - OneTrust, CookieBot, CookieConsent oder ähnlich
  - Must-have: Ablehnung muss genauso einfach sein wie Annahme

### 6. **Kontakt-Formular DSGVO** (falls vorhanden)
- [ ] Datenschutz-Checkbox: "Ich akzeptiere die Datenschutzerklärung"
- [ ] DSGVO-Hinweis: "Ihre Daten werden nach [X] Tagen gelöscht"
- [ ] Double-Opt-In für Newsletter (falls Newsletter geplant)

### 7. **Hosting-Provider Information** (WICHTIG)
- [ ] Hosting-Provider Name dokumentieren
- [ ] DPA (Data Processing Agreement) von Provider einholen
- [ ] Datenschutzerklärung ggf. mit Hosting-Provider-Datenschutz abstimmen
- [ ] Standort der Server prüfen (EU/EWR = keine weiteren Maßnahmen nötig)

### 8. **SSL-Zertifikat** (VORAUSGESETZT)
- [ ] Prüfen: Hat die Domain HTTS/SSL-Zertifikat?
- [ ] Zertifikat sollte gültig & nicht abgelaufen sein
- [ ] Datenschutzerklärung erwähnt dies bereits → OK

### 9. **Externe Links prüfen** (LAUFENDE AUFGABE)
- [ ] Links in Datenschutzerklärung regelmäßig prüfen (EU OS-Plattform, etc.)
- [ ] Aktuell in Datenschutz verlinkt:
  - https://ec.europa.eu/consumers/odr → Prüfen Sie regelmäßig

### 10. **Impressum Footer aktualisieren** (EINFACH)
- [ ] Falls noch nicht geschehen: Footer auf **allen Seiten** verlinkt
- [ ] Footer zeigt derzeit an: "Impressum · Datenschutz" ✅ OK
- [ ] Ergänzen ggf.: "AGB" link (nach Erstellung der AGB)

---

## 🟡 Optionale Erweiterungen (Best Practice)

1. **Verwaltungsrat / Compliance Officer**
   - [ ] Falls Unternehmen ab ~50-100+ Mitarbeitern: Datenschutz-Beauftragten benennen (Art. 37 DSGVO)

2. **Datenverarbeitungsverzeichnis (DVVZ / TOM)**
   - [ ] Interne Dokumentation aller Datenflüsse erstellen
   - [ ] Sicherheitsmaßnahmen dokumentieren
   - [ ] Nicht öffentlich, aber DSGVO-Anforderung

3. **Incident Response Plan**
   - [ ] Was tun bei Datenleck? (72h Meldepflicht zur Behörde)
   - [ ] Intern dokumentieren (nicht öffentlich)

4. **Datenschutzerklärung mehrsprachig**
   - [ ] Aktuell nur Deutsch → Evtl. auch English hinzufügen

5. **Impressum in Footer auch auf Datenschutz/Legal-Seiten**
   - [ ] Derzeit nur auf index: "Betreiber der Website: Nexora" ✓
   - [ ] Für Konsistenz auch auf anderen Seiten überprüfen

---

## 📋 Vor dem Go-Live: Finales Checklist

- [ ] Alle Platzhalter im Impressum gefüllt
- [ ] Datenschutzerklärung mit Hosting-Provider & Tools abgestimmt
- [ ] AGB erstellt & verlinkt
- [ ] SSL/HTTPS funktioniert
- [ ] Cookie-Banner (falls nötig) funktioniert
- [ ] Alle Links in Legal-Seiten funktionieren
- [ ] Kontakt-Formular DSGVO-konform (falls vorhanden)
- [ ] Footer auf allen Seiten Impressum/Datenschutz Link hat
- [ ] Rechtliche Überprüfung durch lokalen Anwalt (EMPFOHLEN, nicht zwingend)

---

## 💡 Empfehlungen für Client/Betreiber

**Vor Veröffentlichung:**
1. Diese Checkliste durcharbeiten ☝️
2. Mit Hosting-Provider in Kontakt treten → DPA einholen
3. Falls spezielle Tools/Services: Deren Datenschutzerklärungen überprüfen
4. Optional: Rechtliche Überprüfung durch Anwalt mit Datenschutz-Spezialisierung

**Nach Veröffentlichung (laufend):**
1. Datenschutzerklärung regelmäßig überprüfen (halbjährlich)
2. Externe Links prüfen (ob noch gültig/erreichbar)
3. Hosting-Provider-Bedingungen im Auge behalten
4. Im Falle von Änderungen an Services/Tools sofort updaten

---

## 📞 Kontakt & Support

Falls Sie Fragen zur Implementierung einer dieser Punkte haben, kontaktieren Sie:
- **Entwickler**: [kontakt@nexora.de]
- **Rechtliche Beratung**: Empfohlen: Anwalt mit IT/Datenschutz-Spezialisierung

---

**Gültig ab**: [Veröffentlichungsdatum]  
**Letzte Aktualisierung**: [Datum]

*Dieses Dokument unterliegt der DSGVO und dient als Orientierungshilfe. Es ersetzt keine rechtliche Fachberatung.*
