"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle function for the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        // Optionally disable scroll on body when menu is open
        if (!isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    };

    // Close menu when clicking a link
    const closeMenu = () => {
        setIsOpen(false);
        document.body.style.overflow = "auto";
    };

    return (
        <>
            {/* ── GLOBAL NAVBAR ── */}
            <nav className="navbar">
                <div className="navContainer">
                    {/* Left Edge: Nav Links (Hidden on mobile) */}
                    <div className="navLinksLeft">
                        <Link href="/" onClick={closeMenu}>Home</Link>
                        <Link href="/services" onClick={closeMenu}>Services</Link>
                        <Link href="/fleet" onClick={closeMenu}>Fleet</Link>
                    </div>

                    {/* Center: Custom Logo */}
                    <div className="navLogoCenter">
                        <Link href="/" className="navLogo" onClick={closeMenu}>
                            <Image
                                src="/Western-Home-Transport/new_logo.png"
                                alt="Western Home Transport"
                                width={200}
                                height={123}
                                className="navLogoImg"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Right Edge: Nav Links & Phone (Hidden on mobile) */}
                    <div className="navLinksRight">
                        <Link href="/about" onClick={closeMenu}>About</Link>
                        <Link href="/contact" onClick={closeMenu}>Contact</Link>

                        {/* Phone Contact */}
                        <a href="tel:+12085550198" className="navPhone">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            (208) 555-0198
                        </a>
                    </div>

                    {/* Hamburger Menu Toggle (Visible only on mobile) */}
                    <button
                        className={`hamburger ${isOpen ? "active" : ""}`}
                        onClick={toggleMenu}
                        aria-label="Toggle Navigation Menu"
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                </div>
            </nav>

            {/* ── MOBILE OVERLAY MENU ── */}
            <div className={`mobileMenu ${isOpen ? "open" : ""}`}>
                <div className="mobileMenuContent">
                    <Link href="/" onClick={closeMenu}>Home</Link>
                    <Link href="/services" onClick={closeMenu}>Services</Link>
                    <Link href="/fleet" onClick={closeMenu}>Fleet</Link>
                    <Link href="/about" onClick={closeMenu}>About</Link>
                    <Link href="/contact" onClick={closeMenu}>Contact</Link>

                    <div className="mobileMenuDivider"></div>

                    <a href="tel:+12085550198" className="mobileMenuPhone">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        (208) 555-0198
                    </a>
                </div>
            </div>
        </>
    );
}
