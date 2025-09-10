import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <section className="max-w-2xl w-full text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">Planilha de Arbitragem Esportiva</h1>
        <p className="text-lg text-gray-700 mb-6">Gerencie suas arbitragens, freebets e extrações de forma simples, segura e eficiente. Ideal para apostadores que buscam controle e automação.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/cadastro" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Cadastre-se</Link>
          <Link href="/login" className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50 transition">Entrar</Link>
        </div>
      </section>
      <section className="max-w-3xl w-full mb-12">
        <h2 className="text-2xl font-semibold mb-2 text-blue-700">Como funciona?</h2>
        <ol className="list-decimal list-inside text-left text-gray-700 space-y-2">
          <li>Cadastre-se e faça login na plataforma.</li>
          <li>Adicione suas casas de aposta e configure seus parâmetros.</li>
          <li>Registre arbitragens, freebets e extrações facilmente.</li>
          <li>Acompanhe métricas, relatórios e resultados em tempo real.</li>
        </ol>
      </section>
      <section className="max-w-3xl w-full mb-12">
        <h2 className="text-2xl font-semibold mb-2 text-blue-700">Planos</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <div className="border rounded-lg p-6 flex-1 bg-white shadow">
            <h3 className="text-xl font-bold mb-2">Gratuito</h3>
            <p className="mb-4">Ideal para quem está começando. Controle básico de arbitragens e freebets.</p>
            <span className="text-2xl font-bold text-blue-600">R$0</span>
          </div>
          <div className="border-2 border-blue-600 rounded-lg p-6 flex-1 bg-blue-50 shadow-lg">
            <h3 className="text-xl font-bold mb-2 text-blue-700">Premium</h3>
            <p className="mb-4">Recursos avançados, relatórios completos, exportação de dados e suporte prioritário.</p>
            <span className="text-2xl font-bold text-blue-700">R$29/mês</span>
          </div>
        </div>
      </section>
    </main>
  );
} 