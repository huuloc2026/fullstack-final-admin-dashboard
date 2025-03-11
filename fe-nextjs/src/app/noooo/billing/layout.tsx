export default function BillingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="grid grid-cols-5 grid-rows-3 gap-3 h-full">
        <div className="col-span-3 row-span-3 bg-blue-500">Layout</div>
        <div className="col-span-2 row-span-3 col-start-4 bg-red-500">2</div>
      </div>
    </>
  );
}
