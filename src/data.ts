const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const heroSlides = [
  { img: img('1600585154340-be6161a56a0c', 2000), alt: 'Styled open-plan living room' },
  { img: img('1600607687939-ce8a6c25118c', 2000), alt: 'Contemporary staged interior' },
  { img: img('1618221195710-dd6b41faaea6', 2000), alt: 'Neutral-toned styled living space' },
  { img: img('1600566753086-00f18fb6b3ea', 2000), alt: 'Modern styled family home' },
]

export type StylePreview = {
  name: string
  blurb: string
  tags: string[]
  img: string
}

export const stylePreviews: StylePreview[] = [
  {
    name: 'Contemporary',
    blurb: 'Clean lines and warm neutrals — the broadest buyer appeal.',
    tags: ['Warm neutrals', 'Statement art', 'Soft texture'],
    img: img('1586023492125-27b2c045efd7'),
  },
  {
    name: 'Coastal Hamptons',
    blurb: 'Light, airy and relaxed — made for harbour and beachside suburbs.',
    tags: ['White linen', 'Oak', 'Blue accents'],
    img: img('1560185007-cde436f6a4d0'),
  },
  {
    name: 'Japandi',
    blurb: 'Japanese calm meets Scandi function. Quietly premium.',
    tags: ['Low profile', 'Natural timber', 'Muted palette'],
    img: img('1554995207-c18c203602cb'),
  },
  {
    name: 'Scandinavian',
    blurb: 'Bright, uncluttered and family-friendly.',
    tags: ['Light timber', 'White walls', 'Cosy layers'],
    img: img('1556228453-efd6c1ff04f6'),
  },
  {
    name: 'Modern Luxe',
    blurb: 'Hotel-grade finish for premium listings.',
    tags: ['Velvet', 'Brass', 'Deep tones'],
    img: img('1540518614846-7eded433c457'),
  },
  {
    name: 'Mid-Century',
    blurb: 'Character styling for terraces and warehouse conversions.',
    tags: ['Walnut', 'Curves', 'Earthy hues'],
    img: img('1493809842364-78817add7ffb'),
  },
]

export const addressSuggestions = [
  '12 Campbell Parade, Bondi Beach NSW 2026',
  '45 Military Road, Mosman NSW 2088',
  '8 Crown Street, Surry Hills NSW 2010',
  '67 Victoria Avenue, Chatswood NSW 2067',
  '5 Oxford Street, Paddington NSW 2021',
  '23 Anzac Parade, Kensington NSW 2033',
  '18 Church Street, Ryde NSW 2112',
  '301/2 Chifley Square, Sydney NSW 2000',
]

export const stats = [
  { value: '280+', label: 'Homes styled' },
  { value: '12%', label: 'Average premium over guide' },
  { value: '18 days', label: 'Average time on market' },
]

// Same photo on both sides — the Before half is desaturated in CSS. Placeholder
// until real project before/after pairs are available.
export const featuredComparison = {
  suburb: 'Surry Hills',
  img: img('1522708323590-d24dbb6b0267', 2000),
}

export const projects = [
  { suburb: 'Mosman', type: 'Family home · Full staging', img: img('1600596542815-ffad4c1539a9') },
  { suburb: 'Surry Hills', type: 'Terrace · Partial styling', img: img('1598928506311-c55ded91a20c') },
  { suburb: 'Bondi', type: 'Apartment · Full staging', img: img('1560185127-6ed189bf02f4') },
  { suburb: 'Chatswood', type: 'Apartment · Full staging', img: img('1617806118233-18e1de247200') },
  { suburb: 'Paddington', type: 'Terrace · Interior design', img: img('1583847268964-b28dc8f51f92') },
  { suburb: 'Mascot', type: 'Apartment · Airbnb styling', img: img('1567016432779-094069958ea5') },
]

export const services = [
  {
    title: 'Full Property Staging',
    blurb: 'Complete furniture, art and accessories for vacant homes going to market.',
    includes: ['Furniture hire (6 weeks)', 'Delivery & install', 'Pre-photography style check'],
  },
  {
    title: 'Partial Styling',
    blurb: 'We work with what you own and layer in what sells.',
    includes: ['On-site consultation', 'Blending hire pieces', 'Declutter guidance'],
  },
  {
    title: 'Airbnb & Short-Stay',
    blurb: 'Photogenic, durable fit-outs that lift nightly rates and reviews.',
    includes: ['Turn-key furnishing', 'Linen & styling kit', 'Listing photo styling'],
  },
  {
    title: 'Interior Design',
    blurb: 'Personalised design for the home you plan to keep.',
    includes: ['Concept & mood boards', 'Furniture procurement', 'Install & finishing'],
  },
]
