import { Request, Response } from 'express';
import type { LoginView, RegisterView } from '../types/views.js';

export const login = (_req: Request, res: Response) => {
  const data: LoginView = { title: 'Iniciar Sesión' };
  res.render('auth/login', data);
};

export const register = (_req: Request, res: Response) => {
  const data: RegisterView = { title: 'Registrarse' };
  res.render('auth/register', data);
};
