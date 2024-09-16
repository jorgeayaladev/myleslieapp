export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="mt-24 md:mt-28 flex items-center justify-center">{children}</div>
}