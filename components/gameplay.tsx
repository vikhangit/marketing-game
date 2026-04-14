'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Gameplay() {
  const coreLoop = [
    {
      step: '01',
      title: 'Thu Hoạch Năng Lượng',
      description: 'Mở app hàng ngày để nhận EP từ máy hút. Giới hạn lưu trữ 4 giờ.',
      icon: '⚡',
    },
    {
      step: '02',
      title: 'Xây Dựng Phi Thuyền',
      description: 'Thu thập linh kiện, mua bản vẽ, lắp ráp và nâng cấp tàu mới.',
      icon: '🚀',
    },
    {
      step: '03',
      title: 'Cược & Cướp Bóc',
      description: 'Tấn công phi thuyền khác để cướp EP. Hệ thống báo thù tạo FOMO.',
      icon: '⚔️',
    },
    {
      step: '04',
      title: 'Kinh Doanh & Giao Dịch',
      description: 'Bán máy hút cũ (70% giá), đấu giá và giao dịch trên sàn P2P.',
      icon: '💰',
    },
  ];

  const events = [
    {
      title: 'Mưa Thiên Thạch',
      description: 'Tap trúng vật thể bay ngang để nhận thêm Năng Lượng tức thì.',
      type: 'QTE',
    },
    {
      title: 'Thương Nhân Vũ Trụ',
      description: 'NPC ngẫu nhiên bán linh kiện hiếm giá rẻ hoặc đổi tỷ giá EP/SP hời.',
      type: 'RNG',
    },
    {
      title: 'Cổng Săn Kho Báu',
      description: 'Vòng quay may mắn nhận lượt quay miễn phí định kỳ hàng ngày.',
      type: 'Gacha',
    },
    {
      title: 'Nhiệm Vụ Hàng Ngày',
      description: 'Chuỗi 30 ngày nhận vật phẩm Mythic sau khi hoàn thành KYC.',
      type: 'Quest',
    },
  ];

  return (
    <section id="gameplay" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Energy Mining Visual */}
        <div className="relative mb-8 md:mb-12 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
          <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card h-48 md:h-64 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent z-10 md:from-background/70" />
            <img 
              src="/energy.jpg" 
              alt="Khai thác năng lượng vũ trụ" 
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Core Loop Section */}
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Vòng Lặp Hành Vi
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-xl md:text-2xl">
                (Core Loop & Retention)
              </span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto font-medium">
              Cơ chế tâm lý và phần thưởng giữ chân người chơi hàng ngày.
            </p>
          </div>

          <div className="grid grid-cols-1 min-[376px]:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {coreLoop.map((item, index) => (
              <div key={index} className="relative">
                {/* Connecting line */}
                {index < coreLoop.length - 1 && (
                  <div className="hidden lg:block absolute left-full top-1/4 w-full h-0.5 bg-gradient-to-r from-primary to-transparent opacity-30"></div>
                )}
                
                <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 h-full">
                  <div className="p-5">
                    <div className="text-3xl font-bold text-primary/20 mb-2">{item.step}</div>
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-foreground leading-tight">{item.title}</h3>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{item.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Event Systems */}
        <div>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Cơ Chế Bất Ngờ
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary text-xl md:text-2xl">
                (Random Events & FOMO)
              </span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto font-medium">
              Tạo kích thích và giữ người chơi tương tác liên tục.
            </p>
          </div>

          <div className="grid grid-cols-1 min-[376px]:grid-cols-2 gap-4 md:gap-6">
            {events.map((event, index) => (
              <Card key={index} className="bg-gradient-to-br from-secondary/5 via-card to-accent/5 border-border/50 hover:border-accent/40 transition-all">
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground max-w-[200px] leading-tight">{event.title}</h3>
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 text-[10px] h-5">
                      {event.type}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{event.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
