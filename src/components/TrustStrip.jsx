import React from 'react';
import { Smartphone, Layout, Layers, WalletCards } from 'lucide-react';

const TRUST_ITEMS = [
  {
    icon: Smartphone,
    title: 'Responsive Web Design',
    subtitle: 'Flawless on mobile, tablet & desktop',
  },
  {
    icon: Layout,
    title: 'Modern UI Development',
    subtitle: 'Clean visual hierarchy & micro-interactions',
  },
  {
    icon: Layers,
    title: 'MERN Stack Development',
    subtitle: 'Robust frontend & backend integration',
  },
  {
    icon: WalletCards,
    title: 'Budget-Friendly Websites',
    subtitle: 'Quality delivery suited to student & client budgets',
  },
];

export default function TrustStrip() {
  return (
    <section id="trust" className="border-y border-border-subtle bg-bg-card/40 py-6 sm:py-8 backdrop-blur-sm w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TRUST_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-bg-card/60 border border-border-subtle/70 hover:border-gold/40 transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 border border-gold/25 flex items-center justify-center text-gold">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-text-main tracking-tight leading-snug">
                    {item.title}
                  </h2>
                  <p className="text-xs text-text-secondary mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
