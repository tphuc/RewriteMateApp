export default function Footer() {
    return (
      <footer className="w-full py-6 text-center text-muted-foreground">
        <p>
          © {new Date().getFullYear()} RewriteMate. All rights reserved.
        </p>
      </footer>
    )
  }