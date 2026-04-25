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
          <div className="flex justify-center mb-12">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-background px-8 h-14 text-base md:text-lg font-black shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-primary/40 w-full max-w-[280px] md:w-auto uppercase tracking-wider">
                  <Dices className="mr-3 h-6 w-6 shrink-0" />
                  Quay thưởng ngay
                </Button>
              </DialogTrigger>
              <LuckySpinDialog />
            </Dialog>
          </div>
        </div>

        {/* Modern Mobile Screenshots Layout */}
        <div className="relative h-[650px] md:h-[850px] w-full flex items-center justify-center mb-2 md:mb-24 overflow-visible">
          
          {/* Top Stat: Hàng ngàn Hành tinh dịch vụ */}
          <div className="absolute top-[40px] md:top-[40px] left-0 w-full flex flex-col items-center justify-center z-50 pointer-events-none group/stat">
            <div className="relative inline-block">
              <h3 className="text-lg md:text-xl font-black text-white/70 tracking-tighter uppercase italic whitespace-nowrap pr-4 pl-1">
                Hàng ngàn
              </h3>
            </div>
            <div className="mt-0 flex flex-col items-center">
              <p className="text-lg min-[350px]:text-2xl md:text-5xl font-black text-primary drop-shadow-[0_0_30px_rgba(0,217,255,0.4)] tracking-wide uppercase italic whitespace-nowrap pr-4 pl-1">Hành tinh dịch vụ</p>
            </div>
          </div>

          {/* 1. Mars - Reddish (Life Care) */}
          <PlanetWithVoucher
            planetId="mars"
            name="Quán cafe"
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
          <div className="absolute bottom-[40px] md:bottom-[40px] left-0 w-full flex flex-col items-center justify-center z-50 pointer-events-none group/stat">
            <div className="relative inline-block">
              <h3 className="text-lg md:text-xl font-black text-white/70 tracking-tighter uppercase italic whitespace-nowrap pr-4 pl-1">
                Hàng triệu
              </h3>
            </div>
            <div className="mt-0 flex flex-col items-center">
              <p className="text-lg min-[350px]:text-2xl md:text-5xl font-black text-green-400 drop-shadow-[0_0_30px_rgba(74,222,128,0.4)] tracking-wide uppercase italic whitespace-nowrap pr-4 pl-1">Ưu đãi, voucher miễn phí</p>
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
              <span className="text-white font-black text-[12px] md:text-[22px] uppercase tracking-tighter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight block">
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

function LuckySpinDialog() {
  return (
    <DialogContent className="max-w-md bg-[#0d122b]/95 border-primary/30 backdrop-blur-3xl p-0 gap-0 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,217,255,0.2)]">
      <div className="relative">
        {/* Banner Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <img 
            src="/banner.jpg" 
            alt="Lucky Spin Banner" 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d122b] via-transparent to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6">
            <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter drop-shadow-lg">
              Vòng quay <span className="text-primary">May mắn</span>
            </h3>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-3">
            <p className="text-muted-foreground text-sm leading-relaxed font-medium">
              Chào mừng hạm trưởng! Sử dụng lượt quay hàng ngày để nhận các vật phẩm quý hiếm, linh kiện phi thuyền và voucher O2O độc quyền từ đối tác.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full h-12 rounded-xl border-2 border-primary/50 bg-primary/5 hover:bg-primary/20 hover:border-primary text-primary font-black uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(0,217,255,0.1)] hover:shadow-[0_0_25px_rgba(0,217,255,0.3)] scale-100 hover:scale-[1.02]">
                  Thể lệ
                </Button>
              </DialogTrigger>
              <EventInfoDialog />
            </Dialog>
            
            <Button 
              asChild
              className="w-full h-12 rounded-xl bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-background font-black uppercase tracking-wider shadow-lg shadow-primary/20 transition-all hover:scale-[1.02]"
            >
              <a href="https://vong-quay-space-game.vercel.app" target="_blank" rel="noopener noreferrer">
                Quay ngay
              </a>
            </Button>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}

function EventInfoDialog() {
  return (
    <DialogContent className="max-w-[95vw] sm:max-w-2xl max-h-[92vh] overflow-y-auto bg-[#060918]/95 border-primary/20 backdrop-blur-3xl p-0 gap-0 rounded-[2.5rem] shadow-[0_0_80px_rgba(0,217,255,0.1)] focus:outline-none">
      <div className="relative pb-8">
        {/* Top Decorative Banner */}
        <div className="h-32 w-full bg-gradient-to-br from-primary/20 via-accent/10 to-transparent relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.15)_0%,transparent_70%)]" />
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 blur-[60px] rounded-full" />
          <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
             <div className="w-16 h-16 rounded-2xl bg-black/40 backdrop-blur-xl border border-primary/30 flex items-center justify-center shadow-2xl mb-2">
                <Trophy className="w-8 h-8 text-primary animate-pulse" />
             </div>
          </div>
        </div>
        
        <div className="px-5 sm:px-10 -mt-4 relative z-10 text-center">
          <DialogTitle className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase italic leading-none mb-1">
            THỂ LỆ <span className="text-primary">APECSPACE</span> EXPLORER
          </DialogTitle>
          <DialogDescription className="text-[11px] md:text-sm text-primary/60 font-bold uppercase tracking-[0.2em]">
            Hành trình săn tìm báu vật vũ trụ
          </DialogDescription>
        </div>

        <div className="px-5 sm:px-10 mt-8 space-y-10 relative z-10">
          {/* Section 1: Giới thiệu */}
          <div className="space-y-3">
            <h4 className="flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest">
              <span className="w-6 h-[1px] bg-primary/30" />
              01. GIỚI THIỆU
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              Chào mừng nhà thám hiểm! Hệ thống <span className="text-white font-bold">Vòng Quay May Mắn</span> là nơi bạn thu thập các mảnh ghép hiếm để quy đổi thành những đặc quyền và phần quà giá trị thực lên tới <span className="text-accent font-black underline italic">3 TỶ ĐỒNG</span>.
            </p>
          </div>

          {/* Section 2: Vòng Quay */}
          <div className="space-y-4">
            <h4 className="flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest">
              <span className="w-6 h-[1px] bg-primary/30" />
              02. HỆ THỐNG VÒNG QUAY
            </h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="group relative p-5 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-primary/40 transition-all overflow-hidden">
                <div className="relative z-10 flex justify-between items-start">
                  <div className="space-y-1">
                    <h5 className="font-black text-white text-base italic uppercase">Vòng Quay Thường</h5>
                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-tight">Viên ngoài - 24 ô thưởng</p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-black text-[10px]">
                    1 LƯỢT / QUAY
                  </div>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">Chứa mảnh ghép thường, EP và vật phẩm hỗ trợ cơ bản.</p>
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-2xl rounded-full -mr-12 -mt-12 group-hover:bg-primary/10 transition-colors" />
              </div>

              <div className="group relative p-5 rounded-3xl bg-accent/[0.03] border border-accent/20 hover:border-accent/60 transition-all overflow-hidden">
                <div className="relative z-10 flex justify-between items-start">
                  <div className="space-y-1">
                    <h5 className="font-black text-accent text-base italic uppercase">Vòng Quay Đặc Biệt</h5>
                    <p className="text-[10px] text-accent/60 font-bold uppercase tracking-tight">Viên trong - 9 ô VIP</p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-black text-[10px]">
                    5 LƯỢT / QUAY
                  </div>
                </div>
                <p className="mt-3 text-xs text-muted-foreground italic">Cơ hội trúng <span className="text-white font-bold">MẢNH GHÉP ĐẶC BIỆT</span> có giá trị quy đổi cao gấp 10 lần.</p>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent/5 blur-2xl rounded-full -mr-12 -mb-12 group-hover:bg-accent/10 transition-colors" />
              </div>
            </div>
          </div>

          {/* Section 3: Phân loại */}
          <div className="space-y-4">
            <h4 className="flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest">
              <span className="w-6 h-[1px] bg-primary/30" />
              03. VẬT PHẨM KHO ĐỒ
            </h4>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {[
                { icon: "🧩", title: "Mảnh ghép", label: "Pieces", color: "from-blue-500/20" },
                { icon: "🔄", title: "Lượt quay", label: "Spins", color: "from-green-500/20" },
                { icon: "🪙", title: "Điểm & Xu", label: "Virtual", color: "from-yellow-500/20" },
                { icon: "🎁", title: "Quà VIP", label: "Physical", color: "from-accent-500/20" },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-all group`}>
                  <div className="text-xl group-hover:scale-110 transition-transform drop-shadow-lg">{item.icon}</div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-black text-white leading-none uppercase">{item.title}</span>
                    <span className="text-[8px] font-bold text-muted-foreground uppercase mt-1 tracking-widest">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Đổi thưởng - Cards for Mobile */}
          <div className="space-y-4">
            <h4 className="flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest">
              <span className="w-6 h-[1px] bg-primary/30" />
              04. QUY TẮC ĐỔI THƯỞNG
            </h4>
            <div className="space-y-2">
              {[
                { mốc: "Mốc 01", cond: "9 mảnh khác nhau", gift: "MIỄN PHÍ GẠO 1 NĂM", color: "border-primary/20" },
                { mốc: "Mốc 02", cond: "10 mảnh khác nhau", gift: "MIỄN PHÍ KHÁM BỆNH 1 NĂM", color: "border-primary/20" },
                { mốc: "Mốc 03", cond: "11 mảnh khác nhau", gift: "THẺ APECSPACE TRỌN ĐỜI", color: "border-primary/20" },
                { mốc: "Mốc 04", cond: "12 mảnh khác nhau", gift: "VOUCHER 3 TỶ | -50% MỌI HÀNH TINH", color: "border-accent/40 bg-accent/[0.02]", isVip: true },
              ].map((row, i) => (
                <div key={i} className={`flex items-center justify-between p-4 rounded-2xl border ${row.color} bg-white/[0.02] relative overflow-hidden group`}>
                  <div className="flex flex-col gap-0.5">
                    <span className={`text-[9px] font-black uppercase tracking-widest ${row.isVip ? 'text-accent' : 'text-primary/60'}`}>{row.mốc}</span>
                    <span className="text-[10px] font-bold text-muted-foreground italic">{row.cond}</span>
                  </div>
                  <div className={`text-[11px] md:text-sm font-black text-right max-w-[180px] leading-tight ${row.isVip ? 'text-accent italic drop-shadow-[0_0_10px_rgba(255,107,53,0.3)]' : 'text-white'}`}>
                    {row.gift}
                  </div>
                  {row.isVip && <div className="absolute top-0 right-0 h-full w-1 bg-accent" />}
                </div>
              ))}
            </div>
            <p className="text-[10px] text-muted-foreground italic px-2">
              * Hệ thống tự động trừ mảnh khi đổi. BTC có thể cập nhật thêm quy tắc mới.
            </p>
          </div>

          {/* Action Button */}
          <div className="pt-4 sticky bottom-0 bg-gradient-to-t from-[#060918] via-[#060918] to-transparent pb-4">
            <Button 
              asChild
              className="w-full h-14 bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] text-background font-black text-base rounded-2xl transition-all duration-300 uppercase tracking-widest"
            >
              <a href="https://vong-quay-space-game.vercel.app" target="_blank" rel="noopener noreferrer">
                Chinh phục hũ vàng ngay
              </a>
            </Button>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}

import { Badge } from "@/components/ui/badge";
