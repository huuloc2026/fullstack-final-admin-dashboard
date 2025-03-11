export default function SettingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container mx-auto flex flex-col ">
      <div className="flex flex-col mt-2 ">{children}</div>
    </main>
  );
}
