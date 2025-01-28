import Divider from "@/components/Divider";
import StarRating from "@/components/StarRating";
import { PageData } from "@/lib/consts";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const data = PageData;
  return (
    <div className="min-h-screen flex flex-col w-full items-center space-y-10">
      {/*Our Commitment*/}
      <div className="flex flex-col lg:flex-row justify-center lg:w-[70%]">
        <div className="relative w-full aspect-square">
          <Image
            fill
            className="object-cover"
            alt="Image of property"
            src={data.main.ourCommitment.imageUrl}
          />
        </div>
        <div className="flex flex-col p-5 justify-between">
          <h1 className="text-3xl font-bold">
            {data.main.ourCommitment.title}
          </h1>
          <p className="text-lg">{data.main.ourCommitment.description}</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
            {data.main.ourCommitment.stats.map((stats) => (
              <div className="flex flex-col">
                <span className="flex space-x-2 text-2xl font-bold">
                  <span>{stats.data}</span>
                  <span>{stats.unit}</span>
                </span>
                <p>{stats.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*Our Projects*/}
      <div className="flex flex-col lg:w-[70%] space-y-5">
        <span className="text-xl">Our work</span>
        <h1 className="text-3xl font-bold">{data.main.ourProjects.title}</h1>
        <p className="text-lg">{data.main.ourProjects.description}</p>
        <Divider />
        <div>
          {data.main.ourProjects.projects.map((project, index) => (
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
                  <div className="flex space-x-4">
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

      {/*Community Benefits*/}
      <div className="flex flex-col space-y-10 justify-center lg:w-[70%]">
        <h1 className="text-2xl font-bold">
          {data.main.communityBenefits.title}
        </h1>
        <p>{data.main.communityBenefits.description}</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {data.main.communityBenefits.ratings.map((rating) => (
            <div className="border border-black p-7 flex flex-col space-y-5">
              <span>
                <StarRating rating={rating.rating} />
              </span>
              <p>{rating.comment}</p>
              <div className="flex space-x-5 items-center">
                <div className="w-16 relative aspect-square">
                  <Image
                    fill
                    className="object-cover"
                    alt="Image of property"
                    src={rating.userImage}
                    className="rounded-full"
                 />
                </div>
                <div className="flex flex-col ">
                  <span className="font-bold">{rating.username}</span>
                  <span>{rating.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
