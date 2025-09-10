import AuthProvider from '@/components/AuthProvider';
import Sidebar from '@/components/Sidebar';
import '../globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function SistemaLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <AuthProvider>
          <div className="flex h-screen bg-gray-50">
            <Sidebar />
            <main className="flex-1 overflow-y-auto">{children}</main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
} 