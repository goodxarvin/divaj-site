'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpLeft } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

type Category = 'all' | 'wood' | 'industrial' | 'decorative' | 'special'

const categories: { key: Category; label: string }[] = [
  { key: 'all', label: 'همه پروژه‌ها' },
  { key: 'wood', label: 'چوب' },
  { key: 'industrial', label: 'صنعتی' },
  { key: 'decorative', label: 'دکوراتیو' },
  { key: 'special', label: 'فینیش خاص' },
]

const projects = [
  {
    category: 'wood' as Category,
    title: 'پوشش مات روی روکش گردو',
    surface: 'سطح: چوب طبیعی',
    system: 'سیستم: پلی‌یورتان مات',
    desc: 'اجرای فینیش مات لطیف با حفظ کامل بافت طبیعی چوب و مقاومت بالا در برابر سایش.',
    image: '/images/project-wood.png',
    span: 'lg:col-span-2',
  },
  {
    category: 'industrial' as Category,
    title: 'پوشش پودری سازه فلزی',
    surface: 'سطح: فلز',
    system: 'سیستم: رنگ پودری الکترواستاتیک',
    desc: 'فینیش یکنواخت و مقاوم برای کاربری صنعتی با دوام بلندمدت.',
    image: '/images/project-industrial.png',
    span: '',
  },
  {
    category: 'decorative' as Category,
    title: 'سطح دکوراتیو میکروسمنت',
    surface: 'سطح: دیوار',
    system: 'سیستم: میکروسمنت دستی',
    desc: 'بافت دکوراتیو با اجرای دستی و حس متریال خام و لوکس.',
    image: '/images/project-decorative.png',
    span: '',
  },
  {
    category: 'special' as Category,
    title: 'فینیش متالیک صدفی',
    surface: 'سطح: کامپوزیت',
    system: 'سیستم: پوشش متالیک چندلایه',
    desc: 'جلوه صدفی و عمق رنگی ویژه برای پروژه‌های خاص و لاکچری.',
    image: '/images/project-special.png',
    span: 'lg:col-span-2',
  },
]

export function Projects() {
  const [active, setActive] = useState<Category>('all')
  const filtered =
    active === 'all'
      ? projects
      : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="bg-secondary/40 py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-sm font-semibold tracking-[0.2em] text-[var(--gold-foreground)]">
              پروژه‌ها
            </span>
            <h2 className="mt-5 max-w-2xl text-balance text-3xl font-extrabold leading-snug text-foreground lg:text-5xl">
              نمونه‌ای از سطوحی که خلق کرده‌ایم
            </h2>
          </div>
          <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
            هر پروژه روایتی از انتخاب متریال، طراحی سیستم پوشش و اجرای دقیق است.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActive(cat.key)}
              className={cn(
                'rounded-full border px-5 py-2.5 text-sm font-medium transition-colors',
                active === cat.key
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-background text-foreground/70 hover:border-primary/50 hover:text-primary',
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Reveal
              key={project.title}
              delay={i * 80}
              className={project.span}
            >
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute left-4 top-4 flex size-10 items-center justify-center rounded-full bg-background/90 text-primary opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <ArrowUpLeft className="size-5" />
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted-foreground">
                    <span>{project.surface}</span>
                    <span>{project.system}</span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {project.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
