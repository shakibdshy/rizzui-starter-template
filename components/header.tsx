import Nav from "@/components/nav";
import Link from "next/link";
import { IconBrandGithub } from '@tabler/icons-react';
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b">
      <div className="container mx-auto flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Nav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Link
            href='https://github.com/RedQ/rizzui'
            target="_blank"
            rel="noreferrer"
          >
            <IconBrandGithub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}