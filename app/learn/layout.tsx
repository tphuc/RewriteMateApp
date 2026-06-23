import Nav from "../nav";
import Footer2 from "../(marketing)/footer";

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="pt-16">{children}</main>
      <Footer2 />
    </div>
  );
}
