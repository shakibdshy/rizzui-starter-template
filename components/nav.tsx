import Link from "next/link"
import NextLogo from "@/components/icon/next-logo"

function Nav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <NextLogo className="h-6 w-6 flex-1" />
        <span className="inline-block font-bold">Next.js</span>
      </Link>
      <nav className="flex gap-6">
        <Link
          href='/'
          className='flex items-center text-sm font-medium text-muted-foreground'
        >
          Home
        </Link>
      </nav>
    </div>
  )
}

export default Nav