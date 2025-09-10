'use client'

import { useState, useEffect } from 'react'
import { Plus, Search, Filter, Building2, Star, Globe, Phone, Mail, XCircle } from 'lucide-react'
import { casasAPI, Casa } from '@/lib/api'

export default function CasasPage() {
  const [casas, setCasas] = useState<Casa[]>([])
  const [showForm, setShowForm] = useState(false)
  const [selectedCasa, setSelectedCasa] = useState<Casa | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('todos')
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    nome: '',
    pais: '',
    licenca: '',
    avaliacao: 0,
    status: 'ativa',
    bonusBoasVindas: '',
    bonusRecarga: '',
    tempoSaque: '',
    metodosPagamento: '',
    telefone: '',
    email: '',
    site: '',
    observacoes: ''
  })

  // Carregar casas da API
  useEffect(() => {
    loadCasas()
  }, [])

  const loadCasas = async () => {
    try {
      setLoading(true)
      const data = await casasAPI.getAll()
      setCasas(data)
    } catch (error) {
      console.error('Erro ao carregar casas:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (selectedCasa) {
        await casasAPI.update(selectedCasa.id, formData)
      } else {
        await casasAPI.create(formData)
      }
      setShowForm(false)
      setSelectedCasa(null)
      resetForm()
      loadCasas()
    } catch (error) {
      console.error('Erro ao salvar casa:', error)
    }
  }

  const handleDelete = async (id: number) => {
    if (confirm('Tem certeza que deseja deletar esta casa?')) {
      try {
        await casasAPI.delete(id)
        loadCasas()
      } catch (error) {
        console.error('Erro ao deletar casa:', error)
      }
    }
  }

  const resetForm = () => {
    setFormData({
      nome: '',
      pais: '',
      licenca: '',
      avaliacao: 0,
      status: 'ativa',
      bonusBoasVindas: '',
      bonusRecarga: '',
      tempoSaque: '',
      metodosPagamento: '',
      telefone: '',
      email: '',
      site: '',
      observacoes: ''
    })
  }

  const openEditForm = (casa: Casa) => {
    setSelectedCasa(casa)
    setFormData({
      nome: casa.nome,
      pais: casa.pais,
      licenca: casa.licenca || '',
      avaliacao: casa.avaliacao || 0,
      status: casa.status || 'ativa',
      bonusBoasVindas: casa.bonusBoasVindas || '',
      bonusRecarga: casa.bonusRecarga || '',
      tempoSaque: casa.tempoSaque || '',
      metodosPagamento: casa.metodosPagamento || '',
      telefone: casa.telefone || '',
      email: casa.email || '',
      site: casa.site || '',
      observacoes: casa.observacoes || ''
    })
    setShowForm(true)
  }

  const filteredCasas = casas.filter(casa => {
    const matchesSearch = casa.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         casa.pais.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'todos' || casa.status === filterStatus
    
    return matchesSearch && matchesStatus
  })

  const renderStars = (avaliacao: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(avaliacao) 
            ? 'text-yellow-400 fill-current' 
            : i < avaliacao 
              ? 'text-yellow-400' 
              : 'text-gray-300'
        }`}
      />
    ))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ativa':
        return 'text-green-600 bg-green-100'
      case 'suspensa':
        return 'text-yellow-600 bg-yellow-100'
      case 'inativa':
        return 'text-red-600 bg-red-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  if (loading) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg text-gray-600">Carregando casas...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Casas de Apostas</h1>
          <p className="text-gray-600">Gerencie suas casas de apostas e bônus</p>
        </div>
        <button
          onClick={() => {
            setSelectedCasa(null)
            resetForm()
            setShowForm(true)
          }}
          className="btn-primary flex items-center"
        >
          <Plus className="h-4 w-4 mr-2" />
          Nova Casa
        </button>
      </div>

      {/* Filtros */}
      <div className="card mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por nome ou país..."
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
              <option value="todos">Todas as casas</option>
              <option value="ativa">Ativa</option>
              <option value="suspensa">Suspensa</option>
              <option value="inativa">Inativa</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid de casas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCasas.map((casa) => (
          <div
            key={casa.id}
            className="card cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedCasa(casa)}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{casa.nome}</h3>
                <p className="text-sm text-gray-600">{casa.pais}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(casa.status)}`}>
                {casa.status.toUpperCase()}
              </span>
            </div>

            <div className="flex items-center mb-3">
              {casa.avaliacao && renderStars(casa.avaliacao)}
              {casa.avaliacao && (
                <span className="text-sm text-gray-600 ml-2">({casa.avaliacao})</span>
              )}
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Licença:</span>
                <span className="font-medium">{casa.licenca || '-'}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Bônus Boas-vindas:</span>
                <span className="font-medium text-green-600">{casa.bonusBoasVindas || '-'}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tempo Saque:</span>
                <span className="font-medium">{casa.tempoSaque || '-'}</span>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  openEditForm(casa)
                }}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Editar
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleDelete(casa.id)
                }}
                className="text-sm text-red-600 hover:text-red-800"
              >
                Deletar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de detalhes da casa */}
      {selectedCasa && !showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{selectedCasa.nome}</h2>
              <button
                onClick={() => setSelectedCasa(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircle className="h-6 w-6" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Informações Gerais</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">País:</span>
                    <span className="font-medium">{selectedCasa.pais}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Licença:</span>
                    <span className="font-medium">{selectedCasa.licenca || '-'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Avaliação:</span>
                    <div className="flex items-center">
                      {selectedCasa.avaliacao && renderStars(selectedCasa.avaliacao)}
                      {selectedCasa.avaliacao && (
                        <span className="ml-2">({selectedCasa.avaliacao})</span>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className={`px-2 py-1 rounded text-xs ${getStatusColor(selectedCasa.status)}`}>
                      {selectedCasa.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Bônus e Promoções</h3>
                <div className="space-y-2">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="text-sm font-medium text-green-800">Boas-vindas</p>
                    <p className="text-sm text-green-600">{selectedCasa.bonusBoasVindas || '-'}</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm font-medium text-blue-800">Recarga</p>
                    <p className="text-sm text-blue-600">{selectedCasa.bonusRecarga || '-'}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-gray-900 mb-3">Contato</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">{selectedCasa.telefone || '-'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">{selectedCasa.email || '-'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">{selectedCasa.site || '-'}</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-gray-900 mb-3">Observações</h3>
              <p className="text-sm text-gray-600">{selectedCasa.observacoes || '-'}</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal de formulário */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                {selectedCasa ? 'Editar Casa' : 'Nova Casa de Apostas'}
              </h2>
              <button
                onClick={() => {
                  setShowForm(false)
                  setSelectedCasa(null)
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
                    Nome da Casa
                  </label>
                  <input
                    type="text"
                    value={formData.nome}
                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                    className="input-field"
                    placeholder="Ex: Bet365"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    País
                  </label>
                  <input
                    type="text"
                    value={formData.pais}
                    onChange={(e) => setFormData({...formData, pais: e.target.value})}
                    className="input-field"
                    placeholder="Ex: Reino Unido"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Licença
                  </label>
                  <input
                    type="text"
                    value={formData.licenca}
                    onChange={(e) => setFormData({...formData, licenca: e.target.value})}
                    className="input-field"
                    placeholder="Ex: Gibraltar"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Avaliação
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="5"
                    value={formData.avaliacao}
                    onChange={(e) => setFormData({...formData, avaliacao: parseFloat(e.target.value)})}
                    className="input-field"
                    placeholder="4.5"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bônus Boas-vindas
                  </label>
                  <input
                    type="text"
                    value={formData.bonusBoasVindas}
                    onChange={(e) => setFormData({...formData, bonusBoasVindas: e.target.value})}
                    className="input-field"
                    placeholder="Ex: 100% até R$ 500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bônus Recarga
                  </label>
                  <input
                    type="text"
                    value={formData.bonusRecarga}
                    onChange={(e) => setFormData({...formData, bonusRecarga: e.target.value})}
                    className="input-field"
                    placeholder="Ex: 50% até R$ 200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tempo de Saque
                  </label>
                  <input
                    type="text"
                    value={formData.tempoSaque}
                    onChange={(e) => setFormData({...formData, tempoSaque: e.target.value})}
                    className="input-field"
                    placeholder="Ex: 24-48h"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    value={formData.status || 'ativa'}
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                    className="input-field"
                  >
                    <option value="ativa">Ativa</option>
                    <option value="suspensa">Suspensa</option>
                    <option value="inativa">Inativa</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false)
                    setSelectedCasa(null)
                    resetForm()
                  }}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn-primary">
                  {selectedCasa ? 'Atualizar Casa' : 'Salvar Casa'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
} 