# 🎯 Sistema de Arbitragem Esportiva

Um sistema completo para gerenciar arbitragens esportivas, freebets e extrações com interface moderna e funcionalidades avançadas.

## 🚀 Funcionalidades

### 📊 Dashboard Principal
- Visão geral com métricas importantes
- Gráfico de evolução do lucro
- Lista de arbitragens recentes
- Cards com lucro total, lucro mensal, freebets ativos

### 🧮 Gerenciamento de Arbitragens
- Cadastro completo de arbitragens
- Cálculo automático de stakes e lucro esperado
- Filtros por status e busca
- Tabela detalhada com todas as informações

### 🎁 Controle de Freebets
- Cadastro de freebets recebidos
- Controle de status (ativo, usado, expirado)
- Cálculo de taxa de conversão
- Histórico de extrações

### 💰 Extração de Freebets
- Calculadora de retorno
- Estratégias de extração com instruções
- Análise de risco por estratégia
- Histórico de operações

### 🏢 Casas de Apostas
- Cadastro completo de casas
- Informações de bônus e promoções
- Métodos de pagamento
- Avaliações e contatos

### 📈 Relatórios Avançados
- Gráficos interativos
- Análise por período
- Performance por casa
- Distribuição por esportes
- Estratégias mais lucrativas

### ⚙️ Configurações
- Perfil do usuário
- Notificações personalizáveis
- Configurações de privacidade
- Preferências de interface
- Configurações de arbitragem

## 🛠️ Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Lucide React** - Ícones modernos
- **Recharts** - Gráficos interativos
- **React Hooks** - Gerenciamento de estado

## 📦 Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd "Planilha arbitragem"
```

2. **Instale as dependências**
### Frontend
```bash
npm install
```
### Backend
```bash
cd backend
npm install
```

3. **Configure variáveis de ambiente**
Crie um arquivo `.env` na raiz do backend (exemplo):
```
JWT_SECRET=sua_senha_secreta
```

4. **Rodar as migrations e preparar o banco**
```bash
cd backend
npx prisma migrate dev --name init
```

5. **Iniciar o backend**
```bash
cd backend
npm run dev
```
O backend ficará disponível em `http://localhost:3000/api`

6. **Iniciar o frontend**
Abra outro terminal na raiz do projeto:
```bash
npm run dev
```
O frontend ficará disponível em `http://localhost:3000`

7. **Acessar o sistema**
Abra o navegador e acesse: [http://localhost:3000](http://localhost:3000)

- Faça seu cadastro e login.
- Todas as operações são individuais por usuário.

8. **Dicas de uso**
- Utilize as páginas do menu lateral para cadastrar casas, arbitragens, freebets, movimentações, etc.
- Os relatórios mostram apenas os dados do usuário logado.
- Para visualizar o banco de dados, use o Prisma Studio:
  ```bash
  cd backend
  npx prisma studio
  ```

9. **Observações**
- O banco de dados padrão é SQLite local (arquivo `backend/prisma/dev.db`).
- Para produção, recomenda-se usar um banco mais robusto e variáveis de ambiente seguras.

---
Dúvidas? Abra uma issue ou entre em contato!

## 🏗️ Estrutura do Projeto

```
arbitragem-esportiva/
├── app/
│   ├── arbitragens/     # Página de arbitragens
│   ├── freebets/        # Página de freebets
│   ├── extracao/        # Página de extração
│   ├── casas/           # Página de casas
│   ├── relatorios/      # Página de relatórios
│   ├── configuracoes/   # Página de configurações
│   ├── globals.css      # Estilos globais
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Dashboard
├── components/
│   └── Sidebar.tsx      # Navegação lateral
├── public/              # Arquivos estáticos
└── package.json         # Dependências
```

## 🎨 Interface

### Design System
- **Cores**: Paleta consistente com tons de azul, verde e cinza
- **Tipografia**: Sistema de fontes responsivo
- **Componentes**: Cards, botões, inputs padronizados
- **Layout**: Grid responsivo com sidebar fixa

### Responsividade
- Mobile-first design
- Breakpoints para tablet e desktop
- Navegação adaptativa
- Gráficos responsivos

## 📊 Funcionalidades Principais

### Calculadora de Arbitragem
```typescript
const calcularArbitragem = (odd1: number, odd2: number, stake: number) => {
  const stake2 = (stake * odd1) / odd2
  const lucro = (stake * odd1) - stake - stake2
  return { stake2, lucro }
}
```

### Estratégias de Extração
1. **Arbitragem Tradicional** - 85% conversão
2. **Aposta de Alto Valor** - 70% conversão
3. **Aposta Combinada** - 60% conversão
4. **Promoção Especial** - 90% conversão

### Sistema de Notificações
- Email e push notifications
- Alertas de arbitragem
- Notificações de freebets
- Relatórios semanais

## 🔧 Configurações

### Variáveis de Ambiente
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_APP_NAME=Arbitragem Pro
```

### Scripts Disponíveis
```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

## 📱 Páginas do Sistema

### 1. Dashboard (`/`)
- Métricas principais
- Gráfico de evolução
- Arbitragens recentes

### 2. Arbitragens (`/arbitragens`)
- Lista de arbitragens
- Formulário de cadastro
- Filtros e busca

### 3. Freebets (`/freebets`)
- Controle de freebets
- Status e expiração
- Taxa de conversão

### 4. Extração (`/extracao`)
- Calculadora de retorno
- Estratégias detalhadas
- Histórico de extrações

### 5. Casas (`/casas`)
- Cadastro de casas
- Informações de bônus
- Métodos de pagamento

### 6. Relatórios (`/relatorios`)
- Gráficos interativos
- Análises por período
- Performance detalhada

### 7. Configurações (`/configuracoes`)
- Perfil do usuário
- Notificações
- Privacidade
- Interface

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
netlify deploy --prod
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Para dúvidas ou suporte:
- Email: suporte@arbitragempro.com
- Discord: [Link do servidor]
- Documentação: [Link da docs]

## 🔮 Roadmap

### Versão 2.0
- [ ] API REST completa
- [ ] Autenticação JWT
- [ ] Banco de dados PostgreSQL
- [ ] Notificações em tempo real
- [ ] App mobile React Native

### Versão 3.0
- [ ] IA para detecção de arbitragens
- [ ] Integração com APIs de casas
- [ ] Sistema de alertas avançado
- [ ] Análise preditiva
- [ ] Comunidade de usuários

---

**Desenvolvido com ❤️ para a comunidade de arbitragem esportiva** 