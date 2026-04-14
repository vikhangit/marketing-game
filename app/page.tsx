import { Header } from '@/components/header';
import { Features } from '@/components/features';
import { Universe } from '@/components/universe';
import { Gameplay } from '@/components/gameplay';
import { Economy } from '@/components/economy';
import { Fleet } from '@/components/fleet';
import { CTA } from '@/components/cta';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Universe />
      <Features />
      <Gameplay />
      <Economy />
      <Fleet />
      <CTA />
      <Footer />
    </main>
  );
}
