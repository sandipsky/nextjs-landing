'use client';
import { useEffect } from 'react';
import "./header.css";

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
            <div className="logo">
                <span className='font-[700] text-[32px] cursive-font'>Logo</span>
            </div>
            <ul className="nav-links">
                <li className="nav-item">
                    <a href="#home" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#about" className="nav-link">About Me</a>
                </li>
                <li className="nav-item">
                    <a href="#skills" className="nav-link">Skills</a>
                </li>
                <li className="nav-item">
                    <a href="#projects" className="nav-link">Projects</a>
                </li>
                <li className="nav-item">
                    <a href="#contact" className="nav-link">Contact</a>
                </li>
            </ul>
            <button className="nav-button">
                Order Now
            </button>
        </header>
    );
}