import { SunIcon } from '@heroicons/react/outline'
import { MoonIcon } from '@heroicons/react/solid'
import Logo from './Logo'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  const renderThemeChanger = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme
    if (!mounted) return null;

    if (currentTheme === 'dark') {
      return (
        <div className="flex items-center cursor-pointer ">
          <h2 className="font-mono font-semibold tracking-wider uppercase text-md dark:text-gray-50">
            Light
            <SunIcon
              className="inline-block w-8 h-8 ml-1 text-amber-400 animate-wiggle "
              onClick={() => setTheme('light')}
            />
          </h2>
        </div>
      )
    } else {
      return (
        <div className="flex items-center cursor-pointer">
          <h2 className="font-mono font-semibold tracking-wider uppercase text-md text-slate-500 ">
            Dark
            <MoonIcon
              className="inline-block w-8 h-8 ml-1 text-gray-600 animate-wiggle_reverse"
              onClick={() => setTheme('dark')}
            />
          </h2>
        </div>
      )
    }
  }

  return (
    <header className="flex justify-between max-w-md p-2 mx-auto mt-4 space-x-4 rounded-md align-items md:max-w-2xl">
      <div>
        <Logo />
      </div>

      {renderThemeChanger()}
    </header>
  )
}

export default Navbar