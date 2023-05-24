import Link from "next/link";
import { FaTimes } from "react-icons/fa";

const ListItem = ({ text, onCloseMenu }: any) => {
    const scrollToRef = (href: any) => {

        document.querySelector(href).scrollIntoView({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <li>
            <Link href={`/#${text}`} scroll={false} onClick={() => {scrollToRef(`#${text}`); onCloseMenu()}}
                className="hover:text-sky-700">
                {text}
            </Link>
        </li>
    )
}

const AsidebarComponent = ({ open, onCloseMenu }: any) => {

    return (
        <aside className={`fixed bg-white w-60 ${open ? 'translate-x-0' : 'translate-x-60'} transform transition-all duration-200 overflow-hidden h-screen right-0 top-0 pt-2 pr-2 text-lg font-semibold shadow-l shadow-black/30 shadow-md z-50`}>
            <div className="flex relative">
                <button title="close-menu" className="flex justify-center items-center absolute right-2 top-2"
                    onClick={onCloseMenu}>
                    <FaTimes className="w-6 h-6 text-zinc-500 hover:text-red-900" />
                </button>

                <nav className="flex gap-x-4 mt-24 mx-6">
                    <ul className="flex flex-col gap-y-4 text-zinc-500">
                        <ListItem text="Home" onCloseMenu={onCloseMenu}/>
                        <ListItem text="About" onCloseMenu={onCloseMenu}/>
                        <ListItem text="Projects" onCloseMenu={onCloseMenu}/>
                        <ListItem text="Contact" onCloseMenu={onCloseMenu}/>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default AsidebarComponent;