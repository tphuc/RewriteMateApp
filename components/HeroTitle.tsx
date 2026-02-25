

export function HeroTitle() {
  return (
    <div className="relative grow-progress-2 space-y-4">
      {/* <div className="absolute top-0 left-0 bg-gradient-to-b from-secondary via-secondary/80 to-transparent w-full h-[30%]  z-10" /> */}

      <div className="relative  max-w-screen-lg px-4 mx-auto">

        <img
          src='/hero-macos.avif'
          className="w-full rounded-xl w-full"
          style={{ objectFit: "contain",  }}
        />
        <img
          src='/hero-ios.avif'
          className="absolute -bottom-[5%] right-[2%] md:right-[0%] scale-[0.96] rounded-xl w-[30%]"
          style={{ objectFit: "contain", }}
        />
      </div>
      <div className="relative pb-5 space-y-4">

        <h1 className="relative mx-auto max-w-xl text-center text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          <span className="bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent">
            Your Better <br /> AI Writing Assistant
          </span>
        </h1>
        <p className="text-center max-w-md mx-auto text-xl">
          Instantly improve, rephrase, and refine any text. The better writing tool, built for iOS and macOS.
        </p>
      </div>
    </div>


  )
}
