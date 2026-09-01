import 'dotenv/config';
import express, { type Express } from 'express';
import expressLayouts from 'express-ejs-layouts';
import path from 'path';
import { fileURLToPath } from 'url';
import indexRoutes from './src/routes/index.js';

const app: Express = express();
const PORT: string | number = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));
app.use(expressLayouts);
app.set('layout', 'layouts/main');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRoutes);

app.listen(String(PORT), () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
