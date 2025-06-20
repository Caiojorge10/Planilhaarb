'use client'

import { useState, useEffect } from 'react'
import { Plus, Search, Filter, TrendingUp, Calendar, DollarSign, CheckCircle, Clock, XCircle, Target, Pencil } from 'lucide-react'
import { arbitragensAPI, casasAPI, Arbitragem, Casa } from '@/lib/api'
import { useAuth } from '@/components/AuthProvider'

export default function ArbitragensPage() {
  const { token } = useAuth()
  const [arbitragens, setArbitragens] = useState<Arbitragem[]>([])
  const [casas, setCasas] = useState<Casa[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editingArbitragem, setEditingArbitragem] = useState<Arbitragem | null>(null)
  const [showFinalizarModal, setShowFinalizarModal] = useState(false)
  const [arbitragemParaFinalizar, setArbitragemParaFinalizar] = useState<Arbitragem | null>(null)
  const [ladoVencedor, setLadoVencedor] = useState<'casa1' | 'casa2' | 'casa3' | 'casa4' | ''>('')
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('todos')
  const [filterEsporte, setFilterEsporte] = useState('todos')
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    evento: '',
    esporte: '',
    tipo: '2_resultados',
    casa1Id: 0,
    casa2Id: 0,
    casa3Id: 0,
    casa4Id: 0,
    odd1: 0,
    odd2: 0,
    odd3: 0,
    odd4: 0,
    stake1: 0,
    stake2: 0,
    stake3: 0,
    stake4: 0,
    resultado1: '',
    resultado2: '',
    resultado3: '',
    resultado4: '',
    valorTotalInvestir: 100,
    lucroEsperado: 0,
    status: 'identificada'
  })
  const [lucroEditadoManualmente, setLucroEditadoManualmente] = useState(false)

  // Carregar dados da API
  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      setLoading(true)
      const [arbitragensData, casasData] = await Promise.all([
        arbitragensAPI.getAll(),
        casasAPI.getAll()
      ])
      setArbitragens(arbitragensData)
      setCasas(casasData)
    } catch (error) {
      console.error('Erro ao carregar dados:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Validação de casas
    if (formData.casa1Id <= 0 || formData.casa2Id <= 0) {
      alert('Selecione casas válidas para Casa 1 e Casa 2.')
      return
    }
    if (formData.tipo === '3_resultados' && formData.casa3Id <= 0) {
      alert('Selecione uma casa válida para Casa 3.')
      return
    }
    if (formData.tipo === '4_resultados' && (formData.casa3Id <= 0 || formData.casa4Id <= 0)) {
      alert('Selecione casas válidas para Casa 3 e Casa 4.')
      return
    }
    // Validação de campos numéricos
    const camposNumericos = [formData.odd1, formData.odd2, formData.stake1, formData.stake2]
    if (formData.tipo === '3_resultados') {
      camposNumericos.push(formData.odd3, formData.stake3)
    }
    if (formData.tipo === '4_resultados') {
      camposNumericos.push(formData.odd3, formData.stake3, formData.odd4, formData.stake4)
    }
    if (camposNumericos.some(v => isNaN(v) || v === null || v === undefined)) {
      alert('Preencha todos os campos numéricos corretamente.')
      return
    }
    try {
      // Remover campos de casas não usados ou inválidos, mas manter valorTotalInvestir
      const dataParaApi = { ...formData };
      if (!dataParaApi.casa3Id || dataParaApi.casa3Id <= 0) delete dataParaApi.casa3Id;
      if (!dataParaApi.casa4Id || dataParaApi.casa4Id <= 0) delete dataParaApi.casa4Id;
      if (formData.tipo === '2_resultados') {
        delete dataParaApi.casa3Id; delete dataParaApi.casa4Id;
      }
      if (formData.tipo === '3_resultados') {
        delete dataParaApi.casa4Id;
      }
      if (editingArbitragem) {
        await arbitragensAPI.update(editingArbitragem.id, dataParaApi)
      } else {
        await arbitragensAPI.create(dataParaApi)
      }
      setShowForm(false)
      setEditingArbitragem(null)
      resetForm()
      loadData()
    } catch (error) {
      console.error('Erro ao salvar arbitragem:', error)
    }
  }

  const handleEdit = (arbitragem: Arbitragem) => {
    setEditingArbitragem(arbitragem)
    setFormData({
      evento: arbitragem.evento,
      esporte: arbitragem.esporte,
      tipo: arbitragem.tipo,
      casa1Id: arbitragem.casa1Id,
      casa2Id: arbitragem.casa2Id,
      casa3Id: arbitragem.casa3Id,
      casa4Id: arbitragem.casa4Id,
      odd1: arbitragem.odd1,
      odd2: arbitragem.odd2,
      odd3: arbitragem.odd3,
      odd4: arbitragem.odd4,
      stake1: arbitragem.stake1,
      stake2: arbitragem.stake2,
      stake3: arbitragem.stake3,
      stake4: arbitragem.stake4,
      resultado1: arbitragem.resultado1,
      resultado2: arbitragem.resultado2,
      resultado3: arbitragem.resultado3,
      resultado4: arbitragem.resultado4,
      valorTotalInvestir: arbitragem.valorTotalInvestir,
      lucroEsperado: arbitragem.lucroEsperado,
      status: arbitragem.status
    })
    setShowForm(true)
  }

  const handleDelete = async (id: number) => {
    if (confirm('Tem certeza que deseja deletar esta arbitragem?')) {
      try {
        await arbitragensAPI.delete(id)
        loadData()
      } catch (error) {
        console.error('Erro ao deletar arbitragem:', error)
      }
    }
  }

  const handleFinalizar = (arbitragem: Arbitragem) => {
    setArbitragemParaFinalizar(arbitragem)
    setLadoVencedor('')
    setShowFinalizarModal(true)
  }

  const confirmarFinalizar = async () => {
    if (!arbitragemParaFinalizar || !ladoVencedor) return
    try {
      await arbitragensAPI.finalizar(arbitragemParaFinalizar.id, ladoVencedor);
      setShowFinalizarModal(false)
      setArbitragemParaFinalizar(null)
      setLadoVencedor('')
      loadData()
      alert('Arbitragem finalizada com sucesso! Os saldos foram atualizados.')
    } catch (error: any) {
      alert(`Erro ao finalizar arbitragem: ${error?.error || 'Erro desconhecido'}`)
    }
  }

  const resetForm = () => {
    setFormData({
      evento: '',
      esporte: '',
      tipo: '2_resultados',
      casa1Id: 0,
      casa2Id: 0,
      casa3Id: 0,
      casa4Id: 0,
      odd1: 0,
      odd2: 0,
      odd3: 0,
      odd4: 0,
      stake1: 0,
      stake2: 0,
      stake3: 0,
      stake4: 0,
      resultado1: '',
      resultado2: '',
      resultado3: '',
      resultado4: '',
      valorTotalInvestir: 100,
      lucroEsperado: 0,
      status: 'identificada'
    })
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'identificada':
        return <Target className="h-5 w-5 text-blue-500" />
      case 'executada':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'perdida':
        return <XCircle className="h-5 w-5 text-red-500" />
      case 'cancelada':
        return <Clock className="h-5 w-5 text-yellow-500" />
      default:
        return null
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'identificada':
        return 'Identificada'
      case 'executada':
        return 'Executada'
      case 'perdida':
        return 'Perdida'
      case 'cancelada':
        return 'Cancelada'
      default:
        return status
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'identificada':
        return 'text-blue-600 bg-blue-100'
      case 'executada':
        return 'text-green-600 bg-green-100'
      case 'perdida':
        return 'text-red-600 bg-red-100'
      case 'cancelada':
        return 'text-yellow-600 bg-yellow-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  const filteredArbitragens = arbitragens.filter(arbitragem => {
    const matchesSearch = arbitragem.evento.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'todos' || arbitragem.status === filterStatus
    const matchesEsporte = filterEsporte === 'todos' || arbitragem.esporte === filterEsporte
    
    return matchesSearch && matchesStatus && matchesEsporte
  })

  const totalLucro = arbitragens
    .filter(a => a.status === 'executada')
    .reduce((sum, a) => sum + a.lucroEsperado, 0)

  const totalIdentificadas = arbitragens.filter(a => a.status === 'identificada').length
  const totalExecutadas = arbitragens.filter(a => a.status === 'executada').length
  const taxaSucesso = totalExecutadas > 0 
    ? ((totalExecutadas / arbitragens.length) * 100).toFixed(1)
    : '0'

  // Atualiza lucro esperado automaticamente quando stakes, odds ou valor total mudam, exceto se o usuário editou manualmente
  useEffect(() => {
    if (!lucroEditadoManualmente) {
      const odds = [formData.odd1, formData.odd2]
      const stakes = [formData.stake1, formData.stake2]
      if (formData.tipo === '3_resultados') {
        odds.push(formData.odd3)
        stakes.push(formData.stake3)
      }
      if (formData.tipo === '4_resultados') {
        odds.push(formData.odd3, formData.odd4)
        stakes.push(formData.stake3, formData.stake4)
      }
      const oddsValidas = odds.filter(o => o && o > 0)
      const stakesValidas = stakes.filter(s => s && s > 0)
      if (oddsValidas.length === stakesValidas.length && oddsValidas.length > 0) {
        // Lucro esperado é o maior retorno possível menos o valor total investido
        const retornos = oddsValidas.map((odd, i) => stakesValidas[i] * odd)
        const maiorRetorno = Math.max(...retornos)
        const lucro = maiorRetorno - formData.valorTotalInvestir
        setFormData(prev => ({ ...prev, lucroEsperado: Number(lucro.toFixed(2)) }))
      }
    }
    // eslint-disable-next-line
  }, [formData.odd1, formData.odd2, formData.odd3, formData.odd4, formData.stake1, formData.stake2, formData.stake3, formData.stake4, formData.valorTotalInvestir, formData.tipo])

  // Atualiza valorTotalInvestir automaticamente ao alterar qualquer stake
  useEffect(() => {
    const stakes = [formData.stake1, formData.stake2]
    if (formData.tipo === '3_resultados' || formData.tipo === '4_resultados') stakes.push(formData.stake3)
    if (formData.tipo === '4_resultados') stakes.push(formData.stake4)
    const soma = stakes.reduce((acc, s) => acc + (isNaN(s) ? 0 : s), 0)
    if (soma > 0 && soma !== formData.valorTotalInvestir) {
      setFormData(prev => ({ ...prev, valorTotalInvestir: Number(soma.toFixed(2)) }))
    }
    // eslint-disable-next-line
  }, [formData.stake1, formData.stake2, formData.stake3, formData.stake4, formData.tipo])

  function calcularStakes() {
    setLucroEditadoManualmente(false)
    const odds = [formData.odd1, formData.odd2]
    if (formData.tipo === '3_resultados') odds.push(formData.odd3)
    if (formData.tipo === '4_resultados') odds.push(formData.odd3, formData.odd4)
    const oddsValidas = odds.filter(o => o && o > 0)
    if (oddsValidas.length < (formData.tipo === '2_resultados' ? 2 : formData.tipo === '3_resultados' ? 3 : 4)) return
    const S = oddsValidas.reduce((acc, odd) => acc + 1/odd, 0)
    const valorTotal = formData.valorTotalInvestir
    const stakes = oddsValidas.map(odd => (valorTotal * (1/odd)) / S)
    setFormData(prev => ({
      ...prev,
      stake1: stakes[0] ? Number(stakes[0].toFixed(4)) : 0,
      stake2: stakes[1] ? Number(stakes[1].toFixed(4)) : 0,
      stake3: stakes[2] ? Number(stakes[2].toFixed(4)) : 0,
      stake4: stakes[3] ? Number(stakes[3].toFixed(4)) : 0,
      lucroEsperado: stakes[0] && oddsValidas[0] ? Number((stakes[0]*oddsValidas[0] - valorTotal).toFixed(4)) : 0
    }))
  }

  if (loading) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg text-gray-600">Carregando arbitragens...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Arbitragens</h1>
          <p className="text-gray-600">Gerencie suas oportunidades de arbitragem</p>
        </div>
        <button
          onClick={() => {
            resetForm()
            setEditingArbitragem(null)
            setShowForm(true)
          }}
          className="btn-primary flex items-center"
        >
          <Plus className="h-4 w-4 mr-2" />
          Nova Arbitragem
        </button>
      </div>

      {/* Cards de métricas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Identificadas</p>
              <p className="text-2xl font-bold text-gray-900">{totalIdentificadas}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Executadas</p>
              <p className="text-2xl font-bold text-gray-900">{totalExecutadas}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Taxa de Sucesso</p>
              <p className="text-2xl font-bold text-gray-900">{taxaSucesso}%</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Lucro Total</p>
              <p className="text-2xl font-bold text-gray-900">
                R$ {totalLucro.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="card mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por evento..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="input-field"
            >
              <option value="todos">Todos os status</option>
              <option value="identificada">Identificada</option>
              <option value="executada">Executada</option>
              <option value="perdida">Perdida</option>
              <option value="cancelada">Cancelada</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <select
              value={filterEsporte}
              onChange={(e) => setFilterEsporte(e.target.value)}
              className="input-field"
            >
              <option value="todos">Todos os esportes</option>
              <option value="futebol">Futebol</option>
              <option value="basquete">Basquete</option>
              <option value="tenis">Tênis</option>
              <option value="volei">Vôlei</option>
              <option value="mma">MMA</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid de arbitragens */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredArbitragens.map((arbitragem) => (
          <div key={arbitragem.id} className="card">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{arbitragem.evento}</h3>
                <p className="text-sm text-gray-600">{arbitragem.esporte} • {arbitragem.tipo.replace('_', ' ')}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(arbitragem.status)}`}>
                {getStatusText(arbitragem.status)}
              </span>
            </div>

            <div className={`grid gap-4 mb-4 ${
              arbitragem.tipo === '2_resultados' ? 'grid-cols-2' :
              arbitragem.tipo === '3_resultados' ? 'grid-cols-3' : 'grid-cols-2'
            }`}>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-700">{arbitragem.casa1.nome}</p>
                <p className="text-xs text-gray-500">{arbitragem.resultado1}</p>
                <p className="text-lg font-bold text-blue-600">{arbitragem.odd1}</p>
                <p className="text-sm text-gray-600">Stake: R$ {Number(arbitragem.stake1).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-700">{arbitragem.casa2.nome}</p>
                <p className="text-xs text-gray-500">{arbitragem.resultado2}</p>
                <p className="text-lg font-bold text-blue-600">{arbitragem.odd2}</p>
                <p className="text-sm text-gray-600">Stake: R$ {Number(arbitragem.stake2).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              </div>
              {arbitragem.tipo === '3_resultados' && arbitragem.casa3 && (
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-gray-700">{arbitragem.casa3.nome}</p>
                  <p className="text-xs text-gray-500">{arbitragem.resultado3}</p>
                  <p className="text-lg font-bold text-blue-600">{arbitragem.odd3}</p>
                  <p className="text-sm text-gray-600">Stake: R$ {Number(arbitragem.stake3).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                </div>
              )}
              {arbitragem.tipo === '4_resultados' && arbitragem.casa3 && arbitragem.casa4 && (
                <>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-700">{arbitragem.casa3.nome}</p>
                    <p className="text-xs text-gray-500">{arbitragem.resultado3}</p>
                    <p className="text-lg font-bold text-blue-600">{arbitragem.odd3}</p>
                    <p className="text-sm text-gray-600">Stake: R$ {Number(arbitragem.stake3).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-700">{arbitragem.casa4.nome}</p>
                    <p className="text-xs text-gray-500">{arbitragem.resultado4}</p>
                    <p className="text-lg font-bold text-blue-600">{arbitragem.odd4}</p>
                    <p className="text-sm text-gray-600">Stake: R$ {Number(arbitragem.stake4).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                  </div>
                </>
              )}
            </div>

            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm text-gray-600">Lucro Esperado</p>
                {arbitragem.status === 'executada' && arbitragem.ladoVencedor ? (
                  <p className="text-lg font-bold text-green-600">
                    {(() => {
                      let lucro = null;
                      if (arbitragem.ladoVencedor === 'casa1')
                        lucro = (arbitragem.stake1 ?? 0) * (arbitragem.odd1 ?? 0) - (arbitragem.valorTotalInvestir ?? 0);
                      else if (arbitragem.ladoVencedor === 'casa2')
                        lucro = (arbitragem.stake2 ?? 0) * (arbitragem.odd2 ?? 0) - (arbitragem.valorTotalInvestir ?? 0);
                      else if (arbitragem.ladoVencedor === 'casa3')
                        lucro = (arbitragem.stake3 ?? 0) * (arbitragem.odd3 ?? 0) - (arbitragem.valorTotalInvestir ?? 0);
                      else if (arbitragem.ladoVencedor === 'casa4')
                        lucro = (arbitragem.stake4 ?? 0) * (arbitragem.odd4 ?? 0) - (arbitragem.valorTotalInvestir ?? 0);
                      if (lucro === null || isNaN(lucro)) return '—';
                      return `R$ ${lucro.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
                    })()}
                  </p>
                ) : (
                  <p className="text-gray-400 italic text-base">Selecione o vencedor para ver o lucro</p>
                )}
              </div>
              <div>
                <p className="text-sm text-gray-600">Data</p>
                <p className="text-sm font-medium">{new Date(arbitragem.data).toLocaleDateString('pt-BR')}</p>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              {(arbitragem.status === 'identificada' || arbitragem.status === 'em_andamento') && (
                <button
                  onClick={() => handleFinalizar(arbitragem)}
                  className="text-sm text-green-600 hover:text-green-800 flex items-center gap-1"
                >
                  <CheckCircle className="h-4 w-4" /> Finalizar
                </button>
              )}
              <button
                onClick={() => handleEdit(arbitragem)}
                className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <Pencil className="h-4 w-4" /> Editar
              </button>
              <button
                onClick={() => handleDelete(arbitragem.id)}
                className="text-sm text-red-600 hover:text-red-800"
              >
                Deletar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de formulário */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                {editingArbitragem ? 'Editar Arbitragem' : 'Nova Arbitragem'}
              </h2>
              <button
                onClick={() => {
                  setShowForm(false)
                  setEditingArbitragem(null)
                  resetForm()
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircle className="h-6 w-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Evento
                  </label>
                  <input
                    type="text"
                    value={formData.evento}
                    onChange={(e) => setFormData({...formData, evento: e.target.value})}
                    className="input-field"
                    placeholder="Ex: Flamengo x Palmeiras"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Esporte
                  </label>
                  <select
                    value={formData.esporte}
                    onChange={(e) => setFormData({...formData, esporte: e.target.value})}
                    className="input-field"
                    required
                  >
                    <option value="">Selecione o esporte</option>
                    <option value="futebol">Futebol</option>
                    <option value="basquete">Basquete</option>
                    <option value="tenis">Tênis</option>
                    <option value="volei">Vôlei</option>
                    <option value="mma">MMA</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de Arbitragem
                </label>
                <select
                  value={formData.tipo}
                  onChange={(e) => setFormData({...formData, tipo: e.target.value})}
                  className="input-field"
                  required
                >
                  <option value="2_resultados">2 Resultados</option>
                  <option value="3_resultados">3 Resultados</option>
                  <option value="4_resultados">4 Resultados</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Casa 1
                  </label>
                  <select
                    value={formData.casa1Id}
                    onChange={(e) => setFormData({...formData, casa1Id: parseInt(e.target.value)})}
                    className="input-field"
                    required
                  >
                    <option value={0}>Selecione a casa 1</option>
                    {casas.map((casa) => (
                      <option key={casa.id} value={casa.id}>
                        {casa.nome}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Casa 2
                  </label>
                  <select
                    value={formData.casa2Id}
                    onChange={(e) => setFormData({...formData, casa2Id: parseInt(e.target.value)})}
                    className="input-field"
                    required
                  >
                    <option value={0}>Selecione a casa 2</option>
                    {casas.map((casa) => (
                      <option key={casa.id} value={casa.id}>
                        {casa.nome}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {(formData.tipo === '3_resultados' || formData.tipo === '4_resultados') && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Casa 3
                    </label>
                    <select
                      value={formData.casa3Id}
                      onChange={(e) => setFormData({...formData, casa3Id: parseInt(e.target.value)})}
                      className="input-field"
                      required={formData.tipo === '3_resultados' || formData.tipo === '4_resultados'}
                    >
                      <option value={0}>Selecione a casa 3</option>
                      {casas.map((casa) => (
                        <option key={casa.id} value={casa.id}>
                          {casa.nome}
                        </option>
                      ))}
                    </select>
                  </div>
                  {formData.tipo === '4_resultados' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Casa 4
                      </label>
                      <select
                        value={formData.casa4Id}
                        onChange={(e) => setFormData({...formData, casa4Id: parseInt(e.target.value)})}
                        className="input-field"
                        required
                      >
                        <option value={0}>Selecione a casa 4</option>
                        {casas.map((casa) => (
                          <option key={casa.id} value={casa.id}>
                            {casa.nome}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Odd Casa 1
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={isNaN(formData.odd1) ? '' : formData.odd1}
                    onChange={(e) => setFormData({...formData, odd1: parseFloat(e.target.value)})}
                    className="input-field"
                    placeholder="2.50"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Odd Casa 2
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={isNaN(formData.odd2) ? '' : formData.odd2}
                    onChange={(e) => setFormData({...formData, odd2: parseFloat(e.target.value)})}
                    className="input-field"
                    placeholder="1.80"
                    required
                  />
                </div>
              </div>

              {(formData.tipo === '3_resultados' || formData.tipo === '4_resultados') && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Odd Casa 3
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      value={isNaN(formData.odd3) ? '' : formData.odd3}
                      onChange={(e) => setFormData({...formData, odd3: parseFloat(e.target.value)})}
                      className="input-field"
                      placeholder="3.20"
                      required={formData.tipo === '3_resultados' || formData.tipo === '4_resultados'}
                    />
                  </div>
                  {formData.tipo === '4_resultados' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Odd Casa 4
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        value={isNaN(formData.odd4) ? '' : formData.odd4}
                        onChange={(e) => setFormData({...formData, odd4: parseFloat(e.target.value)})}
                        className="input-field"
                        placeholder="4.50"
                        required
                      />
                    </div>
                  )}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Stake Casa 1
                  </label>
                  <input
                    type="text"
                    value={isNaN(formData.stake1) ? '' : formData.stake1}
                    onChange={e => setFormData({ ...formData, stake1: parseFloat(e.target.value.replace(',', '.')) || 0 })}
                    className="input-field"
                    placeholder="100,00"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Stake Casa 2
                  </label>
                  <input
                    type="text"
                    value={isNaN(formData.stake2) ? '' : formData.stake2}
                    onChange={e => setFormData({ ...formData, stake2: parseFloat(e.target.value.replace(',', '.')) || 0 })}
                    className="input-field"
                    placeholder="138,89"
                    required
                  />
                </div>
              </div>

              {(formData.tipo === '3_resultados' || formData.tipo === '4_resultados') && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Stake Casa 3
                    </label>
                    <input
                      type="text"
                      value={isNaN(formData.stake3) ? '' : formData.stake3}
                      onChange={e => setFormData({ ...formData, stake3: parseFloat(e.target.value.replace(',', '.')) || 0 })}
                      className="input-field"
                      placeholder="78,13"
                      required={formData.tipo === '3_resultados' || formData.tipo === '4_resultados'}
                    />
                  </div>
                  {formData.tipo === '4_resultados' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Stake Casa 4
                      </label>
                      <input
                        type="text"
                        value={isNaN(formData.stake4) ? '' : formData.stake4}
                        onChange={e => setFormData({ ...formData, stake4: parseFloat(e.target.value.replace(',', '.')) || 0 })}
                        className="input-field"
                        placeholder="55,56"
                        required
                      />
                    </div>
                  )}
                </div>
              )}

              {(formData.tipo === '2_resultados' || formData.tipo === '3_resultados' || formData.tipo === '4_resultados') && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Lucro Previsto Casa 1</label>
                    <input
                      type="text"
                      value={
                        formData.stake1 > 0 && formData.odd1 > 0 && formData.valorTotalInvestir > 0
                          ? ((formData.stake1 * formData.odd1) - formData.valorTotalInvestir).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                          : ''
                      }
                      className="input-field bg-gray-100"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Lucro Previsto Casa 2</label>
                    <input
                      type="text"
                      value={
                        formData.stake2 > 0 && formData.odd2 > 0 && formData.valorTotalInvestir > 0
                          ? ((formData.stake2 * formData.odd2) - formData.valorTotalInvestir).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                          : ''
                      }
                      className="input-field bg-gray-100"
                      readOnly
                    />
                  </div>
                </div>
              )}
              {(formData.tipo === '3_resultados' || formData.tipo === '4_resultados') && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Lucro Previsto Casa 3</label>
                    <input
                      type="text"
                      value={
                        formData.stake3 > 0 && formData.odd3 > 0 && formData.valorTotalInvestir > 0
                          ? ((formData.stake3 * formData.odd3) - formData.valorTotalInvestir).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                          : ''
                      }
                      className="input-field bg-gray-100"
                      readOnly
                    />
                  </div>
                  {formData.tipo === '4_resultados' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Lucro Previsto Casa 4</label>
                      <input
                        type="text"
                        value={
                          formData.stake4 > 0 && formData.odd4 > 0 && formData.valorTotalInvestir > 0
                            ? ((formData.stake4 * formData.odd4) - formData.valorTotalInvestir).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                            : ''
                        }
                        className="input-field bg-gray-100"
                        readOnly
                      />
                    </div>
                  )}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                    className="input-field"
                  >
                    <option value="identificada">Identificada</option>
                    <option value="executada">Executada</option>
                    <option value="perdida">Perdida</option>
                    <option value="cancelada">Cancelada</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Resultado Casa 1
                  </label>
                  <input
                    type="text"
                    value={formData.resultado1}
                    onChange={(e) => setFormData({...formData, resultado1: e.target.value})}
                    className="input-field"
                    placeholder="Ex: Vitória Time 1, 2-0, etc."
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Resultado Casa 2
                  </label>
                  <input
                    type="text"
                    value={formData.resultado2}
                    onChange={(e) => setFormData({...formData, resultado2: e.target.value})}
                    className="input-field"
                    placeholder="Ex: Vitória Time 2, Empate, etc."
                    required
                  />
                </div>
              </div>

              {(formData.tipo === '3_resultados' || formData.tipo === '4_resultados') && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Resultado Casa 3
                    </label>
                    <input
                      type="text"
                      value={formData.resultado3}
                      onChange={(e) => setFormData({...formData, resultado3: e.target.value})}
                      className="input-field"
                      placeholder="Ex: Empate, 2-1, etc."
                      required={formData.tipo === '3_resultados' || formData.tipo === '4_resultados'}
                    />
                  </div>
                  {formData.tipo === '4_resultados' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Resultado Casa 4
                      </label>
                      <input
                        type="text"
                        value={formData.resultado4}
                        onChange={(e) => setFormData({...formData, resultado4: e.target.value})}
                        className="input-field"
                        placeholder="Ex: 1-2, 0-2, etc."
                        required
                      />
                    </div>
                  )}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Valor Total a Investir
                  </label>
                  <input
                    type="number"
                    min="1"
                    step="0.01"
                    value={isNaN(formData.valorTotalInvestir) ? '' : formData.valorTotalInvestir}
                    onChange={e => setFormData({ ...formData, valorTotalInvestir: parseFloat(e.target.value) })}
                    className="input-field"
                    required
                  />
                </div>
              </div>

              <button type="button" onClick={calcularStakes} className="bg-blue-100 text-blue-700 px-3 py-1 rounded mb-2">Calcular Stakes Automaticamente</button>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false)
                    setEditingArbitragem(null)
                    resetForm()
                  }}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn-primary">
                  {editingArbitragem ? 'Atualizar Arbitragem' : 'Salvar Arbitragem'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal de finalizar arbitragem */}
      {showFinalizarModal && arbitragemParaFinalizar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Finalizar Arbitragem</h2>
              <button
                onClick={() => {
                  setShowFinalizarModal(false)
                  setArbitragemParaFinalizar(null)
                  setLadoVencedor('')
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircle className="h-6 w-6" />
              </button>
            </div>
            
            <div className="mb-4">
              <p className="text-gray-600 mb-2">
                <strong>Evento:</strong> {arbitragemParaFinalizar.evento}
              </p>
              <p className="text-gray-600 mb-4">
                Selecione qual lado venceu para atualizar os saldos automaticamente:
              </p>
              
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="ladoVencedor"
                    value="casa1"
                    checked={ladoVencedor === 'casa1'}
                    onChange={(e) => setLadoVencedor(e.target.value as 'casa1' | 'casa2' | 'casa3' | 'casa4')}
                    className="text-blue-600"
                  />
                  <span className="text-sm">
                    <strong>{arbitragemParaFinalizar.casa1.nome}</strong> - {arbitragemParaFinalizar.resultado1} (Odd: {arbitragemParaFinalizar.odd1})
                  </span>
                </label>
                
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="ladoVencedor"
                    value="casa2"
                    checked={ladoVencedor === 'casa2'}
                    onChange={(e) => setLadoVencedor(e.target.value as 'casa1' | 'casa2' | 'casa3' | 'casa4')}
                    className="text-blue-600"
                  />
                  <span className="text-sm">
                    <strong>{arbitragemParaFinalizar.casa2.nome}</strong> - {arbitragemParaFinalizar.resultado2} (Odd: {arbitragemParaFinalizar.odd2})
                  </span>
                </label>

                {arbitragemParaFinalizar.tipo === '3_resultados' && arbitragemParaFinalizar.casa3 && (
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="ladoVencedor"
                      value="casa3"
                      checked={ladoVencedor === 'casa3'}
                      onChange={(e) => setLadoVencedor(e.target.value as 'casa1' | 'casa2' | 'casa3' | 'casa4')}
                      className="text-blue-600"
                    />
                    <span className="text-sm">
                      <strong>{arbitragemParaFinalizar.casa3.nome}</strong> - {arbitragemParaFinalizar.resultado3} (Odd: {arbitragemParaFinalizar.odd3})
                    </span>
                  </label>
                )}

                {arbitragemParaFinalizar.tipo === '4_resultados' && arbitragemParaFinalizar.casa3 && arbitragemParaFinalizar.casa4 && (
                  <>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="ladoVencedor"
                        value="casa3"
                        checked={ladoVencedor === 'casa3'}
                        onChange={(e) => setLadoVencedor(e.target.value as 'casa1' | 'casa2' | 'casa3' | 'casa4')}
                        className="text-blue-600"
                      />
                      <span className="text-sm">
                        <strong>{arbitragemParaFinalizar.casa3.nome}</strong> - {arbitragemParaFinalizar.resultado3} (Odd: {arbitragemParaFinalizar.odd3})
                      </span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="ladoVencedor"
                        value="casa4"
                        checked={ladoVencedor === 'casa4'}
                        onChange={(e) => setLadoVencedor(e.target.value as 'casa1' | 'casa2' | 'casa3' | 'casa4')}
                        className="text-blue-600"
                      />
                      <span className="text-sm">
                        <strong>{arbitragemParaFinalizar.casa4.nome}</strong> - {arbitragemParaFinalizar.resultado4} (Odd: {arbitragemParaFinalizar.odd4})
                      </span>
                    </label>
                  </>
                )}
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  setShowFinalizarModal(false)
                  setArbitragemParaFinalizar(null)
                  setLadoVencedor('')
                }}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                onClick={confirmarFinalizar}
                disabled={!ladoVencedor}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Finalizar Arbitragem
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 