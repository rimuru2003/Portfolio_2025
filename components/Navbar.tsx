"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

const Navbar = () => {
    return (
        <nav className="w-full bg-white shadow-md py-4 px-8 sticky top-0 z-50">
            <div className="flex justify-between items-center">
                <ul className="flex flex-row gap-6 text-lg font-medium">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/#about">About</Link></li>
                    <li><Link href="/#skills">Skill</Link></li>
                    <li><Link href="/#projects">Project</Link></li>
                    <li><Link href="/#experience">Experience</Link></li>
                    <li><Link href="/#contact">Contact</Link></li>
                </ul>
                <Image
                    src="/logo.png" // ⬅️ make sure this image exists in /public
                    alt="Logo"
                    width={40}
                    height={40}
                />
            </div>
        </nav>
    );
};

export default Navbar;
