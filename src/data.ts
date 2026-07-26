const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const heroSlides = [
  { img: img('1633505899118-4ca6bd143043', 2000), alt: 'Bright living room with two cream sofas and olive tree', caption: 'Mosman Residence' },
  { img: img('1600488999806-8efb986d87b1', 2000), alt: 'Walnut dining table with black-framed windows', caption: 'Double Bay Apartment' },
  { img: img('1631048500344-8d01227385b3', 2000), alt: 'Neutral styled bedroom with oak floors', caption: 'Bellevue Hill House' },
  { img: img('1750639258774-9a714379a093', 2000), alt: 'Curved cream sofa with paired artwork', caption: 'Paddington Terrace' },
]

// 六个功能区的「空房 → 布置后」对比图（AI 生成示意素材，同一房间同一机位；
// 顺序固定：客厅、休闲会客区、餐厅、厨房、卧室、卫浴 — 与 i18n t.styles 同序）
const pair = (name: string) => ({
  before: `${import.meta.env.BASE_URL}pair-${name}-before.jpg`,
  after: `${import.meta.env.BASE_URL}pair-${name}-after.jpg`,
})

export const roomPairs = [
  pair('living'),
  pair('lounge'),
  pair('dining'),
  pair('kitchen'),
  pair('bedroom'),
  pair('bath'),
]

// 各功能区代表图 = 布置后（供 i18n 与 MoodBoard 使用）
export const styleImgs = roomPairs.map((p) => p.after)

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

export const locationRegions = [
  { region: 'Eastern Suburbs', suburbs: ['Bondi', 'Double Bay', 'Bellevue Hill', 'Randwick', 'Coogee', 'Kensington'] },
  { region: 'Lower North Shore', suburbs: ['Mosman', 'Cremorne', 'Neutral Bay', 'Northbridge', 'Chatswood', 'Lane Cove'] },
  { region: 'Inner West', suburbs: ['Balmain', 'Newtown', 'Ashfield', 'Burwood', 'Strathfield', 'Five Dock'] },
  { region: 'Upper North Shore & Hills', suburbs: ['Epping', 'Eastwood', 'Gordon', 'Castle Hill', 'Kellyville', 'Ryde'] },
  { region: 'City & South', suburbs: ['Sydney CBD', 'Zetland', 'Mascot', 'Wolli Creek', 'Hurstville', 'Sutherland'] },
]

