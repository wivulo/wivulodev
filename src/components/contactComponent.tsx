import Image from "next/image";
import { FaGithub, FaLinkedin, FaMapMarked, FaMapMarkedAlt,  } from "react-icons/fa";
import { IoIosMailOpen} from "react-icons/io"

const ContactComponent = () => {
    return (
        <section id="Contact" className="flex relative h-96 w-full bg-white z-20 justify-center items-center">
            <div className="flex flex-col w-full lg:w-[80%] h-auto px-12 gap-y-5">
                <h5 className="text-2xl font-semibold text-sky-700 ">CONTACTO</h5>
                <p className="text-2xl font-bold text-zinc-700">Não tenha vergonha, me da um toque!</p>

                <div className="flex gap-x-2 justify-between lg:p-10 py-10 px-6">
                    <div className="flex gap-x-5">
                        <FaMapMarkedAlt  className="text-sky-700 h-8 w-8"/>
                        <div className="flex flex-col">
                            <p className="text-zinc-800">Localizacao</p>
                            <p className="text-zinc-600">Benguela, Angola</p>
                        </div>
                    </div>

                    <div className="flex gap-x-5">
                        <IoIosMailOpen className="text-sky-700 w-8 h-8"/>
                        <div className="flex flex-col">
                            <p className="text-zinc-800">Email</p>
                            <p className="text-zinc-600">walterivulo@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactComponent;