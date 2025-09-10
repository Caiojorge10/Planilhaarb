const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

// Tipos para as entidades
export interface Casa {
  id: number;
  nome: string;
  pais: string;
  licenca?: string;
  avaliacao?: number;
  status: string;
  bonusBoasVindas?: string;
  bonusRecarga?: string;
  tempoSaque?: string;
  metodosPagamento?: string;
  telefone?: string;
  email?: string;
  site?: string;
  observacoes?: string;
}

export interface Arbitragem {
  id: number;
  evento: string;
  esporte: string;
  tipo: string; // "2_resultados", "3_resultados", "4_resultados", "5_resultados"
  
  // Casa 1
  casa1Id: number;
  casa1: Casa;
  odd1: number;
  stake1: number;
  resultado1: string;
  freebet1?: boolean;
  
  // Casa 2
  casa2Id: number;
  casa2: Casa;
  odd2: number;
  stake2: number;
  resultado2: string;
  freebet2?: boolean;
  
  // Casa 3 (opcional)
  casa3Id?: number;
  casa3?: Casa;
  odd3?: number;
  stake3?: number;
  resultado3?: string;
  freebet3?: boolean;
  
  // Casa 4 (opcional)
  casa4Id?: number;
  casa4?: Casa;
  odd4?: number;
  stake4?: number;
  resultado4?: string;
  freebet4?: boolean;
  
  // Casa 5 (opcional)
  casa5Id?: number;
  casa5?: Casa;
  odd5?: number;
  stake5?: number;
  resultado5?: string;
  freebet5?: boolean;
  
  valorTotalInvestir: number;
  lucroEsperado: number;
  status: string;
  ladoVencedor?: string; // 'casa1', 'casa2', 'casa3', 'casa4', 'casa5'
  data: string;
}

export interface Freebet {
  id: number;
  casaId: number;
  casa: Casa;
  valor: number;
  tipo: string;
  status: string;
  dataObtencao: string;
  dataExpiracao: string;
  valorExtraido?: number;
  estrategia?: string;
}

export interface FreeSpin {
  id: number;
  casaId: number;
  casa: Casa;
  valorGanho: number;
  data: string;
}

export interface Perca {
  id: number;
  casaId: number;
  casa: Casa;
  valor: number;
  data: string;
}

export interface Ganho {
  id: number;
  casaId: number;
  casa: Casa;
  valor: number;
  data: string;
}

function getAuthHeaders(): Record<string, string> {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      return { Authorization: `Bearer ${token}` };
    }
  }
  return {};
}

// Funções para Casas
export const casasAPI = {
  async getAll(): Promise<Casa[]> {
    const response = await fetch(`${API_BASE_URL}/casas`, {
      headers: { ...getAuthHeaders() }
    });
    if (!response.ok) throw new Error('Erro ao buscar casas');
    return response.json();
  },

  async create(data: Omit<Casa, 'id'>): Promise<Casa> {
    const response = await fetch(`${API_BASE_URL}/casas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Erro ao criar casa');
    return response.json();
  },

  async update(id: number, data: Partial<Casa>): Promise<Casa> {
    const response = await fetch(`${API_BASE_URL}/casas/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Erro ao atualizar casa');
    return response.json();
  },

  async delete(id: number): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/casas/${id}`, {
      method: 'DELETE',
      headers: { ...getAuthHeaders() },
    });
    if (!response.ok) throw new Error('Erro ao deletar casa');
  },
};

// Funções para Arbitragens
export const arbitragensAPI = {
  async getAll(): Promise<Arbitragem[]> {
    const response = await fetch(`${API_BASE_URL}/arbitragens`, {
      headers: { ...getAuthHeaders() }
    });
    if (!response.ok) throw new Error('Erro ao buscar arbitragens');
    return response.json();
  },

  async create(data: Omit<Arbitragem, 'id' | 'casa1' | 'casa2' | 'data'>): Promise<Arbitragem> {
    const response = await fetch(`${API_BASE_URL}/arbitragens`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Erro ao criar arbitragem');
    return response.json();
  },

  async update(id: number, data: Partial<Arbitragem>): Promise<Arbitragem> {
    const response = await fetch(`${API_BASE_URL}/arbitragens/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Erro ao atualizar arbitragem');
    return response.json();
  },

  async delete(id: number): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/arbitragens/${id}`, {
      method: 'DELETE',
      headers: { ...getAuthHeaders() },
    });
    if (!response.ok) throw new Error('Erro ao deletar arbitragem');
  },

  async finalizar(id: number, ladoVencedor: string) {
    const res = await fetch(`${API_BASE_URL}/arbitragens/${id}/finalizar`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
      body: JSON.stringify({ ladoVencedor })
    });
    if (!res.ok) throw await res.json();
    return res.json();
  },
};

// Funções para Percas
export const percasAPI = {
  async getAll(): Promise<Perca[]> {
    const response = await fetch(`${API_BASE_URL}/percas`, {
      headers: { ...getAuthHeaders() }
    });
    if (!response.ok) throw new Error('Erro ao buscar percas');
    return response.json();
  },

  async create(data: { casaId: number; valor: number }): Promise<Perca> {
    const response = await fetch(`${API_BASE_URL}/percas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Erro ao criar perca');
    return response.json();
  },

  async delete(id: number): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/percas/${id}`, {
      method: 'DELETE',
      headers: { ...getAuthHeaders() },
    });
    if (!response.ok) throw new Error('Erro ao deletar perca');
  },
};

// Funções para Ganhos
export const ganhosAPI = {
  async getAll(): Promise<Ganho[]> {
    const response = await fetch(`${API_BASE_URL}/ganhos`, {
      headers: { ...getAuthHeaders() }
    });
    if (!response.ok) throw new Error('Erro ao buscar ganhos');
    return response.json();
  },

  async create(data: { casaId: number; valor: number }): Promise<Ganho> {
    const response = await fetch(`${API_BASE_URL}/ganhos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Erro ao criar ganho');
    return response.json();
  },

  async delete(id: number): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/ganhos/${id}`, {
      method: 'DELETE',
      headers: { ...getAuthHeaders() },
    });
    if (!response.ok) throw new Error('Erro ao deletar ganho');
  },
};

// Funções para Freebets
export const freebetsAPI = {
  async getAll(): Promise<Freebet[]> {
    const response = await fetch(`${API_BASE_URL}/freebets`, {
      headers: { ...getAuthHeaders() }
    });
    if (!response.ok) throw new Error('Erro ao buscar freebets');
    return response.json();
  },

  async create(data: Omit<Freebet, 'id' | 'casa'>): Promise<Freebet> {
    const response = await fetch(`${API_BASE_URL}/freebets`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Erro ao criar freebet');
    return response.json();
  },

  async update(id: number, data: Partial<Freebet>): Promise<Freebet> {
    const response = await fetch(`${API_BASE_URL}/freebets/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Erro ao atualizar freebet');
    return response.json();
  },

  async delete(id: number): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/freebets/${id}`, {
      method: 'DELETE',
      headers: { ...getAuthHeaders() },
    });
    if (!response.ok) throw new Error('Erro ao deletar freebet');
  },
};

// Funções para FreeSpins
export const freespinsAPI = {
  async getAll(): Promise<FreeSpin[]> {
    const response = await fetch(`${API_BASE_URL}/freespins`, {
      headers: { ...getAuthHeaders() }
    });
    if (!response.ok) throw new Error('Erro ao buscar rodadas grátis');
    return response.json();
  },

  async create(data: { casaId: number; valorGanho: number }): Promise<FreeSpin> {
    const response = await fetch(`${API_BASE_URL}/freespins`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Erro ao criar rodada grátis');
    return response.json();
  },

  async update(id: number, data: Partial<FreeSpin>): Promise<FreeSpin> {
    const response = await fetch(`${API_BASE_URL}/freespins/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Erro ao atualizar rodada grátis');
    return response.json();
  },

  async delete(id: number): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/freespins/${id}`, {
      method: 'DELETE',
      headers: { ...getAuthHeaders() },
    });
    if (!response.ok) throw new Error('Erro ao deletar rodada grátis');
  },
};

export const movimentacoesAPI = {
  async getAll(): Promise<any[]> {
    const response = await fetch(`${API_BASE_URL}/movimentacoes`, {
      headers: { ...getAuthHeaders() }
    });
    if (!response.ok) throw new Error('Erro ao buscar movimentações');
    return response.json();
  },
  async create(data: any): Promise<any> {
    const response = await fetch(`${API_BASE_URL}/movimentacoes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Erro ao criar movimentação');
    return response.json();
  },
  async delete(id: number): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/movimentacoes/${id}`, {
      method: 'DELETE',
      headers: { ...getAuthHeaders() },
    });
    if (!response.ok) throw new Error('Erro ao deletar movimentação');
  },
};

export const authAPI = {
  async register(nome: string, email: string, senha: string) {
    const res = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
      body: JSON.stringify({ nome, email, senha })
    });
    if (!res.ok) throw await res.json();
    return res.json();
  },
  async login(email: string, senha: string) {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
      body: JSON.stringify({ email, senha })
    });
    if (!res.ok) throw await res.json();
    return res.json();
  }
}; 