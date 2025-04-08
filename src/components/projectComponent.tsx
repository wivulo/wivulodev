import { FaPuzzlePiece } from "react-icons/fa";
import ProjectListItem from "./ProjectListItem";

const ProjectComponent = () => {
  return (
    <section
      id="Projects"
      className="flex justify-center items-center relative h-auto w-full bg-zinc-100 z-20"
    >
      <div className="flex flex-col w-full lg:w-[80%] h-full">
        <div className="h-1/4 mb-4 pt-12 flex flex-col gap-y-2">
          <p className="text-2xl font-semibold  text-sky-700 ">PORTFOLIO</p>
          <p className="md:text-2xl text-lg font-semibold text-zinc-700">
            Cada projeto é uma peça única de desenvolvimento
            <FaPuzzlePiece className="inline text-yellow-500 mx-2" />
          </p>
        </div>
        <div className="flex relative h-3/4">
          <ul className="w-full flex flex-col lg:flex-row lg:flex-wrap gap-5 py-3 items-center lg:items-start lg:gap-10">
            <ProjectListItem
              src="/cengproject.jpg"
              titulo="Engineering Conference"
              description="Conferencia de Engenharia é uma plataforma de divulgação de eventos de engenharia, 
                        onde os usuários podem se cadastrar e divulgar seus eventos."
              tec={["React", "tailwindcss"]}
              github="https://github.com/wivulo/engineering-conference.git"
              viewDemo="https://engineering-conference-b1c4.vercel.app/"
            />

            <ProjectListItem
              src="/poliinsight.png"
              titulo="PoliInsight - Sistema de Gestão de Eventos"
              description="PoliInsight é um sistema de gestão de eventos, onde os organizadores de eventos podem se cadastrar e divulgar seus eventos."
              tec={["Vuejs 3", "tailwindcss"]}
              github="https://github.com/wivulo/poliinsight-vue3.git"
              viewDemo="https://poliinsight.onrender.com"
            />

            <ProjectListItem
              src="/No_image_available.svg"
              titulo="BayQi - Compra e Venda seus produtos aqui"
              description="BayQi é um sistema de gestão de vendas, onde os vendedores podem se cadastrar e divulgar seus produtos."
              tec={["VueJs", "Bootstrap", ".Net Core"]}
              imageClasses="!w-[200px] !h-[150px]"
              viewDemo="https://seller.bayqi.ao/login"
            />

            <ProjectListItem
              src="/nishop.png"
              titulo="Nishop Store- E-commerce"
              description="Nishop Store é um sistema de gestão de vendas de uma loja de roupas especifica, onde os vendedores podem se cadastrar e divulgar seus produtos."
              tec={["React", "tailwindcss"]}
              github="https://github.com/wivulo/nishop.git"
              viewDemo="https://nishop.vercel.app/"
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectComponent;
