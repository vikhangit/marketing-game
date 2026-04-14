'use client';

import { Trophy, Sword, Users, Gem, ShoppingBag, Gift } from 'lucide-react';

export function Fleet() {
  const fleetFeatures = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'Hệ Thống Danh Hiệu',
      description: 'Title phát sáng dựa trên sức mạnh hạm đội. Hiển thị Public trên BXH và kênh chat.',
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
    {
      icon: <Sword className="w-6 h-6" />,
      title: 'Cơ Chế Cướp Bóc',
      description: 'Tấn công phi thuyền có kho chứa đầy. Thông báo tức thì với nút Báo Thù kịch tính.',
      color: 'text-accent',
      bg: 'bg-accent/10',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Mạng Lưới Đa Tầng',
      description: 'Ánh xạ downline từ ApecSpace. Tuyến dưới khai thác sinh ra bonus cho tuyến trên.',
      color: 'text-secondary',
      bg: 'bg-secondary/10',
    },
    {
      icon: <Gem className="w-6 h-6" />,
      title: 'Đấu Giá & Sàn P2P',
      description: 'Tự do giao dịch vật phẩm, phi thuyền. Lập hạm đội săn Boss tập thể trên sàn nội bộ.',
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
  ];

  const shipTiers = [
    { tier: 'Tier 1', slots: '1 Máy hút', special: '0 Slot', bg: 'from-blue-500/10' },
    { tier: 'Tier 2', slots: '2 Máy hút', special: '1 Slot', bg: 'from-green-500/10' },
    { tier: 'Tier 3', slots: '3 Máy hút', special: '2 Slot', bg: 'from-yellow-500/10' },
    { tier: 'Tier 4', slots: '4 Máy hút', special: '3 Slot', bg: 'from-orange-500/10' },
    { tier: 'Tier 5', slots: '5 Máy hút', special: '4 Slot', bg: 'from-red-500/10' },
  ];

  return (
    <section id="fleet" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Hạm Đội <span className="text-primary">& Cộng Đồng</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto font-medium">
            Hệ thống tương tác xã hội đa tầng với cơ chế PvP cạnh tranh.
          </p>
        </div>

        {/* Fleet Hero Image */}
        <div className="relative mb-16 md:mb-24 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
          <div className="relative rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-white/10 bg-card h-52 md:h-96 shadow-2xl">
            <img 
              src="/fleet.jpg" 
              alt="Hạm đội" 
              className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </div>

        {/* Fleet Features Grid */}
        <div className="grid grid-cols-1 min-[376px]:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          {fleetFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="group relative p-6 rounded-2xl md:rounded-3xl border border-white/5 bg-card/20 backdrop-blur-xl hover:bg-card/40 transition-all duration-500 overflow-hidden shadow-xl"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative z-10">
                <div className={`mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.bg} ${feature.color} border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors leading-tight">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Ship Tiers */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-8 text-center text-white tracking-tight">
            Cấp Độ <span className="text-accent">Phi Thuyền</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {shipTiers.map((ship, index) => (
              <div 
                key={index} 
                className={`group relative p-5 rounded-2xl border border-white/5 bg-gradient-to-br ${ship.bg} to-card/20 backdrop-blur-xl hover:bg-card/40 transition-all duration-500 overflow-hidden text-center`}
              >
                <div className="relative z-10">
                  <div className="text-xl font-black text-primary mb-4 tracking-tighter group-hover:scale-110 transition-transform">{ship.tier}</div>
                  <div className="space-y-1 mb-4">
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Sức chứa</p>
                    <p className="text-sm font-bold text-white">{ship.slots}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] text-accent/70 uppercase font-bold tracking-widest">Đặc biệt</p>
                    <p className="text-sm font-bold text-accent">{ship.special}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration & Commerce */}
        <div className="grid grid-cols-1 min-[520px]:grid-cols-2 gap-6 md:gap-8">
          <div className="group relative p-8 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-card/40 to-card/10 backdrop-blur-2xl hover:border-primary/30 transition-all duration-500 overflow-hidden shadow-2xl">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 blur-[80px] rounded-full group-hover:bg-primary/20 transition-colors" />
            <div className="relative z-10">
              <div className="flex flex-col items-start gap-5 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30 shadow-lg shadow-primary/20">
                  <ShoppingBag className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white leading-none tracking-tight">Siêu Thị Không Gian</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Bán linh kiện, voucher, vật phẩm hiếm',
                  'Phân quyền truy cập theo Tier tàu',
                  'Sàn giao dịch P2P giữa các hạm đội'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm md:text-base font-medium group/item">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/item:bg-primary transition-colors" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="group relative p-8 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-card/40 to-card/10 backdrop-blur-2xl hover:border-accent/30 transition-all duration-500 overflow-hidden shadow-2xl">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 blur-[80px] rounded-full group-hover:bg-accent/20 transition-colors" />
            <div className="relative z-10">
              <div className="flex flex-col items-start gap-5 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center border border-accent/30 shadow-lg shadow-accent/20">
                  <Gift className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white leading-none tracking-tight">Tích Hợp O2O</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Quét mã QR tại chuỗi nhà hàng đối tác',
                  'Nhận "Rương linh kiện Mythic" độc quyền',
                  'Đổi EP/SP lấy E-Voucher thực tế'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm md:text-base font-medium group/item">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/40 group-hover/item:bg-accent transition-colors" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
