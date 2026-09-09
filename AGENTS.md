# AGENTS.md - Personal E-commerce Project

## Project Overview

E-commerce application built with **Bun**, **Express**, **EJS**, and **TypeScript**.
**Sprint 1**: Views with EJS (no functionality) + simple styles.

---

## Tech Stack

- **Runtime**: Bun
- **Framework**: Express 4.x
- **Templating**: EJS + express-ejs-layouts
- **Language**: TypeScript (ESM)
- **Styling**: Vanilla CSS (public/css/style.css)
- **Dev Tools**: Prettier, TypeScript types

---

## Project Structure

```

personal-ecommerce/
├── app.ts                 # Express app entry point
├── package.json           # Scripts & dependencies
├── tsconfig.json          # TypeScript config
├── .env                   # Environment variables
├── public/
│   ├── css/style.css      # Global styles
│   ├── js/                # Client-side JS (empty)
│   └── favicon.svg
└── src/
├── config/
│   └── db.ts          # DB config (placeholder)
├── controllers/
│   ├── homeController.ts
│   ├── authController.ts
│   ├── productController.ts
│   ├── cartController.ts
│   └── checkoutController.ts
├── routes/
│   ├── index.ts       # Main routes
│   ├── auth.ts        # Auth routes
│   ├── product.ts     # Product routes
│   ├── cart.ts        # Cart routes
│   └── checkout.ts    # Checkout routes
├── types/
│   └── views.ts       # View model interfaces
└── views/
├── layouts/
│   └── main.ejs   # Base layout
├── partials/
│   └── navbar.ejs # Navigation + dropdown
├── home.ejs       # Home page
├── auth/
│   └── login.ejs  # Login form with client validation
├── product/
│   └── detail.ejs # Product detail page (UI only)
├── cart/
│   └── index.ejs  # Cart page (UI only)
└── checkout/
└── index.ejs  # Checkout form page (UI only)

```

---

## Key Files & Responsibilities

### app.ts

- Express setup with EJS + layouts
- Static files from `public/`
- Mounts routes at `/`, `/auth`, `/producto`, `/carrito`, and `/checkout`

### src/routes/index.ts

- `GET /` → homeController.home
- `GET /auth/*` → authRoutes
- `GET /productos/*` → productRoutes
- `GET /carrito` → cartRoutes
- `GET /checkout` → checkoutRoutes

### src/routes/auth.ts, product.ts, cart.ts, checkout.ts

- Map respective HTTP methods and endpoints to their specific controllers.

### src/controllers/

- **homeController.ts**: Renders `home.ejs` with `{ title: 'Home' }`
- **authController.ts**: Renders `auth/login.ejs` with `{ title: 'Iniciar Sesión', errors?, values? }`
- **productController.ts**: Renders `product/detail.ejs` with `{ title: 'Detalle del Producto' }`
- **cartController.ts**: Renders `cart/index.ejs` with `{ title: 'Mi Carrito' }`
- **checkoutController.ts**: Renders `checkout/index.ejs` with `{ title: 'Checkout' }`

### src/types/views.ts

TypeScript interfaces for view data:

- `BaseLayout { title: string }`
- `HomeView extends BaseLayout`
- `CategoryView extends BaseLayout { category: string }`
- `LoginView extends BaseLayout { errors?, values? }`
- `ProductDetailView extends BaseLayout { product?: any }`
- `CartView extends BaseLayout { cartItems?: any[] }`
- `CheckoutView extends BaseLayout`

### src/views/layouts/main.ejs

Base layout with:

- `<%- include('../partials/navbar') %>`
- `<%- body %>`
- Links `/css/style.css`

### src/views/partials/navbar.ejs

- Logo, category links, session dropdown (login/register)
- Cart icon/link
- Client-side JS for dropdown toggle

### src/views/home.ejs

Simple welcome page

### src/views/auth/login.ejs

Login form with client-side validation.

### src/views/product/detail.ejs

Product detail UI displaying image, title, price, description, and an "Add to Cart" button (button is visual only, no functionality).

### src/views/cart/index.ejs

Shopping cart UI showing a hardcoded/mock list of items, quantities, subtotal, and a "Proceed to Checkout" button (visual only).

### src/views/checkout/index.ejs

Checkout UI with shipping details form, payment method placeholder, and order summary. (No actual payment processing or state).

### public/css/style.css

Complete styling for:

- Reset + base typography
- Navbar (sticky, flex layout, dropdown)
- Login card (centered, form styles, focus/error states)
- Product page (grid/flex layout for gallery and info)
- Cart page (table/list view for items, total summary card)
- Checkout page (multi-step form styling, side-by-side summary)
- Form elements (inputs, buttons, checkboxes, links)

---

## Commands

```bash
bun run dev      # Development with --watch
bun run start    # Production start
bun run format   # Prettier format

```

---

## Development Notes

### Adding New Views

1. Create `.ejs` in `src/views/`
2. Add interface in `src/types/views.ts`
3. Create controller in `src/controllers/`
4. Add route in `src/routes/`

### Layout System

- Uses `express-ejs-layouts`
- Default layout: `layouts/main`
- Override per-view: `res.render('view', { layout: 'other' })`

### Styling Approach

- Vanilla CSS with BEM-like naming (`.block__element--modifier`)
- CSS custom properties not used (plain values)
- Mobile-first not enforced but responsive via flexbox

### Client-Side Scripts

- Inline `<script>` in EJS partials/views for simple interactions
- No bundler - vanilla JS only
- Place complex JS in `public/js/` if needed

---

## Sprint 1 Scope (Current)

✅ Views: home, login, product detail, cart, checkout, navbar, layout
✅ Basic styling
✅ Client-side form validation (login)
✅ Dropdown interaction (navbar)
❌ No backend functionality (auth, DB, sessions, add to cart logic, payment processing)
❌ No category/product listing pages (yet)

---

## Next Steps (Post Sprint 1)

- Category view + route (`/categoria/:slug`)
- Product listing view
- Register view + controller
- Session/auth middleware
- Database integration (config/db.ts)
- Implement Cart functionality (state management, add/remove items)
- Implement Checkout processing and Order creation
