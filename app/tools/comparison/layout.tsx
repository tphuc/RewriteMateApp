import Nav from "@/app/nav";

export default function ComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="max-w-screen-lg mx-auto px-4 py-12 md:py-20">
        {children}
      </main>
    </div>
  );
}
