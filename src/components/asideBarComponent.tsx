import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const ListItem = ({ text }: any) => {
    const scrollToRef = (href: any) => {

        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <li>
            <Link href={`#${text}`} onClick={() => scrollToRef(`#${text}`)}>
                {text}
            </Link>
        </li>
    )
}

const AsidebarComponent = () => {

    return (
        <aside className="fixed flex justify-center bg-white h-scream pt-6 pr-10 text-lg font-semibold shadow-l shadow-black/30 shadow-md z-50">
            <button type="button" className="flex justify-center items-center lg:hidden">
                <FaBars className="w-8 h-8 text-zinc-500" />
            </button>

            <nav className="flex gap-x-4">
                <ul className="hidden lg:flex gap-x-4 text-zinc-500">
                    <ListItem text="Home" />
                    <ListItem text="About" />
                    <ListItem text="Projects" />
                    <ListItem text="Contact" />
                </ul>
            </nav>
        </aside>
    )
}

export default AsidebarComponent;