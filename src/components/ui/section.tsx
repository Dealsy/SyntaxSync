import { cn } from "@/lib/utils";

export default function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("pt-20 px-14 max-w-5xl mx-auto", className)}>
      {children}
    </section>
  );
}
