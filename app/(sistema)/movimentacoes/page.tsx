'use client'

import { useState, useEffect } from 'react'
import { Plus, Search, Filter, DollarSign, TrendingUp, TrendingDown, Calendar, Pencil, Trash2, Wallet, XCircle } from 'lucide-react'
import { casasAPI, Casa } from '@/lib/api'
import { movimentacoesAPI } from '@/lib/api'
import { useAuth } from '@/components/AuthProvider'

interface Movimentacao {
  id: number
  casaId: number
  tipo: 'deposito' | 'saque'
  valor: number
  data: string
  observacao?: string
  casa: Casa
}

interface SaldoCasa {
  casaId: number
  saldo: number
}

export default function MovimentacoesPage() {
  const { token } = useAuth()
  const [movimentacoes, setMovimentacoes] = useState<Movimentacao[]>([])
  const [casas, setCasas] = useState<Casa[]>([])
  const [saldos, setSaldos] = useState<SaldoCasa[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editingMovimentacao, setEditingMovimentacao] = useState<Movimentacao | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterTipo, setFilterTipo] = useState('todos')
  const [filterCasa, setFilterCasa] = useState('todos')
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState("")
  const [formData, setFormData] = useState({
    casaId: 0,
    tipo: 'deposito' as 'deposito' | 'saque',
    valor: 0,
    observacao: ''
  })
  const [mostrarAuto, setMostrarAuto] = useState(false)
  const [selecionadas, setSelecionadas] = useState<number[]>([])
  const [loadingCasas, setLoadingCasas] = useState(true)
  const [erroCasas, setErroCasas] = useState("")

  // Carregar dados da API
  useEffect(() => {
    async function fetchMovimentacoes() {
      try {
        const data = await movimentacoesAPI.getAll();
        setMovimentacoes(Array.isArray(data) ? data : []);
      } catch (e) {
        setErro("Erro ao carregar movimentações");
        setMovimentacoes([]);
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchMovimentacoes();
  }, [])

  useEffect(() => {
    if (!token) return;
    setLoadingCasas(true);
    casasAPI.getAll()
      .then(data => setCasas(Array.isArray(data) ? data : []))
      .catch(() => {
        setCasas([]);
        setErroCasas("Erro ao carregar casas");
      })
      .finally(() => setLoadingCasas(false));
  }, [token]);

  const loadData = async () => {
    try {
      setLoading(true);
      const [movimentacoesData, casasData] = await Promise.all([
        movimentacoesAPI.getAll(),
        casasAPI.getAll()
      ]);
      setMovimentacoes(Array.isArray(movimentacoesData) ? movimentacoesData : []);
      setCasas(Array.isArray(casasData) ? casasData : []);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    } finally {
      setLoading(false);
    }
  };

  // Novo useEffect para carregar saldos
  useEffect(() => {
    if (!token || casas.length === 0) return;
    async function fetchSaldos() {
      const saldosData = await Promise.all(
        casas.map(async (casa) => {
          const response = await fetch(`http://localhost:3000/api/casas/${casa.id}/saldo`, {
            headers: { 'Authorization': `Bearer ${token}` }
          });
          const saldo = await response.json();
          return { casaId: casa.id, saldo: saldo.saldo };
        })
      );
      setSaldos(saldosData);
    }
    fetchSaldos();
  }, [token, casas]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editingMovimentacao) {
        await fetch(`http://localhost:3000/api/movimentacoes/${editingMovimentacao.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(formData)
        })
      } else {
        await movimentacoesAPI.create(formData)
      }
      setShowForm(false)
      setEditingMovimentacao(null)
      resetForm()
      loadData()
    } catch (error) {
      console.error('Erro ao salvar movimentação:', error)
    }
  }

  const handleEdit = (movimentacao: Movimentacao) => {
    setEditingMovimentacao(movimentacao)
    setFormData({
      casaId: movimentacao.casaId,
      tipo: movimentacao.tipo,
      valor: movimentacao.valor,
      observacao: movimentacao.observacao || ''
    })
    setShowForm(true)
  }

  const handleDelete = async (id: number) => {
    if (confirm('Tem certeza que deseja deletar esta movimentação?')) {
      try {
        await movimentacoesAPI.delete(id)
        loadData()
      } catch (error) {
        console.error('Erro ao deletar movimentação:', error)
      }
    }
  }

  const resetForm = () => {
    setFormData({
      casaId: 0,
      tipo: 'deposito',
      valor: 0,
      observacao: ''
    })
  }

  const getTipoIcon = (tipo: string) => {
    return tipo === 'deposito' 
      ? <TrendingUp className="h-5 w-5 text-green-500" />
      : <TrendingDown className="h-5 w-5 text-red-500" />
  }

  const getTipoText = (tipo: string) => {
    return tipo === 'deposito' ? 'Depósito' : 'Saque'
  }

  const getTipoColor = (tipo: string) => {
    return tipo === 'deposito' 
      ? 'text-green-600 bg-green-100' 
      : 'text-red-600 bg-red-100'
  }

  const filteredMovimentacoes = Array.isArray(movimentacoes)
    ? movimentacoes.filter(mov => {
        const matchesSearch = mov.observacao?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             mov.casa.nome.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesTipo = filterTipo === 'todos' || mov.tipo === filterTipo
        const matchesCasa = filterCasa === 'todos' || mov.casaId.toString() === filterCasa
        // Oculta movimentações automáticas de arbitragem e rodadas grátis se mostrarAuto for false
        const isArbitragem = mov.observacao?.toLowerCase().includes('arbitragem')
        const isFreeSpin = mov.observacao?.toLowerCase().includes('rodada grátis')
        return matchesSearch && matchesTipo && matchesCasa && (mostrarAuto || (!isArbitragem && !isFreeSpin))
      })
    : []

  const totalDepositos = Array.isArray(movimentacoes)
    ? movimentacoes.filter(m => m.tipo === 'deposito').reduce((sum, m) => sum + m.valor, 0)
    : 0;

  const totalSaques = Array.isArray(movimentacoes)
    ? movimentacoes.filter(m => m.tipo === 'saque').reduce((sum, m) => sum + m.valor, 0)
    : 0;

  const saldoTotal = saldos.reduce((sum, s) => sum + s.saldo, 0)

  // Função para alternar seleção
  const toggleSelecionada = (id: number) => {
    setSelecionadas((prev) =>
      prev.includes(id) ? prev.filter(sid => sid !== id) : [...prev, id]
    )
  }

  // Selecionar/desselecionar todas
  const toggleSelecionarTodas = () => {
    if (selecionadas.length === filteredMovimentacoes.length) {
      setSelecionadas([])
    } else {
      setSelecionadas(filteredMovimentacoes.map(m => m.id))
    }
  }

  // Excluir selecionadas
  const excluirSelecionadas = async () => {
    if (selecionadas.length === 0) return
    if (!confirm('Tem certeza que deseja excluir as movimentações selecionadas?')) return
    try {
      await fetch('http://localhost:3000/api/movimentacoes/batch', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: selecionadas })
      })
      setSelecionadas([])
      loadData()
    } catch (error) {
      alert('Erro ao excluir movimentações em lote')
    }
  }

  if (loading) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg text-gray-600">Carregando movimentações...</div>
        </div>
      </div>
    )
  }

  if (erro) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-center h-64 text-red-600">
          {erro}
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Movimentações</h1>
          <p className="text-gray-600">Gerencie depósitos e saques das casas de apostas</p>
        </div>
        <button
          onClick={() => {
            resetForm()
            setEditingMovimentacao(null)
            setShowForm(true)
          }}
          className="btn-primary flex items-center"
        >
          <Plus className="h-4 w-4 mr-2" />
          Nova Movimentação
        </button>
      </div>

      {/* Botão para mostrar/ocultar movimentações automáticas */}
      <div className="mb-4">
        <label className="inline-flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={mostrarAuto}
            onChange={e => setMostrarAuto(e.target.checked)}
            className="form-checkbox h-4 w-4 text-blue-600"
          />
          Mostrar movimentações automáticas de arbitragem e rodadas grátis
        </label>
      </div>

      {/* Cards de resumo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Depósitos</p>
              <p className="text-2xl font-bold text-green-600">
                R$ {totalDepositos.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Saques</p>
              <p className="text-2xl font-bold text-red-600">
                R$ {totalSaques.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div className="p-3 bg-red-100 rounded-full">
              <TrendingDown className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Saldo Total</p>
              <p className="text-2xl font-bold text-blue-600">
                {saldoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Wallet className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Saldos por casa */}
      <div className="card mb-6">
        <h2 className="text-lg font-semibold mb-4">Saldos por Casa</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {casas.map((casa) => {
            const saldo = saldos.find(s => s.casaId === casa.id)?.saldo || 0
            return (
              <div key={casa.id} className="p-4 border rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{casa.nome}</span>
                  <span className={`font-bold ${saldo >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    R$ {saldo.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
              </div>
            )
          })}
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
                placeholder="Buscar por observação ou casa..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select
              value={filterTipo}
              onChange={(e) => setFilterTipo(e.target.value)}
              className="input-field"
            >
              <option value="todos">Todos os tipos</option>
              <option value="deposito">Depósitos</option>
              <option value="saque">Saques</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <select
              value={filterCasa}
              onChange={(e) => setFilterCasa(e.target.value)}
              className="input-field"
            >
              <option value="todos">Todas as casas</option>
              {casas.map((casa) => (
                <option key={casa.id} value={casa.id.toString()}>
                  {casa.nome}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Botão de exclusão múltipla */}
      {selecionadas.length > 0 && (
        <div className="mb-4">
          <button
            onClick={excluirSelecionadas}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Excluir selecionadas ({selecionadas.length})
          </button>
        </div>
      )}

      {/* Lista de movimentações */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-4">
                  <input
                    type="checkbox"
                    checked={selecionadas.length === filteredMovimentacoes.length && filteredMovimentacoes.length > 0}
                    onChange={toggleSelecionarTodas}
                  />
                </th>
                <th className="text-left py-3 px-4">Casa</th>
                <th className="text-left py-3 px-4">Tipo</th>
                <th className="text-left py-3 px-4">Valor</th>
                <th className="text-left py-3 px-4">Data</th>
                <th className="text-left py-3 px-4">Observação</th>
                <th className="text-left py-3 px-4">Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredMovimentacoes.map((movimentacao) => (
                <tr key={movimentacao.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <input
                      type="checkbox"
                      checked={selecionadas.includes(movimentacao.id)}
                      onChange={() => toggleSelecionada(movimentacao.id)}
                    />
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-medium">{movimentacao.casa.nome}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${getTipoColor(movimentacao.tipo)}`}>
                      {getTipoIcon(movimentacao.tipo)}
                      <span className="ml-1">{getTipoText(movimentacao.tipo)}</span>
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`font-bold ${movimentacao.tipo === 'deposito' ? 'text-green-600' : 'text-red-600'}`}>
                      R$ {movimentacao.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    {new Date(movimentacao.data).toLocaleDateString('pt-BR')}
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm text-gray-600">
                      {movimentacao.observacao || '-'}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(movimentacao)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(movimentacao.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
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
              <h2 className="text-xl font-bold">
                {editingMovimentacao ? 'Editar Movimentação' : 'Nova Movimentação'}
              </h2>
              <button
                onClick={() => {
                  setShowForm(false)
                  setEditingMovimentacao(null)
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
                  Casa
                </label>
                <select
                  value={formData.casaId}
                  onChange={(e) => setFormData({...formData, casaId: parseInt(e.target.value)})}
                  className="input-field"
                  required
                  disabled={loadingCasas || casas.length === 0}
                >
                  <option value={0}>Selecione a casa</option>
                  {casas.map((casa) => (
                    <option key={casa.id} value={casa.id}>
                      {casa.nome}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo
                </label>
                <select
                  value={formData.tipo}
                  onChange={(e) => setFormData({...formData, tipo: e.target.value as 'deposito' | 'saque'})}
                  className="input-field"
                  required
                >
                  <option value="deposito">Depósito</option>
                  <option value="saque">Saque</option>
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
                  placeholder="0.00"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Observação
                </label>
                <textarea
                  value={formData.observacao}
                  onChange={(e) => setFormData({...formData, observacao: e.target.value})}
                  className="input-field"
                  placeholder="Descrição da movimentação..."
                  rows={3}
                />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false)
                    setEditingMovimentacao(null)
                    resetForm()
                  }}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn-primary">
                  {editingMovimentacao ? 'Atualizar Movimentação' : 'Salvar Movimentação'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
} 