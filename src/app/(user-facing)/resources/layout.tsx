export default function ResourceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='min-h-screen bg-custom-pattern bg-custom-size'>
      {children}
    </main>
  );
}
