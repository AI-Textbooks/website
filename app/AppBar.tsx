'use client'

import Image from 'next/image'
import Link from 'next/link'
const sideLength = 24
import { Disclosure } from '@headlessui/react'
// ! AppBar should not adjust according to user state, as it slows all pages down
export const AppBar = () => {
  const navigation: string[] = [
    'posts'
  ]
  return (
    <div className='w-full'>
      <nav className='container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0'>
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className='flex flex-wrap items-center justify-between w-full lg:w-auto'>
                <Link href='/'>
                  <span className='flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100'>
                    <Image
                      className='m-auto inline-block'
                      src='/logo.svg'
                      alt='AI Textbooks logo'
                      width={sideLength}
                      height={sideLength}
                    />
                    <p className='ml-2 text-center font-header dark:text-white hidden xs:inline-block'>
                      ai:textbooks
                    </p>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label='Toggle Menu'
                  className='px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700'
                >
                  <svg
                    className='w-6 h-6 fill-current'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                  >
                    {open && (
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
                      />
                    )}
                    {!open && (
                      <path
                        fillRule='evenodd'
                        d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className='flex flex-wrap w-full my-5 lg:hidden'>
                  <>
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        href={"/" + item}
                        className='w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-emerald-300 focus:text-black focus:bg-emerald-300 focus:outline-none dark:focus:bg-emerald-300'
                      >
                        {item}
                      </Link>
                    ))}
                    <Link
                      href='#github-download'
                      className='w-full px-6 py-2 mt-3 text-center text-black bg-gradient-to-r from-emerald-300 to-cyan-200/70 rounded-md lg:ml-5'
                    >
                      know more
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className='hidden text-center lg:flex lg:items-center'>
          <ul className='items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex'>
            {navigation.map((menu, index) => (
              <li className='mr-3 nav__item' key={index}>
                <Link
                  href={"/" + menu}
                  className='inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-emerald-300 focus:text-black focus:bg-emerald-300 focus:outline-none dark:focus:bg-emerald-300'
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='hidden mr-3 space-x-4 lg:flex nav__item'>
          <Link
            href='/posts/introduction'
            className='px-6 py-2 text-black bg-gradient-to-r from-emerald-300 to-cyan-200/70 rounded-md md:ml-5'
          >
            know more
          </Link>
        </div>
      </nav>
    </div>
  )
}
