import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa"

const AboutMeComponent = () => {
    return (
        <section id="About" className="flex flex-col justify-center items-center relative h-screen w-[95%] bg-white z-20">
            <div className="grid grid-cols-2 justify-center items-center">
                <div className="flex justify-center items-center">
                    <Image src="/about-img.62b47e7f183d4b4e9feb.webp" width={500} height={500} alt="about me"
                    className="rounded-md"></Image>
                </div>

                <div className="flex flex-col justify-center gap-y-4">
                    <h2 className="text-2xl text-sky-600 font-semibold">SOBRE MIM</h2>
                    <p className="font-medium text-zinc-700">
                        Um desenvolvedor Front-end dedicado
                        com sede em Benguela, Angola
                    </p>
                    <p className="font-medium text-base text-zinc-500">
                        Como Desenvolvedor Front-End Júnior, possuo um impressionante<br /> arsenal de habilidades
                        em HTML, CSS, JavaScript, React, Tailwind.<br /> Eu me destaco em projetar e manter
                        sites responsivos que oferecem uma<br /> experiência de usuário suave. Minha experiência
                        está na criação de interfaces<br /> dinâmicas e envolventes através da escrita de código
                        limpo e otimizado e<br /> utilizando ferramentas e técnicas de desenvolvimento de ponta.<br />
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutMeComponent;