'use client';

import Link from 'next/link';
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Teens", href: "/Teens" },
];

const NavMenu = () => {
  const pathname = usePathname();

  return (
    <nav className='items-center gap-4 hidden md:flex'>
      {links.map((link, index) => (
        <div key={index}>
          {pathname === link.href ? (
            <Link
              href={link.href}
              className='text-primary'
            >
              {link.name}
            </Link>
          ) : (
            <Link
              href={link.href}
              className='hover:text-primary transition-all'
            >
              {link.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default NavMenu;