import DashboardNav from "@/components/dashboard-nav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DashboardNav />
        <div>{children}</div>
      </body>
    </html>
  );
}
