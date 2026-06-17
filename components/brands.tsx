'use client'

import { Reveal } from '@/components/reveal'
import { useState } from 'react'

const brands = [
  {
    name: 'Borma Wachs',
    category: 'فینیش‌ها، روغن‌ها و پوشش‌های تخصصی چوب',
    text: 'پوشش ها ، روغن ها و فینیش های دکوراتیو چوب',
  },
  {
    name: 'Renner Italia',
    category: 'رنگ‌ها و پوشش‌های حرفه‌ای صنایع چوب',
    text: 'رنگ و پوشش های حرفه ای و صنعتی چوب',
  },
  {
    name: 'Pratta',
    category:'میکروسمنت و پوشش‌های دکوراتیو مدرن',
    text: 'برند بسیار با کیفیت ایتالیایی تخصصی در زمینه میکروسمنت و پوشش های دکوراتیو مدرن با طراحی مینیمال و کیفیت حرفه ای',
  },
  {
    name: 'Asian Paints',
    category: 'رنگ‌های ساختمانی و پوشش‌های دکوراتیو',
    text: 'یکی از بزرگترین تولید کنندگان رنگهای ساختمانی و پوششهای دکوراتیو در جهان شناخته شده برای کیفیت نوآوری و تنوع محصولات',
  },
  {
    name: 'Mirka',
    category: 'سنباده و راهکارهای حرفه‌ای پرداخت سطوح',
    text: 'برند فنلاندی پیشرو در تولید سمباده ها و تجهیزات پرداخت سطوح شناخته شده برای دقت، کیفیت و فناوری نوآورانه',
  },
]

const BrandCard = ({ brand }: { brand: (typeof brands)[0] }) => (
  <div className="group flex h-full min-h-[260px] w-[300px] flex-shrink-0 flex-col rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg md:w-[340px] md:p-10 text-right">
    <div className="flex h-16 items-center justify-end">
      <span className="text-3xl font-extrabold tracking-tight text-foreground transition-colors group-hover:text-primary md:text-3xl">
        {brand.name}
      </span>
    </div>
    <div className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold-foreground)]">
      {brand.category}
    </div>
    <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
      {brand.text}
    </p>
  </div>
)

export function Brands() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section id="brands" className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold tracking-[0.2em] text-[var(--gold-foreground)]">
            برندها
          </span>
          <h2 className="mt-5 text-balance text-3xl font-extrabold leading-snug text-foreground lg:text-5xl">
            مجموعه‌ای منتخب از برندهای پریمیوم
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            ما تنها با متریال و برندهایی کار می‌کنیم که استانداردهای کیفی ما را
            تأمین کنند.
          </p>
        </Reveal>

        <style>{`
          @keyframes marquee-scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .marquee-wrapper.paused .marquee-container {
            animation-play-state: paused;
          }

          .marquee-container {
            display: flex;
            width: fit-content;
            animation: marquee-scroll 25s linear infinite;
            will-change: transform;
          }

          @media (prefers-reduced-motion: reduce) {
            .marquee-container {
              animation: none;
            }
          }
        `}</style>

        <div
          dir="ltr" 
          className={`relative mt-14 overflow-hidden marquee-wrapper ${isPaused ? 'paused' : ''}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* افکت گرادینت محو شدن لبه‌ها */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />

          <div className="overflow-hidden">
            <div className="marquee-container">
              {brands.map((brand, i) => (
                <div key={`set1-${i}`} className="flex-shrink-0 px-3">
                  <BrandCard brand={brand} />
                </div>
              ))}
              {brands.map((brand, i) => (
                <div key={`set2-${i}`} className="flex-shrink-0 px-3">
                  <BrandCard brand={brand} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}