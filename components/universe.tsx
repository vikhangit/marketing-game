'use client';

import { Infinity, Coins, Zap, Globe, RefreshCcw, Gift, Dices, Ticket, Rocket, Users, ShoppingBag, Info, Trophy, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCallback, useEffect, useState, useMemo } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PlanetVoucher {
  id: string;
  title: string;
  discount: string;
  color: string;
  planetColor: string;
}

const PLANET_VOUCHERS: Record<string, PlanetVoucher[]> = {
  mars: [ // Life Care (Spa)
    { id: 'lc1', title: 'Massage chân', discount: 'Giảm 30%', color: 'from-red-500 to-orange-600', planetColor: '' },
    { id: 'lc2', title: 'Massage Body', discount: 'Voucher 200k', color: 'from-orange-400 to-red-500', planetColor: '' },
    { id: 'lc3', title: 'Gội đầu thảo dược', discount: 'Tặng kèm', color: 'from-rose-500 to-red-700', planetColor: '' },
    { id: 'lc4', title: 'Liệu trình giảm mỡ', discount: '-50%', color: 'from-orange-500 to-rose-600', planetColor: '' },
    { id: 'lc5', title: 'Chăm sóc da mặt', discount: 'Trải nghiệm', color: 'from-red-600 to-orange-700', planetColor: '' },
  ],
  neptune: [ // Ecoop (Tổng kho tiêu dùng)
    { id: 'ec1', title: 'Voucher Trà & Cafe', discount: 'Giảm 20%', color: 'from-blue-500 to-indigo-600', planetColor: '' },
    { id: 'ec2', title: 'Hóa mỹ phẩm', discount: 'Voucher 50k', color: 'from-indigo-400 to-blue-700', planetColor: '' },
    { id: 'ec3', title: 'Hàng tiêu dùng', discount: 'Combo tiết kiệm', color: 'from-blue-600 to-cyan-500', planetColor: '' },
    { id: 'ec4', title: 'Nước giặt xả', discount: 'Mua 1 Tặng 1', color: 'from-cyan-600 to-blue-800', planetColor: '' },
    { id: 'ec5', title: 'Sữa & Bỉm', discount: 'Giá sỉ', color: 'from-blue-700 to-indigo-900', planetColor: '' },
  ],
  saturn: [ // Phở Cô Ba
    { id: 'pcb1', title: 'Tô đặc biệt', discount: 'Tặng Quẩy', color: 'from-amber-500 to-orange-600', planetColor: '' },
    { id: 'pcb2', title: 'Voucher Ăn Sáng', discount: 'Giảm 20%', color: 'from-orange-400 to-amber-600', planetColor: '' },
    { id: 'pcb3', title: 'Combo Gia Đình', discount: '100k', color: 'from-amber-600 to-orange-700', planetColor: '' },
    { id: 'pcb4', title: 'Nước dùng thêm', discount: 'Free', color: 'from-orange-500 to-amber-500', planetColor: '' },
    { id: 'pcb5', title: 'Gia vị đặc sản', discount: 'Limited', color: 'from-amber-700 to-orange-800', planetColor: '' },
  ],
  venus: [ // ION BẠC
    { id: 'ib1', title: 'Bình xịt khuẩn', discount: 'Giảm 30%', color: 'from-yellow-400 to-amber-500', planetColor: '' },
    { id: 'ib2', title: 'Voucher ION BẠC', discount: '50k', color: 'from-amber-300 to-yellow-500', planetColor: '' },
    { id: 'ib3', title: 'Combo Sạch Sâu', discount: 'Giảm 25%', color: 'from-yellow-500 to-amber-400', planetColor: '' },
    { id: 'ib4', title: 'Lõi lọc ION', discount: '-15%', color: 'from-amber-500 to-yellow-600', planetColor: '' },
    { id: 'ib5', title: 'Máy tiệt trùng', discount: 'Voucher 500k', color: 'from-yellow-600 to-amber-700', planetColor: '' },
  ],
  uranus: [ // Siêu thị AI
    { id: 'sai1', title: 'Gạo ST25', discount: 'Giảm 10%', color: 'from-cyan-500 to-blue-600', planetColor: '' },
    { id: 'sai2', title: 'Nước mắm Nam Ngư', discount: 'Tặng 1 Knorr', color: 'from-blue-400 to-cyan-600', planetColor: '' },
    { id: 'sai3', title: 'Dầu ăn Tường An', discount: 'Voucher 20k', color: 'from-cyan-600 to-blue-500', planetColor: '' },
    { id: 'sai4', title: 'Bột giặt OMO', discount: 'Giảm 15.000đ', color: 'from-blue-500 to-cyan-400', planetColor: '' },
    { id: 'sai5', title: 'Sữa tươi Vinamilk', discount: 'Mua 1 thùng tặng 1', color: 'from-cyan-700 to-blue-800', planetColor: '' },
  ],
  earth: [ // Siêu thị 3D (Web ảo - Liên quan vận chuyển)
    { id: 's3d1', title: 'Đơn hàng thực phẩm', discount: 'Free Ship', color: 'from-green-500 to-emerald-600', planetColor: '' },
    { id: 's3d2', title: 'Voucher Mua Sắm', discount: 'Giảm 50% Ship', color: 'from-emerald-400 to-green-700', planetColor: '' },
    { id: 's3d3', title: 'Gạo & Nhu yếu phẩm', discount: 'Giao nhanh 2h', color: 'from-green-600 to-teal-500', planetColor: '' },
    { id: 's3d4', title: 'Hóa mỹ phẩm 3D', discount: 'Free Ship 0đ', color: 'from-teal-600 to-green-500', planetColor: '' },
  ],
  jupiter: [ // Mộc tinh
    { id: 'j1', title: 'Linh kiện Mythic', discount: '30%', color: 'from-orange-500 to-amber-700', planetColor: '' },
    { id: 'j2', title: 'Năng lượng EP', discount: 'x2000', color: 'from-amber-600 to-orange-800', planetColor: '' },
    { id: 'j3', title: 'Voucher Nâng Cấp', discount: 'Giảm 40%', color: 'from-orange-400 to-amber-500', planetColor: '' },
  ],
  mercury: [ // Thủy tinh
    { id: 'm1', title: 'EP x1000', discount: '25%', color: 'from-gray-400 to-slate-600', planetColor: '' },
    { id: 'm2', title: 'Tốc độ khai thác', discount: '+10%', color: 'from-slate-500 to-gray-700', planetColor: '' },
    { id: 'm3', title: 'Voucher SP', discount: '500 SP', color: 'from-gray-600 to-slate-800', planetColor: '' },
  ],
  pluto: [ // Diêm Vương tinh
    { id: 'p1', title: 'Voucher O2O', discount: '20%', color: 'from-slate-600 to-blue-900', planetColor: '' },
    { id: 'p2', title: 'Rương may mắn', discount: 'Free', color: 'from-blue-900 to-slate-700', planetColor: '' },
    { id: 'p3', title: 'Linh kiện Rare', discount: '99%', color: 'from-slate-700 to-blue-800', planetColor: '' },
  ],
};

interface Planet {
  id: string;
  name: string;
  className: string;
  planetClass: string;
  children?: React.ReactNode;
  voucherPosition: 'left' | 'center' | 'right';
  availableVouchers: PlanetVoucher[];
}

export function Universe() {
  const [mounted, setMounted] = useState(false);
  const [vouchIndex, setVouchIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Group and shuffle all vouchers from planets, excluding component vouchers
  const allVouchers = useMemo(() => {
    return Object.entries(PLANET_VOUCHERS)
      .flatMap(([planetId, vouchers]) => vouchers.map(v => ({ ...v, planetId })))
      .filter(v => !v.title.toLowerCase().includes('linh kiện'))
      .sort(() => 0.5 - Math.random());
  }, []);

  useEffect(() => {
    setMounted(true);
    if (allVouchers.length === 0) return;

    let timer: NodeJS.Timeout;
    let fadeTimer: NodeJS.Timeout;
    let hiddenTimer: NodeJS.Timeout;

    const startCycle = () => {
      // 1. Voucher hiển thị rõ (10s fade-in + 10s show = 20s)
      setIsFading(false);
      
      timer = setTimeout(() => {
        // 2. Bắt đầu mờ dần (mất 10 giây)
        setIsFading(true);
        
        fadeTimer = setTimeout(() => {
          // 3. Sau khi mờ hẳn, chờ thêm 1 giây (ẩn hoàn toàn)
          hiddenTimer = setTimeout(() => {
            // 4. Đổi sang cặp voucher tiếp theo và bắt đầu lại vòng lặp
            setVouchIndex(prev => (prev + 2) % allVouchers.length);
            startCycle();
          }, 1000);
        }, 10000); // fade out time
      }, 20000); // fade in (10s) + show (10s)
    };

    startCycle();
    return () => {
      clearTimeout(timer);
      clearTimeout(fadeTimer);
      clearTimeout(hiddenTimer);
    };
  }, [allVouchers.length]);

  const getVoucherTheme = (planetId: string) => {
    const planetStyles: Record<string, { className: string; text: string; label: string }> = {
      mars: { className: 'planet-1', text: 'text-white', label: 'text-white/80' },
      neptune: { className: 'planet-6', text: 'text-[#eee]', label: 'text-white/60' },
      saturn: { className: 'planet-3', text: 'text-[#00ff88]', label: 'text-[#00ff88]/70' },
      venus: { className: 'planet-4', text: 'text-[#880e4f]', label: 'text-[#ad1457]/80' },
      uranus: { className: 'planet-5', text: 'text-[#333]', label: 'text-[#666]/80' },
      earth: { className: 'planet-2', text: 'text-white', label: 'text-white/70' },
    };
    return planetStyles[planetId] || planetStyles.mars;
  };

  if (!mounted || allVouchers.length === 0) return null;

  const currentV1 = allVouchers[vouchIndex];
  const currentV2 = allVouchers[(vouchIndex + 1) % allVouchers.length];
  const theme1 = getVoucherTheme(currentV1.planetId);
  const theme2 = getVoucherTheme(currentV2.planetId);

  const screenshots = [
    { src: '/screenshot/buong_lai.png', alt: 'Buồng lái' },
    { src: '/screenshot/hanh_tinh_1.jpg', alt: 'Hành tinh 1' },
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
    <section className="relative pt-24 pb-12 md:py-32 overflow-hidden min-h-[900px] flex flex-col justify-center" suppressHydrationWarning>
      {/* Background with Galaxy Image - Darkened further */}
      <div className="absolute inset-0 z-0 bg-[#000000]">
        <img 
          src="/galaxy.jpg" 
          alt="Galaxy Background" 
          className="w-full h-full object-cover opacity-10 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-100" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-100" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary">
            Chinh phục <span className="text-primary">Vũ trụ ApecSpace</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto font-medium mb-10">
            Trải nghiệm hệ sinh thái Gamification độc đáo, nơi bạn không chỉ chơi mà còn nhận được những giá trị thực thông qua cơ chế O2O và kinh tế phi tập trung.
          </p>
          <div className="grid grid-cols-1 min-[360px]:grid-cols-2 gap-3 max-w-[400px] mx-auto md:flex md:flex-wrap md:justify-center md:gap-4 md:max-w-none mb-12">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline" className="rounded-full border-primary/50 hover:bg-primary/10 text-primary px-4 min-[400px]:px-8 h-12 text-sm min-[400px]:text-base font-bold transition-all hover:scale-105 w-full md:w-auto">
                  <Info className="mr-2 h-5 w-5 shrink-0" />
                  Tìm hiểu thêm
                </Button>
              </DialogTrigger>
              <EventInfoDialog />
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-background px-4 min-[400px]:px-8 h-12 text-sm min-[400px]:text-base font-bold shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-primary/40 w-full md:w-auto">
                  <Dices className="mr-2 h-5 w-5 shrink-0" />
                  Quay thưởng ngay
                </Button>
              </DialogTrigger>
              <EventInfoDialog />
            </Dialog>
          </div>
        </div>

        {/* Modern Mobile Screenshots Layout */}
        <div className="relative h-[650px] md:h-[850px] w-full flex items-center justify-center mb-2 md:mb-24 overflow-visible">
          
          {/* Top Stat: Hàng ngàn Hành tinh dịch vụ */}
          <div className="absolute top-[60px] md:top-[40px] left-0 w-full flex flex-col items-center justify-center z-50 pointer-events-none group/stat">
            <div className="relative inline-block">
              <h3 className="text-4xl min-[350px]:text-6xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-primary/20 drop-shadow-[0_0_30px_rgba(0,217,255,0.4)] tracking-tighter uppercase italic whitespace-nowrap pr-4 pl-1">
                Hàng ngàn
              </h3>
            </div>
            <div className="mt-1 md:mt-2 flex flex-col items-center">
              <p className="text-lg min-[350px]:text-xl md:text-xl font-bold text-primary tracking-wide uppercase italic whitespace-nowrap">Hành tinh dịch vụ</p>
            </div>
          </div>

          {/* 1. Mars - Reddish (Life Care) */}
          <PlanetWithVoucher
            planetId="mars"
            name="Life Care"
            className="absolute top-[20%] md:top-[-8%] left-[5%] min-[391px]:left-[13%] md:left-[-5%]"
            planetClass="w-16 h-16 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-red-500 via-orange-700 to-red-950 animate-pulse-slow shadow-[0_0_60px_rgba(220,38,38,0.6)]"
            voucherPosition="center"
            animationClass="animate-slide-in-left"
            autoScrollInterval={2500}
          />
          
          {/* 2. Neptune - Deep Blue (Ecoop) */}
          <PlanetWithVoucher
            planetId="neptune"
            name="Tổng Kho Ecoop"
            className="absolute bottom-[20%] md:bottom-[-5%] right-[5%] min-[391px]:right-[13%] md:right-[-5%]"
            planetClass="w-20 h-20 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-blue-500 via-blue-800 to-blue-950 animate-bounce-slow shadow-[0_0_80px_rgba(37,99,235,0.6)]"
            voucherPosition="left"
            animationClass="animate-slide-in-right"
            autoScrollInterval={3500}
          />

          {/* 3. Saturn - Earthy Yellow/Brown (Phở Cô Ba) */}
          <PlanetWithVoucher
            planetId="saturn"
            name="Cây xăng"
            className="absolute top-[20%] md:top-[-8%] right-[5%] min-[391px]:right-[13%] md:right-[-5%]"
            planetClass="w-16 h-16 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-yellow-500 via-amber-700 to-amber-950 animate-pulse-slow-delayed shadow-[0_0_70px_rgba(217,119,6,0.5)]"
            voucherPosition="left"
            animationClass="animate-flip-in"
            autoScrollInterval={3000}
            hasRing={true}
          />
          
          {/* 4. Venus - Pale Yellow/Acidic (ION Bạc) */}
          <PlanetWithVoucher
            planetId="venus"
            name="Phòng Khám Đa Khoa"
            className="absolute bottom-[20%] md:bottom-[-5%] left-[5%] min-[391px]:left-[13%] md:left-[-5%]"
            planetClass="w-18 h-18 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-yellow-100 via-yellow-500 to-yellow-800 shadow-[0_0_50px_rgba(253,224,71,0.5)]"
            voucherPosition="right"
            animationClass="animate-slide-in-up"
            autoScrollInterval={2800}
          />

          {/* 5. Uranus - Cyan/Light Blue (Siêu thị AI) */}
          <PlanetWithVoucher
            planetId="uranus"
            name="Siêu thị AI"
            className="absolute hidden md:flex top-1/2 -translate-y-1/2 left-[-18%] lg:left-[-12%]"
            planetClass="w-16 h-16 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-cyan-300 via-blue-400 to-blue-600 animate-pulse-slow shadow-[0_0_45px_rgba(34,211,238,0.5)]"
            voucherPosition="center"
            animationClass="animate-zoom-out-in"
            autoScrollInterval={3200}
          />

          {/* 6. Earth - Detailed Blue/Green (Siêu thị 3D) */}
          <PlanetWithVoucher
            planetId="earth"
            name="Siêu thị 3D"
            className="absolute hidden md:flex top-[15%] right-[-18%] lg:right-[-12%]"
            planetClass="w-20 h-20 md:w-40 md:h-40 rounded-full bg-[#1e3a8a] shadow-[0_0_70px_rgba(59,130,246,0.7)] overflow-hidden border border-blue-400/20"
            voucherPosition="center"
            isEarth={true}
            animationClass="animate-fade-in-scale"
            autoScrollInterval={2200}
          />

          {/* Main central phone */}
          <div className="relative z-30 transform transition-all duration-700 hover:scale-105 group/phone">
            <div className="w-[180px] h-[360px] md:w-[260px] md:h-[520px] bg-black rounded-[2.5rem] p-3 border-[6px] border-slate-800 shadow-[0_0_50px_rgba(59,130,246,0.3)] overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-800 rounded-b-2xl z-20" />
              <img 
                src={screenshots[0].src} 
                alt={screenshots[0].alt}
                className="w-full h-full object-cover rounded-[1.8rem]"
              />
            </div>

            {/* Spaceship popping out */}
            <div className="absolute top-[100px] md:top-[145px] left-[-85px] md:left-[-120px] rotate-[15deg] w-[130%] z-40 pointer-events-none transition-transform duration-700 group-hover/phone:scale-105 drop-shadow-[0_0_50px_rgba(59,130,246,0.6)]">
              <img 
                src="/screenshot/phi_thuyen.png" 
                alt="Spaceship" 
                className="w-full h-auto transform rotate-[-15deg]"
              />
            </div>
          </div>

          {/* Side phone - Left (Inner) */}
          <div className="absolute left-1/2 -translate-x-[120%] md:-translate-x-[135%] z-20 rotate-[-8deg] scale-75 min-[376px]:scale-80 md:scale-90 opacity-70 transition-all duration-500 hover:rotate-0 hover:z-40 hover:opacity-100">
            <div className="w-[140px] h-[280px] min-[376px]:w-[160px] min-[376px]:h-[320px] md:w-[220px] md:h-[440px] bg-black rounded-[2rem] md:rounded-[2.2rem] p-2 border-[4px] md:border-[5px] border-slate-800 shadow-2xl overflow-hidden">
              <img 
                src={screenshots[1].src} 
                alt={screenshots[1].alt}
                className="w-full h-full object-cover rounded-[1.4rem] md:rounded-[1.6rem]"
              />
            </div>
          </div>

          {/* Side phone - Right (Inner) */}
          <div className="absolute left-1/2 translate-x-[20%] md:translate-x-[35%] z-20 rotate-[8deg] scale-75 min-[376px]:scale-80 md:scale-90 opacity-70 transition-all duration-500 hover:rotate-0 hover:z-40 hover:opacity-100">
            <div className="w-[140px] h-[280px] min-[376px]:w-[160px] min-[376px]:h-[320px] md:w-[220px] md:h-[440px] bg-black rounded-[2rem] md:rounded-[2.2rem] p-2 border-[4px] md:border-[5px] border-slate-800 shadow-2xl overflow-hidden">
              <img 
                src={screenshots[2].src} 
                alt={screenshots[2].alt}
                className="w-full h-full object-cover rounded-[1.4rem] md:rounded-[1.6rem]"
              />
            </div>
          </div>

          {/* Vouchers moved to a global container for higher z-index (above side phones on hover) */}
          <div className="absolute inset-0 z-[100] pointer-events-none flex items-center justify-center overflow-visible">
            <div className={`relative w-[180px] h-[360px] md:w-[260px] md:h-[520px] transition-opacity ease-in-out ${isFading ? 'duration-[10000ms] opacity-0' : 'duration-[10000ms] opacity-100'}`}>
              {/* Voucher 1: Dynamic Slider 1 - Fixed position */}
              <div className="absolute left-[-175px] md:left-[-250px] top-[5px] md:top-[-5px] scale-[0.6] md:scale-75 origin-right">
                <div className="voucher-base planet-1">
                  <div className="relative z-10 text-center flex flex-col items-center justify-center">
                    <span className="font-bold text-[14px] md:text-[18px] text-white/80 uppercase tracking-widest mb-1">
                      {currentV1.title}
                    </span>
                    <span className="font-black text-[22px] md:text-[32px] text-white leading-none tracking-tighter uppercase">
                      {currentV1.discount}
                    </span>
                  </div>
                </div>
              </div>

              {/* Voucher 2: Dynamic Slider 2 - Fixed position */}
              <div className="absolute right-[-175px] md:right-[-270px] bottom-[5px] scale-[0.6] md:scale-75 origin-left">
                <div className="voucher-base planet-3">
                  <div className="relative z-10 text-center flex flex-col items-center justify-center">
                    <span className="font-bold text-[14px] md:text-[18px] text-[#00ff88]/70 uppercase tracking-widest mb-1">
                      {currentV2.title}
                    </span>
                    <span className="font-black text-[22px] md:text-[32px] text-[#00ff88] leading-none tracking-tighter uppercase">
                      {currentV2.discount}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stat: Hàng triệu Ưu đãi, voucher miễn phí */}
          <div className="absolute bottom-[60px] md:bottom-[40px] left-0 w-full flex flex-col items-center justify-center z-50 pointer-events-none group/stat">
            <div className="relative inline-block">
              <h3 className="text-4xl min-[350px]:text-6xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-accent/20 drop-shadow-[0_0_30px_rgba(255,107,53,0.4)] tracking-tighter uppercase italic whitespace-nowrap pr-4 pl-1">
                Hàng triệu
              </h3>
            </div>
            <div className="mt-1 md:mt-2 flex flex-col items-center">
              <p className="text-lg min-[350px]:text-xl md:text-xl font-bold text-green-400 tracking-wide uppercase italic whitespace-nowrap">Ưu đãi, voucher miễn phí</p>
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

function PlanetWithVoucher({
  planetId,
  name,
  className,
  planetClass,
  voucherPosition,
  animationClass = 'animate-fade-in-scale',
  autoScrollInterval = 3000,
  hasRing = false,
  hasStripes = false,
  isEarth = false,
}: {
  planetId: string;
  name: string;
  className: string;
  planetClass: string;
  voucherPosition: 'left' | 'center' | 'right';
  animationClass?: string;
  autoScrollInterval?: number;
  hasRing?: boolean;
  hasStripes?: boolean;
  isEarth?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const vouchers = PLANET_VOUCHERS[planetId] || [];

  useEffect(() => {
    setMounted(true);
    if (vouchers.length <= 1) return;
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % vouchers.length);
    }, autoScrollInterval);
    return () => clearInterval(intervalId);
  }, [vouchers.length, autoScrollInterval]);

  if (!mounted) return null;

  const currentVoucher = vouchers[index];
  if (!currentVoucher) return null;

  const getTicketTheme = (id: string) => {
    const planetStyles: Record<string, { className: string; text: string; label: string; rotate: string }> = {
      mars: { 
        className: 'planet-1', 
        text: 'text-white', 
        label: 'text-white/80',
        rotate: 'rotate-[-6deg]'
      },
      neptune: { 
        className: 'planet-6', 
        text: 'text-[#eee]', 
        label: 'text-white/60',
        rotate: 'rotate-[3deg]'
      },
      saturn: { 
        className: 'planet-3', 
        text: 'text-[#00ff88]', 
        label: 'text-[#00ff88]/70',
        rotate: 'rotate-[-3deg]'
      },
      venus: { 
        className: 'planet-4', 
        text: 'text-[#880e4f]', 
        label: 'text-[#ad1457]/80',
        rotate: 'rotate-[5deg]'
      },
      uranus: { 
        className: 'planet-5', 
        text: 'text-[#333]', 
        label: 'text-[#666]/80',
        rotate: 'rotate-[-2deg]'
      },
      earth: { 
        className: 'planet-2', 
        text: 'text-white', 
        label: 'text-white/70',
        rotate: 'rotate-[4deg]'
      },
    };

    const style = planetStyles[id] || planetStyles.mars;
    return style;
  };

  const theme = getTicketTheme(planetId);

  const voucherPositionClass = {
    left: `left-[-5%] md:left-[-15%] top-1/3 ${theme.rotate} scale-95`,
    center: `left-1/2 -translate-x-1/2 bottom-[-10%] md:bottom-[-15%] ${theme.rotate}`,
    right: `right-[-5%] md:right-[-15%] top-1/3 ${theme.rotate} scale-105`,
  };

  return (
    <div className={`${className} group/planet z-40`} suppressHydrationWarning>
      <div className="relative">
        <div className={`${planetClass} relative flex items-center justify-center text-center p-2`}>
          {name && (
            <div className="relative z-[110] px-1 md:px-2">
              <span className="text-white font-black text-[7px] md:text-[11px] uppercase tracking-tighter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight block">
                {name}
              </span>
            </div>
          )}
          {isEarth && (
            <>
              <div className="absolute top-[10%] left-[20%] w-[50%] h-[40%] bg-emerald-600/80 rounded-full blur-md rotate-[-20deg]" />
              <div className="absolute bottom-[15%] right-[10%] w-[40%] h-[50%] bg-green-700/70 rounded-full blur-md rotate-[10deg]" />
              <div className="absolute top-[40%] left-[10%] w-[30%] h-[20%] bg-green-600/60 rounded-full blur-sm" />
              <div className="absolute inset-0 opacity-60 animate-pulse-slow">
                <div className="absolute top-[5%] left-[30%] w-[60%] h-[15%] bg-white/80 rounded-full blur-sm rotate-[5deg]" />
                <div className="absolute bottom-[20%] left-[10%] w-[50%] h-[10%] bg-white/60 rounded-full blur-sm rotate-[-10deg]" />
                <div className="absolute top-[40%] right-[5%] w-[40%] h-[12%] bg-white/70 rounded-full blur-sm" />
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_70%)]" />
              <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.6)]" />
            </>
          )}
          {hasRing && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[15%] border-[2px] md:border-[3px] border-amber-400/70 rounded-[100%] rotate-[25deg] shadow-[0_0_30px_rgba(251,191,36,0.5)]" />
          )}
          {hasStripes && (
            <>
              <div className="absolute top-[30%] left-0 w-full h-[10%] bg-black/10" />
              <div className="absolute top-[60%] left-0 w-full h-[15%] bg-black/10" />
            </>
          )}
        </div>
      </div>
    </div>
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
