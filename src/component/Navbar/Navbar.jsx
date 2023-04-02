import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'About',
            path: '/about'
        },
        {
            id: 3,
            name: 'Products',
            path: '/products'
        },
        {
            id: 4,
            name: 'Services',
            path: '/services'
        },
        {
            id: 5,
            name: 'Contact',
            path: '/contact'
        }
    ];
    return (
        <nav className='bg-blue-400 p-2'>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>
                    {
                        open === true ?
                            <XMarkIcon className="h-6 w-6 text-blue-500" />
                            :
                            <Bars3Icon className="h-6 w-6 text-blue-500" />
                    }
                </span>
            </div>
            <ul className={`md:flex md:static absolute pl-8 py-4 duration-500 bg-blue-400 ${open ? 'top-6' : '-top-36'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
            
        </nav>
    );
};

export default Navbar;