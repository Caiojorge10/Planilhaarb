'use client'

import { useState, useEffect } from 'react'
import { Calculator, TrendingUp, Target, Zap, BookOpen, Play, XCircle, Plus } from 'lucide-react'
import { freebetsAPI, Freebet } from '@/lib/api'

interface Estrategia {
  id: number
  nome: string
  descricao: string
  taxaConversao: number
  risco: 'baixo' | 'medio' | 'alto'
  tempoEstimado: string
  instrucoes: string[]
}

const estrategias: Estrategia[] = [
  {
    id: 1,
    nome: 'Arbitragem Tradicional',
    descricao: 'Usar freebet em uma casa e fazer aposta contrária em outra',
    taxaConversao: 85,
    risco: 'baixo',
    tempoEstimado: '5-10 min',
    instrucoes: [
      'Identificar freebet disponível',
      'Encontrar evento com odds opostas',
      'Fazer aposta com freebet na casa A',
      'Fazer aposta contrária na casa B',
      'Aguardar resultado e sacar lucro'
    ]
  },
  {
    id: 2,
    nome: 'Aposta de Alto Valor',
    descricao: 'Usar freebet em odds altas para maximizar retorno',
    taxaConversao: 70,
    risco: 'medio',
    tempoEstimado: '2-5 min',
    instrucoes: [
      'Selecionar evento com odds acima de 3.00',
      'Usar freebet na aposta de alto valor',
      'Aguardar resultado',
      'Sacar lucro se ganhar'
    ]
  },
  {
    id: 3,
    nome: 'Aposta Combinada',
    descricao: 'Criar combinações que garantem retorno mínimo',
    taxaConversao: 60,
    risco: 'medio',
    tempoEstimado: '10-15 min',
    instrucoes: [
      'Selecionar 2-3 eventos com odds baixas',
      'Criar aposta combinada',
      'Usar freebet na combinação',
      'Aguardar todos os resultados'
    ]
  },
  {
    id: 4,
    nome: 'Promoção Especial',
    descricao: 'Aproveitar promoções específicas da casa',
    taxaConversao: 90,
    risco: 'baixo',
    tempoEstimado: '5-8 min',
    instrucoes: [
      'Verificar promoções ativas',
      'Usar freebet em promoção específica',
      'Seguir regras da promoção',
      'Sacar bônus adicional'
    ]
  }
]

export default function ExtracaoPage() {
  const [freebetValor, setFreebetValor] = useState(100)
  const [oddAlvo, setOddAlvo] = useState(2.00)
  const [estrategiaSelecionada, setEstrategiaSelecionada] = useState<Estrategia | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [freebets, setFreebets] = useState<Freebet[]>([])
  const [historico, setHistorico] = useState<Freebet[]>([])
  const [form, setForm] = useState({
    freebetId: 0,
    valorExtraido: 0,
    estrategia: '',
    status: 'usado'
  })
  const [loadingFreebets, setLoadingFreebets] = useState(true)

  useEffect(() => {
    async function fetchFreebets() {
      setLoadingFreebets(true)
      const all = await freebetsAPI.getAll()
      setFreebets(all.filter(f => f.status === 'ativo'))
      setLoadingFreebets(false)
    }
    if (showModal) fetchFreebets()
  }, [showModal])

  const loadHistorico = async () => {
    const all = await freebetsAPI.getAll()
    setHistorico(all.filter(f => f.valorExtraido && f.valorExtraido > 0))
  }
  useEffect(() => {
    loadHistorico()
  }, [])

  const handleNovaExtracao = () => {
    setForm({ freebetId: 0, valorExtraido: 0, estrategia: '', status: 'usado' })
    setShowModal(true)
  }

  const handleSubmitExtracao = async (e: any) => {
    e.preventDefault()
    const freebet = freebets.find(f => f.id === Number(form.freebetId))
    if (!freebet) return
    await freebetsAPI.update(freebet.id, {
      valorExtraido: form.valorExtraido,
      estrategia: form.estrategia,
      status: form.status
    })
    setShowModal(false)
    await loadHistorico()
  }

  const calcularRetorno = (valor: number, odd: number) => {
    const retornoBruto = valor * odd
    const lucro = retornoBruto - valor
    const taxaConversao = estrategiaSelecionada?.taxaConversao || 85
    const lucroEstimado = lucro * (taxaConversao / 100)
    
    return {
      retornoBruto: Math.round(retornoBruto * 100) / 100,
      lucro: Math.round(lucro * 100) / 100,
      lucroEstimado: Math.round(lucroEstimado * 100) / 100
    }
  }

  const resultado = calcularRetorno(freebetValor, oddAlvo)

  const getRiscoColor = (risco: string) => {
    switch (risco) {
      case 'baixo':
        return 'text-green-600 bg-green-100'
      case 'medio':
        return 'text-yellow-600 bg-yellow-100'
      case 'alto':
        return 'text-red-600 bg-red-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Extração de Freebets</h1>
        <p className="text-gray-600">Estratégias e calculadora para converter freebets em dinheiro</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Calculadora */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Calculadora de Retorno</h2>
            <Calculator className="h-6 w-6 text-primary-600" />
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Valor do Freebet
              </label>
              <input
                type="number"
                min="0"
                value={freebetValor}
                onChange={(e) => setFreebetValor(Number(e.target.value))}
                className="input-field"
                placeholder="100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Odd Alvo
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                value={oddAlvo}
                onChange={(e) => setOddAlvo(Number(e.target.value))}
                className="input-field"
                placeholder="2.00"
              />
            </div>

            {estrategiaSelecionada && (
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-medium text-blue-900 mb-2">Estratégia Selecionada</h3>
                <p className="text-sm text-blue-700">{estrategiaSelecionada.nome}</p>
                <p className="text-sm text-blue-600">Taxa de conversão: {estrategiaSelecionada.taxaConversao}%</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Retorno Bruto</p>
                <p className="text-lg font-bold text-gray-900">
                  R$ {resultado.retornoBruto.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-600">Lucro Potencial</p>
                <p className="text-lg font-bold text-green-700">
                  R$ {resultado.lucro.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-600">Lucro Estimado</p>
                <p className="text-lg font-bold text-blue-700">
                  R$ {resultado.lucroEstimado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Estratégias */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Estratégias de Extração</h2>
            <BookOpen className="h-6 w-6 text-primary-600" />
          </div>
          
          <div className="space-y-4">
            {estrategias.map((estrategia) => (
              <div
                key={estrategia.id}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  estrategiaSelecionada?.id === estrategia.id
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setEstrategiaSelecionada(estrategia)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-gray-900">{estrategia.nome}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${getRiscoColor(estrategia.risco)}`}>
                    {estrategia.risco.toUpperCase()}
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 mb-3">{estrategia.descricao}</p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-green-600 font-medium">{estrategia.taxaConversao}% conversão</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-blue-500" />
                    <span className="text-blue-600">{estrategia.tempoEstimado}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Instruções da estratégia selecionada */}
      {estrategiaSelecionada && (
        <div className="card mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Instruções: {estrategiaSelecionada.nome}
            </h2>
            <Play className="h-6 w-6 text-primary-600" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Passo a Passo</h3>
              <ol className="space-y-2">
                {estrategiaSelecionada.instrucoes.map((instrucao, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{instrucao}</span>
                  </li>
                ))}
              </ol>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Dicas Importantes</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Zap className="h-4 w-4 text-yellow-500 mt-0.5" />
                  <p className="text-sm text-gray-600">
                    Sempre verifique as regras específicas do freebet antes de usar
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Zap className="h-4 w-4 text-yellow-500 mt-0.5" />
                  <p className="text-sm text-gray-600">
                    Mantenha registro de todas as operações para análise posterior
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Zap className="h-4 w-4 text-yellow-500 mt-0.5" />
                  <p className="text-sm text-gray-600">
                    Considere o tempo de processamento para saques
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Zap className="h-4 w-4 text-yellow-500 mt-0.5" />
                  <p className="text-sm text-gray-600">
                    Diversifique as estratégias para maximizar resultados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Histórico de extrações */}
      <div className="card mt-6 relative">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center justify-between">
          Histórico de Extrações
          <button
            onClick={handleNovaExtracao}
            className="btn-primary flex items-center gap-2 absolute right-6 top-6 z-10"
            style={{ minWidth: 160 }}
          >
            <Plus className="h-4 w-4" /> Nova Extração
          </button>
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-900">Data</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Casa</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Valor Freebet</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Estratégia</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Valor Extraído</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Taxa Conversão</th>
              </tr>
            </thead>
            <tbody>
              {historico.map(freebet => (
                <tr key={freebet.id} className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-600">{new Date(freebet.dataObtencao).toISOString().slice(0,10)}</td>
                  <td className="py-3 px-4 font-medium text-gray-900">{freebet.casa.nome}</td>
                  <td className="py-3 px-4 text-gray-600">R$ {freebet.valor.toLocaleString('pt-BR')}</td>
                  <td className="py-3 px-4 text-gray-600">{freebet.estrategia || '-'}</td>
                  <td className="py-3 px-4 font-semibold text-green-600">R$ {freebet.valorExtraido?.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                  <td className="py-3 px-4 text-gray-600">{freebet.valorExtraido ? ((freebet.valorExtraido / freebet.valor) * 100).toFixed(1).replace('.', ',') + '%' : '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Nova Extração de Freebet</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">
                <XCircle className="h-6 w-6" />
              </button>
            </div>
            <form onSubmit={handleSubmitExtracao} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Freebet</label>
                <select
                  value={form.freebetId}
                  onChange={e => setForm({ ...form, freebetId: Number(e.target.value) })}
                  className="input-field"
                  required
                >
                  <option value={0}>Selecione uma freebet</option>
                  {freebets.map(f => (
                    <option key={f.id} value={f.id}>
                      {f.casa.nome} - R$ {f.valor.toLocaleString('pt-BR')} ({new Date(f.dataObtencao).toLocaleDateString('pt-BR')})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Valor Extraído</label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={form.valorExtraido}
                  onChange={e => setForm({ ...form, valorExtraido: parseFloat(e.target.value) })}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Estratégia</label>
                <input
                  type="text"
                  value={form.estrategia}
                  onChange={e => setForm({ ...form, estrategia: e.target.value })}
                  className="input-field"
                  placeholder="Ex: Arbitragem, rollover, etc."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={form.status}
                  onChange={e => setForm({ ...form, status: e.target.value })}
                  className="input-field"
                >
                  <option value="usado">Usado</option>
                  <option value="expirado">Expirado</option>
                  <option value="ativo">Ativo</option>
                </select>
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">Cancelar</button>
                <button type="submit" className="btn-primary">Salvar Extração</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
} 