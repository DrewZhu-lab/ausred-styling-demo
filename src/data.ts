const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const heroSlides = [
  { img: img('1631679706909-1844bbd07221', 2000), alt: 'Cream boucle living room in warm natural light', caption: 'Mosman Residence' },
  { img: img('1618221195710-dd6b41faaea6', 2000), alt: 'Neutral-toned styled living space', caption: 'Double Bay Apartment' },
  { img: img('1617103996702-96ff29b1c467', 2000), alt: 'Warm textured living room with natural fibres', caption: 'Paddington Terrace' },
  { img: img('1600210492486-724fe5c67fb0', 2000), alt: 'Tan leather living room with gallery wall', caption: 'Northbridge House' },
]

// 六种风格的配图（顺序固定：Contemporary, Coastal Hamptons, Japandi, Scandinavian, Modern Luxe, Mid-Century）
export const styleImgs = [
  img('1616486338812-3dadae4b4ace'),
  img('1505693416388-ac5ce068fe85'),
  img('1554995207-c18c203602cb'),
  img('1556228453-efd6c1ff04f6'),
  img('1540518614846-7eded433c457'),
  img('1493809842364-78817add7ffb'),
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

// Same photo on both sides — the Before half is desaturated in CSS. Placeholder
// until real project before/after pairs are available.
export const featuredComparison = {
  suburb: 'Surry Hills',
  img: img('1522708323590-d24dbb6b0267', 2000),
}

export const locationRegions = [
  { region: 'Eastern Suburbs', suburbs: ['Bondi', 'Double Bay', 'Bellevue Hill', 'Randwick', 'Coogee', 'Kensington'] },
  { region: 'Lower North Shore', suburbs: ['Mosman', 'Cremorne', 'Neutral Bay', 'Northbridge', 'Chatswood', 'Lane Cove'] },
  { region: 'Inner West', suburbs: ['Balmain', 'Newtown', 'Ashfield', 'Burwood', 'Strathfield', 'Five Dock'] },
  { region: 'Upper North Shore & Hills', suburbs: ['Epping', 'Eastwood', 'Gordon', 'Castle Hill', 'Kellyville', 'Ryde'] },
  { region: 'City & South', suburbs: ['Sydney CBD', 'Zetland', 'Mascot', 'Wolli Creek', 'Hurstville', 'Sutherland'] },
]

