export interface BaseLayout {
  title: string;
}

export interface HomeView extends BaseLayout {}

export interface CategoryView extends BaseLayout {
  category: string;
}
