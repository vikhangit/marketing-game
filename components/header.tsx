'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border" suppressHydrationWarning={true}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="font-bold text-foreground text-lg">⚡</span>
          </div>
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            ApecSpace
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-muted-foreground hover:text-primary transition">
            Tính năng
          </Link>
          <Link href="#gameplay" className="text-muted-foreground hover:text-primary transition">
            Lối chơi
          </Link>
          <Link href="#economy" className="text-muted-foreground hover:text-primary transition">
            Kinh tế
          </Link>
          <Link href="#fleet" className="text-muted-foreground hover:text-primary transition">
            Hạm đội
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* CTA Button */}
        <Button className="hidden md:flex bg-gradient-to-r from-primary to-accent text-background hover:shadow-lg hover:shadow-primary/50">
          Sẵn sàng chưa?
        </Button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-xl border-t border-border animate-in slide-in-from-top duration-300">
          <div className="px-6 py-8 space-y-6">
            <Link 
              href="#features" 
              onClick={() => setIsOpen(false)}
              className="block text-xl font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Tính năng
            </Link>
            <Link 
              href="#gameplay" 
              onClick={() => setIsOpen(false)}
              className="block text-xl font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Lối chơi
            </Link>
            <Link 
              href="#economy" 
              onClick={() => setIsOpen(false)}
              className="block text-xl font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Kinh tế
            </Link>
            <Link 
              href="#fleet" 
              onClick={() => setIsOpen(false)}
              className="block text-xl font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Hạm đội
            </Link>
            <div className="pt-4">
              <Button className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-accent text-background shadow-lg shadow-primary/20">
                Sẵn sàng chưa?
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
