import Divider from "@/components/Divider";
import Navbar from "@/components/NavBar";
import { OurProjectsPageData } from "@/lib/consts";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const data = OurProjectsPageData;

  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <div className="flex flex-col space-y-16 p-4 mt-20 lg:mt-40 lg:w-[70%]">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-bold">{data.title}</h1>
          <p className="lg:w-[70%]">{data.description}</p>
        </div>
        <div className="flex flex-col space-y-5">
          <span className="">{data.ourProjects.title}</span>
          <h1 className="text-3xl font-bold">{data.ourProjects.subTitle}</h1>
          <p>{data.ourProjects.description}</p>
        </div>
        <Divider />
        <div>
          {data.ourProjects.projects.map((project, index) => (
            <div className="flex flex-col space-y-10">
              <div
                className="flex flex-col lg:flex-row items-center justify-center"
                key={index}
              >
                <div className="flex flex-col space-y-6 lg:w-[50%]">
                  <div className="flex flex-col space-y-6">
                    <span className="text-xl font-bold">{project.name}</span>
                    <p>{project.description}</p>
                  </div>
                  <div className="flex flex-col lg:flex-row lg:space-x-4">
                    <div className="flex">
                      <span>#Client:</span>
                      <span>{project.clientName}</span>
                    </div>
                    <div className="flex">
                      <span>#Date:</span>
                      <span>{project.date}</span>
                    </div>
                    <div className="flex">
                      <span>#Focus:</span>
                      <span>{project.focus}</span>
                    </div>
                  </div>
                  <Link
                    href={project.href}
                    className="text-lg flex space-x-2 items-center"
                  >
                    <span>Learn More</span>
                    <ArrowRight />
                  </Link>
                </div>
                <div className="lg:w-[50%]  relative w-full aspect-square">
                  <Image
                    fill
                    className="object-cover"
                    alt="Image of property"
                    src={project.imageUrl}
                  />
                </div>
              </div>
              <Divider />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
