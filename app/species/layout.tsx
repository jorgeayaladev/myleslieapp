export default function SpeciesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main className="mt-[5.25rem] md:mt-28 flex items-center justify-center">{children}</main>
}
