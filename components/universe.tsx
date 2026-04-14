'use client';

import { Infinity, Coins, Zap, Globe, RefreshCcw, Gift, Dices, Ticket, Rocket, Users, ShoppingBag, Info, Trophy, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function Universe() {
  const screenshots = [
    { src: '/screenshot/buong_lai.jpg', alt: 'Buồng lái' },
    { src: '/screenshot/hanh_tinh_1.jpg', alt: 'Hành tinh 1' },
    { src: '/screenshot/hanh_tinh_2.jpg', alt: 'Hành tinh 2' },
    { src: '/screenshot/hanh_tinh_3.jpg', alt: 'Hành tinh 3' },
    { src: '/screenshot/hanh_tinh_4.png', alt: 'Hành tinh 4' },
    { src: '/screenshot/voucher_1.png', alt: 'Voucher 1' },
    { src: '/screenshot/voucher_2.png', alt: 'Voucher 2' },
  ];

  const playerBenefits = [
    {
      icon: <Dices className="w-6 h-6" />,
      title: 'Quay Thưởng Pre-Beta',
      description: 'Cơ hội sở hữu sớm linh kiện Mythic cực hiếm qua vòng quay may mắn.',
      color: 'text-accent',
      bg: 'bg-accent/10',
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: 'Điểm Danh Nhận Quà',
      description: 'Tặng ngay Năng lượng (EP) và vật phẩm giá trị khi đăng nhập mỗi ngày.',
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
    {
      icon: <Ticket className="w-6 h-6" />,
      title: 'Voucher O2O',
      description: 'Đổi điểm lấy voucher giảm giá tại các nhà hàng, siêu thị đối tác.',
      color: 'text-secondary',
      bg: 'bg-secondary/10',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Tích Lũy Tài Sản',
      description: 'Xây dựng giá trị tài sản qua cơ chế khai thác năng lượng tự động.',
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Hoa Hồng Hạm Đội',
      description: 'Nhận lợi nhuận và hoa hồng từ hoạt động khai thác của đồng minh.',
      color: 'text-accent',
      bg: 'bg-accent/10',
    },
    {
      icon: <RefreshCcw className="w-6 h-6" />,
      title: 'Tự Do Thanh Khoản',
      description: 'Giao dịch vật phẩm an toàn và minh bạch qua sàn P2P nội bộ.',
      color: 'text-destructive',
      bg: 'bg-destructive/10',
    },
  ];

  return (
    <section className="relative pt-24 pb-12 md:py-32 overflow-hidden min-h-[800px] flex flex-col justify-center">
      {/* Background with Galaxy Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/galaxy.jpg" 
          alt="Galaxy Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary">
            Chinh phục <span className="text-primary">Vũ trụ ApecSpace</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto font-medium mb-10">
            Trải nghiệm hệ sinh thái Gamification độc đáo, nơi bạn không chỉ chơi mà còn nhận được những giá trị thực thông qua cơ chế O2O và kinh tế phi tập trung.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline" className="rounded-full border-primary/50 hover:bg-primary/10 text-primary px-8 h-12 text-base font-bold transition-all hover:scale-105">
                  <Info className="mr-2 h-5 w-5" />
                  Tìm hiểu thêm
                </Button>
              </DialogTrigger>
              <EventInfoDialog />
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-background px-8 h-12 text-base font-bold shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-primary/40">
                  <Dices className="mr-2 h-5 w-5" />
                  Quay thưởng ngay
                </Button>
              </DialogTrigger>
              <EventInfoDialog />
            </Dialog>
          </div>
        </div>

        {/* Modern Mobile Screenshots Layout */}
        <div className="relative h-[450px] md:h-[650px] w-full flex items-center justify-center mb-24">
          {/* Main central phone */}
          <div className="relative z-30 transform transition-all duration-700 hover:scale-105">
            <div className="w-[180px] h-[360px] md:w-[260px] md:h-[520px] bg-black rounded-[2.5rem] p-3 border-[6px] border-slate-800 shadow-[0_0_50px_rgba(59,130,246,0.3)] overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-800 rounded-b-2xl z-20" />
              <img 
                src={screenshots[0].src} 
                alt={screenshots[0].alt}
                className="w-full h-full object-cover rounded-[1.8rem]"
              />
            </div>
          </div>

          {/* Side phone - Left (Inner) */}
          <div className="absolute left-1/2 -translate-x-[110%] md:-translate-x-[130%] z-20 rotate-[-10deg] scale-75 min-[376px]:scale-80 md:scale-90 opacity-80 transition-all duration-500 hover:rotate-0 hover:z-40 hover:opacity-100">
            <div className="w-[140px] h-[280px] min-[376px]:w-[160px] min-[376px]:h-[320px] md:w-[220px] md:h-[440px] bg-black rounded-[2rem] md:rounded-[2.2rem] p-2 border-[4px] md:border-[5px] border-slate-800 shadow-2xl overflow-hidden">
              <img 
                src={screenshots[1].src} 
                alt={screenshots[1].alt}
                className="w-full h-full object-cover rounded-[1.4rem] md:rounded-[1.6rem]"
              />
            </div>
          </div>

          {/* Side phone - Right (Inner) */}
          <div className="absolute left-1/2 translate-x-[10%] md:translate-x-[30%] z-20 rotate-[10deg] scale-75 min-[376px]:scale-80 md:scale-90 opacity-80 transition-all duration-500 hover:rotate-0 hover:z-40 hover:opacity-100">
            <div className="w-[140px] h-[280px] min-[376px]:w-[160px] min-[376px]:h-[320px] md:w-[220px] md:h-[440px] bg-black rounded-[2rem] md:rounded-[2.2rem] p-2 border-[4px] md:border-[5px] border-slate-800 shadow-2xl overflow-hidden">
              <img 
                src={screenshots[2].src} 
                alt={screenshots[2].alt}
                className="w-full h-full object-cover rounded-[1.4rem] md:rounded-[1.6rem]"
              />
            </div>
          </div>

          {/* Distant phone - Left (Outer) */}
          <div className="absolute left-1/2 -translate-x-[170%] min-[376px]:-translate-x-[190%] md:-translate-x-[220%] z-10 rotate-[-20deg] scale-55 min-[376px]:scale-60 md:scale-70 opacity-70 transition-all duration-700 hover:rotate-0 hover:z-40 hover:opacity-100">
            <div className="w-[130px] h-[260px] min-[376px]:w-[150px] min-[376px]:h-[300px] md:w-[200px] md:h-[400px] bg-black rounded-[1.8rem] md:rounded-[2rem] p-2 border-[3px] md:border-[4px] border-slate-800 shadow-xl overflow-hidden">
              <img 
                src={screenshots[3].src} 
                alt={screenshots[3].alt}
                className="w-full h-full object-cover rounded-[1.2rem] md:rounded-[1.4rem]"
              />
            </div>
          </div>

          {/* Distant phone - Right (Outer) */}
          <div className="absolute left-1/2 translate-x-[70%] min-[376px]:translate-x-[90%] md:translate-x-[120%] z-10 rotate-[20deg] scale-55 min-[376px]:scale-60 md:scale-70 opacity-70 transition-all duration-700 hover:rotate-0 hover:z-40 hover:opacity-100">
            <div className="w-[130px] h-[260px] min-[376px]:w-[150px] min-[376px]:h-[300px] md:w-[200px] md:h-[400px] bg-black rounded-[1.8rem] md:rounded-[2rem] p-2 border-[3px] md:border-[4px] border-slate-800 shadow-xl overflow-hidden">
              <img 
                src={screenshots[4].src} 
                alt={screenshots[4].alt}
                className="w-full h-full object-cover rounded-[1.2rem] md:rounded-[1.4rem]"
              />
            </div>
          </div>

          {/* Floating Vouchers */}
          <div className="absolute bottom-0 -left-12 min-[376px]:-left-8 md:left-0 z-40 rotate-[-15deg] animate-bounce-slow scale-65 min-[376px]:scale-75 md:scale-90">
             <div className="w-[120px] h-[200px] md:w-[170px] md:h-[270px] bg-black rounded-[1.5rem] p-1.5 border-[4px] border-slate-800 shadow-2xl overflow-hidden">
                <img 
                  src={screenshots[5].src} 
                  alt={screenshots[5].alt}
                  className="w-full h-full object-cover rounded-[1rem]"
                />
             </div>
          </div>

          <div className="absolute top-0 -right-12 min-[376px]:-right-8 md:right-0 z-40 rotate-[15deg] animate-bounce-slow-delayed scale-65 min-[376px]:scale-75 md:scale-90">
             <div className="w-[120px] h-[200px] md:w-[170px] md:h-[270px] bg-black rounded-[1.5rem] p-1.5 border-[4px] border-slate-800 shadow-2xl overflow-hidden">
                <img 
                  src={screenshots[6].src} 
                  alt={screenshots[6].alt}
                  className="w-full h-full object-cover rounded-[1rem]"
                />
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 min-[376px]:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {playerBenefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group relative p-5 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 bg-card/20 backdrop-blur-xl hover:bg-card/40 transition-all duration-500 overflow-hidden shadow-2xl"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative z-10">
                <div className={`mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl ${benefit.bg} ${benefit.color} border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                  {benefit.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white tracking-tight group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>

                <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-widest text-primary/60 group-hover:text-primary transition-colors cursor-pointer">
                  Khám phá thêm
                  <div className="ml-2 w-4 h-[1px] bg-primary/40 group-hover:w-8 transition-all duration-500" />
                </div>
              </div>

              {/* Decorative light effect */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 blur-[50px] rounded-full group-hover:bg-primary/10 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EventInfoDialog() {
  return (
    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-[#0d122b]/95 border-primary/30 backdrop-blur-3xl p-0 gap-0 rounded-3xl">
      <div className="relative p-6 sm:p-8">
        {/* Decorative Header Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-primary/20 blur-[60px] rounded-full pointer-events-none" />
        
        <DialogHeader className="relative z-10 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30 shadow-lg shadow-primary/10">
              <Trophy className="w-6 h-6 text-primary" />
            </div>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
          <DialogTitle className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
            Vòng Quay <span className="text-primary">May Mắn</span> & Thể Lệ Sự Kiện
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm md:text-lg">
            Sở hữu linh kiện phi thuyền độc bản và Voucher O2O giá trị.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-10 relative z-10 pb-6">
          {/* Lucky Spin Section */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-2 h-8 bg-primary rounded-full" />
              <h4 className="text-xl font-bold text-white uppercase tracking-wider">
                1. Lucky Gacha
              </h4>
            </div>
            <p className="text-muted-foreground/90 leading-relaxed pl-5 border-l border-white/10">
              Nhận ngay **1 lượt quay miễn phí** mỗi ngày khi đăng nhập. Kiếm thêm lượt qua nhiệm vụ hoặc Điểm Không Gian (SP).
            </p>
            <div className="grid grid-cols-1 min-[450px]:grid-cols-3 gap-3">
              <div className="group bg-white/5 hover:bg-primary/10 p-4 rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-300 text-center shadow-inner">
                <div className="text-3xl mb-2 transition-transform duration-500 group-hover:scale-125">🛸</div>
                <div className="font-bold text-white text-xs mb-1 uppercase tracking-tighter">Linh kiện Mythic</div>
                <div className="inline-block px-2 py-0.5 rounded-full bg-primary/20 text-[10px] font-bold text-primary">0.5% RATE</div>
              </div>
              <div className="group bg-white/5 hover:bg-accent/10 p-4 rounded-2xl border border-white/10 hover:border-accent/40 transition-all duration-300 text-center shadow-inner">
                <div className="text-3xl mb-2 transition-transform duration-500 group-hover:scale-125">🎫</div>
                <div className="font-bold text-white text-xs mb-1 uppercase tracking-tighter">Voucher 500k</div>
                <div className="inline-block px-2 py-0.5 rounded-full bg-accent/20 text-[10px] font-bold text-accent">2% RATE</div>
              </div>
              <div className="group bg-white/5 hover:bg-secondary/10 p-4 rounded-2xl border border-white/10 hover:border-secondary/40 transition-all duration-300 text-center shadow-inner">
                <div className="text-3xl mb-2 transition-transform duration-500 group-hover:scale-125">⚡</div>
                <div className="font-bold text-white text-xs mb-1 uppercase tracking-tighter">1,000 EP</div>
                <div className="inline-block px-2 py-0.5 rounded-full bg-secondary/20 text-[10px] font-bold text-secondary">25% RATE</div>
              </div>
            </div>
          </div>

          {/* Rules Section */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-2 h-8 bg-accent rounded-full" />
              <h4 className="text-xl font-bold text-white uppercase tracking-wider">
                2. Thể Lệ Pre-Beta
              </h4>
            </div>
            <div className="grid grid-cols-1 gap-3 pl-5">
              {[
                "Sự kiện diễn ra cho đến ngày ra mắt bản Beta chính thức.",
                "Hoàn thành KYC cơ bản để bắt đầu rút thưởng Voucher.",
                "Vật phẩm nhận được sẽ chuyển vào Kho lưu trữ cá nhân.",
                "Nghiêm cấm các hành vi gian lận và đa tài khoản."
              ].map((rule, idx) => (
                <div key={idx} className="flex gap-3 text-muted-foreground/90 text-sm font-medium items-start">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {rule}
                </div>
              ))}
            </div>
          </div>

          {/* Rewards Goals Section */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-2 h-8 bg-secondary rounded-full" />
              <h4 className="text-xl font-bold text-white uppercase tracking-wider">
                3. Mục Tiêu Đổi Thưởng
              </h4>
            </div>
            <div className="space-y-3 pl-5">
              <div className="group flex items-center justify-between p-4 bg-gradient-to-r from-white/5 to-transparent rounded-2xl border border-white/10 hover:border-primary/30 transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ShoppingBag className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-white font-bold text-sm">Voucher Siêu thị 200k</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary font-black text-sm">5,000</span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase">SP</span>
                </div>
              </div>
              <div className="group flex items-center justify-between p-4 bg-gradient-to-r from-white/5 to-transparent rounded-2xl border border-white/10 hover:border-accent/30 transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Star className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-white font-bold text-sm">Buff Tốc độ Khai thác x2</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent font-black text-sm">2,500</span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase">SP</span>
                </div>
              </div>
            </div>
          </div>

          <Button className="w-full h-14 bg-gradient-to-r from-primary via-blue-500 to-accent text-background font-black text-lg rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-300 uppercase tracking-widest mt-4">
            Khám phá & Chinh phục ngay!
          </Button>
        </div>
      </div>
    </DialogContent>
  );
}

import { Badge } from "@/components/ui/badge";
