import { Reveal } from '@/components/reveal'

const brands = [
  {
    name: 'Lumière',
    category: 'پوشش‌های دکوراتیو',
    text: 'فینیش‌های دکوراتیو با کیفیت اروپایی برای سطوح داخلی.',
  },
  {
    name: 'Ferrum',
    category: 'رنگ‌های صنعتی',
    text: 'پوشش‌های مقاوم صنعتی برای سازه و تجهیزات فلزی.',
  },
  {
    name: 'Naturé',
    category: 'پوشش چوب',
    text: 'سیستم‌های پوشش تخصصی چوب با حفظ بافت طبیعی.',
  },
  {
    name: 'Aurum',
    category: 'فینیش‌های خاص',
    text: 'پوشش‌های متالیک و افکت‌های ویژه برای پروژه‌های لاکچری.',
  },
]

export function Brands() {
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((brand, i) => (
            <Reveal key={brand.name} delay={i * 90}>
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-sm">
                <div className="flex h-16 items-center">
                  <span className="text-2xl font-extrabold tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {brand.name}
                  </span>
                </div>
                <div className="mt-2 text-xs font-medium tracking-wide text-[var(--gold-foreground)]">
                  {brand.category}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {brand.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
