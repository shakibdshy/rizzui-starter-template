"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "rizzui"
import { IconMoon, IconSunHigh } from "@tabler/icons-react"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="text"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="dark:hover:text-white"
    >
      <IconSunHigh className="h-[1.5rem] w-[1.3rem] dark:hidden" />
      <IconMoon className="hidden h-5 w-5 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
