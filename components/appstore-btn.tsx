import { cn } from "@/lib/utils"

const AppleLogoSvg = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={25}
    viewBox="0 0 19 25"
    fill="currentColor"
    {...props}
  >
    <path
      fill="inherit"
      d="M13.7 5.602c-1.747 0-3.177 1.066-4.09 1.066-.973 0-2.239-1.066-3.762-1.066-2.895 0-5.825 2.46-5.825 6.96 0 2.813 1.079 5.778 2.426 7.688 1.149 1.617 2.156 2.918 3.61 2.918 1.43 0 2.062-.926 3.843-.926 1.805 0 2.215.926 3.797.926 1.57 0 2.614-1.441 3.61-2.86 1.101-1.628 1.57-3.21 1.582-3.292-.094-.024-3.094-1.254-3.094-4.688 0-2.976 2.355-4.312 2.496-4.418-1.559-2.238-3.938-2.308-4.594-2.308Zm-.821-1.899c.715-.867 1.219-2.05 1.219-3.246 0-.164-.012-.328-.036-.457-1.171.047-2.578.773-3.41 1.758-.668.75-1.277 1.945-1.277 3.14 0 .188.035.364.047.422.07.012.187.035.316.035 1.043 0 2.356-.703 3.14-1.652Z"
    />
  </svg>
)


type AppStoreBtnProps = {
    variant?: "dark" | "light"
    href?: string
    className?: string
  }
  

export function AppStoreBtn({
    variant = "dark",
    className = "",
  }: AppStoreBtnProps) {
    const isDark = variant === "dark"
  
    return (
      <div
        className={cn(`
          inline-flex items-center justify-between gap-[2px]
          rounded-[8px] border-[1px]
          pl-[4px] pr-[10px] py-[6px]
          overflow-hidden
          transition-all`,
          isDark
          ? "bg-gradient-to-b from-[#111111] to-black text-white border-[#ffffff]/50"
          : "bg-gradient-to-b from-[#eeeeee] to-white text-black border-[#000000]/50",
          className
        )}
      >
        <AppleLogoSvg
          className={`h-8 w-8 ${isDark ? "fill-white" : "fill-black"}`}
        />
  
        <div className="relative h-full justify-center flex flex-col gap-0">
          <span className="text-[0.7rem] -tracking-[4%] font-medium leading-[100%] tracking-normal opacity-80">
            Download on the
          </span>
          <span className="text-xl -tracking-[4%] leading-[100%] font-semibold">
            App Store
          </span>
        </div>
      </div>
    )
  }