// 首屏背景短片素材在 public/hero.mp4（由 6 张布置后图片合成，含音乐），Hero.tsx 直接引用。

// 六个功能区的「空房 → 布置后」对比图（AI 生成示意素材，同一房间同一机位；
// 顺序固定：客厅、休闲会客区、餐厅、厨房、卧室、卫浴 — 与 i18n t.styles 同序）
const pair = (name: string) => ({
  before: `${import.meta.env.BASE_URL}pair-${name}-before.jpg`,
  after: `${import.meta.env.BASE_URL}pair-${name}-after.jpg`,
})

// 18 对，按房间分组（每行 3 格 = 同一空间的三种风格），与 t.styles 同序：
// 无后缀=大宅奢华系，2=温暖简约系，3=撞色个性系。
export const roomPairs = [
  pair('living-v3'),
  pair('living2-v2'),
  pair('living3-v3'),
  pair('lounge'),
  pair('lounge2-v2'),
  pair('lounge3-v2'),
  pair('dining'),
  pair('dining2-v2'),
  pair('dining3'),
  pair('kitchen'),
  pair('kitchen2-v2'),
  pair('kitchen3'),
  pair('bedroom'),
  pair('bedroom2-v2'),
  pair('bedroom3'),
  pair('bath'),
  pair('bath2'),
  pair('bath3'),
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
