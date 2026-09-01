export interface BaseLayout {
  title: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  category: string;
  isOffer?: boolean;
}

export interface HomeView extends BaseLayout {
  featuredProducts: Product[];
  offerProducts: Product[];
}

export interface CategoryView extends BaseLayout {
  category: string;
}

export interface LoginView extends BaseLayout {
  errors?: Record<string, string>;
  values?: { email?: string };
}

export interface RegisterView extends BaseLayout {
  errors?: Record<string, string>;
  values?: { name?: string; email?: string };
}

export interface ProductDetailView extends BaseLayout {
  product: Product;
}
