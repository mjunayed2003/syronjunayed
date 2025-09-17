import * as React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Search, Send, Sun } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '../components/ui/navigation-menu'
import { Button } from '../components/ui/button'

interface MasterLayoutProps {
  children?: React.ReactNode
}

// Data for the "Home" dropdown
const homeComponent: { name: string; herf: string }[] = [
  { name: 'Home 01', herf: '/' },
  { name: 'Home 02', herf: '#' },
  { name: 'Home 03', herf: '#' },
  { name: 'Home 04', herf: '#' },
  { name: 'Home 05', herf: '#' },
  { name: 'Home 06', herf: '#' },
  { name: 'Home 07', herf: '#' },
  { name: 'Home 08', herf: '#' },
  { name: 'Home 09', herf: '#' },
  { name: 'Home 10', herf: '#' },
  { name: 'Home 11', herf: '#' },
  { name: 'Home 12', herf: '#' },
  { name: 'Home 13', herf: '#' },
  { name: 'Home 14', herf: '#' },
  { name: 'Home 15', herf: '#' },
  { name: 'Home 16', herf: '#' },
  { name: 'Home 17', herf: '#' }
]

// Data for the "Home" dropdown
const featuresComponent: { name: string; herf: string }[] = [
  { name: 'Post Type', herf: '#' },
  { name: 'Sidebar', herf: '#' },
  { name: 'Update Data', herf: '#' },
  { name: 'About', herf: '#' },
  { name: 'Our Team', herf: '#' },
  { name: 'Author Page', herf: '#' },
  { name: 'Simple Page', herf: '#' },
  { name: 'Page 404', herf: '#' },
  { name: 'Search Result', herf: '#' },
  { name: 'Coments', herf: '#' },
  { name: 'Coming Son', herf: '#' },
  { name: 'Amp', herf: '#' }
]

// Data for the "Lifestyle" dropdown
const lifestyleComponents: { title: string; date: string; imgSrc: string; href: string }[] = [
  { title: '10 Best Books To Read...', date: 'January 8, 2024', imgSrc: '/tree.jpg', href: '#' },
  { title: 'That Which Does Not Kill...', date: 'January 10, 2024', imgSrc: '/care.jpg', href: '#' },
  { title: 'The Beginner\'s Guide About Facebook...', date: 'March 4, 2024', imgSrc: '/chair.jpg', href: '#' },
  { title: 'A Practical Guide To Mindfulness...', date: 'March 6, 2024', imgSrc: '/camera.jpg', href: '#' },
  { title: 'Nasa Sets Coverage For Spacewalk...', date: 'April 3, 2024', imgSrc: '/tree.jpg', href: '#' },
  { title: 'Splurge Or Save Last Minute...', date: 'April 4, 2024', imgSrc: '/care.jpg', href: '#' },
]

// Data for the "Post Layout" dropdown
const postLayouts: string[] = [
  'Layout 1', 'Layout 1 - Fit', 'Layout 2', 'Layout 2 - No Thumb',
  'Layout 3', 'Layout 3 - No Thumb', 'Layout 4', 'Layout 5',
  'Layout 6', 'Layout 7', 'Layout 8', 'Layout 9',
  'Layout 10', 'Layout 11', 'Layout 11 - Fit',
]

export function MasterLayout({ children }: MasterLayoutProps) {
  return (
    <div>
      <div className="border-b">
        <header className="container mx-auto flex items-center justify-between py-4 px-6 bg-white">
          {/* Logo */}
          <Link to="#">
            <img src="/logo.svg" alt="Company Logo" className="h-10 w-auto" />
          </Link>

          {/* Navigation Menu (Centered) */}
          <div className="hidden lg:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Home */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {/* Add Home dropdown items here if needed */}
                    <ul className="grid w-[200px] p-4">
                      {homeComponent.map((item, key) => (
                        <NavigationMenuLink asChild key={key}>
                          <Link to={item.herf} className="text-sm transform ">
                            {item.name}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Lifestyle */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Lifestyle</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid grid-cols-3 gap-6 p-6 md:w-[600px] lg:w-[750px]">
                      {lifestyleComponents.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link to={item.href} className="flex flex-col gap-2 hover:text-red-500 transition-colors">
                              <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                                {/* Replace with actual image */}
                                <img src={item.imgSrc} alt={item.title} className="w-full h-full object-cover" />
                              </div>
                              <span className="font-semibold text-sm">{item.title}</span>
                              <span className="text-xs text-gray-500">{item.date}</span>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Features */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] p-4">
                      {featuresComponent.map((item) => (
                        <NavigationMenuLink asChild>
                          <Link to={item.herf}>{item.name}</Link>
                        </NavigationMenuLink>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Post Layout */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Post Layout</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid grid-cols-4 gap-x-8 gap-y-4 p-6 md:w-[600px] lg:w-[800px]">
                      {postLayouts.map((layout) => (
                        <li key={layout}>
                          <NavigationMenuLink asChild>
                            <Link to="#" className="text-sm transform ">
                              {layout}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Contact */}
                <NavigationMenuItem>
                  <Link to="/contact" className={navigationMenuTriggerStyle()}>
                    Contact
                  </Link>
                </NavigationMenuItem>
                {/* Data Fatch */}
                {/* Contact */}
                <NavigationMenuItem>
                  <Link to="/datafatch" className={navigationMenuTriggerStyle()}>
                    Data Fatch
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <Button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-5">
              <Send />
              Join Us
            </Button>
            <Search className="h-5 w-5 cursor-pointer" />
            <Sun className="h-5 w-5 cursor-pointer" />
            <Menu className="h-6 w-6 cursor-pointer lg:hidden" /> {/* Hamburger for mobile */}
          </div>
        </header>
      </div>

      {/* Page content */}
      <main className="container mx-auto mt-8 px-6">
        {children}
      </main>
    </div>
  )
}