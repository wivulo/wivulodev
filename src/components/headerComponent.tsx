import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const ListItem = ({ text }: any) => {
    const scrollToRef = (href: any) => {

        document.querySelector(href).scrollIntoView({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <li className="hover:text-sky-700">
            <Link href={`/#${text}`} scroll={false} onClick={() => scrollToRef(`#${text}`)}>
                {text}
            </Link>
        </li>
    )
}

const HeaderComponent = ({onOpenMenu}: any) => {

    return (
        <header className="fixed flex items-center bg-white justify-between h-24 pt-6 pr-10 pb-6 pl-12 text-lg font-semibold shadow-b shadow-black/30 shadow-md z-40 w-full">
            <h3>wivulo.dev</h3>

            <nav className="flex gap-x-4">
                <ul className="hidden lg:flex gap-x-4 text-zinc-500">
                    <ListItem text="Home" />
                    <ListItem text="About" />
                    <ListItem text="Projects" />
                    <ListItem text="Contact" />
                </ul>

                <button type="button" className="flex justify-center items-center lg:hidden"
                    onClick={onOpenMenu}>
                    <FaBars className="w-8 h-8 text-zinc-500" />
                </button>
            </nav>
        </header>
    )
}

export default HeaderComponent;