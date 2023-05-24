import Image from "next/image";

const ProjectList = ({src, description}: {src: string; description: string;}) => (
    <li className="w-96 h-96 shadow-l-sm shadow-blck relative rounded-md overflow-hidden">
        <div className="bg-white w-full h-full z-10">
            <div>
                <figure className="w-96 h-80 relative">
                    <Image src={src} alt="Project list item" width={700} height={700} 
                    className="w-full h-full"></Image>
                    <figcaption 
                    className="absolute left-0 bottom-0 w-full text-white text-lg font-semibold p-5 bg-black/40">
                        {description}
                    </figcaption>
                </figure>
                <div className="h-14 w-full flex justify-between px-5 pt-2 items-center">
                    <a href="#" className="bg-sky-700 text-white px-10 py-2 rounded-sm hover:bg-sky-600">
                        Github
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
        <section id="Projects" className="flex justify-center items-center relative h-screen w-full bg-zinc-100 z-20">
            <div className="flex flex-col w-full lg:w-[80%] h-full">
                <p className="text-2xl font-semibold  h-1/4 pl-12 pt-12 text-sky-700 ">PORTFOLIO</p>
                <div className="flex relative h-3/4">
                    <ul className="flex flex-col lg:flex-row lg:flex-wrap p-10 gap-5">
                        <ProjectList src="/ceng-project.png" description="Engineering conference website" />
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ProjectComponent;