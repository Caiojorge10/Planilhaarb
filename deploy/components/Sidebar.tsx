'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Home, 
  Calculator, 
  Gift, 
  TrendingUp, 
  BarChart3, 
  Settings,
  Building2,
  Wallet,
  ShieldCheck,
  MinusCircle,
  PlusCircle
} from 'lucide-react'
import { clsx } from 'clsx'
import { useAuth } from "./AuthProvider"

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Arbitragens', href: '/arbitragens', icon: Calculator },
  { name: 'Freebets', href: '/freebets', icon: Gift },
  { name: 'Perdas', href: '/perdas', icon: MinusCircle },
  { name: 'Ganhos', href: '/ganhos', icon: PlusCircle },
  { name: 'Movimentações', href: '/movimentacoes', icon: Wallet },
  { name: 'Casas de Apostas', href: '/casas', icon: Building2 },
  { name: 'Relatórios', href: '/relatorios', icon: BarChart3 },
  { name: 'Configurações', href: '/configuracoes', icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()
  const { usuario, logout } = useAuth()

  return (
    <div className="flex flex-col w-64 bg-white shadow-lg">
      <div className="flex flex-col items-center justify-center h-20 px-4 border-b border-gray-200 gap-1">
        <ShieldCheck className="h-9 w-9 text-primary-600 mb-1" />
        <h1 className="text-xl font-bold text-primary-600">
          Arbitragem Pro
        </h1>
      </div>
      
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                isActive
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              )}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
        <a href="/freespins" className={clsx(
          'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
          pathname === '/freespins'
            ? 'bg-primary-100 text-primary-700'
            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
        )}>
          <Gift className="mr-3 h-5 w-5" />
          Rodadas Grátis
        </a>
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <div className="text-xs text-gray-500 text-center">
          Versão 1.0.0
        </div>
      </div>

      <div className="mt-auto p-4 border-t">
        <button onClick={logout} className="w-full bg-red-100 text-red-700 py-2 rounded hover:bg-red-200 transition">Sair</button>
      </div>
    </div>
  )
} 