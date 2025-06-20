"use client";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

interface AuthContextType {
  usuario: any;
  token: string | null;
  login: (token: string, usuario: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro do AuthProvider");
  return ctx;
}

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const t = localStorage.getItem("token");
    const u = localStorage.getItem("usuario");
    if (t) setToken(t);
    if (u) setUsuario(JSON.parse(u));
    setLoading(false);
  }, []);

  function login(token: string, usuario: any) {
    setToken(token);
    setUsuario(usuario);
    localStorage.setItem("token", token);
    localStorage.setItem("usuario", JSON.stringify(usuario));
    router.push("/dashboard");
  }

  function logout() {
    setIsLoggingOut(true);
    setToken(null);
    setUsuario(null);
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    window.location.replace("/");
  }

  useEffect(() => {
    if (loading || isLoggingOut) return;
    const rotasProtegidas = [
      "/dashboard",
      "/arbitragens",
      "/freebets",
      "/extracao",
      "/casas",
      "/relatorios",
      "/configuracoes",
      "/movimentacoes",
      "/freespins"
    ];
    const isProtected = rotasProtegidas.some(r => pathname.startsWith(r));
    if (isProtected && !token && pathname !== "/") {
      router.push("/login");
    }
    if (!isProtected && token && (pathname === "/login" || pathname === "/cadastro" || pathname === "/")) {
      router.push("/dashboard");
    }
  }, [pathname, token, router, loading, isLoggingOut]);

  if (loading) {
    return <div className="w-full h-screen flex items-center justify-center">Carregando...</div>;
  }

  return (
    <AuthContext.Provider value={{ usuario, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
} 