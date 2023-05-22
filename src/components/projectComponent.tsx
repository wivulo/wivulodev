import Image from "next/image";

const ProjectComponent = () => {
    return (
        <section id="Projects" className="flex justify-center items-center relative h-screen w-full bg-zinc-100 z-20">
            <div className="flex flex-col w-[80%] h-full">
                <p className="text-2xl font-semibold  h-1/4 pl-20 pt-12 text-sky-700 ">Portfolio</p>
                <div className="flex justify-center items-center relative h-3/4">
                    <h3 className="text-4xl font-bold text-zinc-400">Em desenvolvimento.....</h3>
                </div>
            </div>
        </section>
    )
}

export default ProjectComponent;