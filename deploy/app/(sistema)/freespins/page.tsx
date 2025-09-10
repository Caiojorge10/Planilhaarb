"use client";
import { useEffect, useState } from "react";
import { freespinsAPI, FreeSpin, casasAPI, Casa } from "../../../lib/api";
import { Gift } from "lucide-react";
import { Combobox } from '@headlessui/react';

export default function FreeSpinsPage() {
  const [freespins, setFreespins] = useState<FreeSpin[]>([]);
  const [casas, setCasas] = useState<Casa[]>([]);
  const [form, setForm] = useState<{ casaId?: number; valorGanho?: number; casaSearch?: string }>({});
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
    casasAPI.getAll().then(setCasas);
  }, []);

  async function fetchData() {
    setLoading(true);
    try {
      const data = await freespinsAPI.getAll();
      setFreespins(data);
    } catch (e) {
      setError("Erro ao buscar rodadas grátis");
    }
    setLoading(false);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await freespinsAPI.create({
        casaId: Number(form.casaId),
        valorGanho: Number(form.valorGanho),
      });
      setForm({});
      fetchData();
    } catch (e) {
      setError("Erro ao salvar rodada grátis");
    }
    setLoading(false);
  }

  async function handleDelete(id: number) {
    if (!confirm("Tem certeza que deseja deletar?")) return;
    setLoading(true);
    try {
      await freespinsAPI.delete(id);
      fetchData();
    } catch (e) {
      setError("Erro ao deletar rodada grátis");
    }
    setLoading(false);
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 flex items-center gap-2 text-primary-600">
        <Gift className="h-7 w-7" />
        Rodadas Grátis
      </h1>
      <form onSubmit={handleSubmit} className="bg-white rounded shadow p-4 mb-6 flex flex-col gap-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <Combobox value={form.casaId || 0} onChange={v => setForm(prev => ({...prev, casaId: v || 0}))}>
            <div className="relative">
              <Combobox.Input
                className="border p-2 rounded w-full"
                displayValue={id => casas.find(c => c.id === id)?.nome || ''}
                onChange={e => setForm(prev => ({...prev, casaId: 0, casaSearch: e.target.value}))}
                placeholder="Digite ou selecione a casa"
                required
              />
              <Combobox.Options className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded shadow-lg max-h-60 overflow-auto">
                {casas.filter(c => !form.casaSearch || c.nome.toLowerCase().includes(form.casaSearch.toLowerCase())).map(casa => (
                  <Combobox.Option key={casa.id} value={casa.id} className={({ active }) => `cursor-pointer select-none px-4 py-2 ${active ? 'bg-blue-100' : ''}`}>{casa.nome}</Combobox.Option>
                ))}
              </Combobox.Options>
            </div>
          </Combobox>
          <input name="valorGanho" value={form.valorGanho || ""} onChange={handleChange} placeholder="Valor Ganho" type="number" step="0.01" required className="border p-2 rounded" />
        </div>
        <div className="flex gap-2 mt-2">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50" disabled={loading}>Cadastrar</button>
        </div>
        {error && <div className="text-red-600">{error}</div>}
      </form>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Casa</th>
              <th className="p-2">Valor Ganho</th>
              <th className="p-2">Data</th>
              <th className="p-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {freespins.map((f) => (
              <tr key={f.id} className="border-t">
                <td className="p-2">{f.casa?.nome}</td>
                <td className="p-2">R$ {f.valorGanho.toFixed(2)}</td>
                <td className="p-2">{f.data.slice(0, 10)}</td>
                <td className="p-2 flex gap-2">
                  <button className="bg-red-600 px-2 py-1 rounded text-white" onClick={() => handleDelete(f.id)}>Excluir</button>
                </td>
              </tr>
            ))}
            {freespins.length === 0 && (
              <tr><td colSpan={4} className="text-center p-4">Nenhuma rodada grátis cadastrada.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
} 