import { Footer } from './_components/footer'
import { Navbar } from './_components/naxbar'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen bg-slate-100">
      <Navbar />
      <main className="bg-slate-100 pb-20 pt-40">
        {children}

        <Footer />
      </main>
    </div>
  )
}
