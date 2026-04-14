'use client';

import { Card } from '@/components/ui/card';
import { Rocket, Zap, Users, Gift, Anchor, Gem } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Rocket,
      title: 'Phi Thuyền & Xưởng Chế Tạo',
      description: 'Xây dựng, nâng cấp và trang bị phi thuyền với các linh kiện hiếm. Slot máy hút và slot đặc biệt mở khóa theo cấp độ.',
      color: 'from-primary',
      image: '/spaceship.jpg',
    },
    {
      icon: Zap,
      title: 'Khai Thác Năng Lượng',
      description: 'Gắn máy hút để khai thác Năng Lượng thụ động. Nâng cấp từ Level 1 đến 10 với chi phí tăng theo hàm mũ.',
      color: 'from-accent',
      image: '/energy.jpg',
    },
    {
      icon: Gift,
      title: 'Săn Kho Báu & Sự Kiện',
      description: 'Vòng quay may mắn với tích hợp đồng hồ đếm ngược. Thương nhân vũ trụ, mưa thiên thạch, KYC rewards.',
      color: 'from-secondary',
      image: '/planet.jpg',
    },
    {
      icon: Users,
      title: 'Hạm Đội & PvP',
      description: 'Lập hạm đội, cướp bóc năng lượng, tấn công và báo thù. Hệ thống đa tầng với bonus hoa hồng từ downline.',
      color: 'from-primary',
      image: '/fleet.jpg',
    },
    {
      icon: Gem,
      title: 'Siêu Thị Không Gian',
      description: 'Mua bán linh kiện, bản vẽ phi thuyền, vật phẩm đặc biệt. Rào cản truy cập theo cấp độ tàu.',
      color: 'from-accent',
      image: '/station.jpg',
    },
    {
      icon: Anchor,
      title: 'Kinh Tế Kép (Dual-Token)',
      description: 'Điểm Không Gian (SP) - tiền tệ cứng định hướng blockchain. Điểm Năng Lượng (EP) - tiền tệ vận hành.',
      color: 'from-secondary',
      image: '/planet.jpg',
    },
  ];

  return (
    <section id="features" className="py-8 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-card/10 to-transparent relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-balance">
            Các Tính Năng
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Game ApecSpace
            </span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto font-medium text-balance">
            Hệ sinh thái gamification toàn diện với cơ chế O2O tích hợp.
          </p>
        </div>

        <div className="grid grid-cols-1 min-[376px]:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="bg-card/40 border-border/40 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5 group overflow-hidden flex flex-col">
                <div className="relative h-32 md:h-36 overflow-hidden bg-card shrink-0">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-40"></div>
                </div>
                <div className="p-4 md:p-5 flex-grow flex flex-col">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.color} to-accent/50 flex items-center justify-center mb-3 group-hover:shadow-md group-hover:shadow-primary/10 transition-all duration-300`}>
                    <IconComponent className="w-5 h-5 text-background" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors leading-tight">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-xs md:text-sm flex-grow">{feature.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
