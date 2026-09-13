/* New 50 from 精选50张 — dual-column minimal portfolio */

export const sections = [
  {
    id: "high",
    num: "01",
    title: "High Country",
    thesis: "Overcast plateaus, snowlines, and weather with almost no color left.",
  },
  {
    id: "water",
    num: "02",
    title: "Water",
    thesis: "Tide, canal, and cool sea light.",
  },
  {
    id: "temple",
    num: "03",
    title: "Structure & Temple",
    thesis: "Lattice, roofs, corridors — built form under hard sky.",
  },
  {
    id: "still",
    num: "04",
    title: "Still Color",
    thesis: "The few warm signals: weave, red hulls, gold.",
  },
  {
    id: "night",
    num: "05",
    title: "Night",
    thesis: "Near-black frames. Sparse electric light.",
  },
  {
    id: "street",
    num: "06",
    title: "Street & Village",
    thesis: "Lanes, roofs, and public scale.",
  },
];

/**
 * layout: tall | wide | square
 * hero: featured in opening
 */
export const photos = [
  // 01 High
  { id: "p448", file: "P1000448.JPG", section: "high", alt: "Snow peaks under deep blue", note: "Snowline", layout: "wide", hero: true },
  { id: "p1072", file: "P1001072.JPG", section: "high", alt: "Mountain wall and meadow", note: "Mountain wall", layout: "wide" },
  { id: "p957", file: "P1000957.JPG", section: "high", alt: "Rock peaks above a monastery", note: "Peaks & roof", layout: "wide" },
  { id: "p1068", file: "P1001068.JPG", section: "high", alt: "Jagged ridge in cloud", note: "Ridge", layout: "tall" },
  { id: "p1092", file: "P1001092.JPG", section: "high", alt: "Peak through haze", note: "Haze", layout: "wide" },
  { id: "p353", file: "P1000353.JPG", section: "high", alt: "Overcast mountains over plain", note: "Overcast plain", layout: "wide" },
  { id: "p383", file: "P1000383.JPG", section: "high", alt: "Clouds over arid range", note: "Arid range", layout: "wide" },
  { id: "p411", file: "P1000411.JPG", section: "high", alt: "Sheep on open grassland", note: "Grassland", layout: "wide" },
  { id: "p472", file: "P1000472.JPG", section: "high", alt: "Rolling brown hills", note: "Hills", layout: "wide" },
  { id: "p482", file: "P1000482.JPG", section: "high", alt: "Layered mountains under cloud", note: "Layers", layout: "wide" },
  { id: "p525", file: "P1000525.JPG", section: "high", alt: "Moon or sun in grey sky", note: "Grey sky", layout: "wide" },
  { id: "p600", file: "P1000600.JPG", section: "high", alt: "White dunes and pale sky", note: "Dunes", layout: "wide" },
  { id: "p946", file: "P1000946.JPG", section: "high", alt: "River bend in mountain valley", note: "Valley", layout: "wide" },
  { id: "p11824", file: "P1011824.JPG", section: "high", alt: "Sunset cloud break", note: "Break in cloud", layout: "wide" },

  // 02 Water
  { id: "p1022357", file: "P1022357.JPG", section: "water", alt: "Rocky coast and blue water", note: "Rocky coast", layout: "wide" },
  { id: "p1022352", file: "P1022352.JPG", section: "water", alt: "Beach and surf from above", note: "Surf", layout: "wide" },
  { id: "p1022300", file: "P1022300.JPG", section: "water", alt: "Dramatic sea clouds", note: "Sea clouds", layout: "wide" },
  { id: "p11476", file: "P1011476.JPG", section: "water", alt: "Deep blue sea at dusk", note: "Dusk sea", layout: "wide", hero: true },
  { id: "p11319", file: "P1011319.JPG", section: "water", alt: "Calm water and tree line", note: "Tree line", layout: "wide" },
  { id: "p11196", file: "P1011196.JPG", section: "water", alt: "Pool and waterfall edge", note: "Pool edge", layout: "tall" },
  { id: "p11516", file: "P1011516.JPG", section: "water", alt: "Shoreline figures at distance", note: "Shore", layout: "wide" },
  { id: "p12170", file: "P1012170.JPG", section: "water", alt: "Canal through green banks", note: "Canal", layout: "wide" },
  { id: "p12183", file: "P1012183.JPG", section: "water", alt: "Boats in a working waterway", note: "Boats", layout: "wide" },

  // 03 Structure & Temple
  { id: "p752", file: "P1000752.JPG", section: "temple", alt: "Lattice stadium structure", note: "Lattice", layout: "tall" },
  { id: "p11477", file: "P1011477.JPG", section: "temple", alt: "Station arch and train", note: "Station arch", layout: "wide" },
  { id: "p11513", file: "P1011513.JPG", section: "temple", alt: "White pavilion on beach", note: "Pavilion", layout: "wide" },
  { id: "p900", file: "P1000900.JPG", section: "temple", alt: "Long corridor of prayer wheels", note: "Corridor", layout: "wide" },
  { id: "p902", file: "P1000902.JPG", section: "temple", alt: "Monks at painted pillars", note: "Pillars", layout: "tall" },
  { id: "p914", file: "P1000914.JPG", section: "temple", alt: "Monastery roofline", note: "Roofline", layout: "wide" },
  { id: "p11783", file: "P1011783.JPG", section: "temple", alt: "Woven ceiling", note: "Ceiling", layout: "square" },
  { id: "p12186", file: "P1012186.JPG", section: "temple", alt: "Golden buddha", note: "Gold", layout: "tall" },

  // 04 Still color
  { id: "p7", file: "P1000007.JPG", section: "still", alt: "Red kayaks on water", note: "Kayaks", layout: "wide" },
  { id: "p249", file: "P1000249.JPG", section: "still", alt: "Woven textile wall", note: "Textiles", layout: "tall" },
  { id: "p268", file: "P1000268.JPG", section: "still", alt: "Hanging carpets", note: "Carpets", layout: "tall" },
  { id: "p666", file: "P1000666.JPG", section: "still", alt: "Plates on blue wall", note: "Plates on blue", layout: "square" },
  { id: "p1133", file: "P1001133.JPG", section: "still", alt: "Market stall goods", note: "Market", layout: "wide" },
  { id: "p23", file: "P1000023.JPG", section: "still", alt: "Green park lawn", note: "Lawn", layout: "wide" },
  { id: "p852", file: "P1000852.JPG", section: "still", alt: "Single large tree", note: "Tree", layout: "wide" },

  // 05 Night
  { id: "p837", file: "P1000837.JPG", section: "night", alt: "Convenience store at night", note: "Storefront", layout: "wide" },
  { id: "p1098", file: "P1001098.JPG", section: "night", alt: "Cars in rain at night", note: "Rain lot", layout: "wide" },
  { id: "p12046", file: "P1012046.JPG", section: "night", alt: "Neon street at night", note: "Neon street", layout: "tall" },
  { id: "p12242", file: "P1012242.JPG", section: "night", alt: "White car in dark garage", note: "Garage", layout: "wide" },
  { id: "p12249", file: "P1012249.JPG", section: "night", alt: "Dark interior with glazing", note: "Glass hall", layout: "tall" },
  { id: "p11787", file: "P1011787.JPG", section: "night", alt: "Dark roof against sky", note: "Roof edge", layout: "wide" },
  { id: "p704", file: "P1000704.JPG", section: "night", alt: "Figure in near-black light", note: "Low key", layout: "tall" },

  // 06 Street & village
  { id: "p11792", file: "P1011792.JPG", section: "street", alt: "Village rooftops", note: "Roofs", layout: "wide" },
  { id: "p12020", file: "P1012020.JPG", section: "street", alt: "Cows on green field", note: "Field", layout: "wide" },
  { id: "p189", file: "P1000189.JPG", section: "street", alt: "Child with flag from behind", note: "Flag", layout: "tall" },
  { id: "p11236", file: "P1011236.JPG", section: "street", alt: "Pink cat facade", note: "Facade", layout: "wide" },
  { id: "p11210", file: "P1011210.JPG", section: "street", alt: "White urban wall", note: "Wall", layout: "wide" },
];
