import Image from "next/image";

const AboutMeComponent = () => {

    return (
        <section id="About" className="flex flex-col justify-center items-center relative h-auto lg:h-screen bg-white z-20">
            <div className="flex flex-col-reverse lg:flex-row justify-center gap-y-16 lg:gap-y-0 py-10 pb-20 px-10 items-center">
                <div className="flex justify-center items-center relative lg:w-1/2">
                    <Image src="/about-img.62b47e7f183d4b4e9feb.webp" width={500} height={500} alt="about me"
                        className="rounded-md w-80 h-72 lg:w-96 lg:h-96"></Image>

                    <div className="grid place-content-center absolute w-44 h-44 rounded-full bg-white z-10 -right-20 -bottom-16 lg:right-10 shadow shadow-black">
                        <div className="flex justify-center items-center h-44 w-44 rounded-full border-2 border-black relative">
                            <svg width="176" height="176" viewBox="0 0 176 176">
                                <path id="circle" d="M 88 176 a 88 88 0 1 1 0 -176 a 88 88 0 1 1 0 176" fill="none" stroke="lightgray" stroke-width="2" />
                                <text font-family="Arial, sans-serif" font-size="10" font-weight="bold">
                                    <textPath xlinkHref="#circle" startOffset="0%">
                                        DESENVOLVEDOR FRONT-END REACT DESENVOLVEDOR FRONT-END REACT
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
                        em HTML, CSS, JavaScript, React, Tailwind. Eu me destaco em projetar e manter
                        sites responsivos que oferecem uma experiência de usuário suave. Minha experiência
                        está na criação de interfaces dinâmicas e envolventes através da escrita de código
                        limpo e otimizado e utilizando ferramentas e técnicas de desenvolvimento de ponta.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutMeComponent;