'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Zap } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Card className="bg-gradient-to-br from-primary/15 via-card to-accent/15 border-primary/20 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-50"></div>

          <div className="p-8 md:p-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <Zap className="w-3.5 h-3.4 text-primary" />
              <span className="text-xs text-primary font-bold uppercase tracking-wider">Alpha Test</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-balance tracking-tight leading-tight">
              Khám phá ngay
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                vũ trụ ApecSpace
              </span>
            </h2>

            <p className="text-muted-foreground text-sm md:text-lg max-w-xl mx-auto mb-10 font-medium">
              Tham gia Alpha Test để nhận phần thưởng độc quyền và cùng chúng tôi xây dựng tương lai trò chơi.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-background font-bold px-8 h-12 shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                Tham gia ngay <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5 h-12 px-8 font-bold">
                Hỗ trợ cộng đồng
              </Button>
            </div>

            {/* Social links */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <div className="flex justify-center gap-6">
                {['Discord', 'Twitter', 'Telegram', 'Facebook'].map((social) => (
                  <a key={social} href="#" className="text-xs font-bold text-muted-foreground hover:text-primary transition uppercase tracking-widest">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
