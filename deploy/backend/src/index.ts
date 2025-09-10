import express from 'express';
import cors from 'cors';
import { PrismaClient } from '../generated/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import authMiddleware from './authMiddleware';
import './types'; // Importa os tipos personalizados

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3001;

// Helper function para garantir que usuarioId existe
const getUserId = (req: express.Request): number => {
  if (!req.usuarioId) {
    throw new Error('usuarioId não encontrado na requisição');
  }
  return req.usuarioId;
};

// Configuração do CORS para produção
const allowedOrigins = [
  'http://localhost:3000', 
  'http://localhost:3001',
  'http://157.245.5.53:3000',
  'http://157.245.5.53:3001',
  'https://seudominio.com',
  'https://www.seudominio.com'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

// Middleware
app.use(express.json());

// Proteger todas as rotas de dados
app.use('/api/casas', authMiddleware);
app.use('/api/arbitragens', authMiddleware);
app.use('/api/freebets', authMiddleware);
app.use('/api/freespins', authMiddleware);
app.use('/api/movimentacoes', authMiddleware);
app.use('/api/percas', authMiddleware);
app.use('/api/ganhos', authMiddleware);

// Rotas para Casas
app.get('/api/casas', async (req, res) => {
  try {
    const casas = await prisma.casa.findMany({ where: { usuarioId: getUserId(req) } });
    res.json(casas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar casas' });
  }
});

app.post('/api/casas', async (req, res) => {
  try {
    const casa = await prisma.casa.create({
      data: { ...req.body, usuarioId: getUserId(req) }
    });
    res.status(201).json(casa);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar casa' });
  }
});

app.put('/api/casas/:id', async (req, res) => {
  try {
    const casa = await prisma.casa.update({
      where: { id: parseInt(req.params.id) },
      data: req.body
    });
    res.json(casa);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar casa' });
  }
});

app.delete('/api/casas/:id', async (req, res) => {
  try {
    await prisma.casa.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar casa' });
  }
});

// Rotas para Arbitragens
app.get('/api/arbitragens', async (req, res) => {
  try {
    const arbitragens = await prisma.arbitragem.findMany({
      where: { usuarioId: getUserId(req) },
      include: {
        casa1: true,
        casa2: true,
        casa3: true,
        casa4: true,
        casa5: true
      }
    });
    res.json(arbitragens);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar arbitragens' });
  }
});

app.post('/api/arbitragens', async (req, res) => {
  try {
    const data = {
      ...req.body,
      data: new Date(),
      usuarioId: getUserId(req)
    };
    const arbitragem = await prisma.arbitragem.create({
      data: data,
      include: {
        casa1: true,
        casa2: true,
        casa3: true,
        casa4: true,
        casa5: true
      }
    });

    // Criar movimentações de aposta para cada casa envolvida
    const movimentacoes = [];
    if (arbitragem.casa1Id && arbitragem.stake1 && !arbitragem.freebet1) {
      movimentacoes.push(prisma.movimentacao.create({
        data: {
          casaId: arbitragem.casa1Id,
          tipo: 'aposta',
          valor: arbitragem.stake1,
          observacao: `Aposta arbitragem #${arbitragem.id} - Casa 1`,
          usuarioId: getUserId(req)
        }
      }));
    }
    if (arbitragem.casa2Id && arbitragem.stake2 && !arbitragem.freebet2) {
      movimentacoes.push(prisma.movimentacao.create({
        data: {
          casaId: arbitragem.casa2Id,
          tipo: 'aposta',
          valor: arbitragem.stake2,
          observacao: `Aposta arbitragem #${arbitragem.id} - Casa 2`,
          usuarioId: getUserId(req)
        }
      }));
    }
    if (arbitragem.casa3Id && arbitragem.stake3 && !arbitragem.freebet3) {
      movimentacoes.push(prisma.movimentacao.create({
        data: {
          casaId: arbitragem.casa3Id,
          tipo: 'aposta',
          valor: arbitragem.stake3,
          observacao: `Aposta arbitragem #${arbitragem.id} - Casa 3`,
          usuarioId: getUserId(req)
        }
      }));
    }
    if (arbitragem.casa4Id && arbitragem.stake4 && !arbitragem.freebet4) {
      movimentacoes.push(prisma.movimentacao.create({
        data: {
          casaId: arbitragem.casa4Id,
          tipo: 'aposta',
          valor: arbitragem.stake4,
          observacao: `Aposta arbitragem #${arbitragem.id} - Casa 4`,
          usuarioId: getUserId(req)
        }
      }));
    }
    if (arbitragem.casa5Id && arbitragem.stake5 && !arbitragem.freebet5) {
      movimentacoes.push(prisma.movimentacao.create({
        data: {
          casaId: arbitragem.casa5Id,
          tipo: 'aposta',
          valor: arbitragem.stake5,
          observacao: `Aposta arbitragem #${arbitragem.id} - Casa 5`,
          usuarioId: getUserId(req)
        }
      }));
    }
    await Promise.all(movimentacoes);

    res.status(201).json(arbitragem);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar arbitragem', details: error instanceof Error ? error.message : 'Erro desconhecido' });
  }
});

app.put('/api/arbitragens/:id', async (req, res) => {
  try {
    const arbitragem = await prisma.arbitragem.update({
      where: { id: parseInt(req.params.id) },
      data: req.body,
      include: {
        casa1: true,
        casa2: true,
        casa3: true,
        casa4: true,
        casa5: true
      }
    });
    res.json(arbitragem);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar arbitragem' });
  }
});

// Endpoint para finalizar arbitragem com lado vencedor
app.post('/api/arbitragens/:id/finalizar', async (req, res) => {
  try {
    let { ladoVencedor } = req.body;
    const arbitragemId = parseInt(req.params.id);
    // Permitir múltiplos vencedores separados por vírgula
    if (!ladoVencedor) {
      return res.status(400).json({ error: 'Lado vencedor deve ser informado' });
    }
    const lados = ladoVencedor.split(',').map((l: string) => l.trim()).filter(Boolean);
    // Buscar a arbitragem
    const arbitragem = await prisma.arbitragem.findUnique({
      where: { id: arbitragemId },
      include: { 
        casa1: true, 
        casa2: true, 
        casa3: true, 
        casa4: true, 
        casa5: true
      }
    });
    if (!arbitragem) {
      return res.status(404).json({ error: 'Arbitragem não encontrada' });
    }
    // Verificar se os lados vencedores são válidos para o tipo de arbitragem
    const tipoArbitragem = arbitragem.tipo;
    const ladosValidos = {
      '2_resultados': ['casa1', 'casa2'],
      '3_resultados': ['casa1', 'casa2', 'casa3'],
      '4_resultados': ['casa1', 'casa2', 'casa3', 'casa4'],
      '5_resultados': ['casa1', 'casa2', 'casa3', 'casa4', 'casa5']
    };
    if (!lados.every((l: string) => ladosValidos[tipoArbitragem as keyof typeof ladosValidos]?.includes(l))) {
      return res.status(400).json({ error: `Lado(s) vencedor(es) inválido(s) para arbitragem de ${tipoArbitragem}` });
    }
    // Calcule valorTotalInvestir como soma das stakes que NÃO são freebet
    const valorTotalInvestir =
      (arbitragem.stake1 && !arbitragem.freebet1 ? arbitragem.stake1 : 0) +
      (arbitragem.stake2 && !arbitragem.freebet2 ? arbitragem.stake2 : 0) +
      (arbitragem.stake3 && !arbitragem.freebet3 ? arbitragem.stake3 : 0) +
      (arbitragem.stake4 && !arbitragem.freebet4 ? arbitragem.stake4 : 0) +
      (arbitragem.stake5 && !arbitragem.freebet5 ? arbitragem.stake5 : 0);
    // Calcule o lucro real somando todos os lados vencedores
    let lucroReal = 0;
    const premios: { casaId: number, valor: number, lado: string }[] = [];
    lados.forEach((lado: string) => {
      if (lado === 'casa1' && arbitragem.stake1 && arbitragem.odd1 && arbitragem.casa1Id) {
        lucroReal += (arbitragem.stake1 * arbitragem.odd1) - valorTotalInvestir;
        premios.push({ casaId: arbitragem.casa1Id, valor: arbitragem.stake1 * arbitragem.odd1, lado });
      }
      if (lado === 'casa2' && arbitragem.stake2 && arbitragem.odd2 && arbitragem.casa2Id) {
        lucroReal += (arbitragem.stake2 * arbitragem.odd2) - valorTotalInvestir;
        premios.push({ casaId: arbitragem.casa2Id, valor: arbitragem.stake2 * arbitragem.odd2, lado });
      }
      if (lado === 'casa3' && arbitragem.stake3 && arbitragem.odd3 && arbitragem.casa3Id) {
        lucroReal += (arbitragem.stake3 * arbitragem.odd3) - valorTotalInvestir;
        premios.push({ casaId: arbitragem.casa3Id, valor: arbitragem.stake3 * arbitragem.odd3, lado });
      }
      if (lado === 'casa4' && arbitragem.stake4 && arbitragem.odd4 && arbitragem.casa4Id) {
        lucroReal += (arbitragem.stake4 * arbitragem.odd4) - valorTotalInvestir;
        premios.push({ casaId: arbitragem.casa4Id, valor: arbitragem.stake4 * arbitragem.odd4, lado });
      }
      if (lado === 'casa5' && arbitragem.stake5 && arbitragem.odd5 && arbitragem.casa5Id) {
        lucroReal += (arbitragem.stake5 * arbitragem.odd5) - valorTotalInvestir;
        premios.push({ casaId: arbitragem.casa5Id, valor: arbitragem.stake5 * arbitragem.odd5, lado });
      }
    });
    // Atualizar arbitragem com lados vencedores, status, lucroEsperado e valorTotalInvestir
    const arbitragemAtualizada = await prisma.arbitragem.update({
      where: { id: arbitragemId },
      data: {
        ladoVencedor: lados.join(','),
        status: 'executada',
        lucroEsperado: lucroReal,
        valorTotalInvestir
      },
      include: {
        casa1: true,
        casa2: true,
        casa3: true,
        casa4: true,
        casa5: true
      }
    });
    // Criar movimentação de prêmio para cada casa vencedora
    for (const premio of premios) {
      if (premio.casaId && premio.valor > 0) {
      await prisma.movimentacao.create({
        data: {
            casaId: premio.casaId,
          tipo: 'premio',
            valor: premio.valor,
            observacao: `Prêmio arbitragem #${arbitragem.id} (${premio.lado})`,
          usuarioId: getUserId(req)
        }
      });
    }
    }
    res.json({
      arbitragem: arbitragemAtualizada
    });
  } catch (error) {
    console.error('Erro ao finalizar arbitragem:', error);
    res.status(500).json({ error: 'Erro ao finalizar arbitragem', details: error instanceof Error ? error.message : 'Erro desconhecido' });
  }
});

app.delete('/api/arbitragens/:id', async (req, res) => {
  try {
    await prisma.arbitragem.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar arbitragem' });
  }
});

// Rotas para Freebets
app.get('/api/freebets', async (req, res) => {
  try {
    const freebets = await prisma.freebet.findMany({
      where: { usuarioId: getUserId(req) },
      include: { casa: true }
    });
    res.json(freebets);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar freebets' });
  }
});

app.post('/api/freebets', async (req, res) => {
  try {
    const data = {
      ...req.body,
      dataObtencao: new Date(req.body.dataObtencao),
      dataExpiracao: new Date(req.body.dataExpiracao),
      usuarioId: getUserId(req)
    };
    const freebet = await prisma.freebet.create({
      data: data,
      include: { casa: true }
    });
    res.status(201).json(freebet);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar freebet', details: error instanceof Error ? error.message : 'Erro desconhecido' });
  }
});

app.put('/api/freebets/:id', async (req, res) => {
  try {
    const freebet = await prisma.freebet.update({
      where: { id: parseInt(req.params.id), usuarioId: getUserId(req) },
      data: req.body,
      include: { casa: true }
    });
    res.json(freebet);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar freebet' });
  }
});

app.delete('/api/freebets/:id', async (req, res) => {
  try {
    await prisma.freebet.delete({
      where: { id: parseInt(req.params.id), usuarioId: getUserId(req) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar freebet' });
  }
});

// Rotas para FreeSpins
app.get('/api/freespins', async (req, res) => {
  try {
    const freespins = await prisma.freeSpin.findMany({
      where: { usuarioId: getUserId(req) },
      include: { casa: true }
    });
    res.json(freespins);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar rodadas grátis' });
  }
});

app.post('/api/freespins', async (req, res) => {
  try {
    const { casaId, valorGanho } = req.body;
    const freespin = await prisma.freeSpin.create({
      data: {
        casaId: Number(casaId),
        valorGanho: Number(valorGanho),
        usuarioId: getUserId(req)
      },
      include: { casa: true }
    });
    await prisma.movimentacao.create({
      data: {
        casaId: Number(casaId),
        tipo: 'premio',
        valor: Number(valorGanho),
        observacao: `Prêmio de rodada grátis #${freespin.id}`,
        usuarioId: getUserId(req)
      }
    });
    res.status(201).json(freespin);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar rodada grátis', details: error instanceof Error ? error.message : 'Erro desconhecido' });
  }
});

app.put('/api/freespins/:id', async (req, res) => {
  try {
    const freespin = await prisma.freeSpin.update({
      where: { id: parseInt(req.params.id), usuarioId: getUserId(req) },
      data: req.body,
      include: { casa: true }
    });
    res.json(freespin);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar rodada grátis' });
  }
});

app.delete('/api/freespins/:id', async (req, res) => {
  try {
    await prisma.freeSpin.delete({
      where: { id: parseInt(req.params.id), usuarioId: getUserId(req) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar rodada grátis' });
  }
});

// Rotas para Movimentações
app.get('/api/movimentacoes', async (req, res) => {
  try {
    const movimentacoes = await prisma.movimentacao.findMany({
      where: { usuarioId: getUserId(req) },
      include: { casa: true }
    });
    res.json(movimentacoes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar movimentações' });
  }
});

app.get('/api/movimentacoes/:id', async (req, res) => {
  try {
    const movimentacao = await prisma.movimentacao.findUnique({
      where: { id: parseInt(req.params.id), usuarioId: getUserId(req) },
      include: { casa: true }
    });
    if (!movimentacao) return res.status(404).json({ error: 'Movimentação não encontrada' });
    res.json(movimentacao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar movimentação' });
  }
});

app.post('/api/movimentacoes', async (req, res) => {
  try {
    const data = {
      ...req.body,
      data: req.body.data ? new Date(req.body.data) : new Date(),
      usuarioId: getUserId(req)
    };
    const movimentacao = await prisma.movimentacao.create({
      data,
      include: { casa: true }
    });
    res.status(201).json(movimentacao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar movimentação', details: error instanceof Error ? error.message : 'Erro desconhecido' });
  }
});

app.put('/api/movimentacoes/:id', async (req, res) => {
  try {
    const movimentacao = await prisma.movimentacao.update({
      where: { id: parseInt(req.params.id) },
      data: req.body,
      include: { casa: true }
    });
    res.json(movimentacao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar movimentação' });
  }
});

app.delete('/api/movimentacoes/:id', async (req, res) => {
  try {
    await prisma.movimentacao.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar movimentação' });
  }
});

// Endpoint para consultar saldo de uma casa
app.get('/api/casas/:id/saldo', async (req, res) => {
  try {
    const casaId = parseInt(req.params.id);
    // Saldo apenas pelas movimentações
    const movimentacoes = await prisma.movimentacao.findMany({ where: { casaId } });
    const saldo = movimentacoes.reduce((acc, mov) => {
      if (mov.tipo === 'deposito' || mov.tipo === 'premio' || mov.tipo === 'ganho') return acc + mov.valor;
      if (mov.tipo === 'saque' || mov.tipo === 'aposta' || mov.tipo === 'perda') return acc - mov.valor;
      return acc;
    }, 0);
    res.json({ casaId, saldo });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao calcular saldo' });
  }
});

// Endpoint para exclusão múltipla de movimentações
app.delete('/api/movimentacoes/batch', async (req, res) => {
  console.log('DELETE /api/movimentacoes/batch body:', req.body);
  try {
    const { ids } = req.body;
    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ error: 'Envie um array de IDs para exclusão.' });
    }
    await prisma.movimentacao.deleteMany({
      where: { id: { in: ids } }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar movimentações em lote' });
  }
});

// Rota de teste
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'API funcionando!' });
});

// Cadastro de usuário
app.post('/api/auth/register', async (req, res) => {
  const { nome, email, senha } = req.body;
  if (!nome || !email || !senha) {
    return res.status(400).json({ error: 'Nome, email e senha são obrigatórios.' });
  }
  try {
    const existing = await prisma.usuario.findUnique({ where: { email } });
    if (existing) {
      return res.status(409).json({ error: 'E-mail já cadastrado.' });
    }
    const hash = await bcrypt.hash(senha, 10);
    const usuario = await prisma.usuario.create({
      data: { nome, email, senha: hash }
    });
    res.status(201).json({ id: usuario.id, nome: usuario.nome, email: usuario.email });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar usuário.' });
  }
});

// Login de usuário
app.post('/api/auth/login', async (req, res) => {
  const { email, senha } = req.body;
  if (!email || !senha) {
    return res.status(400).json({ error: 'E-mail e senha são obrigatórios.' });
  }
  try {
    const usuario = await prisma.usuario.findUnique({ where: { email } });
    if (!usuario) {
      return res.status(401).json({ error: 'Usuário ou senha inválidos.' });
    }
    const match = await bcrypt.compare(senha, usuario.senha);
    if (!match) {
      return res.status(401).json({ error: 'Usuário ou senha inválidos.' });
    }
    const token = jwt.sign({ id: usuario.id, email: usuario.email }, process.env.JWT_SECRET || 'segredo', { expiresIn: '7d' });
    res.json({ token, usuario: { id: usuario.id, nome: usuario.nome, email: usuario.email } });
  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ error: 'Erro ao fazer login.' });
  }
});

// Rotas para Percas
app.get('/api/percas', async (req, res) => {
  try {
    const percas = await prisma.perca.findMany({
      where: { usuarioId: getUserId(req) },
      include: { casa: true }
    });
    res.json(percas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar percas' });
  }
});

app.post('/api/percas', async (req, res) => {
  try {
    const { casaId, valor } = req.body;
    const perca = await prisma.perca.create({
      data: {
        casaId: Number(casaId),
        valor: Number(valor),
        usuarioId: getUserId(req)
      },
      include: { casa: true }
    });
    // Cria uma movimentação de 'perda'
    await prisma.movimentacao.create({
      data: {
        casaId: Number(casaId),
        tipo: 'perda',
        valor: Number(valor),
        observacao: `Registro de perda #${perca.id}`,
        usuarioId: getUserId(req)
      }
    });
    res.status(201).json(perca);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar perca', details: error instanceof Error ? error.message : 'Erro desconhecido' });
  }
});

app.delete('/api/percas/:id', async (req, res) => {
  try {
    const percaId = parseInt(req.params.id);

    // Opcional: Encontrar a movimentação associada e removê-la também
    // Isso depende se a perda deve ser "desfeita" no extrato da casa.
    // Por simplicidade, vamos apenas remover o registro da perda.
    // Se precisar remover a movimentação, adicione a lógica aqui.

    await prisma.perca.delete({
      where: { id: percaId, usuarioId: getUserId(req) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar perca' });
  }
});

// Rotas para Ganhos
app.get('/api/ganhos', async (req, res) => {
  try {
    const ganhos = await prisma.ganho.findMany({
      where: { usuarioId: getUserId(req) },
      include: { casa: true }
    });
    res.json(ganhos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar ganhos' });
  }
});

app.post('/api/ganhos', async (req, res) => {
  try {
    const { casaId, valor } = req.body;
    const ganho = await prisma.ganho.create({
      data: {
        casaId: Number(casaId),
        valor: Number(valor),
        usuarioId: getUserId(req)
      },
      include: { casa: true }
    });
    // Cria uma movimentação de 'ganho'
    await prisma.movimentacao.create({
      data: {
        casaId: Number(casaId),
        tipo: 'ganho',
        valor: Number(valor),
        observacao: `Registro de ganho #${ganho.id}`,
        usuarioId: getUserId(req)
      }
    });
    res.status(201).json(ganho);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar ganho', details: error instanceof Error ? error.message : 'Erro desconhecido' });
  }
});

app.delete('/api/ganhos/:id', async (req, res) => {
  try {
    const ganhoId = parseInt(req.params.id);

    await prisma.ganho.delete({
      where: { id: ganhoId, usuarioId: getUserId(req) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar ganho' });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📊 API disponível em http://localhost:${PORT}/api`);
});
