// app/dashboard/layout.js
import DashboardNav from "@/components/navs/dashboard-nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <DashboardNav />
      <div>{children}</div>
    </div>
  );
}
