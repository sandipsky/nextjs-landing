'use client';
import { useEffect } from 'react';
import Link from 'next/link'

export default function Header() {
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
            <div>
                <span className='font-[700] text-[32px] cursive-font'>Logo</span>
            </div>
            <ul className="flex gap-[24px]">
                <li className="nav-item">
                    <Link href="/" className="nav-link hover:">Home</Link>
                </li>
                <li className="nav-item">
                    <Link href="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link href="/about" className="nav-link">Skills</Link>
                </li>
                <li className="nav-item">
                    <Link href="/projects" className="nav-link">Projects</Link>
                </li>
                <li className="nav-item">
                    <Link href="/contact" className="nav-link">Contact</Link>
                </li>
            </ul>
            <button className="nav-button">
                Order Now
            </button>
        </header>
    );
}