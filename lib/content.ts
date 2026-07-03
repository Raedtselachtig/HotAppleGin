// Beeld-/videoconfig (geen vertaalbare tekst). Alle copy staat in messages/*.json
// en wordt via next-intl geladen; dit bestand houdt alleen bij welke assets bestaan.

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
 'wwbi-hotel-canal-terrace.jpg', 'wwbi-autumn-walk.jpg', 'wwbi-rainy-restaurant.jpg',
 'wwbi-fancy-dinner.jpg', 'collection-bar.jpg', 'served-warm-people.jpg', 'partners-restaurant.jpg',
 'partnerships-production.jpg', 'recipe-bottling-funnel.png'
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
