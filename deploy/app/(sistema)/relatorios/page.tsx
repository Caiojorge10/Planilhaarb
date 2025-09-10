'use client'

import { useState, useEffect } from 'react'
import { 
  BarChart3, 
  TrendingUp, 
  Calendar, 
  Filter,
  Download,
  DollarSign,
  Gift,
  Calculator,
  Target
} from 'lucide-react'
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts'
import { arbitragensAPI, freebetsAPI } from '../../../lib/api'
import { useAuth } from '../../../components/AuthProvider'

// Função utilitária para agrupar e calcular lucro mensal
function calcularLucroMensal(arbitragens: any[], freebets: any[], periodo: string) {
  // Exemplo: agrupar por mês do campo data (YYYY-MM)
  const meses: { [key: string]: any } = {}
  arbitragens.forEach(a => {
    const mes = new Date(a.data).toLocaleString('pt-BR', { month: 'short', year: '2-digit' })
    if (!meses[mes]) meses[mes] = { mes, lucro: 0, arbitragens: 0, freebets: 0 }
    meses[mes].lucro += a.lucroEsperado || 0
    meses[mes].arbitragens += 1
  })
  freebets.forEach(fb => {
    const mes = new Date(fb.dataObtencao).toLocaleString('pt-BR', { month: 'short', year: '2-digit' })
    if (!meses[mes]) meses[mes] = { mes, lucro: 0, arbitragens: 0, freebets: 0 }
    meses[mes].freebets += fb.valorExtraido || 0
  })
  // Ordenar por data
  const arr = Object.values(meses).sort((a: any, b: any) => new Date('01 ' + a.mes).getTime() - new Date('01 ' + b.mes).getTime())
  // Filtrar pelo período selecionado (últimos X meses)
  let qtd = 6
  if (periodo === '1_mes') qtd = 1
  if (periodo === '3_meses') qtd = 3
  if (periodo === '1_ano') qtd = 12
  return arr.slice(-qtd)
}

function calcularPorCasa(arbitragens: any[], freebets: any[]) {
  const casas: { [key: string]: any } = {}
  arbitragens.forEach(a => {
    if (a.casa1) {
      if (!casas[a.casa1.nome]) casas[a.casa1.nome] = { casa: a.casa1.nome, lucro: 0, arbitragens: 0, freebets: 0 }
      casas[a.casa1.nome].lucro += a.lucroEsperado || 0
      casas[a.casa1.nome].arbitragens += 1
    }
    if (a.casa2) {
      if (!casas[a.casa2.nome]) casas[a.casa2.nome] = { casa: a.casa2.nome, lucro: 0, arbitragens: 0, freebets: 0 }
      casas[a.casa2.nome].arbitragens += 1
    }
    if (a.casa3) {
      if (!casas[a.casa3.nome]) casas[a.casa3.nome] = { casa: a.casa3.nome, lucro: 0, arbitragens: 0, freebets: 0 }
      casas[a.casa3.nome].arbitragens += 1
    }
    if (a.casa4) {
      if (!casas[a.casa4.nome]) casas[a.casa4.nome] = { casa: a.casa4.nome, lucro: 0, arbitragens: 0, freebets: 0 }
      casas[a.casa4.nome].arbitragens += 1
    }
  })
  freebets.forEach(fb => {
    if (fb.casa && fb.casa.nome) {
      if (!casas[fb.casa.nome]) casas[fb.casa.nome] = { casa: fb.casa.nome, lucro: 0, arbitragens: 0, freebets: 0 }
      casas[fb.casa.nome].freebets += fb.valorExtraido || 0
    }
  })
  return Object.values(casas)
}

function calcularPorEsporte(arbitragens: any[]) {
  const esportes: { [key: string]: any } = {}
  arbitragens.forEach(a => {
    if (!esportes[a.esporte]) esportes[a.esporte] = { esporte: a.esporte, valor: 0, cor: '' }
    esportes[a.esporte].valor += 1
  })
  // Atribuir cores fixas
  const cores = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6']
  let i = 0
  for (const key in esportes) {
    esportes[key].cor = cores[i % cores.length]
    i++
  }
  return Object.values(esportes)
}

function calcularPorEstrategia(arbitragens: any[], freebets: any[]) {
  // Exemplo: agrupar por tipo de arbitragem/freebet
  const estrategias: { [key: string]: any } = {}
  arbitragens.forEach(a => {
    const tipo = a.tipo || 'Arbitragem Tradicional'
    if (!estrategias[tipo]) estrategias[tipo] = { estrategia: tipo, lucro: 0, quantidade: 0 }
    estrategias[tipo].lucro += a.lucroEsperado || 0
    estrategias[tipo].quantidade += 1
  })
  freebets.forEach(fb => {
    const tipo = fb.estrategia || 'Freebet'
    if (!estrategias[tipo]) estrategias[tipo] = { estrategia: tipo, lucro: 0, quantidade: 0 }
    estrategias[tipo].lucro += fb.valorExtraido || 0
    estrategias[tipo].quantidade += 1
  })
  return Object.values(estrategias)
}

export default function RelatoriosPage() {
  const [periodo, setPeriodo] = useState('6_meses')
  const [tipoRelatorio, setTipoRelatorio] = useState('geral')
  const [arbitragens, setArbitragens] = useState<any[]>([])
  const [freebets, setFreebets] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const { usuario } = useAuth()

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const [arbs, fbs] = await Promise.all([
          arbitragensAPI.getAll(),
          freebetsAPI.getAll()
        ])
        setArbitragens(arbs)
        setFreebets(fbs)
      } catch (e) {
        // Trate erro se quiser
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  // Cálculo dos dados reais
  const dadosLucroMensal = calcularLucroMensal(arbitragens, freebets, periodo)
  const dadosCasas = calcularPorCasa(arbitragens, freebets)
  const dadosEsportes = calcularPorEsporte(arbitragens)
  const dadosEstrategias = calcularPorEstrategia(arbitragens, freebets)

  function calcularTotais() {
    const totalLucro = arbitragens.reduce((sum, a) => sum + (a.lucroEsperado || 0), 0)
    const totalArbitragens = arbitragens.length
    const totalFreebets = freebets.reduce((sum, f) => sum + (f.valorExtraido || 0), 0)
    const mediaLucro = dadosLucroMensal.length > 0 ? dadosLucroMensal.reduce((sum, item) => sum + item.lucro, 0) / dadosLucroMensal.length : 0
    return { totalLucro, totalArbitragens, totalFreebets, mediaLucro }
  }
  const totais = calcularTotais()

  if (loading) return <div className="p-6">Carregando...</div>

  const COLORS = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6']

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Relatórios</h1>
          <p className="text-gray-600">Análises detalhadas das suas operações</p>
        </div>
        <div className="flex gap-3">
          <select
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
            className="input-field"
          >
            <option value="1_mes">Último mês</option>
            <option value="3_meses">Últimos 3 meses</option>
            <option value="6_meses">Últimos 6 meses</option>
            <option value="1_ano">Último ano</option>
          </select>
          <button className="btn-primary flex items-center">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </button>
        </div>
      </div>

      {/* Cards de métricas principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Lucro Total</p>
              <p className="text-2xl font-bold text-gray-900">
                R$ {totais.totalLucro.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Arbitragens</p>
              <p className="text-2xl font-bold text-gray-900">{totais.totalArbitragens}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Calculator className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Freebets Extraídos</p>
              <p className="text-2xl font-bold text-gray-900">
                R$ {totais.totalFreebets.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <Gift className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Média Mensal</p>
              <p className="text-2xl font-bold text-gray-900">
                R$ {totais.mediaLucro.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <TrendingUp className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Gráficos principais */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Evolução do lucro */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Evolução do Lucro</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dadosLucroMensal}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip formatter={(value) => [`R$ ${value}`, 'Valor']} />
                <Legend />
                <Line type="monotone" dataKey="lucro" stroke="#3b82f6" strokeWidth={2} name="Lucro" />
                <Line type="monotone" dataKey="freebets" stroke="#8b5cf6" strokeWidth={2} name="Freebets" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Distribuição por esportes */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Distribuição por Esportes</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dadosEsportes}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ esporte, valor }) => `${esporte} ${valor}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="valor"
                >
                  {dadosEsportes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.cor} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Participação']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Gráficos secundários */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Performance por casa */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance por Casa</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dadosCasas}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="casa" />
                <YAxis />
                <Tooltip formatter={(value) => [`R$ ${value}`, 'Valor']} />
                <Legend />
                <Bar dataKey="lucro" fill="#3b82f6" name="Lucro" />
                <Bar dataKey="freebets" fill="#8b5cf6" name="Freebets" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Estratégias mais lucrativas */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Estratégias Mais Lucrativas</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dadosEstrategias} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="estrategia" type="category" width={120} />
                <Tooltip formatter={(value) => [`R$ ${value}`, 'Lucro']} />
                <Bar dataKey="lucro" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Tabelas detalhadas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top casas de apostas */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Casas de Apostas</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Casa</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Lucro</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Arbitragens</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Taxa Sucesso</th>
                </tr>
              </thead>
              <tbody>
                {dadosCasas.map((casa, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-gray-900">{casa.casa}</td>
                    <td className="py-3 px-4 text-green-600 font-semibold">
                      R$ {casa.lucro.toLocaleString('pt-BR')}
                    </td>
                    <td className="py-3 px-4 text-gray-600">{casa.arbitragens}</td>
                    <td className="py-3 px-4 text-gray-600">95%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Resumo mensal */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Resumo Mensal</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Mês</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Lucro</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Arbitragens</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">ROI</th>
                </tr>
              </thead>
              <tbody>
                {dadosLucroMensal.map((mes, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-gray-900">{mes.mes}</td>
                    <td className="py-3 px-4 text-green-600 font-semibold">
                      R$ {mes.lucro.toLocaleString('pt-BR')}
                    </td>
                    <td className="py-3 px-4 text-gray-600">{mes.arbitragens}</td>
                    <td className="py-3 px-4 text-gray-600">{(mes.lucro / 1000 * 100).toFixed(1)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
} 