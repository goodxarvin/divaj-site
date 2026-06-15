import Image from 'next/image'
import { Layers, Workflow, Hammer, Cpu } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const pillars = [
  {
    icon: Layers,
    title: 'متریال',
    en: 'Material',
    text: 'انتخاب دقیق متریال پایه، نقطه آغاز هر سطح ماندگار است؛ از چوب طبیعی تا فلز و سطوح دکوراتیو.',
  },
  {
    icon: Workflow,
    title: 'فرآیند',
    en: 'Process',
    text: 'فرآیندی مهندسی‌شده و مرحله‌به‌مرحله که کیفیت و یکنواختی پوشش را تضمین می‌کند.',
  },
  {
    icon: Hammer,
    title: 'صنعت‌گری',
    en: 'Craft',
    text: 'دقت دست هنرمند در کنار استانداردهای صنعتی، جزئیاتی می‌سازد که حس لوکس را منتقل می‌کند.',
  },
  {
    icon: Cpu,
    title: 'تکنولوژی',
    en: 'Technology',
    text: 'بهره‌گیری از تجهیزات و دانش روز، اجرای پوشش‌های پیشرفته و فینیش‌های خاص را ممکن می‌سازد.',
  },
]

export function Story() {
  return (
    <section id="about" className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <span className="text-sm font-semibold tracking-[0.2em] text-[var(--gold-foreground)]">
              درباره دیواژ
            </span>
            <h2 className="mt-5 text-balance text-3xl font-extrabold leading-snug text-foreground lg:text-5xl">
              برندی درباره کیفیت سطح و طراحی متریال
            </h2>
            <p className="mt-7 text-pretty text-lg leading-relaxed text-foreground/75">
              ما در دیواژ نقش ماندگار، سطح را فراتر از یک لایه پوشش می‌بینیم. هر
              پروژه ترکیبی است از مهندسی، طراحی و اجرای دقیق؛ با هدف خلق سطوحی که
              هم زیبا باشند و هم در برابر زمان مقاوم بمانند.
            </p>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-foreground/75">
              تمرکز ما بر چهار ستون اصلی است که هویت کاری ما را شکل می‌دهد و
              تفاوت یک پوشش معمولی با یک فینیش حرفه‌ای را رقم می‌زند.
            </p>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/material-detail.png"
                alt="نمونه‌های متریال و فینیش در استودیوی دیواژ"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 right-6 rounded-xl border border-border bg-card px-6 py-4 shadow-sm lg:-right-6">
              <div className="text-2xl font-extrabold text-primary">Diwaj</div>
              <div className="text-xs tracking-wide text-muted-foreground">
                Surface &amp; Finishing Studio
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.en} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/40">
                <div className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <pillar.icon className="size-6" />
                </div>
                <div className="mt-6 flex items-baseline gap-2">
                  <h3 className="text-xl font-bold text-foreground">
                    {pillar.title}
                  </h3>
                  <span className="text-xs tracking-widest text-muted-foreground">
                    {pillar.en}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pillar.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
