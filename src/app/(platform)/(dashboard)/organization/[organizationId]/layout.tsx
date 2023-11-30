import { OrgControl } from './_components/OrgControl'

export default function OrganisationIdLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <OrgControl />
      {children}
    </>
  )
}
