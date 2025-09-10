'use client'

import { useState, useEffect } from 'react'
import { Plus, Trash2, DollarSign } from 'lucide-react'
import { ganhosAPI, casasAPI, Ganho, Casa } from '@/lib/api'
import { useAuth } from '@/components/AuthProvider'
import { Combobox } from '@headlessui/react'

export default function GanhosPage() {
  const { token } = useAuth()
  const [ganhos, setGanhos] = useState<Ganho[]>([])
  const [casas, setCasas] = useState<Casa[]>([])
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    casaId: 0,
    valor: '',
    casaSearch: ''
  })

  useEffect(() => {
    if (token) {
      loadData()
    }
  }, [token])

  const loadData = async () => {
    try {
      setLoading(true)
      const [ganhosData, casasData] = await Promise.all([
        ganhosAPI.getAll(),
        casasAPI.getAll()
      ])
      setGanhos(ganhosData)
      setCasas(casasData)
    } catch (error) {
      console.error('Erro ao carregar dados:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleNumericChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Permite apenas números e uma vírgula
    if (!/^\d*[,]?\d*$/.test(value)) {
      return;
    }
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const parseLocaleNumber = (stringNumber: string) => {
    if (!stringNumber) return 0;
    return parseFloat(stringNumber.replace(',', '.'));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.casaId <= 0 || !formData.valor) {
      alert('Por favor, selecione uma casa e insira um valor.')
      return
    }

    try {
      const dataParaApi = {
        casaId: formData.casaId,
        valor: parseLocaleNumber(formData.valor)
      }
      await ganhosAPI.create(dataParaApi)
      setFormData({ casaId: 0, valor: '', casaSearch: '' })
      loadData()
    } catch (error) {
      console.error('Erro ao registrar ganho:', error)
      alert('Falha ao registrar o ganho.')
    }
  }

  const handleDelete = async (id: number) => {
    if (confirm('Tem certeza que deseja deletar este registro de ganho?')) {
      try {
        await ganhosAPI.delete(id)
        loadData()
      } catch (error) {
        console.error('Erro ao deletar ganho:', error)
        alert('Falha ao deletar o registro.')
      }
    }
  }

  const totalGanho = ganhos.reduce((sum, ganho) => sum + ganho.valor, 0);

  if (loading) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg text-gray-600">Carregando...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Registro de Ganhos</h1>
          <p className="text-gray-600">Adicione ganhos avulsos que não se enquadram em arbitragens.</p>
        </div>
      </div>
      
      {/* Card de Total Ganho */}
      <div className="mb-6">
        <div className="card">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600">Total Ganho</p>
                    <p className="text-2xl font-bold text-green-600">
                        +R$ {totalGanho.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                </div>
                <div className="p-3 bg-green-100 rounded-full">
                    <DollarSign className="h-6 w-6 text-green-600" />
                </div>
            </div>
        </div>
      </div>

      {/* Formulário de Novo Ganho */}
      <div className="card mb-6">
        <h2 className="text-xl font-semibold mb-4">Adicionar Novo Ganho</h2>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Casa de Aposta</label>
            <Combobox value={formData.casaId || 0} onChange={v => setFormData(prev => ({...prev, casaId: v || 0}))}>
              <div className="relative">
                <Combobox.Input
                  className="input-field"
                  displayValue={id => casas.find(c => c.id === id)?.nome || ''}
                  onChange={e => setFormData(prev => ({...prev, casaId: 0, casaSearch: e.target.value}))}
                  placeholder="Digite ou selecione a casa"
                  required
                />
                <Combobox.Options className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded shadow-lg max-h-60 overflow-auto">
                  {casas.filter(c => !formData.casaSearch || c.nome.toLowerCase().includes(formData.casaSearch.toLowerCase())).map(casa => (
                    <Combobox.Option key={casa.id} value={casa.id} className={({ active }) => `cursor-pointer select-none px-4 py-2 ${active ? 'bg-blue-100' : ''}`}>{casa.nome}</Combobox.Option>
                  ))}
                </Combobox.Options>
              </div>
            </Combobox>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Valor Ganho</label>
            <input
              type="text"
              name="valor"
              value={formData.valor}
              onChange={handleNumericChange}
              className="input-field"
              placeholder="100,00"
              required
            />
          </div>
          <button type="submit" className="btn-primary h-10 transition-transform transform hover:scale-105 shadow-md hover:shadow-lg">
            <Plus className="h-4 w-4 mr-2" />
            Adicionar
          </button>
        </form>
      </div>

      {/* Tabela de Ganhos */}
      <div className="card">
        <h2 className="text-xl font-semibold mb-4">Histórico de Ganhos</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-3">Casa</th>
                <th className="p-3">Valor</th>
                <th className="p-3">Data</th>
                <th className="p-3 text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {ganhos.map((ganho) => (
                <tr key={ganho.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{ganho.casa.nome}</td>
                  <td className="p-3 text-green-600">
                    +R$ {ganho.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                  <td className="p-3">{new Date(ganho.data).toLocaleDateString('pt-BR')}</td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => handleDelete(ganho.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {ganhos.length === 0 && (
            <p className="text-center text-gray-500 py-6">Nenhum registro de ganho encontrado.</p>
          )}
        </div>
      </div>
    </div>
  )
} 