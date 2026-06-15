import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const steps = [
  {
    no: '۰۱',
    title: 'آماده‌سازی سطح',
    en: 'Surface Preparation',
    text: 'پاک‌سازی، سنباده و آماده‌سازی دقیق سطح برای چسبندگی بهینه پوشش.',
  },
  {
    no: '۰۲',
    title: 'پرایمر',
    en: 'Primer',
    text: 'اجرای لایه زیرین تخصصی برای یکنواختی و افزایش دوام فینیش نهایی.',
  },
  {
    no: '۰۳',
    title: 'اجرای پوشش',
    en: 'Coating',
    text: 'پاشش کنترل‌شده پوشش در محیط استاندارد برای سطحی صاف و یکدست.',
  },
  {
    no: '۰۴',
    title: 'خشک‌سازی',
    en: 'Drying',
    text: 'فرآیند پخت و خشک‌سازی کنترل‌شده برای استحکام و ماندگاری پوشش.',
  },
  {
    no: '۰۵',
    title: 'کنترل کیفیت',
    en: 'Quality Control',
    text: 'بازرسی نهایی سطح از نظر یکنواختی، چسبندگی و کیفیت فینیش.',
  },
]

export function CoatingCenter() {
  return (
    <section id="process" className="relative overflow-hidden bg-primary py-24 text-primary-foreground lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="text-sm font-semibold tracking-[0.2em] text-[var(--gold)]">
              مرکز پوشش
            </span>
            <h2 className="mt-5 text-balance text-3xl font-extrabold leading-snug lg:text-5xl">
              یک استودیوی تخصصی، نه یک کارگاه ساده
            </h2>
            <p className="mt-7 text-pretty text-lg leading-relaxed text-primary-foreground/80">
              مرکز پوشش دیواژ فضایی کنترل‌شده و مجهز است که در آن هر سطح از
              آماده‌سازی تا کنترل کیفیت، مرحله‌به‌مرحله و با دقت مهندسی اجرا
              می‌شود.
            </p>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/coating-center.png"
                alt="مرکز تخصصی پوشش و فینیشینگ دیواژ"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <Reveal
              key={step.en}
              delay={i * 80}
              className="bg-primary"
            >
              <div className="group h-full p-7 transition-colors hover:bg-primary-foreground/5">
                <div className="text-3xl font-extrabold text-[var(--gold)]">
                  {step.no}
                </div>
                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                <div className="mt-1 text-xs tracking-widest text-primary-foreground/50">
                  {step.en}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
