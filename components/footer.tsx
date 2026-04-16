'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-transparent to-card/20 py-8 px-4 sm:px-6 lg:px-8" suppressHydrationWarning={true}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="font-bold text-foreground text-sm">⚡</span>
              </div>
              <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                ApecSpace
              </span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px]">
              Hệ sinh thái gamification O2O hàng đầu từ ApecGlobal.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Sản Phẩm</h3>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li><Link href="#features" className="hover:text-primary transition">Tính năng</Link></li>
              <li><Link href="#gameplay" className="hover:text-primary transition">Lối chơi</Link></li>
              <li><Link href="#economy" className="hover:text-primary transition">Kinh tế</Link></li>
              <li><Link href="#fleet" className="hover:text-primary transition">Hạm đội</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Cộng Đồng</h3>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition">Discord</a></li>
              <li><a href="#" className="hover:text-primary transition">Twitter</a></li>
              <li><a href="#" className="hover:text-primary transition">Telegram</a></li>
              <li><a href="#" className="hover:text-primary transition">Facebook</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Pháp Lý</h3>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition">Điều khoản</a></li>
              <li><a href="#" className="hover:text-primary transition">Chính sách</a></li>
              <li><a href="#" className="hover:text-primary transition">Liên hệ</a></li>
              <li><a href="#" className="hover:text-primary transition">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-6 text-center text-[10px] md:text-xs text-muted-foreground font-medium">
          <p>
            © 2024 ApecSpace. Một dự án của{' '}
            <Link href="#" className="text-primary hover:text-accent transition font-bold">
              ApecGlobal
            </Link>
            . Bảo lưu mọi quyền.
          </p>
        </div>
      </div>
    </footer>
  );
}
