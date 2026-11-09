import TemplateRoyalUdaipur, { defaultWeddingData as royalWeddingData } from './TemplateRoyalUdaipur';
import TemplateMarigoldClassic, { defaultWeddingData as marigoldWeddingData } from './TemplateMarigoldClassic';

export const templatesRegistry = [
  {
    id: 'template-royal-udaipur',
    name: '1. Royal Heritage (रश्मि संग अर्पित)',
    subtitle: 'शाही मुहर • शहनाई राग • मंडप, मातृकापूजन व पाणिग्रहण संस्कार',
    themeColor: '#8B0000',
    component: TemplateRoyalUdaipur,
    defaultData: royalWeddingData,
    badge: 'Template 1',
    isReady: true
  },
  {
    id: 'template-marigold-classic',
    name: '2. Classic Marigold & Toran (रश्मि संग अर्पित)',
    subtitle: 'गेंदा तोरण • पंचांग कैलेंडर • जबेरा से जबलपुर प्रस्थान व स्वरूचिभोज',
    themeColor: '#D97706',
    component: TemplateMarigoldClassic,
    defaultData: marigoldWeddingData,
    badge: 'Template 2',
    isReady: true
  }
];
