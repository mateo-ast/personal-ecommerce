import type { Product } from '../types/views.js';

export const products: Product[] = [
  {
    id: 1,
    name: 'MacBook Air M3',
    price: 1899999,
    originalPrice: 2199999,
    description:
      'Portátil ultraligero con chip M3, 8GB de RAM y 256GB SSD. Pantalla Liquid Retina de 13.6" y hasta 18 horas de batería.',
    image: 'https://placehold.co/600x400/e2e8f0/475569?text=MacBook+Air',
    category: 'Computadoras',
    isOffer: true,
  },
  {
    id: 2,
    name: 'iPhone 16 Pro',
    price: 1599999,
    originalPrice: 1999999,
    description:
      'Chip A18 Pro, cámara de 48MP con zoom óptico 5x, pantalla Super Retina XDR de 6.3" y marco de titanio.',
    image: 'https://placehold.co/600x400/e2e8f0/475569?text=iPhone+16+Pro',
    category: 'Celulares',
    isOffer: true,
  },
  {
    id: 3,
    name: 'Sony WH-1000XM5',
    price: 449999,
    originalPrice: 529999,
    description:
      'Auriculares inalámbricos con cancelación de ruido líder en la industria, 30 horas de batería y sonido Hi-Res.',
    image: 'https://placehold.co/600x400/e2e8f0/475569?text=Sony+WH-1000XM5',
    category: 'Audio',
    isOffer: true,
  },
  {
    id: 4,
    name: 'Teclado Mecánico RGB',
    price: 89999,
    description:
      'Teclado mecánico con switches Cherry MX, retroiluminación RGB personalizable y diseño ergonómico con reposamuñecas.',
    image: 'https://placehold.co/600x400/e2e8f0/475569?text=Teclado+Mecanico',
    category: 'Gaming',
  },
  {
    id: 5,
    name: 'Monitor UltraWide 34"',
    price: 799999,
    originalPrice: 1069999,
    description:
      'Monitor curvo UWQHD 3440x1440, 144Hz, 1ms de respuesta, HDR600 y 99% sRGB. Ideal para productividad y gaming.',
    image: 'https://placehold.co/600x400/e2e8f0/475569?text=Monitor+UltraWide',
    category: 'Monitores',
    isOffer: true,
  },
  {
    id: 6,
    name: 'Samsung Galaxy S24 Ultra',
    price: 1449999,
    description:
      'Snapdragon 8 Gen 3, cámara de 200MP, S Pen integrado, pantalla Dynamic AMOLED 2X de 6.8" y marco de titanio.',
    image: 'https://placehold.co/600x400/e2e8f0/475569?text=Galaxy+S24',
    category: 'Celulares',
  },
  {
    id: 7,
    name: 'Mouse Gamer Logitech G Pro X',
    price: 129999,
    description:
      'Mouse inalámbrico de 63g con sensor HERO 25K, 8 botones programables y hasta 95 horas de batería.',
    image: 'https://placehold.co/600x400/e2e8f0/475569?text=Mouse+Logitech',
    category: 'Gaming',
  },
  {
    id: 8,
    name: 'iPad Pro M4',
    price: 1699999,
    originalPrice: 1899999,
    description:
      'Chip M4, pantalla Ultra Retina XDR de 11", cámara de 12MP y compatible con Apple Pencil Pro.',
    image: 'https://placehold.co/600x400/e2e8f0/475569?text=iPad+Pro+M4',
    category: 'Computadoras',
    isOffer: true,
  },
];

export const getProductById = (id: number): Product | undefined =>
  products.find((p) => p.id === id);

export const getOfferProducts = (): Product[] =>
  products.filter((p) => p.isOffer);

export const getFeaturedProducts = (): Product[] =>
  products.filter((p) => !p.isOffer);
