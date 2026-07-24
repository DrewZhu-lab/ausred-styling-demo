const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const heroSlides = [
  { img: img('1631679706909-1844bbd07221', 2000), alt: 'Cream boucle living room in warm natural light', caption: 'Mosman Residence' },
  { img: img('1618221195710-dd6b41faaea6', 2000), alt: 'Neutral-toned styled living space', caption: 'Double Bay Apartment' },
  { img: img('1617103996702-96ff29b1c467', 2000), alt: 'Warm textured living room with natural fibres', caption: 'Paddington Terrace' },
  { img: img('1600210492486-724fe5c67fb0', 2000), alt: 'Tan leather living room with gallery wall', caption: 'Northbridge House' },
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
    img: img('1616486338812-3dadae4b4ace'),
  },
  {
    name: 'Coastal Hamptons',
    blurb: 'Light, airy and relaxed — made for harbour and beachside suburbs.',
    tags: ['White linen', 'Oak', 'Blue accents'],
    img: img('1505693416388-ac5ce068fe85'),
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
  { suburb: 'Mosman', type: 'Family home · Full staging', img: img('1600566753086-00f18fb6b3ea') },
  { suburb: 'Surry Hills', type: 'Terrace · Partial styling', img: img('1586023492125-27b2c045efd7') },
  { suburb: 'Bondi', type: 'Apartment · Full staging', img: img('1560185127-6ed189bf02f4') },
  { suburb: 'Chatswood', type: 'Apartment · Full staging', img: img('1617806118233-18e1de247200') },
  { suburb: 'Paddington', type: 'Terrace · Interior design', img: img('1594026112284-02bb6f3352fe') },
  { suburb: 'Mascot', type: 'Apartment · Airbnb styling', img: img('1556020685-ae41abfc9365') },
]

export const packages = [
  {
    name: 'The Essential',
    tagline: '公寓与紧凑户型的核心布置',
    blurb: 'Styling for the rooms that sell — living, dining and master bedroom. Ideal for apartments and compact homes going to market.',
    includes: ['Living, dining & master styling', 'Art & accessories', '6-week hire, delivery & install', 'Pre-photography style check'],
    featured: false,
  },
  {
    name: 'The Signature',
    tagline: 'Most popular',
    blurb: 'Whole-home staging with a cohesive style story from entry to outdoor space — our most-booked package for houses and townhouses.',
    includes: ['Every room styled', 'Full art, greenery & soft styling', '6-week hire, delivery & install', 'Open-home refresh visit'],
    featured: true,
  },
  {
    name: 'The Luxe',
    tagline: '高端物业',
    blurb: 'Designer furniture and layered styling for prestige listings where presentation drives the price conversation.',
    includes: ['Premium designer pieces', 'Dual living & outdoor zones', 'Extended hire options', 'Stylist on-site for photography'],
    featured: false,
  },
  {
    name: 'Turn-Key Living',
    tagline: 'Airbnb 与出租房',
    blurb: 'A complete purchase package for short-stay and rental properties — furniture, linen and styling kit, ready for the first booking.',
    includes: ['Furniture purchase package', 'Linen & styling kit', 'Install & listing-photo styling', 'Restock recommendations'],
    featured: false,
  },
]

export const locationRegions = [
  { region: 'Eastern Suburbs', suburbs: ['Bondi', 'Double Bay', 'Bellevue Hill', 'Randwick', 'Coogee', 'Kensington'] },
  { region: 'Lower North Shore', suburbs: ['Mosman', 'Cremorne', 'Neutral Bay', 'Northbridge', 'Chatswood', 'Lane Cove'] },
  { region: 'Inner West', suburbs: ['Balmain', 'Newtown', 'Ashfield', 'Burwood', 'Strathfield', 'Five Dock'] },
  { region: 'Upper North Shore & Hills', suburbs: ['Epping', 'Eastwood', 'Gordon', 'Castle Hill', 'Kellyville', 'Ryde'] },
  { region: 'City & South', suburbs: ['Sydney CBD', 'Zetland', 'Mascot', 'Wolli Creek', 'Hurstville', 'Sutherland'] },
]

export const processSteps = [
  { step: '01', title: 'Discovery Call', text: 'A quick call about your property, timeline and campaign — within 24 hours of your enquiry.' },
  { step: '02', title: 'Consultation & Proposal', text: 'On-site or video walkthrough, then a tailored styling proposal and quote.' },
  { step: '03', title: 'Styling Day', text: 'Our team delivers and installs everything in a single day, ready for the camera.' },
  { step: '04', title: 'Photography & Open Homes', text: 'Your agent shoots and lists; we keep the home open-home ready.' },
  { step: '05', title: 'Collection', text: 'Sold? We collect everything — or extend week to week until it is.' },
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
