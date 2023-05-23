import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa"

const HomeComponent = () => {
    return (
        <section id="Home" className="flex flex-col relative h-auto lg:h-screen w-full bg-zinc-100 z-20 pt-24">
            <div className="mx-auto mt-0 px-16" style={{ maxWidth: "107rem" }}>
                <div className="flex flex-col relative justify-center">
                    <div className="flex flex-col lg:flex-row lg:flex-wrap  gap-10">
                        <div className="flex justify-center items-center relative flex-col gap-y-7 pl-6 pt-14">
                            <h1 className="text-5xl font-bold text-zinc-700">Front-End React Developer</h1>
                            <p className="text-base text-zinc-500/80 font-medium">
                                Olá, Eu sou o Valtércio Ivulo. Um desenvolvedor Front-end React dedicado
                                com sede em Benguela, Angola 📍
                            </p>

                            <div className="flex gap-x-4 left-6 bottom-10 self-start">
                                <a href="https://ao.linkedin.com/in/walter-ivulo-80398516a">
                                    <FaLinkedin className="w-8 h-8 text-zinc-700" />
                                </a>
                                <a href="https://github.com/wivulo">
                                    <FaGithub className="w-8 h-8 text-zinc-700" />
                                </a>
                            </div>
                        </div>

                        <div className="flex pt-8 justify-center">
                            <div className="relative flex justify-center items-center">
                                <div className="animate-ping absolute inline-flex rounded-full bg-zinc-500 opacity-75 w-60 h-60"></div>
                                <Image src="/profile.jpg" alt="profile pic" width={300} height={300} className="w-96 h-96 rounded-full border-2 border-zinc-500" />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-x-10 pl-8 mt-20 items-center mb-4">
                        <p className="text-lg font-medium text-zinc-700">Tech Stack | </p>
                        <Image src="/html.6e7b1b463015c056aeb9a624c8dc2876.svg" alt="html" width={30} height={30}></Image>
                        <Image src="\css3.9cecabbf6ce67609c48bc4f280a11002.svg" alt="css" width={30} height={30}></Image>
                        <Image src="\javascript.de4c2594613e34b15666206bbede7327.svg" alt="js" width={30} height={30}></Image>
                        <Image src="\react.afac9c43724070bf6674f2692b7356a9.svg" alt="react" width={30} height={30}></Image>
                        <Image src="\tailwind.79614a5f61617ba49a0891494521226b.svg" alt="tailwind" width={30} height={30}></Image>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeComponent;