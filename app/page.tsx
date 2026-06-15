import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Story } from '@/components/story'
import { Projects } from '@/components/projects'
import { CoatingCenter } from '@/components/coating-center'
import { Brands } from '@/components/brands'
import { ContactFooter } from '@/components/contact-footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <Story />
      <Projects />
      <CoatingCenter />
      <Brands />
      <ContactFooter />
    </main>
  )
}
