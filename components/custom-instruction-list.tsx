import { Edit3, Trash2, Plus, Pin } from "lucide-react"

const instructions = [
    {
      title: "Fix Grammar",
      description: "Correct grammar, punctuation, and phrasing while keeping the original tone.",
    },
    {
      title: "Tweet Enhancer",
      description: "Rewrite the text to be short, catchy, and scroll-stopping for Twitter/X.",
    },
    {
      title: "Casual Tone",
      description: "Make the message sound professional, clear, and naturally conversational.",
    },
    {
      title: "Shorten",
      description: "Fix errors and improve sentence structure for smoother readability.",
    },
  ]
export default function CustomInstructionsList() {
  return (
    <section className="max-w-lg min-w-xs mx-auto bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">

      <ul className="divide-y ml-auto rounded-2xl overflow-hidden">
        {instructions.map((instruction, id) => (
          <li
            key={instruction.title}
            className="flex items-center p-4 cursor-pointer justify-between py-2 hover:bg-white/5 transition"
          >
            <div className="flex items-center gap-2">
              <span className="text-white font-medium text-sm">
                {instruction.title}
              </span>
              <span><Pin className="w-3 h-3 text-muted-foreground"/></span>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <button
                type="button"
                className="p-1 hover:text-white transition"
                aria-label="Edit instruction"
              >
                <Edit3 className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="p-1 hover:text-red-400 transition"
                aria-label="Delete instruction"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </li>
        ))}
      </ul>

    </section>
  )
}