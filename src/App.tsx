import { Button } from "./components/ui/button";
import { ModeToggle } from "./components/mode-toggle";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { cn } from "./lib/utils";

export default function App() {
  const [isBoxDark, setIsBoxDark] = useState(false);

  return (
    <main className="grid min-h-dvh place-items-center bg-background">
      <ModeToggle />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Tailwind Button Border Bug
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Demonstrating a visual bug when using opacity modifiers with
            border-radius. <br /> Note: The page is not responsive.
          </p>
        </div>

        <div className="mx-auto mt-16 flex max-w-xl flex-col items-center justify-center gap-8">
          <div
            className={cn(
              "relative w-full rounded-xl p-16 shadow-sm",
              isBoxDark ? "bg-zinc-900" : "bg-white",
            )}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsBoxDark(!isBoxDark)}
              className="absolute right-4 top-4 text-yellow-500"
              aria-label="Toggle Box Theme"
            >
              <Sun
                className={cn(
                  "h-[1.2rem] w-[1.2rem] transition-all",
                  isBoxDark ? "rotate-90 scale-0" : "rotate-0 scale-100",
                )}
              />
              <Moon
                className={cn(
                  "absolute h-[1.2rem] w-[1.2rem] transition-all",
                  isBoxDark ? "rotate-0 scale-100" : "rotate-90 scale-0",
                )}
              />
            </Button>

            {/* THE BUTTONS ARE WITHIN THIS DIV */}
            <div className="grid w-full gap-4">
              <Button className="rounded-full border-none bg-[#333333] px-8 text-white shadow-[5px_5px_#111111] transition-all duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:bg-[#333333] hover:shadow-[7px_7px_#111111] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[3px_3px_#111111]">
                Working: Using hex code bg-[#333333]
              </Button>

              <Button className="rounded-full border-none bg-zinc-800 px-8 text-white shadow-[5px_5px_#111111] transition-all duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:bg-[#333333] hover:shadow-[7px_7px_#111111] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[3px_3px_#111111]">
                Working: Using hex code bg-zinc-800
              </Button>

              <Button className="rounded-full border-none bg-zinc-800/95 px-8 text-white shadow-[5px_5px_#111111] transition-all duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:bg-[#333333] hover:shadow-[7px_7px_#111111] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[3px_3px_#111111]">
                Bug: Using opacity bg-zinc-800/95
              </Button>

              <Button className="rounded-full border-2 border-zinc-800/95 bg-zinc-800/95 px-8 text-white shadow-[5px_5px_#111111] transition-all duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:bg-[#333333] hover:shadow-[7px_7px_#111111] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[3px_3px_#111111]">
                Bug: Same button with border-2 and bg-zinc-800/95
              </Button>
            </div>
          </div>

          <div className="space-y-2 text-center text-sm text-muted-foreground">
            <ul className="mx-auto max-w-md list-disc space-y-1 text-left">
              <li>
                Notice the white artifacts around the border radius when{" "}
                <a
                  href="https://tailwindcss.com/docs/text-color#changing-the-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-blue-400"
                >
                  using opacity modifier syntax
                </a>
                .
              </li>
              <li>It happens no matter the border-radius value.</li>
              <li>
                The issue only occurs when using opacity modifiers (e.g., /95).
              </li>
              <li>
                Using solid hex colors or Tailwind colors without opacity works
                fine.
              </li>
              <li>
                The white artifacts visible are actually the background color
                (of immediate parent) showing through. I have provided two
                different theme toggles (page and box) to demonstrate how the
                artifacts change based on the immediate parent's background
                color.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
