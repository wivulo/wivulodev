import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa"

const TechStackContent = (prop: any) => (
    <div className="grid place-content-center p-2 rounded-full h-11 bg-white shadow-sm shadow-black/30 ">
        <Image src={prop.src} alt={prop.alt} width={30} height={30} className="transform"></Image>
    </div>
)

const HomeComponent = () => {
    return (
        <section id="Home" className="flex flex-col relative h-auto lg:h-screen w-full bg-zinc-100 z-20 pt-24">
            <div className="mx-auto mt-0 px-10 md:px-16" style={{ maxWidth: "107rem" }}>
                <div className="flex flex-col relative justify-center">
                    <div className="flex flex-col lg:flex-row lg:justify-center gap-10 lg:gap-2">
                        <div className="flex justify-center lg:w-1/2 items-center relative flex-col gap-y-7 md:pl-6 pt-14">
                            <h1 className="text-5xl font-bold text-zinc-700">Front-End React Developer</h1>
                            <p className="text-base text-zinc-500/80 font-medium">
                                Olá, Eu sou o Valtércio Ivulo. Um desenvolvedor Front-end React dedicado.
                                Com sede em Benguela, Angola 📍
                            </p>

                            <div className="flex gap-x-4 left-6 bottom-10 self-start">
                                <a href="https://ao.linkedin.com/in/walter-ivulo-80398516a">
                                    <FaLinkedin className="w-8 h-8 text-zinc-700 hover:text-sky-700" />
                                </a>
                                <a href="https://github.com/wivulo">
                                    <FaGithub className="w-8 h-8 text-zinc-700 hover:text-sky-700" />
                                </a>
                            </div>
                        </div>

                        <div className="flex pt-8 justify-center lg:w-1/2 overflow-hidden">
                            <Image src="/profile.jpg" alt="profile pic" width={300} height={300} className="w-full h-full md:w-96 md:h-96 rounded-full border-2 border-zinc-500 animate-bubble" />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:gap-x-5 gap-y-5 lg:pl-8 mt-20 items-center mb-4">
                        <p className="text-base lg:text-lg transition-all font-semibold text-zinc-700">Tech Stack</p>
                        <div className="flex flex-wrap gap-x-8 gap-y-3 lg:gap-x-10 border-l-2 border-zinc-500 pl-2">
                            <TechStackContent src="/html.6e7b1b463015c056aeb9a624c8dc2876.svg" alt="html" />
                            <TechStackContent src="\css3.9cecabbf6ce67609c48bc4f280a11002.svg" alt="css" />
                            <TechStackContent src="\javascript.de4c2594613e34b15666206bbede7327.svg" alt="js" />
                            <TechStackContent src="\react.afac9c43724070bf6674f2692b7356a9.svg" alt="react" />
                            <TechStackContent src="\tailwind.79614a5f61617ba49a0891494521226b.svg" alt="tailwind" />
                            <TechStackContent src="\next-js-svgrepo-com.svg" alt="nextjs" />
                            <TechStackContent src="\Typescript_logo_2020.svg" alt="typescript" />
                            <TechStackContent src="/mysql.png" alt="database mysql" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeComponent;