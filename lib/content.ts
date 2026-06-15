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
 'origin-fireside.jpg', 'origin-garden-fire.jpg'
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

export const products = [
 ['HOT APPLE GIN - THE ORIGINAL', 'Our signature bottle. Designed to be heated slowly and poured generously.\nThe kind of drink that quietly turns one round into two.', 'IMG_4681.jpg'],
 ['HOT APPLE GIN 0.0', 'All the warmth. None of the alcohol.\nStill warm. Still layered. Still worth slowing down for.', 'IMG_4686.jpg'],
 ['ORIGINAL GIFT SET', 'The full Hot Apple Gin experience, ready to gift.\nFor people worth opening the good glassware for.', 'IMG_4688.jpg'],
 ['0.0 GIFT SET', 'The full ritual. Just without the alcohol.\nA gift set for warm moments that never really depended on alcohol anyway.', 'IMG_4687.jpg']
];

export const serveSteps = [
 ['STEP 1 - POUR', 'This is where it all starts.', "Pour Hot Apple Gin into a pan and warm gently until the first steam begins\nto rise. No boiling, we're making a cocktail, not soup.", 'IMG_1791.jpg'],
 ['STEP 2 - HEAT', 'Good things take warmth.', 'Let the flavours open up slowly while the room starts smelling like you\ndefinitely made the right decision tonight.', 'IMG_4655.jpg'],
 ['STEP 3 - GARNISH', 'Elegance lives in the details.', "A slice of apple. A whisper of cinnamon. Because details matter, \nthis isn't just a drink.", 'IMG_4661.jpg'],
 ['STEP 4 - SERVE', 'Now the good part.', 'Serve warm in a stemmed glass and let the aroma do the rest. Bonus points\nif someone says "This smells great!" before their first sip.', 'IMG_1784.jpg'],
 ['STEP 5 - SLOW DOWN', 'Some drinks are made to be held onto.', 'Warm hands, slow conversations and another round that suddenly felt\nentirely appropriate.', 'IMG_4656.jpg']
];

export const recipes = [
`Can you make Hot Apple Gin at home?\n\nYou can heat apple juice.\nYou can add gin.\nYou can even add cinnamon.\nAnd then you can spend the rest of the evening wondering why it tastes so\nmuch different than you remembered.\n\nThat is the thing with recipes. Making something nice once is not the hard\npart. Making it taste exactly the same every time is where the trouble\nstarts.\n\nIf Hot Apple Gin were just warm apple juice with a splash of gin and a bit\nof cinnamon, we would probably have left it at that.\n\nWe did not.\n\nIt took us two years, a gin distilled specifically for this drink, and more\ntest rounds than anyone should admit publicly to arrive at the recipe now\nknown as Hot Apple Gin.`,
`What is in Hot Apple Gin?\n\nHot Apple Gin is built on:\n\n· apple juice made from a carefully balanced blend of apple varieties;\n· gin distilled specifically for this drink;\n· a layered spice profile;\n· a few things we have not even told our children;\n· and the discipline to make it taste the same every time.\n\nThe full recipe?\n\nLet's keep it undisclosed for everyone's emotional wellbeing.\n\nIt saves you disappointment, us awkward emails, and your local therapist\none very specific conversation.`,
`[COPY_NEEDED]`,
`Why we bottled the recipe\n\nWe are proud that we managed to capture the recipe in a bottle.\n\nThe apple, the gin, the spices, the extras, the warmth, the feeling, all\nbalanced before it reaches your kitchen, bar, terrace or winter table.\n\nThat is the mission.\n\nWherever Hot Apple Gin is served, it should taste and feel like Hot Apple Gin.\n\nDifferent setting.\nSame warmth.\n\nReady to heat.\nReady to pour.\nReady to share with friends and family.\n\nDo we compare ourselves to Coca-Cola?\n\nOf course not.\n\nWe are just saying there is a reason certain recipes stay undisclosed.\n\nBesides, ours is served warm.`
];

export const storyIntro = `OUR STORY\n\nHot Apple Gin was never meant to become a brand. It was meant to be enjoyed\nby family, in winter, with nowhere to be. What began as a quiet experiment\nbecame a recipe we couldn't keep to ourselves. Warm, layered, and made with\ncare: this is a drink that carries a story in every glass.\n\nWe're proud to finally share it.`;
export const storyOrigin = `It started with a message from a brother who was travelling one winter, a\ntip, a nudge, a thought that simply said: look at this.\nThe reply came back almost immediately:\n\n"Warm gin… 🤔"\n"Hmmm…"\n"I think I'm going to try making this over the Christmas holidays."\n\nWhat followed were weeks of experimenting, adjusting, and starting over. A\nspice syrup developed from scratch. Proportions tweaked by feel rather than\nmeasurement. And a gin to tie it all together. Almost nothing written down.\nIt took two full winters before the recipe became what it is today, but\nsomewhere along the way, it stopped being an experiment.\n\nIt became a ritual.\n\nEvery winter, family gathered. Brothers, sisters, parents, children, coats\non, sometimes a fire burning, often outside. After a long walk, a day of\nshopping, or simply coming home after a cold day, to good company. Those\nafternoons and evenings are what Hot Apple Gin is made of. Over time, it\nbecame our family recipe. The kind you don't let go of.\n\nThen came the moment that changed everything. We were together, glasses in\nhand, when someone said, half-jokingly and not entirely serious, that\nother people should be able to taste this too. The silence that followed\nsaid everything.\n\nThat same year, we set up at a Christmas market for the first time. We ran\nout of everything, restocked in a hurry, and ran out again. More than once.\nWe never forgot the first glass we sold to a stranger, and we never will.\n\nThe year after, people came back asking for us by name. That told us\neverything we needed to know.\n\nWe bottled our first batch. The response confirmed what we already felt.\nToday, we make Hot Apple Gin with our own gin, developed specifically for\nthis recipe. And now, this winter, Hot Apple Gin will be served for the\nfirst time in bars and restaurants across multiple countries, poured by\nhands that aren't ours, to people we've never met.\n\nGrowing up means letting go, they say… We think we're ready for that.\n\nWhat started around a family fire, is now finding its way to tables across\nthe world.\n\nThat, we think, is how a legacy begins.`;
