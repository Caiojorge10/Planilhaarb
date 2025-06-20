"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authAPI } from "@/lib/api";
import { useAuth } from "@/components/AuthProvider";

export default function CadastroPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro("");
    setLoading(true);
    try {
      const res = await authAPI.register(nome, email, senha);
      if (res.token && res.usuario) {
        login(res.token, res.usuario);
      } else {
        router.push("/login");
      }
    } catch (err: any) {
      setErro(err?.error || "Erro ao cadastrar");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-blue-700">Criar conta</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input type="text" placeholder="Nome" className="border rounded px-4 py-2" required value={nome} onChange={e => setNome(e.target.value)} />
          <input type="email" placeholder="E-mail" className="border rounded px-4 py-2" required value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Senha" className="border rounded px-4 py-2" required value={senha} onChange={e => setSenha(e.target.value)} />
          <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition" disabled={loading}>{loading ? "Cadastrando..." : "Cadastrar"}</button>
          {erro && <div className="text-red-600 text-sm text-center">{erro}</div>}
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Já tem conta? <Link href="/login" className="text-blue-600 hover:underline">Entrar</Link>
        </p>
      </div>
    </main>
  );
} 