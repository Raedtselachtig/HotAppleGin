# HAG transcreation-glossary

Bron voor het vertalen van de website-copy (messages/en.json) naar NL/DE/FR.
Doel: de **tongue-in-cheek premium**-toon behouden. Transcreation, geen vertaling:
herschep de grap/spanning, vertaal niet woord-voor-woord.

## Merkstem (uit hag-brand-voice skill)
- Premium, tongue-in-cheek, NOOIT knipogend. Zelfverzekerd, licht ironisch, probeert nooit grappig te zijn.
- Vaak tweeregelig: regel 1 = setup/observatie, regel 2 = omdraaier/rustige conclusie. Behoud die spanning.
- Kort, direct, actief. Geen twijfel-bijwoorden (misschien/eigenlijk/een beetje). Fragmenten mogen.
- GEEN uitroeptekens. Geen superlatieven. Geen mass-market gezelligheid. Geen em-dash (gewoon koppelteken).
- Doelgroep 35-55, premium spirits: de ironie mag impliciet blijven, niet uitleggen.

## NOOIT vertalen (laat exact staan)
- Merknaam: **Hot Apple Gin**, **Hot Apple Gin 0.0**, **HAG**
- Getallen/eenheden: `4.1% ABV`, `1L`, `0.0`, `65-70°C`
- Eigennamen/plaatsen: Haarlem, Berlin, Amsterdam, RAI, Instagram, @hotapplegin, Coca-Cola
- Evenementnamen en `image`-bestandsnamen in de JSON (die zijn geen tekst)
- E-mail/URLs: info@hotapplegin.com, hotapplegin.com
- SLOGAN (blijft in ALLE talen Engels): **"Different setting, same warmth."** (ook gesplitst: "Different setting." / "Same warmth.")

## Vaste motieven (consistent houden binnen én tussen talen)
| EN | NL | DE (concept, review) | FR (concept, review) |
|----|----|----|----|
| The Warm Winter Cocktail | De warme wintercocktail | Der warme Wintercocktail | Le cocktail chaud de l'hiver |
| Served warm / Serve warm | Warm geserveerd | Warm serviert | Servi chaud |
| Same warmth | Dezelfde warmte | Dieselbe Wärme | La même chaleur |
| Different setting | Andere setting | Anderer Anlass | Autre décor |
| Ready to heat / serve / share | Klaar om te verwarmen / te schenken / te delen | - | - |
| A modern classic in the making | Een moderne klassieker in wording | - | - |
| Somebody had to say it | Iemand moest het zeggen | - | - |

## Productnamen (transcreatie, wel vertalen)
- HOT APPLE GIN - THE ORIGINAL -> HOT APPLE GIN - HET ORIGINEEL
- ORIGINAL GIFT SET -> ORIGINAL GESCHENKSET  |  0.0 GIFT SET -> 0.0 GESCHENKSET
- specs: "Gift set" -> "Geschenkset", "Alcohol-free" -> "Alcoholvrij"; `ABV`/`1L` blijven

## Toon per taal
- **NL:** verzorgd, droog-ironisch, observerend. NIET te amicaal: vermijd nadrukkelijk "jij/jouw" waar het Engels onpersoonlijk is (veel copy is observatie: "Built on moments, not occasions" -> "Gebouwd op momenten, niet op gelegenheden"). Geen mass-market gezelligheid.
- **DE:** premium, droog. Waar mogelijk onpersoonlijk/observerend formuleren (omzeilt du/Sie). Duitse humor mag understated. Native review verplicht.
- **FR:** elegant, spits. Onpersoonlijk waar het kan. Native review verplicht.

## Lastige grappen (behoud het effect, niet de letter)
- "We could tell you. But then we'd have to kill you." -> herschep het cliche-effect in de doeltaal.
- "Treat it like a fancy juice with a gin problem." -> behoud de zelfspot.
- "a family affair, one that turned into a company. A family company, one might say." -> behoud de woordspeling met "Family Co."
- Recepten Coca-Cola-vergelijking + "Besides, ours is served warm." -> droge slotpunch behouden.
- Rickroll-hint "You just got rickrolled..." -> luchtig, herkenbaar in doeltaal.
- Origin-chat "Warm gin… 🤔" / "Hmmm…" -> natuurlijke spreektaal, emoji behouden.

## Structuurregels (technisch)
- Alleen de string-WAARDEN vertalen; sleutels en JSON-structuur exact gelijk houden (i18n:check bewaakt dit).
- `\n` (regeleindes) op dezelfde plek behouden waar de tweeregelige spanning telt.
- Na elke vertaalronde: `npm run i18n:check` moet groen zijn.
