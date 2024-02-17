import { ShoppingBagIcon } from 'lucide-react';
import Link from 'next/link';

import { ThemeToggle } from './ThemeToggle';
import Navmenu from './NavMenu';
import { Button } from './ui/button';
import ShoppingCart from './ShoppingCart';

const Navbar = () => {
  return (
    <header className='max-w-[1900px] w-full mx-auto border-b px-2'>
      <div className='flex justify-between py-2'>
        <div className='flex items-center'>
          <Link
            href='/'>
            <h1 className="text-2xl">Next<span className='text-primary'>Commerce</span></h1>
          </Link>
        </div>
        <div className='flex gap-2 md:gap-4'>
          <Navmenu />
          <ShoppingCart />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;