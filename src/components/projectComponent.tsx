import Image from "next/image";
import { FaGithub, FaPuzzlePiece } from "react-icons/fa";
import ImageProject1 from "../assets/Images/cengproject.png";

interface IProjectListItem {
    src: any;
    titulo: string;
    description: string;
    tec: string[];
}

const ProjectList = ({ src, titulo, description, tec }: IProjectListItem) => (
    <li className="w-96 h-auto shadow-sm shadow-blck relative rounded-md overflow-hidden">
        <div className="bg-white w-full h-full p-2 rounded-sm overflow-hidden">
            <div className="w-full">
                <figure className="w-full h-auto max-h-screen relative flex flex-col items-center">
                    <Image src={src} alt="Project list item" width={900} height={700}
                        className="w-full h-full"></Image>
                    <figcaption
                        className="w-3/4 text-white text-base font-semibold flex flex-col gap-y-5">
                            <p className="text-lg font-bold text-zinc-700 self-center">{titulo}</p>
                            <p className="text-justify text-zinc-500 font-semibold">{description}</p>
                            <div className="flex justify-center gap-x-2 text-zinc-700">
                                <span className="shadow-sm shadow-black/30 text-center px-5 py-1">{tec[0]}</span>
                                <span className="shadow-sm shadow-black/30 text-center px-5 py-1">{tec[1]}</span>
                            </div>
                    </figcaption>
                </figure>
                <div className="h-14 w-full flex justify-between px-5 pt-2 items-center">
                    <a href="https://github.com/wivulo/engineering-conference.git" className="bg-sky-700 text-white px-5 py-2 rounded-sm hover:bg-sky-600">
                        Github <FaGithub className="inline mx-2"/>
                    </a>

                    <a href="#">
                        <button disabled={true} className="bg-sky-700 hover:bg-sky-600 text-white px-10 py-2 rounded-sm disabled:bg-black/20">
                            View Demo
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </li>
)

const ProjectComponent = () => {
    return (
        <section id="Projects" className="flex justify-center items-center relative h-auto w-full bg-zinc-100 z-20">
            <div className="flex flex-col w-full lg:w-[80%] h-full">
                <div className="h-1/4 pl-12 pt-12 flex flex-col gap-y-2">
                    <p className="text-2xl font-semibold  text-sky-700 ">PORTFOLIO</p>
                    <p className="md:text-2xl text-lg font-semibold text-zinc-700">
                        Cada projeto é uma peça única de desenvolvimento
                        <FaPuzzlePiece className="inline text-yellow-500 mx-2" />
                    </p>
                </div>
                <div className="flex relative h-3/4">
                    <ul className="flex flex-col lg:flex-row lg:flex-wrap p-10 gap-5">
                        <ProjectList 
                        src={ImageProject1} 
                        titulo="Engineering Conference" 
                        description="Conferencia de Engenharia é uma plataforma de divulgação de eventos de engenharia, 
                        onde os usuários podem se cadastrar e divulgar seus eventos."
                        tec={["React", "tailwindcss"]} 
                        />
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ProjectComponent;