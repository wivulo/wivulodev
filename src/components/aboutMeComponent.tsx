import Image from "next/image";

const AboutMeComponent = () => {

    return (
        <section id="About" className="flex flex-col justify-center items-center relative h-auto lg:h-screen bg-white z-20">
            <div className="flex flex-col-reverse lg:flex-row justify-center gap-y-16 lg:gap-y-0 py-16 pb-20 px-10 items-center">
                <div className="flex justify-center items-center relative lg:w-1/2">
                    <Image src="/about-img.62b47e7f183d4b4e9feb.webp" width={500} height={500} alt="about me"
                        className="rounded-md w-80 h-72 lg:w-96 lg:h-96"></Image>

                    <div className="grid place-content-center absolute w-auto h-auto rounded-full bg-white z-10 -right-14 -bottom-10 md:-right-20 md:-bottom-16 lg:right-10 shadow shadow-black">
                        <div className="flex justify-center items-center rounded-full border-2 border-black relative">
                            <svg viewBox="0 0 500 500" className="rotate w-32 h-32 md:h-44 md:w-44">
                                <path id="curve" fill="white" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
                                <text width="500" fontSize={32}>
                                    <textPath xlinkHref="#curve">
                                        Desenvolvedor front-end
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center lg:justify-start lg:pr-20 gap-y-8 lg:w-1/2">
                    <h2 className="text-2xl text-sky-600 font-semibold">SOBRE MIM</h2>
                    <p className="font-medium text-zinc-700">
                        Um desenvolvedor Front-end dedicado
                        com sede em Benguela, Angola
                    </p>
                    <p className="font-medium text-base text-zinc-500 text-justify">
                        Como Desenvolvedor Front-End Júnior, possuo um impressionante arsenal de habilidades
                        em HTML, CSS, JavaScript, React, Next, Tailwind. Eu me destaco em construir e manter
                        sites responsivos que oferecem uma experiência de usuário suave. Minha experiência
                        está na criação de interfaces dinâmicas e envolventes através da escrita de código
                        limpo e otimizado e utilizando ferramentas e técnicas de desenvolvimento de ponta.
                        Além de ser um desenvolvedor Front-End, 
                        também sou iniciante como desenvolvedor Back-End.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutMeComponent;