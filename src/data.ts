const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const heroSlides = [
  { img: img('1633505899118-4ca6bd143043', 2000), alt: 'Bright living room with two cream sofas and olive tree', caption: 'Mosman Residence' },
  { img: img('1600488999806-8efb986d87b1', 2000), alt: 'Walnut dining table with black-framed windows', caption: 'Double Bay Apartment' },
  { img: img('1631048500344-8d01227385b3', 2000), alt: 'Neutral styled bedroom with oak floors', caption: 'Bellevue Hill House' },
  { img: img('1750639258774-9a714379a093', 2000), alt: 'Curved cream sofa with paired artwork', caption: 'Paddington Terrace' },
]

// 六个功能区的配图（顺序固定：客厅、休闲会客区、餐厅、厨房、卧室、卫浴 — 与 i18n t.styles 同序）
export const styleImgs = [
  img('1761330439671-a7f20c285c5e'),
  img('1691036561573-4b76998b60de'),
  img('1600488999806-8efb986d87b1'),
  img('1502005097973-6a7082348e28'),
  img('1631048501851-4aa85ffc3be8'),
  img('1763485956243-50068d04a1ad'),
]

// 画廊：每个功能区 2 张图（与 styleImgs 同顺序，首图一致）
export const styleGalleries = [
  [styleImgs[0], img('1750639258774-9a714379a093')],
  [styleImgs[1], img('1609081144289-eacc3108cd03')],
  [styleImgs[2], img('1593136596203-7212b076f4d2')],
  [styleImgs[3], img('1699695726278-f3f57f9356c4')],
  [styleImgs[4], img('1631048500344-8d01227385b3')],
  [styleImgs[5], img('1610178167104-488495443e01')],
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

// 真实同一房间的 staging 前后对比：空房 → 家具入场（Daniela Margiotta, CC BY-SA 4.0,
// Wikimedia Commons "Prima e dopo un intervento di home staging"，从合成图裁出两个面板）。
// 自托管于 public/；正式上线换成 Vale&Co. 自己项目的对比照。
export const featuredComparison = {
  before: `${import.meta.env.BASE_URL}ba-before.jpg`,
  after: `${import.meta.env.BASE_URL}ba-after.jpg`,
}

export const locationRegions = [
  { region: 'Eastern Suburbs', suburbs: ['Bondi', 'Double Bay', 'Bellevue Hill', 'Randwick', 'Coogee', 'Kensington'] },
  { region: 'Lower North Shore', suburbs: ['Mosman', 'Cremorne', 'Neutral Bay', 'Northbridge', 'Chatswood', 'Lane Cove'] },
  { region: 'Inner West', suburbs: ['Balmain', 'Newtown', 'Ashfield', 'Burwood', 'Strathfield', 'Five Dock'] },
  { region: 'Upper North Shore & Hills', suburbs: ['Epping', 'Eastwood', 'Gordon', 'Castle Hill', 'Kellyville', 'Ryde'] },
  { region: 'City & South', suburbs: ['Sydney CBD', 'Zetland', 'Mascot', 'Wolli Creek', 'Hurstville', 'Sutherland'] },
]

