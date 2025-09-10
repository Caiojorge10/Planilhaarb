'use client'

import { useState, useEffect } from 'react'
import { Plus, Search, Filter, Gift, Calendar, DollarSign, CheckCircle, Clock, XCircle, TrendingUp } from 'lucide-react'
import { freebetsAPI, casasAPI, Freebet, Casa } from '@/lib/api'

export default function FreebetsPage() {
  const [freebets, setFreebets] = useState<Freebet[]>([])
  const [casas, setCasas] = useState<Casa[]>([])
  const [showForm, setShowForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('todos')
  const [filterTipo, setFilterTipo] = useState('todos')
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    casaId: 0,
    valor: 0,
    tipo: 'boas_vindas',
    status: 'ativo',
    dataObtencao: '',
    dataExpiracao: '',
    valorExtraido: 0,
    estrategia: ''
  })

  // Carregar dados da API
  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      setLoading(true)
      const [freebetsData, casasData] = await Promise.all([
        freebetsAPI.getAll(),
        casasAPI.getAll()
      ])
      setFreebets(freebetsData)
      setCasas(casasData)
    } catch (error) {
      console.error('Erro ao carregar dados:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await freebetsAPI.create(formData)
      setShowForm(false)
      resetForm()
      loadData()
    } catch (error) {
      console.error('Erro ao salvar freebet:', error)
    }
  }

  const handleDelete = async (id: number) => {
    if (confirm('Tem certeza que deseja deletar este freebet?')) {
      try {
        await freebetsAPI.delete(id)
        loadData()
      } catch (error) {
        console.error('Erro ao deletar freebet:', error)
      }
    }
  }

  const resetForm = () => {
    setFormData({
      casaId: 0,
      valor: 0,
      tipo: 'boas_vindas',
      status: 'ativo',
      dataObtencao: '',
      dataExpiracao: '',
      valorExtraido: 0,
      estrategia: ''
    })
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ativo':
        return <Clock className="h-5 w-5 text-green-500" />
      case 'usado':
        return <CheckCircle className="h-5 w-5 text-blue-500" />
      case 'expirado':
        return <XCircle className="h-5 w-5 text-red-500" />
      default:
        return null
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'ativo':
        return 'Ativo'
      case 'usado':
        return 'Usado'
      case 'expirado':
        return 'Expirado'
      default:
        return status
    }
  }

  const getTipoText = (tipo: string) => {
    switch (tipo) {
      case 'boas_vindas':
        return 'Boas-vindas'
      case 'recarga':
        return 'Recarga'
      case 'promocao':
        return 'Promoção'
      case 'compensacao':
        return 'Compensação'
      default:
        return tipo
    }
  }

  const filteredFreebets = freebets.filter(freebet => {
    const matchesSearch = freebet.casa.nome.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'todos' || freebet.status === filterStatus
    const matchesTipo = filterTipo === 'todos' || freebet.tipo === filterTipo
    
    return matchesSearch && matchesStatus && matchesTipo
  })

  const totalAtivos = freebets.filter(f => f.status === 'ativo').reduce((sum, f) => sum + f.valor, 0)
  const totalExtraido = freebets.filter(f => f.valorExtraido).reduce((sum, f) => sum + (f.valorExtraido || 0), 0)
  const taxaConversao = freebets.filter(f => f.valorExtraido).length > 0 
    ? (totalExtraido / freebets.filter(f => f.valorExtraido).reduce((sum, f) => sum + f.valor, 0) * 100).toFixed(1)
    : '0'

  if (loading) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg text-gray-600">Carregando freebets...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Freebets</h1>
          <p className="text-gray-600">Gerencie seus bônus e freebets</p>
        </div>
        <button
          onClick={() => {
            resetForm()
            setShowForm(true)
          }}
          className="btn-primary flex items-center"
        >
          <Plus className="h-4 w-4 mr-2" />
          Novo Freebet
        </button>
      </div>

      {/* Cards de métricas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Freebets Ativos</p>
              <p className="text-2xl font-bold text-gray-900">
                R$ {totalAtivos.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <Gift className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Extraído</p>
              <p className="text-2xl font-bold text-gray-900">
                R$ {totalExtraido.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Taxa de Conversão</p>
              <p className="text-2xl font-bold text-gray-900">{taxaConversao}%</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <TrendingUp className="h-6 w-6 text-purple-600" />
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
                placeholder="Buscar por casa..."
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
              <option value="ativo">Ativo</option>
              <option value="usado">Usado</option>
              <option value="expirado">Expirado</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <select
              value={filterTipo}
              onChange={(e) => setFilterTipo(e.target.value)}
              className="input-field"
            >
              <option value="todos">Todos os tipos</option>
              <option value="boas_vindas">Boas-vindas</option>
              <option value="recarga">Recarga</option>
              <option value="promocao">Promoção</option>
              <option value="compensacao">Compensação</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tabela de freebets */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-900">Casa</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Valor</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Tipo</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Data Obtenção</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Data Expiração</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Valor Extraído</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Estratégia</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredFreebets.map((freebet) => (
                <tr key={freebet.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{freebet.casa.nome}</td>
                  <td className="py-3 px-4 text-gray-600">R$ {freebet.valor.toLocaleString('pt-BR')}</td>
                  <td className="py-3 px-4 text-gray-600">{getTipoText(freebet.tipo)}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(freebet.status)}
                      <span className="text-sm">{getStatusText(freebet.status)}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{new Date(freebet.dataObtencao).toLocaleDateString('pt-BR')}</td>
                  <td className="py-3 px-4 text-gray-600">{new Date(freebet.dataExpiracao).toLocaleDateString('pt-BR')}</td>
                  <td className="py-3 px-4 text-gray-600">
                    {freebet.valorExtraido 
                      ? `R$ ${freebet.valorExtraido.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
                      : '-'
                    }
                  </td>
                  <td className="py-3 px-4 text-gray-600">{freebet.estrategia || '-'}</td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => handleDelete(freebet.id)}
                      className="text-sm text-red-600 hover:text-red-800"
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal de formulário */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Novo Freebet</h2>
              <button
                onClick={() => {
                  setShowForm(false)
                  resetForm()
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircle className="h-6 w-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Casa de Apostas
                </label>
                <select
                  value={formData.casaId}
                  onChange={(e) => setFormData({...formData, casaId: parseInt(e.target.value)})}
                  className="input-field"
                  required
                >
                  <option value={0}>Selecione uma casa</option>
                  {casas.map((casa) => (
                    <option key={casa.id} value={casa.id}>
                      {casa.nome}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Valor
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={formData.valor}
                  onChange={(e) => setFormData({...formData, valor: parseFloat(e.target.value)})}
                  className="input-field"
                  placeholder="100"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo
                </label>
                <select
                  value={formData.tipo}
                  onChange={(e) => setFormData({...formData, tipo: e.target.value})}
                  className="input-field"
                >
                  <option value="boas_vindas">Boas-vindas</option>
                  <option value="recarga">Recarga</option>
                  <option value="promocao">Promoção</option>
                  <option value="compensacao">Compensação</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Data de Obtenção
                </label>
                <input
                  type="date"
                  value={formData.dataObtencao}
                  onChange={(e) => setFormData({...formData, dataObtencao: e.target.value})}
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Data de Expiração
                </label>
                <input
                  type="date"
                  value={formData.dataExpiracao}
                  onChange={(e) => setFormData({...formData, dataExpiracao: e.target.value})}
                  className="input-field"
                  required
                />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false)
                    resetForm()
                  }}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn-primary">
                  Salvar Freebet
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
} 