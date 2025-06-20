'use client'

import { useState } from 'react'
import { Settings, User, Bell, Shield, Palette, Database, Save, XCircle, CheckCircle } from 'lucide-react'

interface Configuracoes {
  notificacoes: {
    email: boolean
    push: boolean
    arbitragem: boolean
    freebet: boolean
    relatorio: boolean
  }
  privacidade: {
    dadosAnaliticos: boolean
    compartilharDados: boolean
    backupAutomatico: boolean
  }
  interface: {
    tema: 'claro' | 'escuro' | 'auto'
    idioma: 'pt-BR' | 'en' | 'es'
    moeda: 'BRL' | 'USD' | 'EUR'
  }
  arbitragem: {
    lucroMinimo: number
    stakeMaximo: number
    alertaRisco: boolean
    calculoAutomatico: boolean
  }
}

const configuracoesIniciais: Configuracoes = {
  notificacoes: {
    email: true,
    push: true,
    arbitragem: true,
    freebet: true,
    relatorio: false
  },
  privacidade: {
    dadosAnaliticos: true,
    compartilharDados: false,
    backupAutomatico: true
  },
  interface: {
    tema: 'claro',
    idioma: 'pt-BR',
    moeda: 'BRL'
  },
  arbitragem: {
    lucroMinimo: 50,
    stakeMaximo: 1000,
    alertaRisco: true,
    calculoAutomatico: true
  }
}

export default function ConfiguracoesPage() {
  const [configuracoes, setConfiguracoes] = useState<Configuracoes>(configuracoesIniciais)
  const [abaAtiva, setAbaAtiva] = useState('perfil')
  const [mostrarSalvo, setMostrarSalvo] = useState(false)

  const abas = [
    { id: 'perfil', nome: 'Perfil', icon: User },
    { id: 'notificacoes', nome: 'Notificações', icon: Bell },
    { id: 'privacidade', nome: 'Privacidade', icon: Shield },
    { id: 'interface', nome: 'Interface', icon: Palette },
    { id: 'arbitragem', nome: 'Arbitragem', icon: Settings },
    { id: 'dados', nome: 'Dados', icon: Database }
  ]

  const salvarConfiguracoes = () => {
    // Aqui você salvaria as configurações no backend
    setMostrarSalvo(true)
    setTimeout(() => setMostrarSalvo(false), 3000)
  }

  const renderAbaPerfil = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações Pessoais</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nome Completo
            </label>
            <input type="text" className="input-field" placeholder="Seu nome" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input type="email" className="input-field" placeholder="seu@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Telefone
            </label>
            <input type="tel" className="input-field" placeholder="(11) 99999-9999" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Data de Nascimento
            </label>
            <input type="date" className="input-field" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferências</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fuso Horário
            </label>
            <select className="input-field">
              <option value="America/Sao_Paulo">Brasília (GMT-3)</option>
              <option value="America/Manaus">Manaus (GMT-4)</option>
              <option value="America/Belem">Belém (GMT-3)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              País
            </label>
            <select className="input-field">
              <option value="BR">Brasil</option>
              <option value="PT">Portugal</option>
              <option value="AR">Argentina</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )

  const renderAbaNotificacoes = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Canais de Notificação</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-900">Notificações por Email</h4>
              <p className="text-sm text-gray-600">Receba relatórios e alertas por email</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={configuracoes.notificacoes.email}
                onChange={(e) => setConfiguracoes({
                  ...configuracoes,
                  notificacoes: { ...configuracoes.notificacoes, email: e.target.checked }
                })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-900">Notificações Push</h4>
              <p className="text-sm text-gray-600">Alertas em tempo real no navegador</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={configuracoes.notificacoes.push}
                onChange={(e) => setConfiguracoes({
                  ...configuracoes,
                  notificacoes: { ...configuracoes.notificacoes, push: e.target.checked }
                })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tipos de Notificação</h3>
        <div className="space-y-3">
          {Object.entries(configuracoes.notificacoes).filter(([key]) => key !== 'email' && key !== 'push').map(([key, value]) => (
            <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900 capitalize">
                  {key === 'arbitragem' ? 'Oportunidades de Arbitragem' :
                   key === 'freebet' ? 'Novos Freebets' :
                   key === 'relatorio' ? 'Relatórios Semanais' : key}
                </h4>
                <p className="text-sm text-gray-600">
                  {key === 'arbitragem' ? 'Alertas quando encontrar arbitragens lucrativas' :
                   key === 'freebet' ? 'Notificações sobre novos bônus disponíveis' :
                   key === 'relatorio' ? 'Resumos semanais de performance' : ''}
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) => setConfiguracoes({
                    ...configuracoes,
                    notificacoes: { ...configuracoes.notificacoes, [key]: e.target.checked }
                  })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderAbaPrivacidade = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Controle de Privacidade</h3>
        <div className="space-y-4">
          {Object.entries(configuracoes.privacidade).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900 capitalize">
                  {key === 'dadosAnaliticos' ? 'Dados Analíticos' :
                   key === 'compartilharDados' ? 'Compartilhar Dados' :
                   key === 'backupAutomatico' ? 'Backup Automático' : key}
                </h4>
                <p className="text-sm text-gray-600">
                  {key === 'dadosAnaliticos' ? 'Permitir coleta de dados para melhorar o sistema' :
                   key === 'compartilharDados' ? 'Compartilhar dados anônimos com parceiros' :
                   key === 'backupAutomatico' ? 'Fazer backup automático dos seus dados' : ''}
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) => setConfiguracoes({
                    ...configuracoes,
                    privacidade: { ...configuracoes.privacidade, [key]: e.target.checked }
                  })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Segurança</h3>
        <div className="space-y-4">
          <button className="w-full p-4 text-left bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <h4 className="font-medium text-gray-900">Alterar Senha</h4>
            <p className="text-sm text-gray-600">Atualize sua senha de acesso</p>
          </button>
          <button className="w-full p-4 text-left bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <h4 className="font-medium text-gray-900">Autenticação em Duas Etapas</h4>
            <p className="text-sm text-gray-600">Adicione uma camada extra de segurança</p>
          </button>
          <button className="w-full p-4 text-left bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <h4 className="font-medium text-gray-900">Sessões Ativas</h4>
            <p className="text-sm text-gray-600">Gerencie dispositivos conectados</p>
          </button>
        </div>
      </div>
    </div>
  )

  const renderAbaInterface = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Aparência</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tema
            </label>
            <select
              value={configuracoes.interface.tema}
              onChange={(e) => setConfiguracoes({
                ...configuracoes,
                interface: { ...configuracoes.interface, tema: e.target.value as any }
              })}
              className="input-field"
            >
              <option value="claro">Claro</option>
              <option value="escuro">Escuro</option>
              <option value="auto">Automático</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Idioma
            </label>
            <select
              value={configuracoes.interface.idioma}
              onChange={(e) => setConfiguracoes({
                ...configuracoes,
                interface: { ...configuracoes.interface, idioma: e.target.value as any }
              })}
              className="input-field"
            >
              <option value="pt-BR">Português (Brasil)</option>
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Moeda
            </label>
            <select
              value={configuracoes.interface.moeda}
              onChange={(e) => setConfiguracoes({
                ...configuracoes,
                interface: { ...configuracoes.interface, moeda: e.target.value as any }
              })}
              className="input-field"
            >
              <option value="BRL">Real (R$)</option>
              <option value="USD">Dólar ($)</option>
              <option value="EUR">Euro (€)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )

  const renderAbaArbitragem = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Configurações de Arbitragem</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Lucro Mínimo (R$)
            </label>
            <input
              type="number"
              min="0"
              value={configuracoes.arbitragem.lucroMinimo}
              onChange={(e) => setConfiguracoes({
                ...configuracoes,
                arbitragem: { ...configuracoes.arbitragem, lucroMinimo: Number(e.target.value) }
              })}
              className="input-field"
              placeholder="50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Stake Máximo (R$)
            </label>
            <input
              type="number"
              min="0"
              value={configuracoes.arbitragem.stakeMaximo}
              onChange={(e) => setConfiguracoes({
                ...configuracoes,
                arbitragem: { ...configuracoes.arbitragem, stakeMaximo: Number(e.target.value) }
              })}
              className="input-field"
              placeholder="1000"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Alertas e Cálculos</h3>
        <div className="space-y-4">
          {Object.entries(configuracoes.arbitragem).filter(([key]) => key !== 'lucroMinimo' && key !== 'stakeMaximo').map(([key, value]) => (
            <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900 capitalize">
                  {key === 'alertaRisco' ? 'Alerta de Risco' :
                   key === 'calculoAutomatico' ? 'Cálculo Automático' : key}
                </h4>
                <p className="text-sm text-gray-600">
                  {key === 'alertaRisco' ? 'Alertar sobre arbitragens de alto risco' :
                   key === 'calculoAutomatico' ? 'Calcular stakes automaticamente' : ''}
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={Boolean(value)}
                  onChange={(e) => setConfiguracoes({
                    ...configuracoes,
                    arbitragem: { ...configuracoes.arbitragem, [key]: e.target.checked }
                  })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderAbaDados = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Gerenciamento de Dados</h3>
        <div className="space-y-4">
          <button className="w-full p-4 text-left bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <h4 className="font-medium text-gray-900">Exportar Dados</h4>
            <p className="text-sm text-gray-600">Baixe todos os seus dados em formato CSV</p>
          </button>
          <button className="w-full p-4 text-left bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <h4 className="font-medium text-gray-900">Importar Dados</h4>
            <p className="text-sm text-gray-600">Importe dados de outros sistemas</p>
          </button>
          <button className="w-full p-4 text-left bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
            <h4 className="font-medium text-red-900">Excluir Conta</h4>
            <p className="text-sm text-red-600">Excluir permanentemente sua conta e dados</p>
          </button>
        </div>
      </div>
    </div>
  )

  const renderConteudoAba = () => {
    switch (abaAtiva) {
      case 'perfil':
        return renderAbaPerfil()
      case 'notificacoes':
        return renderAbaNotificacoes()
      case 'privacidade':
        return renderAbaPrivacidade()
      case 'interface':
        return renderAbaInterface()
      case 'arbitragem':
        return renderAbaArbitragem()
      case 'dados':
        return renderAbaDados()
      default:
        return renderAbaPerfil()
    }
  }

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Configurações</h1>
        <p className="text-gray-600">Personalize suas preferências e configurações</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar de abas */}
        <div className="lg:col-span-1">
          <div className="card">
            <nav className="space-y-2">
              {abas.map((aba) => {
                const Icon = aba.icon
                return (
                  <button
                    key={aba.id}
                    onClick={() => setAbaAtiva(aba.id)}
                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      abaAtiva === aba.id
                        ? 'bg-primary-100 text-primary-700'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    {aba.nome}
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Conteúdo da aba */}
        <div className="lg:col-span-3">
          <div className="card">
            {renderConteudoAba()}
            
            {/* Botões de ação */}
            <div className="flex justify-end gap-3 pt-6 border-t border-gray-200 mt-6">
              <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
                Cancelar
              </button>
              <button
                onClick={salvarConfiguracoes}
                className="btn-primary flex items-center"
              >
                <Save className="h-4 w-4 mr-2" />
                Salvar Configurações
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Notificação de salvamento */}
      {mostrarSalvo && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center">
          <CheckCircle className="h-5 w-5 mr-2" />
          Configurações salvas com sucesso!
        </div>
      )}
    </div>
  )
} 