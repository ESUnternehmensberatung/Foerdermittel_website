# Platzhalter-Assets

Bilder/Video in `public/images/` und `public/video/` sind lizenzfreie Pexels-Aufnahmen (Pexels-Lizenz, kommerziell nutzbar, keine Namensnennung nötig) und dienen als **Platzhalter**, bis echtes Bild-/Videomaterial von Eduard Schmal und dem Prospero-Team vorliegt.

| Datei | Quelle | Verwendung |
|---|---|---|
| `video/hero-loop.mp4` | KI-generiert (Google VEO 3), 5 Szenen, Trust-Seal-Overlay — siehe unten | Hero-Hintergrundvideo |
| `images/hero-poster.jpg` | Standbild aus obigem Video (Dachdecker-Szene, Rathausdächer im Hintergrund) | `poster`-Attribut fürs Hero-Video |
| `images/office-banner.jpg` | Pexels-Foto 9847049 (zugeschnitten auf die Fassade) | Full-bleed Foto-Band |
| `images/meeting-atmos.jpg` | Pexels-Foto 3183183 | Hintergrund Ergebnisse/Referenzen |
| `images/documents.jpg` | Pexels-Foto 3184287 | Foto-Akzent Content-Seiten |

**Wichtig:** Keine der Stockfotos zeigt oder ersetzt echte Personen (Eduard Schmal, Prospero-Team) — dafür ausschließlich echtes Bildmaterial verwenden, sobald verfügbar. Das Hero-Video zeigt KI-generierte KMU-Rollen (siehe unten), keine echten Personen.

**Vorsicht bei neuen Stockfotos:** Vor Verwendung immer auf sichtbare Fremdlogos/-marken im Bild prüfen (z. B. Firmenschilder an Gebäuden). Pexels-Foto 29443801 wurde deshalb verworfen — zeigt großflächig das Logo eines fremden Telekommunikationsunternehmens auf der Gebäudefassade.

### Hero-Video: `hero-loop.mp4` (Stand 2026-07-21)

Fünf mit VEO 3 generierte Slow-Motion-Szenen, Reihenfolge Mann–Frau–Mann–Frau–Mann:
Malermeister → Bäckermeisterin → Dachdecker → Immobilienmaklerin → Brennstoffhändler.

- Eine sechste Szene (Wärmepumpen-/PV-Installateur) wurde **verworfen**: zeigte ein gut lesbares, fiktives Firmenlogo auf der Arbeitsjacke (Brust + Ärmel) — dieselbe Kategorie Problem wie bei Pexels-Foto 29443801.
- Alle fünf verwendeten Clips enthielten ein kleines Sternchen-Wasserzeichen (vermutlich Gemini/VEO-Kennzeichnung), das den Eindruck "KI-generiert" sofort verraten hätte. Das Fern-Overlay/CSS-Filter des Hero-Bereichs allein reichte nicht aus, um es zuverlässig zu kaschieren (Testkomposit zeigte es noch schwach durchscheinend). Ein `delogo`-Filter erzeugte sichtbare Schlieren-Artefakte — stattdessen zunächst per weichem Box-Blur (Crop+Blur+Overlay) an der jeweiligen Position pro Szene unauffällig entfernt.
- Marken-Grading (leichte Entsättigung, Grün-/Gold-Farbstich) angewendet, Clips mit Cross-Fades aneinandergeschnitten.

### Update (Stand 2026-07-22): Box-Blur durch Trust-Siegel ersetzt

Der Box-Blur blieb auf hellem Hintergrund weiterhin sichtbar (z. B. Himmel in der Dachdecker-Szene) — im echten Rendering auffälliger als im ursprünglichen Testkomposit. Ersetzt durch eine fixe, deckende Overlay-Grafik: `src/assets/trust-seal.svg` (dunkelgrünes Rund-Siegel, Goldrand, „FÖRDERMITTEL · FINDER" / „BAFA-GELISTETE BERATUNG" als Umlauftext, Haken-Symbol, „KOSTENLOS & UNVERBINDLICH"), fest positioniert bei x=1020,y=455 (Größe 210×210 in 1280×720) über die gesamte Videolänge — an die Wasserzeichen-Position angelehnt, die sich als über alle 5 Szenen hinweg fix herausstellte. Deckt das Wasserzeichen zuverlässig ab und liest sich als Trust-Element, nicht als Korrektur — angelehnt an das Gütesiegel auf reamotion.com.

**Bei künftigem KI-generiertem Videomaterial generell prüfen:** (1) sichtbare Wasserzeichen der Generierungs-Tools, (2) halluzinierte Fremdlogos auf Kleidung/Gebäuden/Fahrzeugen.
