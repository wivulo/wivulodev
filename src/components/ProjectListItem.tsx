import Image from "next/image";
import { FaEye, FaGithub } from "react-icons/fa";
import UIButtonLink from "./UI/UIButtonLink";
import { ProjectListItemType } from "@/types/ProjectListItemType";

const ProjectListItem = ({
  src,
  titulo,
  description,
  tec,
  imageClasses,
  github,
  viewDemo,
}: ProjectListItemType) => (
  <li className="w-[335px] h-auto shadow-sm shadow-blck relative rounded-md overflow-hidden">
    <div className="bg-white w-full h-full p-2 rounded-sm overflow-hidden">
      <div className="w-full">
        <figure className="w-full h-auto max-h-screen relative flex flex-col items-center">
          <Image
            src={src}
            alt={titulo}
            width={500}
            height={300}
            className={`w-full h-auto object-cover rounded-md ${imageClasses}`}
          ></Image>
          <figcaption className="w-3/4 min-h-[250px] text-white text-base font-semibold flex flex-col gap-y-5 py-3">
            <p className="text-lg font-bold text-zinc-700 self-center">
              {titulo}
            </p>
            <p className="text-justify text-zinc-500 font-semibold">
              {description}
            </p>
            <div className="flex justify-center gap-x-2 text-zinc-700">
              <span className="shadow-sm shadow-black/30 text-center px-5 py-1">
                {tec[0]}
              </span>
              <span className="shadow-sm shadow-black/30 text-center px-5 py-1">
                {tec[1]}
              </span>
            </div>
          </figcaption>
        </figure>
        <div className="h-14 w-full flex justify-between px-8 items-center">
          <UIButtonLink href={github} className="!px-8">
            Github <FaGithub className="inline ml-1" />
          </UIButtonLink>

          <UIButtonLink href={viewDemo} className="!bg-transparent !text-sky-700 border border-sky-700">
            Demo <FaEye className="inline ml-1" />
          </UIButtonLink>
        </div>
      </div>
    </div>
  </li>
);

export default ProjectListItem;