export const routes = ['en', 'nl', 'de', 'fr'] as const;
export const defaultLang = 'en';

// Foto's die daadwerkelijk in /public/images staan. ImageSlot toont de echte foto
// als de naam hierin voorkomt, anders de HAG-placeholder. Vul aan zodra er beelden
// worden toegevoegd (de briefing bepaalt welke foto bij welke slot hoort).
export const availableImages = new Set<string>([
 'IMG_4704.jpg', 'IMG_4627.jpg', 'IMG_4047.jpg', 'IMG_4501.jpg',
 'IMG_4681.jpg', 'IMG_4686.jpg', 'IMG_4687.jpg', 'IMG_4688.jpg',
 'IMG_1791.jpg', 'IMG_4661.jpg', 'IMG_1784.jpg', 'IMG_4656.jpg',
 'IMG_4655.jpg', 'IMG_2600.jpg', 'IMG_2609.jpg', 'IMG_4635.jpg',
 'IMG_3978.jpg', 'IMG_0975.png', 'apres-ski.jpg', 'fireplace.png',
 'winter-garden-party.png',
 'wwbi-cafe-winter-terrace.jpg', 'wwbi-cafe-terrace.jpg',
 'wwbi-hotel-winter-terrace.jpg', 'wwbi-hotel-lobby-bar.jpg',
 'wwbi-slopeside-restaurant.jpg', 'hero-lounge.jpg',
 'origin-fireside.jpg', 'origin-garden-fire.jpg',
 'wwbi-terrace-two.jpg', 'wwbi-waiter-tray.jpg', 'wwbi-apres-inside.jpg',
 'wwbi-apres-outside.jpg', 'wwbi-garden-group-tap.jpg', 'wwbi-firepit-group.jpg',
 'wwbi-market-crowd.jpg', 'wwbi-slopeside-friends.jpg', 'wwbi-hotel-terrace-two.jpg',
 'bottle-on-apples.jpg', 'partners-hotel-lobby.jpg',
 'wwbi-christmas-dinner.jpg', 'wwbi-events.jpg',
 'wwbi-slopeside-sun.jpg', 'wwbi-backyard.jpg', 'wwbi-icerink.jpg',
 'wwbi-hotel-canal-terrace.jpg', 'wwbi-autumn-walk.jpg', 'wwbi-rainy-restaurant.jpg'
]);

// Achtergrond-video's in /public/videos. Hero/Band tonen de muted autoplay-loop
// als de naam hierin staat, anders valt het terug op de foto (poster).
export const availableVideos = new Set<string>([
 'hero-lounge.mp4'
]);

export const imageSlots: Record<string, string | undefined> = {
 homeHero: undefined,
 homeCollection: undefined,
 homeStory: undefined,
 homeServe: undefined,
 blend1: undefined,
 blend2: undefined,
 collectionHero: undefined,
 productOriginal: undefined,
 productDetail1: undefined,
 productDetail2: undefined,
 productDetail3: undefined,
 storyHero: undefined,
 storyClosing: undefined,
 serveStep1: undefined,
 serveStep3: undefined,
 serveStep4: undefined,
 serveStep5: undefined
};

// [title, copy, image, specs] — specs gebruiken alleen bekende feiten (ABV uit FAQ,
// 1L uit "heat the full litre", seizoensstatus). Géén prijs/launchdatum verzinnen.
export const products = [
 ['HOT APPLE GIN - THE ORIGINAL', 'Our signature bottle. Designed to be heated slowly and poured generously.\nThe kind of drink that quietly turns one round into two.', 'IMG_4681.jpg', '4.1% ABV · 1L'],
 ['HOT APPLE GIN 0.0', 'All the warmth. None of the alcohol.\nStill warm. Still layered. Still worth slowing down for.', 'IMG_4686.jpg', 'Alcohol-free · 1L'],
 ['ORIGINAL GIFT SET', 'The full Hot Apple Gin experience, ready to gift.\nFor people worth opening the good glassware for.', 'IMG_4688.jpg', 'Gift set · 4.1% ABV · 1L'],
 ['0.0 GIFT SET', 'The full ritual. Just without the alcohol.\nA gift set for warm moments that never really depended on alcohol anyway.', 'IMG_4687.jpg', 'Gift set · Alcohol-free · 1L']
];

export const serveSteps = [
 ['STEP 1 - OPEN', 'This is where it all starts.', "Open the bottle and pour Hot Apple Gin into a pan, warming gently until the first steam begins to rise. No boiling, we're making a cocktail, not soup.", 'IMG_1791.jpg'],
 ['STEP 2 - HEAT', 'Good things take warmth.', 'Let the flavours open up slowly while the room starts smelling like you\ndefinitely made the right decision tonight.', 'IMG_4655.jpg'],
 ['STEP 3 - GARNISH', 'Elegance lives in the details.', "A slice of apple. A whisper of cinnamon. Because details matter, \nthis isn't just a drink.", 'IMG_4661.jpg'],
 ['STEP 4 - SERVE', 'Now the good part.', 'Serve warm in a stemmed glass and let the aroma do the rest. Bonus points\nif someone says "This smells great!" before their first sip.', 'IMG_1784.jpg'],
 ['STEP 5 - SLOW DOWN', 'Some drinks are made to be held onto.', 'Warm hands, slow conversations and another round that suddenly felt\nentirely appropriate.', 'IMG_4656.jpg']
];

export const recipes = [
`Can you make Hot Apple Gin at home?\n\nYou can heat apple juice.\nYou can add gin.\nYou can even add cinnamon.\nAnd then you can spend the rest of the evening wondering why it tastes so\nmuch different than you remembered.\n\nThat is the thing with recipes. Making something nice once is not the hard\npart. Making it taste exactly the same every time is where the trouble\nstarts.\n\nIf Hot Apple Gin were just warm apple juice with a splash of gin and a bit\nof cinnamon, we would probably have left it at that.\n\nWe did not.\n\nIt took us two years, a gin distilled specifically for this drink, and more\ntest rounds than anyone should admit publicly to arrive at the recipe now\nknown as Hot Apple Gin.`,
`What is in Hot Apple Gin?\n\nHot Apple Gin is built on:\n\n· apple juice made from a carefully balanced blend of apple varieties;\n· gin distilled specifically for this drink;\n· a layered spice profile;\n· a few things we have not even told our children;\n· and the discipline to make it taste the same every time.\n\nThe full recipe?\n\nLet's keep it undisclosed for everyone's emotional wellbeing.\n\nIt saves you disappointment, us awkward emails, and your local therapist\none very specific conversation.`,
`[COPY_NEEDED]`,
`Why we bottled the recipe\n\nWe are proud that we managed to capture the recipe in a bottle.\n\nThe apple, the gin, the spices, the extras, the warmth, the feeling, all\nbalanced before it reaches your kitchen, bar, terrace or winter table.\n\nThat is the mission.\n\nWherever Hot Apple Gin is served, it should taste and feel like Hot Apple Gin.\n\nDifferent setting.\nSame warmth.\n\nReady to heat.\nReady to serve.\nReady to share with friends and family.\n\nDo we compare ourselves to Coca-Cola?\n\nOf course not.\n\nWe are just saying there is a reason certain recipes stay undisclosed.\n\nBesides, ours is served warm.`
];

// Structured editorial version of the recipe page (exact copy preserved, only
// reorganised into typed blocks so each can be styled). Block types:
// p | quote | list | ingredients | redacted | lines | triad
export const recipeSections: { head: string; image: string; blocks: { type: string; text?: string; items?: string[] }[] }[] = [
 {
  head: 'Can you make Hot Apple Gin at home?',
  image: 'recipe-apple-jars.jpg',
  blocks: [
   { type: 'list', items: ['You can heat apple juice.', 'You can add gin.', 'You can even add cinnamon.'] },
   { type: 'p', text: 'And then you can spend the rest of the evening wondering why it tastes so much different than you remembered.' },
   { type: 'p', text: 'That is the thing with recipes. Making something nice once is not the hard part. Making it taste exactly the same every time is where the trouble starts.' },
   { type: 'p', text: 'If Hot Apple Gin were just warm apple juice with a splash of gin and a bit of cinnamon, we would probably have left it at that.' },
   { type: 'quote', text: 'We did not.' },
   { type: 'p', text: 'It took us two years, a gin distilled specifically for this drink, and more test rounds than anyone should admit publicly to arrive at the recipe now known as Hot Apple Gin.' }
  ]
 },
 {
  head: 'What is in Hot Apple Gin?',
  image: 'recipe-ingredients.jpg',
  blocks: [
   { type: 'p', text: 'Hot Apple Gin is built on:' },
   { type: 'ingredients', items: ['Apple juice made from a carefully balanced blend of apple varieties', 'Our own private gin distilled specifically for this drink', 'A layered spice profile', 'A few things we have not even told our children', 'And the discipline to make it taste the same every time'] },
   { type: 'p', text: 'The full recipe?' },
   { type: 'redacted', text: "Let's keep it undisclosed for everyone's emotional wellbeing." },
   { type: 'p', text: 'It saves you disappointment, us awkward emails, and your local therapist one very specific conversation.' }
  ]
 },
 {
  head: 'Why we bottled the recipe',
  image: 'recipe-bottling.jpg',
  blocks: [
   { type: 'p', text: 'We are proud that we managed to capture the recipe in a bottle.' },
   { type: 'p', text: 'The apple, the gin, the spices, the extras, the warmth, the feeling, all balanced before it reaches your kitchen, bar, terrace or winter table.' },
   { type: 'quote', text: 'That is the mission.' },
   { type: 'p', text: 'Wherever Hot Apple Gin is served, it should taste and feel like Hot Apple Gin.' },
   { type: 'lines', items: ['Different setting.', 'Same warmth.'] },
   { type: 'triad', items: ['Ready to heat.', 'Ready to serve.', 'Ready to share with friends and family.'] },
   { type: 'p', text: 'Do we compare ourselves to Coca-Cola?' },
   { type: 'quote', text: 'Of course not.' },
   { type: 'p', text: 'We are just saying there is a reason certain recipes stay undisclosed.' },
   { type: 'quote', text: 'Besides, ours is served warm.' }
  ]
 }
];

export const storyIntro = `OUR STORY\n\nHot Apple Gin was never meant to become a brand. It was meant to be enjoyed\nby family, in winter, with nowhere to be. What began as a quiet experiment\nbecame a recipe we couldn't keep to ourselves. Warm, layered, and made with\ncare: this is a drink that carries a story in every glass.\n\nWe're proud to finally share it.`;
export const storyOrigin = `It started with a message from a brother who was travelling one winter, a\ntip, a nudge, a thought that simply said: look at this.\nThe reply came back almost immediately:\n\n"Warm gin… 🤔"\n"Hmmm…"\n"I think I'm going to try making this over the Christmas holidays."\n\nWhat followed were weeks of experimenting, adjusting, and starting over. A\nspice syrup developed from scratch. Proportions tweaked by feel rather than\nmeasurement. And a gin to tie it all together. Almost nothing written down.\nIt took two full winters before the recipe became what it is today, but\nsomewhere along the way, it stopped being an experiment.\n\nIt became a ritual.\n\nEvery winter, family gathered. Brothers, sisters, parents, children, coats\non, sometimes a fire burning, often outside. After a long walk, a day of\nshopping, or simply coming home after a cold day, to good company. Those\nafternoons and evenings are what Hot Apple Gin is made of. Over time, it\nbecame our family recipe. The kind you don't let go of.\n\nThen came the moment that changed everything. We were together, glasses in\nhand, when someone said, half-jokingly and not entirely serious, that\nother people should be able to taste this too. The silence that followed\nsaid everything.\n\nThat same year, we set up at a Christmas market for the first time. We ran\nout of everything, restocked in a hurry, and ran out again. More than once.\nWe never forgot the first glass we sold to a stranger, and we never will.\n\nThe year after, people came back asking for us by name. That told us\neverything we needed to know.\n\nWe bottled our first batch. The response confirmed what we already felt.\nToday, we make Hot Apple Gin with our own gin, developed specifically for\nthis recipe. And now, this winter, Hot Apple Gin will be served for the\nfirst time in bars and restaurants across multiple countries, poured by\nhands that aren't ours, to people we've never met.\n\nGrowing up means letting go, they say… We think we're ready for that.\n\nWhat started around a family fire, is now finding its way to tables across\nthe world.\n\nThat, we think, is how a legacy begins.`;
