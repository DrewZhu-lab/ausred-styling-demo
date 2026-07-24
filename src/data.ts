const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const heroSlides = [
  { img: img('1728649054288-61f332ee389b', 2000), alt: 'Cream French living room with arched mirror and marble fireplace', caption: 'Mosman Residence' },
  { img: img('1680773525653-f14b98e5acf6', 2000), alt: 'Cream panelled walls with trumeau mirror', caption: 'Double Bay Apartment' },
  { img: img('1617972582658-45dd3162f128', 2000), alt: 'Wood-panelled salon with marble fireplace', caption: 'Bellevue Hill House' },
  { img: img('1552475157-a68a1826ddb3', 2000), alt: 'Classic French salon with mouldings and fireplace', caption: 'Paddington Terrace' },
]

// 六种风格的配图（顺序固定：Contemporary, Coastal Hamptons, Japandi, Scandinavian, Modern Luxe, Mid-Century）
export const styleImgs = [
  img('1633330977020-2bdfb8530cc2'),
  img('1615874694520-474822394e73'),
  img('1700226034367-2fb120f48dfa'),
  img('1725034474154-b4108c93bd3b'),
  img('1593987314040-8e0ac84ae724'),
  img('1752108037856-47c91b82d7f5'),
]

// 画廊：每种风格 2–3 张图（与 styleImgs 同顺序，首图一致）
export const styleGalleries = [
  [styleImgs[0], img('1728649060658-8e64dccf2711')],
  [styleImgs[1], img('1728649054288-61f332ee389b')],
  [styleImgs[2], img('1642155920958-554ea053b886')],
  [styleImgs[3], img('1700049749742-821f04ed3700')],
  [styleImgs[4], img('1696413542101-2479dd479982')],
  [styleImgs[5], img('1617972582658-45dd3162f128')],
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

// 真实同一房间的 staging 前后对比（Die Home Stagerin, CC BY-SA 3.0, Wikimedia Commons）。
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

