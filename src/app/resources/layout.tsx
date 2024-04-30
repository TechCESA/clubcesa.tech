export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className='min-h-screen bg-primary'>{children}</main>;
}
