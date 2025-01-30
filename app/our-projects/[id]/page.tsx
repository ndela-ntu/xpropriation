import Divider from "@/components/Divider";
import Navbar from "@/components/NavBar";
import ResponsiveImage from "@/components/ResponsiveImage";
import { OurProjectsLinkData } from "@/lib/consts";
import { Grid } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id);

  const project = OurProjectsLinkData.find((project) => project.id === id);

  if (!project) {
    return notFound();
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Navbar />
      <div className="mt-20 lg:mt-40 flex flex-col lg:w-[70%] space-y-10 p-4">
        <ResponsiveImage
          src={project.imageUrl}
          alt="Responsive Image"
          mobileAspectRatio="4/3"
          tabletAspectRatio="16/9"
          desktopAspectRatio="21/9"
        />
        <div className="flex flex-col lg:flex-row mt-8">
          <div className="flex flex-col lg: space-y-8 lg:w-[60%]">
            <h1 className="text-3xl font-bold">{project.projectTitle}</h1>
            <p>{project.description}</p>
            <ul className="flex flex-col lg:flex-row lg:space-x-8">
              {project.tags.map((tag, index) => (
                <li key={index}>#{tag}</li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-8 ">
            {project.grid.map((gridItem, index) => (
              <div key={index} className="flex flex-col">
                <span className="font-bold text-lg">{gridItem.name}</span>
                <span className="text-sm">{gridItem.description}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full lg:space-x-10">
          <h1 className="text-4xl font-bold lg:w-[70%]">{project.heading}</h1>
          <div className="flex flex-col">
            <p>{project.propertyDescription}</p>
            <Divider color="black" />
            <div className="flex justify-between items-center py-5">
              <span className="text-2xl font-bold">Client</span>
              <span>{project.client}</span>
            </div>
            <Divider color="black" />
            <div className="flex justify-between items-center py-5">
              <span className="text-2xl font-bold">Date</span>
              <span>{project.date}</span>
            </div>
            <Divider color="black" />
            <div className="flex justify-between items-center py-5">
              <span className="text-2xl font-bold">Role</span>
              <span>{project.role}</span>
            </div>
            <Divider color="black" />
            <div className="flex justify-between items-center py-5">
              <span className="text-2xl font-bold">Project Type</span>
              <span>{project.projectType}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
