import { Request, Response } from 'express';
import type { HomeView } from '../types/views.js';

export const home = (req: Request, res: Response) => {
  const data: HomeView = { title: 'Home' };
  res.render('home', data);
};
