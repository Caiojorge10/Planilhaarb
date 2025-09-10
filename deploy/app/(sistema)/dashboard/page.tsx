'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, DollarSign, Target, Gift, Building2, Calendar, ArrowUpRight, ArrowDownRight, PlusCircle } from 'lucide-react'
import { arbitragensAPI, freebetsAPI, casasAPI, freespinsAPI, percasAPI, ganhosAPI, Arbitragem, Freebet, Casa, FreeSpin, Perca, Ganho } from '@/lib/api'

export default function DashboardPage() {
  const [arbitragens, setArbitragens] = useState<Arbitragem[]>([])
  const [freebets, setFreebets] = useState<Freebet[]>([])
  const [casas, setCasas] = useState<Casa[]>([])
  const [freespins, setFreespins] = useState<FreeSpin[]>([])
  const [percas, setPercas] = useState<Perca[]>([])
  const [ganhos, setGanhos] = useState<Ganho[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      setLoading(true)
      const [arbitragensData, freebetsData, casasData, freespinsData, percasData, ganhosData] = await Promise.all([
        arbitragensAPI.getAll(),
        freebetsAPI.getAll(),
        casasAPI.getAll(),
        freespinsAPI.getAll(),
        percasAPI.getAll(),
        ganhosAPI.getAll()
      ])
      setArbitragens(arbitragensData)
      setFreebets(freebetsData)
      setCasas(casasData)
      setFreespins(freespinsData)
      setPercas(percasData)
      setGanhos(ganhosData)
    } catch (error) {
      console.error('Erro ao carregar dados:', error)
    } finally {
      setLoading(false)
    }
  }

  // Cálculos das métricas
  const totalArbitragens = arbitragens.length
  const arbitragensExecutadas = arbitragens.filter(a => a.status === 'executada').length
  const lucroRodadasGratis = freespins.reduce((sum, f) => sum + f.valorGanho, 0)
  const lucroExtraidoFreebet =
    arbitragens.filter(a => a.status === 'executada' && (a.freebet1 || a.freebet2 || a.freebet3 || a.freebet4 || a.freebet5)).reduce((sum, a) => sum + a.lucroEsperado, 0) +
    freebets.reduce((sum, f) => sum + (f.valorExtraido || 0), 0)
  const lucroArbitragens =
    arbitragens.filter(a => a.status === 'executada' && !a.freebet1 && !a.freebet2 && !a.freebet3 && !a.freebet4 && !a.freebet5)
      .reduce((sum, a) => {
        if (!a.ladoVencedor) return sum;
        const lados = a.ladoVencedor.split(',').map(l => l.trim());
        let premioTotal = 0;
        lados.forEach(lado => {
          if (lado === 'casa1')
            premioTotal += (Number(a.stake1) * Number(a.odd1));
          else if (lado === 'casa2')
            premioTotal += (Number(a.stake2) * Number(a.odd2));
          else if (lado === 'casa3')
            premioTotal += (Number(a.stake3) * Number(a.odd3));
          else if (lado === 'casa4')
            premioTotal += (Number(a.stake4) * Number(a.odd4));
          else if (lado === 'casa5')
            premioTotal += (Number(a.stake5) * Number(a.odd5));
        });
        const valorTotal = Number(a.valorTotalInvestir);
        const lucro = premioTotal - valorTotal;
        return sum + (isNaN(lucro) ? 0 : lucro);
      }, 0);
  const totalPerdido = percas.reduce((sum, p) => sum + p.valor, 0)
  const totalGanho = ganhos.reduce((sum, g) => sum + g.valor, 0)
  const lucroTotal = lucroArbitragens + lucroRodadasGratis + lucroExtraidoFreebet + totalGanho - totalPerdido
  
  const freebetsAtivos = freebets.filter(f => f.status === 'ativo')
  const valorFreebetsAtivos = freebetsAtivos.reduce((sum, f) => sum + f.valor, 0)
  
  const casasAtivas = casas.filter(c => c.status === 'ativa').length
  const taxaSucesso = totalArbitragens > 0 
    ? ((arbitragensExecutadas / totalArbitragens) * 100).toFixed(1)
    : '0'

  // Dados para gráficos
  const arbitragensPorStatus = {
    identificada: arbitragens.filter(a => a.status === 'identificada').length,
    executada: arbitragensExecutadas,
    perdida: arbitragens.filter(a => a.status === 'perdida').length,
    cancelada: arbitragens.filter(a => a.status === 'cancelada').length
  }

  const freebetsPorTipo = {
    boas_vindas: freebets.filter(f => f.tipo === 'boas_vindas').length,
    recarga: freebets.filter(f => f.tipo === 'recarga').length,
    promocao: freebets.filter(f => f.tipo === 'promocao').length,
    compensacao: freebets.filter(f => f.tipo === 'compensacao').length
  }

  const arbitragensRecentes = arbitragens
    .sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime())
    .slice(0, 5)

  const freebetsRecentes = freebets
    .sort((a, b) => new Date(b.dataObtencao).getTime() - new Date(a.dataObtencao).getTime())
    .slice(0, 5)

  if (loading) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg text-gray-600">Carregando dashboard...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Visão geral das suas operações de arbitragem</p>
      </div>

      {/* Cards de métricas principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Lucro com Rodadas Grátis</p>
              <p className="text-2xl font-bold text-gray-900">R$ {lucroRodadasGratis.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Gift className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Lucro com Arbitragem</p>
              <p className="text-2xl font-bold text-gray-900">R$ {lucroArbitragens.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Lucro com Extração Freebet</p>
              <p className="text-2xl font-bold text-gray-900">R$ {lucroExtraidoFreebet.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <Gift className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Lucro Total</p>
              <p className="text-2xl font-bold text-gray-900">R$ {lucroTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <DollarSign className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Gráficos e estatísticas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Status das Arbitragens */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Status das Arbitragens</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Identificadas</span>
              </div>
              <span className="text-sm font-medium">{arbitragensPorStatus.identificada}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Executadas</span>
              </div>
              <span className="text-sm font-medium">{arbitragensPorStatus.executada}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Perdidas</span>
              </div>
              <span className="text-sm font-medium">{arbitragensPorStatus.perdida}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Canceladas</span>
              </div>
              <span className="text-sm font-medium">{arbitragensPorStatus.cancelada}</span>
            </div>
          </div>
        </div>

        {/* Tipos de Freebets */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tipos de Freebets</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Boas-vindas</span>
              </div>
              <span className="text-sm font-medium">{freebetsPorTipo.boas_vindas}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Recarga</span>
              </div>
              <span className="text-sm font-medium">{freebetsPorTipo.recarga}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Promoção</span>
              </div>
              <span className="text-sm font-medium">{freebetsPorTipo.promocao}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Compensação</span>
              </div>
              <span className="text-sm font-medium">{freebetsPorTipo.compensacao}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Atividades recentes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Arbitragens Recentes */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Arbitragens Recentes</h3>
            <a href="/arbitragens" className="text-sm text-blue-600 hover:text-blue-800">
              Ver todas
            </a>
          </div>
          <div className="space-y-3">
            {arbitragensRecentes.length > 0 ? (
              arbitragensRecentes.map((arbitragem) => (
                <div key={arbitragem.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{arbitragem.evento}</p>
                    <p className="text-xs text-gray-600">{arbitragem.esporte}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-green-600">
                      R$ {arbitragem.lucroEsperado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                    <p className="text-xs text-gray-600">
                      {new Date(arbitragem.data).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500 text-center py-4">Nenhuma arbitragem encontrada</p>
            )}
          </div>
        </div>

        {/* Freebets Recentes */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Freebets Recentes</h3>
            <a href="/freebets" className="text-sm text-blue-600 hover:text-blue-800">
              Ver todos
            </a>
          </div>
          <div className="space-y-3">
            {freebetsRecentes.length > 0 ? (
              freebetsRecentes.map((freebet) => (
                <div key={freebet.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{freebet.casa.nome}</p>
                    <p className="text-xs text-gray-600">{freebet.tipo}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-purple-600">
                      R$ {freebet.valor.toLocaleString('pt-BR')}
                    </p>
                    <p className="text-xs text-gray-600">
                      {new Date(freebet.dataObtencao).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500 text-center py-4">Nenhum freebet encontrado</p>
            )}
          </div>
        </div>
      </div>

      {/* Resumo de extração */}
      <div className="card mt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Resumo de Extração</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <p className="text-2xl font-bold text-green-600">
              R$ {lucroExtraidoFreebet.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </p>
            <p className="text-sm text-gray-600">Total Extraído</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <p className="text-2xl font-bold text-blue-600">
              {freebets.filter(f => f.valorExtraido).length}
            </p>
            <p className="text-sm text-gray-600">Freebets Extraídos</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <p className="text-2xl font-bold text-purple-600">
              {freebets.length > 0 ? ((freebets.filter(f => f.valorExtraido).length / freebets.length) * 100).toFixed(1) : '0'}%
            </p>
            <p className="text-sm text-gray-600">Taxa de Extração</p>
          </div>
        </div>
      </div>
    </div>
  )
} 