'use client'

import { IconBrandGithub } from '@tabler/icons-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button, Text } from 'rizzui'

export default function Home() {
  return (
    <main className='min-h-[calc(100vh-100px)]'>
      <section className='py-16 md:py-20 lg:py-32 relative'>
        <div className='container relative mx-auto text-center'>
          <h1 className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl leading-[1.3] sm:leading-[1.3] lg:leading-[1.2] xl:leading-[1.2] 2xl:leading-[1.18] font-extrabold drop-shadow-sm mb-6 md:mb-10">A Modern and Minimal React UI Library <br className="hidden md:inline-block" /> built  with TailwindCSS</h1>
          <Text tag="p" className='text-[15px] md:text-base lg:text-lg leading-[1.9] md:leading-[1.9] lg:leading-[1.9] max-w-5xl mx-auto mb-8 md:mb-12 text-gray-600'>designed to provide you with a simple and intuitive set of UI components that are easy to use, customize and integrate into your React application. We have carefully crafted each component to ensure that they are responsive, accessible and consistent across different devices and browsers.</Text>
          <div className='flex items-center justify-center gap-2 md:gap-4'>
            <Link href='https://www.rizzui.com/docs/guide/getting-started' target='_blank'>
              <Button
                variant="solid"
                size='xl'
              >
                Documentation
              </Button>
            </Link>
            <Link href='https://github.com/RedQ/rizz'>
              <Button
                variant="outline"
                size='xl'
                className='gap-2'
              >
                <IconBrandGithub className="h-5 w-5" />
                Github
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
