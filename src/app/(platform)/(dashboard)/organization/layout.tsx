import { Sidebar } from '../_components/Sidebar'

export default function OrganisationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="mx-auto max-w-6xl px-4 pt-20 md:pt-24 2xl:max-w-screen-xl">
      <div>
        <div className="hidden w-64 shrink-0 md:block">
          {/* Sidebars */}
          <Sidebar />
        </div>
        {children}
      </div>
    </main>
  )
}
