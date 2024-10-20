'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const currentPath = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            if (window.scrollY > 0) {
                header?.classList.add('scrolled');
            } else {
                header?.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="shadow-md">
            <div className="flex justify-between items-center">
                <span className='font-[700] text-[32px] cursive-font'>Logo</span>
                <button
                    className="md:hidden nav-button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>
            </div>

            <ul className={`md:flex gap-[24px] z-10 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                <li className={`nav-item ${currentPath === '/' ? 'active' : ''}`}>
                    <Link href="/" className="nav-link">Home</Link>
                </li>
                <li className={`nav-item ${currentPath === '/about' ? 'active' : ''}`}>
                    <Link href="/about" className="nav-link">About</Link>
                </li>
                <li className={`nav-item ${currentPath === '/services' ? 'active' : ''}`}>
                    <Link href="/services" className="nav-link">Services</Link>
                </li>
                <li className={`nav-item ${currentPath === '/blog' ? 'active' : ''}`}>
                    <Link href="/blog" className="nav-link">Blog</Link>
                </li>
                <li className={`nav-item ${currentPath === '/contact' ? 'active' : ''}`}>
                    <Link href="/contact" className="nav-link">Contact</Link>
                </li>
            </ul>

            <button className="nav-button hidden md:block">
                Order Now
            </button>
        </header>
    );
}
