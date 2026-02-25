import Image from "next/image"

export type BlogAuthorProps = {
  name: string
  role: string
  bio: string
  avatarUrl?: string
}

export default function BlogAuthor({
  name,
  role,
  bio,
  avatarUrl = "/felixtran.webp",
}: BlogAuthorProps) {
  return (
    <div className="mt-12 flex items-start gap-4 rounded-2xl border border-neutral-200/70 bg-secondary p-5">
      {/* Avatar */}
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
        <Image
          src={avatarUrl}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col">
        <span className="text-xs uppercase tracking-wide text-neutral-500">
          Written by
        </span>

        <h4 className="mt-0.5 text-base font-semibold">
          {name}
        </h4>

        <p className="mt-1 text-sm text-muted-foreground">
          {role}
        </p>

        <p className="mt-3 max-w-prose text-sm leading-relaxed text-foreground">
          {bio}
        </p>
      </div>
    </div>
  )
}

// Example usage:
// <BlogAuthor
//   name="Antoine van der Lee"
//   role="Indie Developer & Founder at SwiftLee"
//   bio="iOS Developer since 2010, former Staff iOS Engineer at WeTransfer. Writes weekly about Swift, iOS, and Xcode. Regular speaker and workshop host."
// />