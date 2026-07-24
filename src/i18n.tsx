import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { styleImgs } from './data'

export type Lang = 'en' | 'zh'

const en = {
  nav: {
    home: 'Home',
    ai: 'AI Preview',
    services: 'Services',
    packages: 'Packages',
    gallery: 'Gallery',
    locations: 'Locations',
    about: 'About',
    consult: 'Free consultation',
    langSwitch: '中文',
  },
  hero: {
    eyebrow: 'Property Styling · Sydney',
    sub: 'Vale&Co. Styling stages homes that sell faster, for more — and with our AI Style Studio, you can preview your own home restyled before we lift a cushion.',
    ctaAI: 'Preview my home with AI',
    ctaWork: 'View our styles',
    scroll: 'Scroll',
  },
  story: {
    eyebrow: 'Our Story',
    quote:
      '“At Vale&Co., we believe every home deserves to tell a story. Through thoughtful styling and timeless design, we create spaces that feel effortless, welcoming, and enduring.”',
  },
  featured: {
    eyebrow: 'Signature Styles',
    explore: 'Explore all six styles',
  },
  styles: [
    { name: 'Contemporary', blurb: 'Clean lines and warm neutrals — the broadest buyer appeal.', desc: 'Our most requested look. Warm neutrals, clean-lined furniture and layered soft textures photograph beautifully and appeal to the widest pool of buyers — ideal when you want broad, fast interest in your campaign.', tags: ['Warm neutrals', 'Statement art', 'Soft texture'], img: styleImgs[0] },
    { name: 'Coastal Hamptons', blurb: 'Light, airy and relaxed — made for harbour and beachside suburbs.', desc: 'Crisp whites, weathered oak and relaxed linen create that instantly recognisable coastal calm. Perfect for harbourside and beachside homes, where buyers are purchasing a lifestyle as much as a floor plan.', tags: ['White linen', 'Oak', 'Blue accents'], img: styleImgs[1] },
    { name: 'Japandi', blurb: 'Japanese calm meets Scandi function. Quietly premium.', desc: 'A quiet blend of Japanese minimalism and Scandinavian warmth — low-profile furniture, natural timber and a muted palette that make rooms feel calm, considered and premium.', tags: ['Low profile', 'Natural timber', 'Muted palette'], img: styleImgs[2] },
    { name: 'Scandinavian', blurb: 'Bright, uncluttered and family-friendly.', desc: 'Bright, functional and family-friendly. Light timbers, white walls and cosy layered textiles maximise the sense of light and space in apartments and family homes alike.', tags: ['Light timber', 'White walls', 'Cosy layers'], img: styleImgs[3] },
    { name: 'Modern Luxe', blurb: 'Hotel-grade finish for premium listings.', desc: 'Hotel-suite polish for prestige listings — velvet, brass, marble and deep accent tones that set an aspirational tone from the very first photo of the campaign.', tags: ['Velvet', 'Brass', 'Deep tones'], img: styleImgs[4] },
    { name: 'Mid-Century', blurb: 'Character styling for terraces and warehouse conversions.', desc: 'Walnut tones, curved silhouettes and earthy hues that give terraces and warehouse conversions real character while staying refined and liveable.', tags: ['Walnut', 'Curves', 'Earthy hues'], img: styleImgs[5] },
  ],
  services: {
    eyebrow: 'Services',
    title: 'Styling for every campaign',
    intro: 'From a single consultation to a full turn-key fit-out, we scale to the property and the market.',
    pageIntro:
      'From a single consultation to a full turn-key fit-out, we scale to the property and the market. Every engagement starts with a free, no-obligation consultation.',
    items: [
      { title: 'Full Property Staging', blurb: 'Complete furniture, art and accessories for vacant homes going to market.', includes: ['Furniture hire (6 weeks)', 'Delivery & install', 'Pre-photography style check'] },
      { title: 'Partial Styling', blurb: 'We work with what you own and layer in what sells.', includes: ['On-site consultation', 'Blending hire pieces', 'Declutter guidance'] },
      { title: 'Airbnb & Short-Stay', blurb: 'Photogenic, durable fit-outs that lift nightly rates and reviews.', includes: ['Turn-key furnishing', 'Linen & styling kit', 'Listing photo styling'] },
      { title: 'Interior Design', blurb: 'Personalised design for the home you plan to keep.', includes: ['Concept & mood boards', 'Furniture procurement', 'Install & finishing'] },
    ],
  },
  process: {
    eyebrow: 'How it works',
    title: 'Five steps, one styling day',
    steps: [
      { step: '01', title: 'Discovery Call', text: 'A quick call about your property, timeline and campaign — within 24 hours of your enquiry.' },
      { step: '02', title: 'Consultation & Proposal', text: 'On-site or video walkthrough, then a tailored styling proposal and quote.' },
      { step: '03', title: 'Styling Day', text: 'Our team delivers and installs everything in a single day, ready for the camera.' },
      { step: '04', title: 'Photography & Open Homes', text: 'Your agent shoots and lists; we keep the home open-home ready.' },
      { step: '05', title: 'Collection', text: 'Sold? We collect everything — or extend week to week until it is.' },
    ],
  },
  cta: {
    title: 'Ready to style your next sale?',
    button: 'Book a free consultation',
  },
  ai: {
    eyebrow: 'AI Style Studio',
    title: 'See your home, six ways',
    intro: 'Enter your address and our AI looks at the homes we have styled around you, then previews your property in the styles that sell best in your suburb.',
    placeholder: 'Enter your property address…',
    preview: 'Preview styles',
    styling: 'Styling…',
    usesLeft: (n: number) => `3 free previews per customer · ${n} left`,
    usedAll: 'You have used all your free previews',
    steps: ['Locating your property…', 'Reviewing homes we have styled nearby…', 'Matching styles that sell in your suburb…', 'Composing your previews…'],
    nearby: (n: number, addr: string) => `We have styled ${n} homes within 3 km of ${addr}. Based on what sells in your area:`,
    topPick: 'Top pick for your area',
    bookFor: (addr: string) => `Book a free consultation for ${addr}`,
    tryAnother: 'Try another address',
    limitTitle: 'You’ve used your 3 free previews',
    limitBody: 'Our stylists would love to show you more. Book a free consultation and we’ll create previews for your exact rooms — no obligation.',
    demoNote: 'Demo experience — previews are illustrative. The production version generates imagery from photos of your actual property.',
  },
  gallery: {
    eyebrow: 'Gallery',
    title: 'Our Signature Styles',
    intro: 'Six distinct looks, each tailored to your home and the buyers in your suburb — from calm Japandi to hotel-grade Modern Luxe.',
    baCaption: 'Drag to compare — every style begins with the same room (demo imagery)',
    hint: 'Tap any photo to see the style story',
  },
  packages: {
    eyebrow: 'Packages',
    title: 'Four ways to work with us',
    intro: 'Every home is different, so every quote is tailored. Choose the package that fits your campaign — we confirm the details and investment at your free consultation.',
    mostPopular: 'Most popular',
    quoteBtn: 'Get a tailored quote',
    footnote: 'Pricing is confirmed at your free consultation and depends on property size, hire period and furniture tier. Extensions available week to week; flexible payment options on request.',
    items: [
      { name: 'The Essential', tagline: 'Apartments & compact homes', blurb: 'Styling for the rooms that sell — living, dining and master bedroom. Ideal for apartments and compact homes going to market.', includes: ['Living, dining & master styling', 'Art & accessories', '6-week hire, delivery & install', 'Pre-photography style check'], featured: false },
      { name: 'The Signature', tagline: 'Whole-home staging', blurb: 'Whole-home staging with a cohesive style story from entry to outdoor space — our most-booked package for houses and townhouses.', includes: ['Every room styled', 'Full art, greenery & soft styling', '6-week hire, delivery & install', 'Open-home refresh visit'], featured: true },
      { name: 'The Luxe', tagline: 'Prestige listings', blurb: 'Designer furniture and layered styling for prestige listings where presentation drives the price conversation.', includes: ['Premium designer pieces', 'Dual living & outdoor zones', 'Extended hire options', 'Stylist on-site for photography'], featured: false },
      { name: 'Turn-Key Living', tagline: 'Airbnb & rentals', blurb: 'A complete purchase package for short-stay and rental properties — furniture, linen and styling kit, ready for the first booking.', includes: ['Furniture purchase package', 'Linen & styling kit', 'Install & listing-photo styling', 'Restock recommendations'], featured: false },
    ],
  },
  locations: {
    eyebrow: 'Locations',
    title: 'Styling homes across Sydney',
    intro: 'From the Eastern Suburbs to the Hills, our team delivers and installs across greater Sydney — with service in English and Mandarin.',
    note: 'Not on the list? We regularly style beyond these areas — ask us about your suburb at a free consultation.',
  },
  about: {
    eyebrow: 'About',
    title: 'The Vale&Co. story',
    intro: 'A Sydney styling studio backed by Ausred International Investment Group — pairing property market insight with timeless, liveable design.',
    values: ['Natural', 'Bright & Airy', 'Timeless', 'Minimal & Refined', 'Detail-Oriented'],
  },
  contact: {
    eyebrow: 'Contact Us',
    title: 'Let’s style your next sale',
    intro: 'Tell us about your property and we will come back within one business day with availability and a tailored quote.',
    name: 'Name',
    phone: 'Phone',
    email: 'Email',
    address: 'Property address (optional)',
    service: 'Service of interest',
    serviceOptions: ['Full Property Staging', 'Partial Styling', 'Airbnb & Short-Stay', 'Interior Design'],
    message: 'Tell us about the property — bedrooms, timeline, agent…',
    submit: 'Send enquiry',
    thanks: 'Thank you!',
    received: 'Your enquiry has been received. We will be in touch within one business day.',
    emailLabel: 'Email',
    officeLabel: 'Office',
    hoursLabel: 'Hours',
    hours: 'Mon–Fri 9:00–17:30 · Sat by appointment',
  },
}

type Dict = typeof en

const zh: Dict = {
  nav: {
    home: '首页',
    ai: 'AI 预览',
    services: '服务',
    packages: '套餐',
    gallery: '作品',
    locations: '服务区域',
    about: '关于',
    consult: '免费咨询',
    langSwitch: 'EN',
  },
  hero: {
    eyebrow: '悉尼房产软装与销售布置',
    sub: 'Vale&Co. Styling 让房子卖得更快、卖得更好——通过 AI Style Studio，你可以在我们动手之前，先预览自己家的布置效果。',
    ctaAI: 'AI 预览我的家',
    ctaWork: '查看风格作品',
    scroll: 'Scroll',
  },
  story: {
    eyebrow: '品牌故事',
    quote: '「在 Vale&Co.，我们相信每一个家都有值得讲述的故事。通过用心的布置与经得起时间的设计，我们创造松弛、温暖而隽永的空间。」',
  },
  featured: {
    eyebrow: '招牌风格',
    explore: '探索全部六种风格',
  },
  styles: [
    { name: 'Contemporary', blurb: '利落线条与温暖中性色——最广泛的买家接受度。', desc: '我们被预订最多的风格。温暖的中性色、利落的家具线条与层叠的柔软质感，非常上镜，也能打动最广泛的买家群体——适合追求快速、广泛关注度的房源。', tags: ['暖调中性色', '艺术挂画', '柔软质感'], img: styleImgs[0] },
    { name: 'Coastal Hamptons', blurb: '明亮、通透、松弛——为海港与海滨街区而生。', desc: '清爽的白色、风化橡木与松弛的亚麻，构成一眼可辨的海滨宁静感。适合海港与海滨住宅——买家买的不只是户型，更是一种生活方式。', tags: ['白色亚麻', '橡木', '蓝色点缀'], img: styleImgs[1] },
    { name: 'Japandi', blurb: '日式宁静与北欧功能的结合，低调而高级。', desc: '日式极简与北欧温暖的安静融合——低矮家具、天然木材与静谧色调，让空间显得从容、克制而高级。', tags: ['低矮线条', '天然木材', '静谧色调'], img: styleImgs[2] },
    { name: 'Scandinavian', blurb: '明亮、整洁、适合家庭。', desc: '明亮、实用、适合家庭。浅色木材、白墙与温馨的织物层次，把公寓和家庭住宅的采光与空间感放到最大。', tags: ['浅色木材', '白墙', '温馨层次'], img: styleImgs[3] },
    { name: 'Modern Luxe', blurb: '酒店级质感，为高端房源而备。', desc: '为高端房源准备的酒店套房质感——丝绒、黄铜、大理石与深色点缀，从广告第一张照片就定下令人向往的基调。', tags: ['丝绒', '黄铜', '深色调'], img: styleImgs[4] },
    { name: 'Mid-Century', blurb: '为排屋与仓库改造注入个性。', desc: '胡桃木色、曲线轮廓与大地色调，为排屋与仓库改造注入真实个性，同时保持精致宜居。', tags: ['胡桃木', '曲线', '大地色'], img: styleImgs[5] },
  ],
  services: {
    eyebrow: '服务',
    title: '为每一次出售而布置',
    intro: '从单次咨询到整套交付，我们按物业与市场灵活配置。',
    pageIntro: '从单次咨询到整套交付，我们按物业与市场灵活配置。每次合作都从免费、无义务的咨询开始。',
    items: [
      { title: '全屋布置 Full Staging', blurb: '为空置待售房屋提供全套家具、艺术品与软装。', includes: ['家具租赁（6 周）', '运输与安装', '拍摄前造型检查'] },
      { title: '局部布置 Partial Styling', blurb: '利用你现有的家具，补齐能打动买家的关键单品。', includes: ['上门咨询', '租赁单品混搭', '收纳与断舍离建议'] },
      { title: '民宿与短租 Airbnb', blurb: '上镜、耐用的整套配置，提升房价与好评。', includes: ['一站式配齐', '布草与软装包', '房源照片布置'] },
      { title: '室内设计 Interior Design', blurb: '为自住的家做个性化设计。', includes: ['概念与灵感板', '家具采购', '安装与收尾'] },
    ],
  },
  process: {
    eyebrow: '服务流程',
    title: '五步流程，一日布置',
    steps: [
      { step: '01', title: '需求沟通', text: '收到咨询后 24 小时内电话沟通房源、时间与销售计划。' },
      { step: '02', title: '评估与方案', text: '实地或视频看房，提供定制布置方案与报价。' },
      { step: '03', title: '布置日', text: '团队一天内完成运输、安装与布置，随时可拍。' },
      { step: '04', title: '拍摄与开放看房', text: '中介拍照上市，我们保持房屋随时可看。' },
      { step: '05', title: '撤场', text: '售出即撤场——未售出可按周续租。' },
    ],
  },
  cta: {
    title: '准备好为下一次出售做布置了吗？',
    button: '预约免费咨询',
  },
  ai: {
    eyebrow: 'AI Style Studio',
    title: '看看你家的六种可能',
    intro: '输入地址，AI 会参考我们在你附近布置过的房屋，为你的物业预览最适合你所在街区的风格。',
    placeholder: '输入你的房产地址…',
    preview: '生成风格预览',
    styling: '生成中…',
    usesLeft: (n: number) => `每位客户 3 次免费预览 · 剩余 ${n} 次`,
    usedAll: '免费预览次数已用完',
    steps: ['正在定位你的房产…', '正在查看我们在附近布置过的房屋…', '正在匹配你所在街区最好卖的风格…', '正在生成预览…'],
    nearby: (n: number, addr: string) => `我们在 ${addr} 周边 3 公里内布置过 ${n} 套房屋。根据你所在街区的销售表现：`,
    topPick: '你所在街区的首选',
    bookFor: (addr: string) => `为 ${addr} 预约免费咨询`,
    tryAnother: '换一个地址试试',
    limitTitle: '3 次免费预览已用完',
    limitBody: '想看更多？预约免费咨询，我们为你的真实房间制作预览——无任何义务。',
    demoNote: '演示版本——预览图仅为示意。正式版将基于你房屋的真实照片生成。',
  },
  gallery: {
    eyebrow: '作品',
    title: '我们的招牌风格',
    intro: '六种截然不同的风格，为你的家与你所在街区的买家量身定制——从宁静的 Japandi 到酒店质感的 Modern Luxe。',
    baCaption: '拖动对比——每种风格都从同一个房间开始（示意图）',
    hint: '点击任意图片，查看风格介绍',
  },
  packages: {
    eyebrow: '套餐',
    title: '四种合作方式',
    intro: '每个家都不一样，报价都是量身定制的。选择适合你销售计划的套餐，细节与投入在免费咨询中确认。',
    mostPopular: '最受欢迎',
    quoteBtn: '获取定制报价',
    footnote: '价格在免费咨询中确认，取决于物业大小、租期与家具档次。支持按周续租，可协商灵活付款方式。',
    items: [
      { name: 'The Essential', tagline: '公寓与紧凑户型', blurb: '布置真正卖房的房间——客厅、餐厅与主卧。适合准备上市的公寓与紧凑户型。', includes: ['客厅、餐厅与主卧布置', '艺术品与软装', '6 周租期，含运输安装', '拍摄前造型检查'], featured: false },
      { name: 'The Signature', tagline: '全屋布置', blurb: '从玄关到户外空间，一条完整的风格叙事——独立屋与联排的最热门选择。', includes: ['每个房间全布置', '全套艺术品、绿植与软装', '6 周租期，含运输安装', '开放看房前补妆'], featured: true },
      { name: 'The Luxe', tagline: '高端房源', blurb: '设计师家具与多层次布置，为以品质驱动价格的高端房源而备。', includes: ['高端设计师单品', '多客厅与户外区域', '可延长租期', '拍摄当日造型师驻场'], featured: false },
      { name: 'Turn-Key Living', tagline: '民宿与出租房', blurb: '短租与出租物业的整套买断方案——家具、布草与软装包，交付即可接单。', includes: ['家具买断套装', '布草与软装包', '安装与房源照片布置', '补货建议'], featured: false },
    ],
  },
  locations: {
    eyebrow: '服务区域',
    title: '服务全悉尼',
    intro: '从东区到 Hills，我们的团队覆盖大悉尼地区——提供中英双语服务。',
    note: '没有找到你的区域？我们经常服务列表之外的区域——欢迎在免费咨询中询问。',
  },
  about: {
    eyebrow: '关于我们',
    title: 'Vale&Co. 的故事',
    intro: '一家背靠 Ausred International Investment Group 的悉尼软装工作室——将房产市场洞察与经得起时间的设计结合在一起。',
    values: ['自然', '明亮通透', '经典隽永', '极简精致', '注重细节'],
  },
  contact: {
    eyebrow: '联系我们',
    title: '为你的下一次出售做布置',
    intro: '告诉我们你的房源信息，我们将在一个工作日内回复档期与定制报价。',
    name: '姓名',
    phone: '电话',
    email: '邮箱',
    address: '房产地址（选填）',
    service: '意向服务',
    serviceOptions: ['全屋布置', '局部布置', '民宿与短租', '室内设计'],
    message: '关于房源——几房、时间、中介…',
    submit: '发送咨询',
    thanks: '谢谢！',
    received: '你的咨询已收到，我们将在一个工作日内与你联系。',
    emailLabel: '邮箱',
    officeLabel: '办公室',
    hoursLabel: '营业时间',
    hours: '周一至周五 9:00–17:30 · 周六预约制',
  },
}

const dicts: Record<Lang, Dict> = { en, zh }

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict }>({
  lang: 'en',
  setLang: () => {},
  t: en,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(
    () => (localStorage.getItem('valeco-lang') as Lang) || 'en',
  )
  useEffect(() => {
    localStorage.setItem('valeco-lang', lang)
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
  }, [lang])
  return <LangCtx.Provider value={{ lang, setLang, t: dicts[lang] }}>{children}</LangCtx.Provider>
}

export const useLang = () => useContext(LangCtx)
