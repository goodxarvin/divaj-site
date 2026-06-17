import { Phone, Mail, MapPin, ArrowLeft } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const contactItems = [
  { icon: Phone, label: 'تلفن', value: '۰۹۱۳-۸۰۹-۰۳۲۰' },
  { icon: MapPin, label: 'نشانی', value: 'اصفهان، شهرک صنعتی جی، نبش خیابان چهارم' },
]

export function ContactFooter() {
  return (
    <>
      <section id="contact" className="bg-secondary/40 py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-2">
            <Reveal>
              <span className="text-sm font-semibold tracking-[0.2em] text-[var(--gold-foreground)]">
                تماس
              </span>
              <h2 className="mt-5 text-balance text-3xl font-extrabold leading-snug text-foreground lg:text-5xl">
                بیایید درباره سطح بعدی شما گفت‌وگو کنیم
              </h2>
              <p className="mt-7 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
                برای مشاوره تخصصی درباره پروژه پوشش و فینیشینگ خود، با کارشناسان
                دیواژ در ارتباط باشید.
              </p>

              <div className="mt-10 flex flex-col gap-5">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <span className="flex size-11 items-center justify-center rounded-full bg-background text-primary">
                      <item.icon className="size-5" />
                    </span>
                    <div>
                      <div className="text-xs text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="text-base font-semibold text-foreground">
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={150}>
              <form className="rounded-2xl border border-border bg-card p-8 lg:p-10">
                <div className="grid gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      نام و نام خانوادگی
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="نام شما"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      شماره تماس
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="۰۹۱۲ ۰۰۰ ۰۰۰۰"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      توضیح پروژه
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="درباره سطح و نیاز خود بنویسید..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:gap-3"
                  >
                    ارسال درخواست مشاوره
                    <ArrowLeft className="size-5 transition-transform group-hover:-translate-x-1" />
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <div className="text-2xl font-extrabold text-primary">دیواژ</div>
              <div className="mt-1 text-xs tracking-[0.25em] text-muted-foreground">
                NAGHSH MANDEGAR
              </div>
            </div>
            <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-foreground/70">
              <a href="#about" className="hover:text-primary">
                درباره ما
              </a>
              <a href="#process" className="hover:text-primary">
                خدمات
              </a>
              <a href="#projects" className="hover:text-primary">
                پروژه‌ها
              </a>
              <a href="#brands" className="hover:text-primary">
                برندها
              </a>
              <a href="#contact" className="hover:text-primary">
                تماس
              </a>
            </nav>
          </div>
          <div className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
            © {new Date().getFullYear()} دیواژ نقش ماندگار — مهندسی سطح، رنگ و
            فینیشینگ. تمامی حقوق محفوظ است.
          </div>
        </div>
      </footer>
    </>
  )
}
