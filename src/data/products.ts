import { Product } from '@/contexts/CartContext';
import luxuryWatch from '@/assets/luxury-watch.jpg';
import leatherHandbag from '@/assets/leather-handbag.jpg';
import pearlNecklace from '@/assets/pearl-necklace.jpg';
import silkGown from '@/assets/silk-gown.jpg';
import champagneFlutes from '@/assets/champagne-flutes.jpg';
import goldCufflinks from '@/assets/gold-cufflinks.jpg';
import cashmereCoat from '@/assets/cashmere-coat.jpg';
import sapphireRing from '@/assets/sapphire-ring.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Luxury Diamond Watch',
    price: 15999,
    image: luxuryWatch,
    description: 'Exquisite Swiss-made timepiece featuring genuine diamonds and 18k gold casing. Automatic movement with 50-hour power reserve.',
    category: 'Watches',
  },
  {
    id: '2',
    name: 'Leather Handbag',
    price: 4599,
    image: leatherHandbag,
    description: 'Handcrafted Italian leather handbag with signature gold hardware. Perfect blend of elegance and functionality.',
    category: 'Bags',
  },
  {
    id: '3',
    name: 'Pearl Necklace',
    price: 8799,
    image: pearlNecklace,
    description: 'Stunning Akoya pearl necklace with 18k white gold clasp. Each pearl hand-selected for perfect luster.',
    category: 'Jewelry',
  },
  {
    id: '4',
    name: 'Silk Gown',
    price: 6299,
    image: silkGown,
    description: 'Couture silk gown with intricate beadwork. Tailored to perfection for the most elegant occasions.',
    category: 'Fashion',
  },
  {
    id: '5',
    name: 'Crystal Champagne Flutes Set',
    price: 1899,
    image: champagneFlutes,
    description: 'Set of six handcrafted crystal champagne flutes. Perfect for celebrating life\'s finest moments.',
    category: 'Home',
  },
  {
    id: '6',
    name: 'Gold Cufflinks',
    price: 2499,
    image: goldCufflinks,
    description: 'Elegant 18k gold cufflinks with diamond accents. Timeless accessory for the distinguished gentleman.',
    category: 'Accessories',
  },
  {
    id: '7',
    name: 'Cashmere Overcoat',
    price: 5799,
    image: cashmereCoat,
    description: 'Pure cashmere overcoat with silk lining. Unparalleled warmth and sophistication.',
    category: 'Fashion',
  },
  {
    id: '8',
    name: 'Sapphire Ring',
    price: 12999,
    image: sapphireRing,
    description: 'Stunning Ceylon sapphire ring set in platinum with diamond halo. A true statement piece.',
    category: 'Jewelry',
  },
];
