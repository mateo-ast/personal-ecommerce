import { Request, Response } from 'express';
import type { LoginView } from '../types/views.js';

export const login = (_req: Request, res: Response) => {
  const data: LoginView = { title: 'Iniciar Sesión' };
  res.render('auth/login', data);
};
