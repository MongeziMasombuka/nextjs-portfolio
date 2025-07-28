export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="max-w-6xl mx-auto px-6 my-8">{children}</main>;
}
