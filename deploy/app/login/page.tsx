"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authAPI } from "@/lib/api";
import { useAuth } from "@/components/AuthProvider";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro("");
    setLoading(true);
    try {
      const res = await authAPI.login(email, senha);
      if (res.token && res.usuario) {
        login(res.token, res.usuario);
      }
    } catch (err: any) {
      setErro(err?.error || "Erro ao fazer login");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-blue-700">Entrar</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input type="email" placeholder="E-mail" className="border rounded px-4 py-2" required value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Senha" className="border rounded px-4 py-2" required value={senha} onChange={e => setSenha(e.target.value)} />
          <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition" disabled={loading}>{loading ? "Entrando..." : "Entrar"}</button>
          {erro && <div className="text-red-600 text-sm text-center">{erro}</div>}
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Não tem conta? <Link href="/cadastro" className="text-blue-600 hover:underline">Cadastre-se</Link>
        </p>
      </div>
    </main>
  );
} 