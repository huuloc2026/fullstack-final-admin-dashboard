export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container mx-auto p-5 flex flex-col ">
      <div className="flex flex-col  p-2 ">{children}</div>
    </main>
  );
}
