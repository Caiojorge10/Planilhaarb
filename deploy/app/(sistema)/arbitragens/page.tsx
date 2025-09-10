'use client'

import { useState, useEffect } from 'react'
import { Plus, Search, Filter, TrendingUp, Calendar, DollarSign, CheckCircle, Clock, XCircle, Target, Pencil } from 'lucide-react'
import { arbitragensAPI, casasAPI, Arbitragem, Casa } from '@/lib/api'
import { useAuth } from '@/components/AuthProvider'
import { Combobox } from '@headlessui/react'

interface ArbitragemFormData {
  evento: string;
  esporte: string;
  tipo: string;
  casa1Id: number;
  casa2Id: number;
  casa3Id: number;
  casa4Id: number;
  casa5Id: number;
  odd1: string;
  odd2: string;
  odd3: string;
  odd4: string;
  odd5: string;
  stake1: string;
  stake2: string;
  stake3: string;
  stake4: string;
  stake5: string;
  resultado1: string;
  resultado2: string;
  resultado3: string;
  resultado4: string;
  resultado5: string;
  valorTotalInvestir: string;
  lucroEsperado: string;
  status: string;
  freebet1?: boolean;
  freebet2?: boolean;
  freebet3?: boolean;
  freebet4?: boolean;
  freebet5?: boolean;
  casa1Search?: string;
  casa2Search?: string;
  casa3Search?: string;
  casa4Search?: string;
  casa5Search?: string;
}

export default function ArbitragensPage() {
  const { token } = useAuth()
  const [arbitragens, setArbitragens] = useState<Arbitragem[]>([])
  const [casas, setCasas] = useState<Casa[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editingArbitragem, setEditingArbitragem] = useState<Arbitragem | null>(null)
  const [showFinalizarModal, setShowFinalizarModal] = useState(false)
  const [arbitragemParaFinalizar, setArbitragemParaFinalizar] = useState<Arbitragem | null>(null)
  const [ladosVencedores, setLadosVencedores] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('todos')
  const [filterEsporte, setFilterEsporte] = useState('todos')
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState<ArbitragemFormData>({
    evento: '',
    esporte: '',
    tipo: '2_resultados',
    casa1Id: 0,
    casa2Id: 0,
    casa3Id: 0,
    casa4Id: 0,
    casa5Id: 0,
    odd1: '',
    odd2: '',
    odd3: '',
    odd4: '',
    odd5: '',
    stake1: '',
    stake2: '',
    stake3: '',
    stake4: '',
    stake5: '',
    resultado1: '',
    resultado2: '',
    resultado3: '',
    resultado4: '',
    resultado5: '',
    valorTotalInvestir: '100',
    lucroEsperado: '',
    status: 'identificada',
    freebet1: false,
    freebet2: false,
    freebet3: false,
    freebet4: false,
    freebet5: false,
    casa1Search: '',
    casa2Search: '',
    casa3Search: '',
    casa4Search: '',
    casa5Search: '',
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

  const handleNumericChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (!/^(\d+([,.]\d*)?)?$/.test(value)) {
        return;
    }
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const parseLocaleNumber = (stringNumber: string) => {
    if (!stringNumber) return 0;
    return parseFloat(stringNumber.replace('.', '').replace(',', '.'));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

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
    if (formData.tipo === '5_resultados' && (formData.casa3Id <= 0 || formData.casa4Id <= 0 || formData.casa5Id <= 0)) {
      alert('Selecione casas válidas para Casa 3, Casa 4 e Casa 5.')
      return
    }
    
    const parsedData = {
        ...formData,
        odd1: parseLocaleNumber(formData.odd1),
        odd2: parseLocaleNumber(formData.odd2),
        odd3: parseLocaleNumber(formData.odd3),
        odd4: parseLocaleNumber(formData.odd4),
        odd5: parseLocaleNumber(formData.odd5),
        stake1: parseLocaleNumber(formData.stake1),
        stake2: parseLocaleNumber(formData.stake2),
        stake3: parseLocaleNumber(formData.stake3),
        stake4: parseLocaleNumber(formData.stake4),
        stake5: parseLocaleNumber(formData.stake5),
        valorTotalInvestir: parseLocaleNumber(formData.valorTotalInvestir),
        lucroEsperado: parseLocaleNumber(formData.lucroEsperado),
    };

    // Validação de campos numéricos
    const camposNumericos = [parsedData.odd1, parsedData.odd2, parsedData.stake1, parsedData.stake2]
    if (formData.tipo === '3_resultados') {
      camposNumericos.push(parsedData.odd3, parsedData.stake3)
    }
    if (formData.tipo === '4_resultados') {
      camposNumericos.push(parsedData.odd3, parsedData.stake3, parsedData.odd4, parsedData.stake4)
    }
    if (formData.tipo === '5_resultados') {
      camposNumericos.push(parsedData.odd3, parsedData.stake3, parsedData.odd4, parsedData.stake4, parsedData.odd5, parsedData.stake5)
    }
    if (camposNumericos.some(v => isNaN(v) || v === null || v === undefined)) {
      alert('Preencha todos os campos numéricos corretamente.')
      return
    }

    try {
      // Remover campos de casas não usados ou inválidos, mas manter valorTotalInvestir
      const dataParaApi: any = { ...parsedData };
      if (!dataParaApi.casa3Id || dataParaApi.casa3Id <= 0) delete dataParaApi.casa3Id;
      if (!dataParaApi.casa4Id || dataParaApi.casa4Id <= 0) delete dataParaApi.casa4Id;
      if (!dataParaApi.casa5Id || dataParaApi.casa5Id <= 0) delete dataParaApi.casa5Id;
      if (formData.tipo === '2_resultados') {
        delete dataParaApi.casa3Id; delete dataParaApi.casa4Id; delete dataParaApi.casa5Id;
      }
      if (formData.tipo === '3_resultados') {
        delete dataParaApi.casa4Id; delete dataParaApi.casa5Id;
      }
      if (formData.tipo === '4_resultados') {
        delete dataParaApi.casa5Id;
      }
      // Remover campos de busca que são apenas para o frontend
      delete dataParaApi.casa1Search;
      delete dataParaApi.casa2Search;
      delete dataParaApi.casa3Search;
      delete dataParaApi.casa4Search;
      delete dataParaApi.casa5Search;
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
      casa3Id: arbitragem.casa3Id ?? 0,
      casa4Id: arbitragem.casa4Id ?? 0,
      casa5Id: arbitragem.casa5Id ?? 0,
      odd1: String(arbitragem.odd1 ?? '').replace('.', ','),
      odd2: String(arbitragem.odd2 ?? '').replace('.', ','),
      odd3: String(arbitragem.odd3 ?? '').replace('.', ','),
      odd4: String(arbitragem.odd4 ?? '').replace('.', ','),
      odd5: String(arbitragem.odd5 ?? '').replace('.', ','),
      stake1: String(arbitragem.stake1 ?? '').replace('.', ','),
      stake2: String(arbitragem.stake2 ?? '').replace('.', ','),
      stake3: String(arbitragem.stake3 ?? '').replace('.', ','),
      stake4: String(arbitragem.stake4 ?? '').replace('.', ','),
      stake5: String(arbitragem.stake5 ?? '').replace('.', ','),
      resultado1: arbitragem.resultado1 ?? '',
      resultado2: arbitragem.resultado2 ?? '',
      resultado3: arbitragem.resultado3 ?? '',
      resultado4: arbitragem.resultado4 ?? '',
      resultado5: arbitragem.resultado5 ?? '',
      valorTotalInvestir: String(arbitragem.valorTotalInvestir ?? '').replace('.', ','),
      lucroEsperado: String(arbitragem.lucroEsperado ?? '').replace('.', ','),
      status: arbitragem.status,
      freebet1: arbitragem.freebet1 ?? false,
      freebet2: arbitragem.freebet2 ?? false,
      freebet3: arbitragem.freebet3 ?? false,
      freebet4: arbitragem.freebet4 ?? false,
      freebet5: arbitragem.freebet5 ?? false,
      casa1Search: '',
      casa2Search: '',
      casa3Search: '',
      casa4Search: '',
      casa5Search: '',
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
    setLadosVencedores([])
    setShowFinalizarModal(true)
  }

  const confirmarFinalizar = async () => {
    if (!arbitragemParaFinalizar || ladosVencedores.length === 0) return
    try {
      await arbitragensAPI.finalizar(arbitragemParaFinalizar.id, ladosVencedores.join(','));
        setShowFinalizarModal(false)
        setArbitragemParaFinalizar(null)
      setLadosVencedores([])
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
      casa5Id: 0,
      odd1: '',
      odd2: '',
      odd3: '',
      odd4: '',
      odd5: '',
      stake1: '',
      stake2: '',
      stake3: '',
      stake4: '',
      stake5: '',
      resultado1: '',
      resultado2: '',
      resultado3: '',
      resultado4: '',
      resultado5: '',
      valorTotalInvestir: '100',
      lucroEsperado: '',
      status: 'identificada',
      freebet1: false,
      freebet2: false,
      freebet3: false,
      freebet4: false,
      freebet5: false,
      casa1Search: '',
      casa2Search: '',
      casa3Search: '',
      casa4Search: '',
      casa5Search: '',
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

  const totalIdentificadas = arbitragens.filter(a => a.status === 'identificada').length
  const totalExecutadas = arbitragens.filter(a => a.status === 'executada').length
  const taxaSucesso = totalExecutadas > 0 
    ? ((totalExecutadas / arbitragens.length) * 100).toFixed(1)
    : '0'

  // Atualiza lucro esperado automaticamente quando stakes, odds ou valor total mudam, exceto se o usuário editou manualmente
  useEffect(() => {
    if (!lucroEditadoManualmente) {
      const odd1 = parseLocaleNumber(formData.odd1)
      const odd2 = parseLocaleNumber(formData.odd2)
      const odd3 = parseLocaleNumber(formData.odd3)
      const odd4 = parseLocaleNumber(formData.odd4)
      const odd5 = parseLocaleNumber(formData.odd5)
      const stake1 = parseLocaleNumber(formData.stake1)
      const stake2 = parseLocaleNumber(formData.stake2)
      const stake3 = parseLocaleNumber(formData.stake3)
      const stake4 = parseLocaleNumber(formData.stake4)
      const stake5 = parseLocaleNumber(formData.stake5)
      const valorTotal = parseLocaleNumber(formData.valorTotalInvestir)

      const odds = [odd1, odd2]
      const stakes = [stake1, stake2]
      if (formData.tipo === '3_resultados') {
        odds.push(odd3)
        stakes.push(stake3)
      }
      if (formData.tipo === '4_resultados') {
        odds.push(odd3, odd4)
        stakes.push(stake3, stake4)
      }
      if (formData.tipo === '5_resultados') {
        odds.push(odd3, odd4, odd5)
        stakes.push(stake3, stake4, stake5)
      }
      const oddsValidas = odds.filter(o => o && o > 0)
      const stakesValidas = stakes.filter(s => s && s > 0)
      if (oddsValidas.length === stakesValidas.length && oddsValidas.length > 0) {
        // Lucro esperado é o maior retorno possível menos o valor total investido
        const retornos = oddsValidas.map((odd, i) => stakesValidas[i] * odd)
        const maiorRetorno = Math.max(...retornos)
        const lucro = maiorRetorno - valorTotal
        setFormData(prev => ({ ...prev, lucroEsperado: lucro > 0 ? lucro.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '' }))
      }
    }
    // eslint-disable-next-line
  }, [formData.odd1, formData.odd2, formData.odd3, formData.odd4, formData.odd5, formData.stake1, formData.stake2, formData.stake3, formData.stake4, formData.stake5, formData.valorTotalInvestir, formData.tipo])

  // Atualiza valorTotalInvestir automaticamente ao alterar qualquer stake
  useEffect(() => {
    const stake1 = parseLocaleNumber(formData.stake1)
    const stake2 = parseLocaleNumber(formData.stake2)
    const stake3 = parseLocaleNumber(formData.stake3)
    const stake4 = parseLocaleNumber(formData.stake4)
    const stake5 = parseLocaleNumber(formData.stake5)

    const stakes = [stake1, stake2]
    if (formData.tipo === '3_resultados' || formData.tipo === '4_resultados' || formData.tipo === '5_resultados') stakes.push(stake3)
    if (formData.tipo === '4_resultados' || formData.tipo === '5_resultados') stakes.push(stake4)
    if (formData.tipo === '5_resultados') stakes.push(stake5)
    const soma = stakes.reduce((acc, s) => acc + (isNaN(s) ? 0 : s), 0)
    if (soma > 0 && soma !== parseLocaleNumber(formData.valorTotalInvestir)) {
      setFormData(prev => ({ ...prev, valorTotalInvestir: soma.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }))
    }
    // eslint-disable-next-line
  }, [formData.stake1, formData.stake2, formData.stake3, formData.stake4, formData.stake5, formData.tipo])

  function getGridColsClass(tipo: string): string {
    const baseClasses = 'grid gap-4 mb-4';
    switch (tipo) {
      case '2_resultados':
        return `${baseClasses} grid-cols-1 sm:grid-cols-2`;
      case '3_resultados':
        return `${baseClasses} grid-cols-1 sm:grid-cols-3`;
      case '4_resultados':
        return `${baseClasses} grid-cols-1 sm:grid-cols-2 md:grid-cols-4`;
      case '5_resultados':
        return `${baseClasses} grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5`;
      default:
        return `${baseClasses} grid-cols-1 sm:grid-cols-2`;
    }
  }

  function calcularStakes() {
    setLucroEditadoManualmente(false)
    const odd1 = parseLocaleNumber(formData.odd1)
    const odd2 = parseLocaleNumber(formData.odd2)
    const odd3 = parseLocaleNumber(formData.odd3)
    const odd4 = parseLocaleNumber(formData.odd4)
    const odd5 = parseLocaleNumber(formData.odd5)
    const valorTotal = parseLocaleNumber(formData.valorTotalInvestir)

    const odds = [odd1, odd2]
    if (formData.tipo === '3_resultados') odds.push(odd3)
    if (formData.tipo === '4_resultados') odds.push(odd3, odd4)
    if (formData.tipo === '5_resultados') odds.push(odd3, odd4, odd5)
    const oddsValidas = odds.filter(o => o && o > 0)
    if (oddsValidas.length < (formData.tipo === '2_resultados' ? 2 : formData.tipo === '3_resultados' ? 3 : formData.tipo === '4_resultados' ? 4 : 5)) return
    const S = oddsValidas.reduce((acc, odd) => acc + 1/odd, 0)
    
    const stakes = oddsValidas.map(odd => (valorTotal * (1/odd)) / S)
    setFormData(prev => ({
      ...prev,
      stake1: stakes[0] ? stakes[0].toLocaleString('pt-BR', { minimumFractionDigits: 4, maximumFractionDigits: 4 }) : '0',
      stake2: stakes[1] ? stakes[1].toLocaleString('pt-BR', { minimumFractionDigits: 4, maximumFractionDigits: 4 }) : '0',
      stake3: stakes[2] ? stakes[2].toLocaleString('pt-BR', { minimumFractionDigits: 4, maximumFractionDigits: 4 }) : '0',
      stake4: stakes[3] ? stakes[3].toLocaleString('pt-BR', { minimumFractionDigits: 4, maximumFractionDigits: 4 }) : '0',
      stake5: stakes[4] ? stakes[4].toLocaleString('pt-BR', { minimumFractionDigits: 4, maximumFractionDigits: 4 }) : '0',
      lucroEsperado: stakes[0] && oddsValidas[0] ? (stakes[0]*oddsValidas[0] - valorTotal).toLocaleString('pt-BR', { minimumFractionDigits: 4, maximumFractionDigits: 4 }) : '0'
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
              arbitragem.tipo === '3_resultados' ? 'grid-cols-3' :
              arbitragem.tipo === '4_resultados' ? 'grid-cols-4' : 'grid-cols-5'
            }`}>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-xs text-gray-400 font-bold mb-1">1</div>
                <p className="text-sm font-medium text-gray-700">{arbitragem.casa1.nome}</p>
                <p className="text-lg font-bold text-blue-600">{arbitragem.odd1}</p>
                <p className="text-sm text-gray-600">Stake: R$ {Number(arbitragem.stake1).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-xs text-gray-400 font-bold mb-1">2</div>
                <p className="text-sm font-medium text-gray-700">{arbitragem.casa2.nome}</p>
                <p className="text-lg font-bold text-blue-600">{arbitragem.odd2}</p>
                <p className="text-sm text-gray-600">Stake: R$ {Number(arbitragem.stake2).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              </div>
              {arbitragem.tipo !== '2_resultados' && arbitragem.casa3 && (
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-xs text-gray-400 font-bold mb-1">3</div>
                  <p className="text-sm font-medium text-gray-700">{arbitragem.casa3.nome}</p>
                  <p className="text-lg font-bold text-blue-600">{arbitragem.odd3}</p>
                  <p className="text-sm text-gray-600">Stake: R$ {Number(arbitragem.stake3).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                </div>
              )}
              {['4_resultados', '5_resultados'].includes(arbitragem.tipo) && arbitragem.casa4 && (
                  <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-xs text-gray-400 font-bold mb-1">4</div>
                    <p className="text-sm font-medium text-gray-700">{arbitragem.casa4.nome}</p>
                    <p className="text-lg font-bold text-blue-600">{arbitragem.odd4}</p>
                    <p className="text-sm text-gray-600">Stake: R$ {Number(arbitragem.stake4).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                  </div>
              )}
              {arbitragem.tipo === '5_resultados' && arbitragem.casa5 && (
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-xs text-gray-400 font-bold mb-1">5</div>
                  <p className="text-sm font-medium text-gray-700">{arbitragem.casa5.nome}</p>
                  <p className="text-lg font-bold text-blue-600">{arbitragem.odd5}</p>
                  <p className="text-sm text-gray-600">Stake: R$ {Number(arbitragem.stake5).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm text-gray-600">Lucro Esperado</p>
                {arbitragem.status === 'executada' && arbitragem.ladoVencedor ? (
                <p className="text-lg font-bold text-green-600">
                    {(() => {
                      const lados = arbitragem.ladoVencedor.split(',').map(l => l.trim());
                      let premioTotal = 0;
                      lados.forEach(lado => {
                        if (lado === 'casa1')
                          premioTotal += (Number(arbitragem.stake1) * Number(arbitragem.odd1));
                        else if (lado === 'casa2')
                          premioTotal += (Number(arbitragem.stake2) * Number(arbitragem.odd2));
                        else if (lado === 'casa3')
                          premioTotal += (Number(arbitragem.stake3) * Number(arbitragem.odd3));
                        else if (lado === 'casa4')
                          premioTotal += (Number(arbitragem.stake4) * Number(arbitragem.odd4));
                        else if (lado === 'casa5')
                          premioTotal += (Number(arbitragem.stake5) * Number(arbitragem.odd5));
                      });
                      const valorTotal = Number(arbitragem.valorTotalInvestir);
                      const lucroTotal = premioTotal - valorTotal;
                      if (isNaN(lucroTotal)) return '—';
                      return `R$ ${lucroTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
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
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto" style={{ maxWidth: 900 }}>
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
                  <option value="5_resultados">5 Resultados</option>
                </select>
              </div>

              {/* Casas */}
              <h3 className="text-lg font-semibold mt-4 mb-2">Casas</h3>
              <div className={getGridColsClass(formData.tipo)}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Casa 1</label>
                  <Combobox value={formData.casa1Id || 0} onChange={v => setFormData(prev => ({...prev, casa1Id: v || 0}))}>
                    <div className="relative">
                      <Combobox.Input
                    className="input-field"
                        displayValue={id => casas.find(c => c.id === id)?.nome || ''}
                        onChange={e => setFormData(prev => ({...prev, casa1Id: 0, casa1Search: e.target.value}))}
                        placeholder="Digite ou selecione a casa 1"
                    required
                      />
                      <Combobox.Options className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded shadow-lg max-h-60 overflow-auto">
                        {casas.filter(c => !formData.casa1Search || c.nome.toLowerCase().includes(formData.casa1Search.toLowerCase())).map(casa => (
                          <Combobox.Option key={casa.id} value={casa.id} className={({ active }) => `cursor-pointer select-none px-4 py-2 ${active ? 'bg-blue-100' : ''}`}>{casa.nome}</Combobox.Option>
                    ))}
                      </Combobox.Options>
                    </div>
                  </Combobox>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Casa 2</label>
                  <Combobox value={formData.casa2Id || 0} onChange={v => setFormData(prev => ({...prev, casa2Id: v || 0}))}>
                    <div className="relative">
                      <Combobox.Input
                    className="input-field"
                        displayValue={id => casas.find(c => c.id === id)?.nome || ''}
                        onChange={e => setFormData(prev => ({...prev, casa2Id: 0, casa2Search: e.target.value}))}
                        placeholder="Digite ou selecione a casa 2"
                    required
                      />
                      <Combobox.Options className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded shadow-lg max-h-60 overflow-auto">
                        {casas.filter(c => !formData.casa2Search || c.nome.toLowerCase().includes(formData.casa2Search.toLowerCase())).map(casa => (
                          <Combobox.Option key={casa.id} value={casa.id} className={({ active }) => `cursor-pointer select-none px-4 py-2 ${active ? 'bg-blue-100' : ''}`}>{casa.nome}</Combobox.Option>
                    ))}
                      </Combobox.Options>
                </div>
                  </Combobox>
              </div>
                {(formData.tipo === '3_resultados' || formData.tipo === '4_resultados' || formData.tipo === '5_resultados') ? (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Casa 3</label>
                    <Combobox value={formData.casa3Id || 0} onChange={v => setFormData(prev => ({...prev, casa3Id: v || 0}))}>
                      <div className="relative">
                        <Combobox.Input
                      className="input-field"
                          displayValue={id => casas.find(c => c.id === id)?.nome || ''}
                          onChange={e => setFormData(prev => ({...prev, casa3Id: 0, casa3Search: e.target.value}))}
                          placeholder="Digite ou selecione a casa 3"
                          required={formData.tipo === '3_resultados' || formData.tipo === '4_resultados' || formData.tipo === '5_resultados'}
                        />
                        <Combobox.Options className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded shadow-lg max-h-60 overflow-auto">
                          {casas.filter(c => !formData.casa3Search || c.nome.toLowerCase().includes(formData.casa3Search.toLowerCase())).map(casa => (
                            <Combobox.Option key={casa.id} value={casa.id} className={({ active }) => `cursor-pointer select-none px-4 py-2 ${active ? 'bg-blue-100' : ''}`}>{casa.nome}</Combobox.Option>
                      ))}
                        </Combobox.Options>
                  </div>
                    </Combobox>
                  </div>
                ) : null}
                {(formData.tipo === '4_resultados' || formData.tipo === '5_resultados') ? (
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Casa 4</label>
                    <Combobox value={formData.casa4Id || 0} onChange={v => setFormData(prev => ({...prev, casa4Id: v || 0}))}>
                      <div className="relative">
                        <Combobox.Input
                        className="input-field"
                          displayValue={id => casas.find(c => c.id === id)?.nome || ''}
                          onChange={e => setFormData(prev => ({...prev, casa4Id: 0, casa4Search: e.target.value}))}
                          placeholder="Digite ou selecione a casa 4"
                          required={formData.tipo === '4_resultados' || formData.tipo === '5_resultados'}
                        />
                        <Combobox.Options className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded shadow-lg max-h-60 overflow-auto">
                          {casas.filter(c => !formData.casa4Search || c.nome.toLowerCase().includes(formData.casa4Search.toLowerCase())).map(casa => (
                            <Combobox.Option key={casa.id} value={casa.id} className={({ active }) => `cursor-pointer select-none px-4 py-2 ${active ? 'bg-blue-100' : ''}`}>{casa.nome}</Combobox.Option>
                        ))}
                        </Combobox.Options>
                    </div>
                    </Combobox>
                </div>
                ) : null}
                {formData.tipo === '5_resultados' ? (
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Casa 5</label>
                    <Combobox value={formData.casa5Id || 0} onChange={v => setFormData(prev => ({...prev, casa5Id: v || 0}))}>
                      <div className="relative">
                        <Combobox.Input
                    className="input-field"
                          displayValue={id => casas.find(c => c.id === id)?.nome || ''}
                          onChange={e => setFormData(prev => ({...prev, casa5Id: 0, casa5Search: e.target.value}))}
                          placeholder="Digite ou selecione a casa 5"
                          required={formData.tipo === '5_resultados'}
                  />
                        <Combobox.Options className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded shadow-lg max-h-60 overflow-auto">
                          {casas.filter(c => !formData.casa5Search || c.nome.toLowerCase().includes(formData.casa5Search.toLowerCase())).map(casa => (
                            <Combobox.Option key={casa.id} value={casa.id} className={({ active }) => `cursor-pointer select-none px-4 py-2 ${active ? 'bg-blue-100' : ''}`}>{casa.nome}</Combobox.Option>
                          ))}
                        </Combobox.Options>
                </div>
                    </Combobox>
                </div>
                ) : null}
              </div>

              {/* Odds */}
              <h3 className="text-lg font-semibold mt-4 mb-2">Odds</h3>
              <div className={getGridColsClass(formData.tipo)}>
                  <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Odd Casa 1</label>
                  <input type="text" name="odd1" value={formData.odd1} onChange={handleNumericChange} className="input-field" placeholder="2,50" required />
                  </div>
                    <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Odd Casa 2</label>
                  <input type="text" name="odd2" value={formData.odd2} onChange={handleNumericChange} className="input-field" placeholder="1,80" required />
                </div>
                {(formData.tipo === '3_resultados' || formData.tipo === '4_resultados' || formData.tipo === '5_resultados') && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Odd Casa 3</label>
                    <input type="text" name="odd3" value={formData.odd3} onChange={handleNumericChange} className="input-field" placeholder="3,20" required={formData.tipo === '3_resultados' || formData.tipo === '4_resultados' || formData.tipo === '5_resultados'} />
                    </div>
                  )}
                {(formData.tipo === '4_resultados' || formData.tipo === '5_resultados') && (
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Odd Casa 4</label>
                    <input type="text" name="odd4" value={formData.odd4} onChange={handleNumericChange} className="input-field" placeholder="4,50" required={formData.tipo === '4_resultados' || formData.tipo === '5_resultados'} />
                </div>
              )}
                {formData.tipo === '5_resultados' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Odd Casa 5</label>
                    <input type="text" name="odd5" value={formData.odd5} onChange={handleNumericChange} className="input-field" placeholder="5,00" required={formData.tipo === '5_resultados'} />
                </div>
              )}
              </div>

              {/* Stakes */}
              <h3 className="text-lg font-semibold mt-4 mb-2">Stakes</h3>
              <div className={getGridColsClass(formData.tipo)}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Stake Casa 1</label>
                  <input type="text" name="stake1" value={formData.stake1} onChange={handleNumericChange} className="input-field" placeholder="100,00" required />
                  <label className="flex items-center mt-1 text-xs">
                    <input type="checkbox" name="freebet1" checked={!!formData.freebet1} onChange={handleCheckboxChange} className="mr-1" /> Freebet
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Stake Casa 2</label>
                  <input type="text" name="stake2" value={formData.stake2} onChange={handleNumericChange} className="input-field" placeholder="138,89" required />
                  <label className="flex items-center mt-1 text-xs">
                    <input type="checkbox" name="freebet2" checked={!!formData.freebet2} onChange={handleCheckboxChange} className="mr-1" /> Freebet
                  </label>
                </div>
                {(formData.tipo === '3_resultados' || formData.tipo === '4_resultados' || formData.tipo === '5_resultados') ? (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Stake Casa 3</label>
                    <input type="text" name="stake3" value={formData.stake3} onChange={handleNumericChange} className="input-field" placeholder="78,13" required={formData.tipo === '3_resultados' || formData.tipo === '4_resultados' || formData.tipo === '5_resultados'} />
                    <label className="flex items-center mt-1 text-xs">
                      <input type="checkbox" name="freebet3" checked={!!formData.freebet3} onChange={handleCheckboxChange} className="mr-1" /> Freebet
                    </label>
              </div>
                ) : null}
                {(formData.tipo === '4_resultados' || formData.tipo === '5_resultados') ? (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Stake Casa 4</label>
                    <input type="text" name="stake4" value={formData.stake4} onChange={handleNumericChange} className="input-field" placeholder="55,56" required={formData.tipo === '4_resultados' || formData.tipo === '5_resultados'} />
                    <label className="flex items-center mt-1 text-xs">
                      <input type="checkbox" name="freebet4" checked={!!formData.freebet4} onChange={handleCheckboxChange} className="mr-1" /> Freebet
                    </label>
                  </div>
                ) : null}
                {formData.tipo === '5_resultados' ? (
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Stake Casa 5</label>
                    <input type="text" name="stake5" value={formData.stake5} onChange={handleNumericChange} className="input-field" placeholder="50,00" required={formData.tipo === '5_resultados'} />
                    <label className="flex items-center mt-1 text-xs">
                      <input type="checkbox" name="freebet5" checked={!!formData.freebet5} onChange={handleCheckboxChange} className="mr-1" /> Freebet
                      </label>
                    </div>
                ) : null}
                </div>

              {/* Lucros */}
              <h3 className="text-lg font-semibold mt-4 mb-2">Lucros</h3>
              <div className={getGridColsClass(formData.tipo)}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Casa 1</label>
                  <input type="text" value={parseLocaleNumber(formData.stake1) > 0 && parseLocaleNumber(formData.odd1) > 0 && parseLocaleNumber(formData.valorTotalInvestir) > 0 ? ((parseLocaleNumber(formData.stake1) * parseLocaleNumber(formData.odd1)) - parseLocaleNumber(formData.valorTotalInvestir)).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : ''} className="input-field bg-gray-100" readOnly />
                </div>
                  <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Casa 2</label>
                  <input type="text" value={parseLocaleNumber(formData.stake2) > 0 && parseLocaleNumber(formData.odd2) > 0 && parseLocaleNumber(formData.valorTotalInvestir) > 0 ? ((parseLocaleNumber(formData.stake2) * parseLocaleNumber(formData.odd2)) - parseLocaleNumber(formData.valorTotalInvestir)).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : ''} className="input-field bg-gray-100" readOnly />
              </div>
                {(formData.tipo === '3_resultados' || formData.tipo === '4_resultados' || formData.tipo === '5_resultados') ? (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Casa 3</label>
                    <input type="text" value={parseLocaleNumber(formData.stake3) > 0 && parseLocaleNumber(formData.odd3) > 0 && parseLocaleNumber(formData.valorTotalInvestir) > 0 ? ((parseLocaleNumber(formData.stake3) * parseLocaleNumber(formData.odd3)) - parseLocaleNumber(formData.valorTotalInvestir)).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : ''} className="input-field bg-gray-100" readOnly />
                </div>
                ) : null}
                {(formData.tipo === '4_resultados' || formData.tipo === '5_resultados') ? (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Casa 4</label>
                    <input type="text" value={parseLocaleNumber(formData.stake4) > 0 && parseLocaleNumber(formData.odd4) > 0 && parseLocaleNumber(formData.valorTotalInvestir) > 0 ? ((parseLocaleNumber(formData.stake4) * parseLocaleNumber(formData.odd4)) - parseLocaleNumber(formData.valorTotalInvestir)).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : ''} className="input-field bg-gray-100" readOnly />
                  </div>
                ) : null}
                {formData.tipo === '5_resultados' ? (
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Casa 5</label>
                    <input type="text" value={parseLocaleNumber(formData.stake5) > 0 && parseLocaleNumber(formData.odd5) > 0 && parseLocaleNumber(formData.valorTotalInvestir) > 0 ? ((parseLocaleNumber(formData.stake5) * parseLocaleNumber(formData.odd5)) - parseLocaleNumber(formData.valorTotalInvestir)).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : ''} className="input-field bg-gray-100" readOnly />
                    </div>
                ) : null}
                </div>

              {/* Resultados */}
              <h3 className="text-lg font-semibold mt-4 mb-2">Resultados</h3>
              <div className={getGridColsClass(formData.tipo)}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Casa 1</label>
                  <input type="text" value={formData.resultado1} onChange={(e) => setFormData({...formData, resultado1: e.target.value})} className="input-field" placeholder="Ex: Vitória Time 1, 2-0, etc." required />
                </div>
                  <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Casa 2</label>
                  <input type="text" value={formData.resultado2} onChange={(e) => setFormData({...formData, resultado2: e.target.value})} className="input-field" placeholder="Ex: Vitória Time 2, Empate, etc." required />
              </div>
                {(formData.tipo === '3_resultados' || formData.tipo === '4_resultados' || formData.tipo === '5_resultados') ? (
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Casa 3</label>
                    <input type="text" value={formData.resultado3} onChange={(e) => setFormData({...formData, resultado3: e.target.value})} className="input-field" placeholder="Ex: Empate, 2-1, etc." required={formData.tipo === '3_resultados' || formData.tipo === '4_resultados' || formData.tipo === '5_resultados'} />
                </div>
                ) : null}
                {(formData.tipo === '4_resultados' || formData.tipo === '5_resultados') ? (
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Casa 4</label>
                    <input type="text" value={formData.resultado4} onChange={(e) => setFormData({...formData, resultado4: e.target.value})} className="input-field" placeholder="Ex: 1-2, 0-2, etc." required={formData.tipo === '4_resultados' || formData.tipo === '5_resultados'} />
                </div>
                ) : null}
                {formData.tipo === '5_resultados' ? (
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Casa 5</label>
                    <input type="text" value={formData.resultado5} onChange={(e) => setFormData({...formData, resultado5: e.target.value})} className="input-field" placeholder="Ex: 0-0, 1-1, etc." required={formData.tipo === '5_resultados'} />
                    </div>
                ) : null}
              </div>

              {/* Status da aposta */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status da aposta</label>
                  <select
                    value={formData.status}
                    onChange={e => setFormData({ ...formData, status: e.target.value })}
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
                    Valor Total a Investir
                  </label>
                  <input
                    type="text"
                    name="valorTotalInvestir"
                    value={formData.valorTotalInvestir}
                    onChange={handleNumericChange}
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
                  setLadosVencedores([])
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
                Selecione quais lados venceram para atualizar os saldos automaticamente:
              </p>
              
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="ladoVencedor"
                    value="casa1"
                    checked={ladosVencedores.includes('casa1')}
                    onChange={e => setLadosVencedores(v => e.target.checked ? [...v, 'casa1'] : v.filter(x => x !== 'casa1'))}
                    className="text-blue-600"
                  />
                  <span className="text-sm">
                    <strong>{arbitragemParaFinalizar.casa1.nome}</strong> - {arbitragemParaFinalizar.resultado1} (Odd: {arbitragemParaFinalizar.odd1})
                  </span>
                </label>
                
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="ladoVencedor"
                    value="casa2"
                    checked={ladosVencedores.includes('casa2')}
                    onChange={e => setLadosVencedores(v => e.target.checked ? [...v, 'casa2'] : v.filter(x => x !== 'casa2'))}
                    className="text-blue-600"
                  />
                  <span className="text-sm">
                    <strong>{arbitragemParaFinalizar.casa2.nome}</strong> - {arbitragemParaFinalizar.resultado2} (Odd: {arbitragemParaFinalizar.odd2})
                  </span>
                </label>

                {arbitragemParaFinalizar.tipo === '3_resultados' && arbitragemParaFinalizar.casa3 && (
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="ladoVencedor"
                      value="casa3"
                      checked={ladosVencedores.includes('casa3')}
                      onChange={e => setLadosVencedores(v => e.target.checked ? [...v, 'casa3'] : v.filter(x => x !== 'casa3'))}
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
                        type="checkbox"
                        name="ladoVencedor"
                        value="casa3"
                        checked={ladosVencedores.includes('casa3')}
                        onChange={e => setLadosVencedores(v => e.target.checked ? [...v, 'casa3'] : v.filter(x => x !== 'casa3'))}
                        className="text-blue-600"
                      />
                      <span className="text-sm">
                        <strong>{arbitragemParaFinalizar.casa3.nome}</strong> - {arbitragemParaFinalizar.resultado3} (Odd: {arbitragemParaFinalizar.odd3})
                      </span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="ladoVencedor"
                        value="casa4"
                        checked={ladosVencedores.includes('casa4')}
                        onChange={e => setLadosVencedores(v => e.target.checked ? [...v, 'casa4'] : v.filter(x => x !== 'casa4'))}
                        className="text-blue-600"
                      />
                      <span className="text-sm">
                        <strong>{arbitragemParaFinalizar.casa4.nome}</strong> - {arbitragemParaFinalizar.resultado4} (Odd: {arbitragemParaFinalizar.odd4})
                      </span>
                    </label>
                  </>
                )}

                {arbitragemParaFinalizar.tipo === '5_resultados' && arbitragemParaFinalizar.casa3 && arbitragemParaFinalizar.casa4 && arbitragemParaFinalizar.casa5 && (
                  <>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="ladoVencedor"
                        value="casa3"
                        checked={ladosVencedores.includes('casa3')}
                        onChange={e => setLadosVencedores(v => e.target.checked ? [...v, 'casa3'] : v.filter(x => x !== 'casa3'))}
                        className="text-blue-600"
                      />
                      <span className="text-sm">
                        <strong>{arbitragemParaFinalizar.casa3.nome}</strong> - {arbitragemParaFinalizar.resultado3} (Odd: {arbitragemParaFinalizar.odd3})
                      </span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="ladoVencedor"
                        value="casa4"
                        checked={ladosVencedores.includes('casa4')}
                        onChange={e => setLadosVencedores(v => e.target.checked ? [...v, 'casa4'] : v.filter(x => x !== 'casa4'))}
                        className="text-blue-600"
                      />
                      <span className="text-sm">
                        <strong>{arbitragemParaFinalizar.casa4.nome}</strong> - {arbitragemParaFinalizar.resultado4} (Odd: {arbitragemParaFinalizar.odd4})
                      </span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="ladoVencedor"
                        value="casa5"
                        checked={ladosVencedores.includes('casa5')}
                        onChange={e => setLadosVencedores(v => e.target.checked ? [...v, 'casa5'] : v.filter(x => x !== 'casa5'))}
                        className="text-blue-600"
                      />
                      <span className="text-sm">
                        <strong>{arbitragemParaFinalizar.casa5.nome}</strong> - {arbitragemParaFinalizar.resultado5} (Odd: {arbitragemParaFinalizar.odd5})
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
                  setLadosVencedores([])
                }}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                onClick={confirmarFinalizar}
                disabled={ladosVencedores.length === 0}
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