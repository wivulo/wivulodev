import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const FooterComponent = () => {
    return (
        <section className="flex relative h-40 w-full bg-zinc-800 z-20">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full h-full px-20 gap-y-5">
                <h4 className="text-white font-semibold">Copyright © 2023. All rights are reserved</h4>

                <div className="flex gap-x-4">
                    <a href="https://ao.linkedin.com/in/walter-ivulo-80398516a">
                        <FaLinkedin className="w-8 h-8 text-zinc-300" />
                    </a>
                    <a href="https://github.com/wivulo">
                        <FaGithub className="w-8 h-8 text-zinc-300" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default FooterComponent;