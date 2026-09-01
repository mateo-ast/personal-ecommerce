export interface BaseLayout {
  title: string;
}

export interface HomeView extends BaseLayout { }

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
