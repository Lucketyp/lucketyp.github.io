import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_300px_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-darkforeground dark:hover:bg-[#ccc] font-bold text-sm sm:text-base h-14 sm:h-14 px-4 sm:px-6 sm:w-auto"
            href="./paint"
          >
            <Image
              className="dark:invert"
              src="/paint.svg"
              alt="Paint"
              width={20}
              height={20}
            />
            Start Painting
          </a>
        </div>
      </main>

    </div>
  );
}
