import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full py-6 text-center text-muted-foreground dark:border-gray-700">
      <div className="w-full justify-center flex items-center py-4">
       <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/logo.png"
          alt="RewriteMate Logo"
          width={80}
          height={80}
          className="rounded-[12px] border-2 border-background/80"
        />
      </Link>
      </div>
      <p className="mb-2">
        © {new Date().getFullYear()} RewriteMate. All rights reserved.
      </p>
      <div className="flex justify-center gap-4 text-sm">
        <Link href="/terms-and-conditions" className="hover:underline">
          Terms & Conditions
        </Link>
        <Link href="/privacy" className="hover:underline">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}