// Bewaakt Simons regel: elke wijziging moet in ELKE taal verwerkt zijn.
// Vergelijkt de sleutelstructuur van elke messages/<locale>.json met en.json
// (de bron). Array-indexen tellen mee, dus een ontbrekend FAQ-item of serve-stap
// wordt ook gevangen. Faalt (exit 1) zodra een taal mist of te veel heeft.
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const dir = 'messages';
const base = 'en';
const locales = readdirSync(dir).filter((f) => f.endsWith('.json')).map((f) => f.replace('.json', ''));

function keyPaths(obj, prefix = '') {
  const paths = [];
  if (Array.isArray(obj)) {
    obj.forEach((v, i) => paths.push(...keyPaths(v, `${prefix}[${i}]`)));
  } else if (obj && typeof obj === 'object') {
    for (const k of Object.keys(obj)) paths.push(...keyPaths(obj[k], prefix ? `${prefix}.${k}` : k));
  } else {
    paths.push(prefix);
  }
  return paths;
}

const enPaths = new Set(keyPaths(JSON.parse(readFileSync(join(dir, base + '.json'), 'utf8'))));
let ok = true;

for (const loc of locales) {
  if (loc === base) continue;
  const locPaths = new Set(keyPaths(JSON.parse(readFileSync(join(dir, loc + '.json'), 'utf8'))));
  const missing = [...enPaths].filter((p) => !locPaths.has(p));
  const extra = [...locPaths].filter((p) => !enPaths.has(p));
  if (missing.length || extra.length) {
    ok = false;
    console.error(`\n[${loc}] wijkt af van en:`);
    if (missing.length) console.error(`  ontbreekt (${missing.length}): ${missing.slice(0, 10).join(', ')}${missing.length > 10 ? ' ...' : ''}`);
    if (extra.length) console.error(`  te veel (${extra.length}): ${extra.slice(0, 10).join(', ')}${extra.length > 10 ? ' ...' : ''}`);
  } else {
    console.log(`[${loc}] OK - ${locPaths.size} sleutels, gelijk aan en`);
  }
}

if (!ok) {
  console.error('\ni18n:check FAILED - niet elke taal is in sync. Werk elke wijziging in ALLE talen bij.');
  process.exit(1);
}
console.log('\ni18n:check OK - alle talen structureel in sync.');
