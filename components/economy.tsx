'use client';

import { Star, Zap, Flame, Scale, ArrowDownCircle, ArrowUpCircle } from 'lucide-react';

export function Economy() {
  const inflationMechanics = [
    {
      icon: <ArrowDownCircle className="w-6 h-6" />,
      title: 'Minting',
      description: 'Phát hành điểm mới thông qua nguồn thu từ hoạt động khai thác và sự kiện.',
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
    {
      icon: <Flame className="w-6 h-6" />,
      title: 'Burning',
      description: 'Tiêu hủy điểm qua các chi phí nâng cấp, lắp ráp và lệ phí trong trò chơi.',
      color: 'text-accent',
      bg: 'bg-accent/10',
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: 'Balance',
      description: 'Cân bằng giữa Inflow và Outflow để kiểm soát lạm phát và giữ giá trị tài sản.',
      color: 'text-secondary',
      bg: 'bg-secondary/10',
    },
  ];

  return (
    <section id="economy" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Economy Visuals */}
        <div className="relative mb-16 md:mb-24 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
          <div className="relative rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-white/10 bg-card h-52 md:h-80 shadow-2xl">
            <img 
              src="/station.jpg" 
              alt="Kinh tế" 
              className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </div>

        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Kinh Tế <span className="text-primary">Kép</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto font-medium">
            Hệ thống vận hành song song hai loại tiền tệ với cơ chế độc lập.
          </p>
        </div>

        <div className="grid grid-cols-1 min-[520px]:grid-cols-2 gap-6 md:gap-8 mb-16">
          {/* Space Points Card */}
          <div className="group relative p-6 md:p-8 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-card/40 to-card/10 backdrop-blur-2xl hover:border-primary/30 transition-all duration-500 overflow-hidden shadow-2xl">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 blur-[80px] rounded-full group-hover:bg-primary/20 transition-colors" />
            
            <div className="relative z-10">
              <div className="flex flex-col items-start gap-5 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30 shadow-lg shadow-primary/20">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Hard Currency</p>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white leading-none tracking-tight">Điểm Không Gian (SP)</h3>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                    <ArrowDownCircle className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-[10px] font-bold text-green-400 uppercase tracking-wider">Nguồn Thu (Inflow)</span>
                  </div>
                  <ul className="space-y-3 pl-1">
                    {[
                      'Mua gói điểm qua ví ApecSpace',
                      'Nạp trực tiếp qua cổng thanh toán',
                      'Phần thưởng sự kiện, KYC, World Boss'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground text-xs md:text-sm font-medium group/item">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500/40 group-hover/item:bg-green-400 transition-colors" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
                    <ArrowUpCircle className="w-3.5 h-3.5 text-red-400" />
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">Tiêu Hao (Outflow)</span>
                  </div>
                  <ul className="space-y-3 pl-1">
                    {[
                      'Mua linh kiện hiếm, bản vẽ cấp cao',
                      'Đặt giá thầu trên sàn đấu giá nội bộ',
                      'Lệ phí quay Cổng săn kho báu (Gacha)'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground text-xs md:text-sm font-medium group/item">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500/40 group-hover/item:bg-red-400 transition-colors" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Energy Points Card */}
          <div className="group relative p-6 md:p-8 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-card/40 to-card/10 backdrop-blur-2xl hover:border-accent/30 transition-all duration-500 overflow-hidden shadow-2xl">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 blur-[80px] rounded-full group-hover:bg-accent/20 transition-colors" />
            
            <div className="relative z-10">
              <div className="flex flex-col items-start gap-5 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center border border-accent/30 shadow-lg shadow-accent/20">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <p className="text-[10px] font-black text-accent uppercase tracking-[0.2em]">Soft Currency</p>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white leading-none tracking-tight">Điểm Năng Lượng (EP)</h3>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                    <ArrowDownCircle className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-[10px] font-bold text-green-400 uppercase tracking-wider">Nguồn Thu (Inflow)</span>
                  </div>
                  <ul className="space-y-3 pl-1">
                    {[
                      'Khai thác thụ động từ máy hút',
                      'Cướp đoạt (PvP) từ phi thuyền khác',
                      'Nhận % hoa hồng cộng đồng'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground text-xs md:text-sm font-medium group/item">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500/40 group-hover/item:bg-green-400 transition-colors" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
                    <ArrowUpCircle className="w-3.5 h-3.5 text-red-400" />
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">Tiêu Hao (Outflow)</span>
                  </div>
                  <ul className="space-y-3 pl-1">
                    {[
                      'Lắp ráp và nâng cấp phi thuyền',
                      'Chi phí di chuyển giữa các hành tinh',
                      'Mua vật phẩm tại Siêu thị không gian'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground text-xs md:text-sm font-medium group/item">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500/40 group-hover/item:bg-red-400 transition-colors" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Inflation Controls Grid */}
        <div className="grid grid-cols-1 min-[376px]:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {inflationMechanics.map((item, index) => (
            <div 
              key={index} 
              className="group relative p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 bg-card/20 backdrop-blur-xl hover:bg-card/40 transition-all duration-500 overflow-hidden shadow-xl"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative z-10">
                <div className={`mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl ${item.bg} ${item.color} border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
