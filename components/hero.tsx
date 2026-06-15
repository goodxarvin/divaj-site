import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-surface.png"
          alt="سطح چوبی با فینیش لوکس و پوشش مات حرفه‌ای"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-background/95 via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-20 pt-32 lg:px-10 lg:pb-28">
        <div className="max-w-3xl">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/40 px-4 py-1.5 text-xs font-medium tracking-wide text-primary backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-[var(--gold)]" />
            استودیوی تخصصی پوشش و فینیشینگ سطح
          </span>

          <h1 className="text-balance text-4xl font-extrabold leading-[1.15] text-foreground sm:text-5xl lg:text-7xl">
            مهندسی سطح با رنگ،
            <br />
            تکنولوژی و تخصص
          </h1>

          <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-foreground/75 lg:text-xl">
            دیواژ نقش ماندگار، ترکیبی از مهندسی، طراحی و اجرا برای خلق سطوحی
            ماندگار؛ جایی که کیفیت متریال و دقت در فینیشینگ به یک هنر تبدیل می‌شود.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:gap-3"
            >
              مشاهده پروژه‌ها
              <ArrowLeft className="size-5 transition-transform group-hover:-translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-foreground/25 bg-background/30 px-8 py-4 text-base font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-primary hover:text-primary"
            >
              درخواست مشاوره
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 border-t border-border/60 pt-8 lg:max-w-2xl">
          {[
            { value: '۱۸+', label: 'سال تجربه تخصصی' },
            { value: '۴۰۰+', label: 'پروژه اجرا شده' },
            { value: '۹۸٪', label: 'رضایت کارفرما' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-extrabold text-primary lg:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
