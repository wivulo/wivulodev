import Link from "next/link";
import { useState } from "react";

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

const HeaderComponent = () => {

    return (
        <header className="fixed flex items-center bg-white justify-between h-24 pt-6 pr-10 pb-6 pl-12 text-lg font-semibold shadow-b shadow-black/30 shadow-md z-50 w-full">
            <h3>wivulo.dev</h3>

            <nav>
                <ul className="flex gap-x-4 text-zinc-500">
                    <ListItem text="Home" />
                    <ListItem text="About" />
                    <ListItem text="Projects" />
                    <ListItem text="Contact" />
                </ul>
            </nav>
        </header>
    )
}

export default HeaderComponent;