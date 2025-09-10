import { Request } from 'express';

// Estendendo o tipo Request para incluir usuarioId
declare global {
  namespace Express {
    interface Request {
      usuarioId?: number;
    }
  }
}

export {};

