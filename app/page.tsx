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
        <div className="flex flex-col p-2.5 justify-between">
          <h1 className="text-2xl lg:text-3xl font-bold">
            {data.main.ourCommitment.title}
          </h1>
          <p className="text-base lg:text-lg">{data.main.ourCommitment.description}</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-10 lg:gap-8 my-10">
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

      {/*Community Benefits*/}
      <div className="flex flex-col space-y-10 justify-center lg:w-[70%]">
        <h1 className="text-2xl font-bold">
          {data.main.communityBenefits.title}
        </h1>
        <p>{data.main.communityBenefits.description}</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {data.main.communityBenefits.ratings.map((rating, index) => (
            <div
              key={index}
              className="border border-black p-7 flex flex-col space-y-5"
            >
              <span>
                <StarRating rating={rating.rating} />
              </span>
              <p>{rating.comment}</p>
              <div className="flex space-x-5 items-center">
                <div className="w-16 relative aspect-square">
                  <Image
                    fill
                    className="object-cover rounded-full"
                    alt="Image of property"
                    src={rating.userImage}
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

      {/* Eco Friendly*/}
      <div className="flex flex-col lg:flex-row lg:w-[70%] lg:space-x-10 items-center">
        <div className="flex flex-col space-y-5 lg:w-1/2">
          <h1 className="text-3xl font-bold">
            {data.main.ecoFriendlyDev.title}
          </h1>
          <p>{data.main.ecoFriendlyDev.description}</p>
          <ul className="mt-10">
            {data.main.ecoFriendlyDev.bulletList.map((bullet, index) => (
              <li key={index}>• {bullet}</li>
            ))}
          </ul>
        </div>
        <div className="lg:w-[50%] relative w-full aspect-square">
          <Image
            fill
            className="object-cover"
            alt="Image of property"
            src={data.main.ecoFriendlyDev.imageUrl}
          />
        </div>
      </div>

      {/* Join our mission */}
      <div className="lg:w-[70%] flex flex-col lg:flex-row lg:space-x-10 items-center">
        <div className="flex flex-col lg:w-[50%] space-y-10">
          <h1 className="text-3xl font-bold">
            {data.main.joinOurMission.title}
          </h1>
          <p>{data.main.joinOurMission.description}</p>
          <div className="flex space-x-2 lg:space-x-5 w-full">
            <input
              type="email"
              className="w-[80%] p-4 shadow-md bg-transparent placeholder:text-gray-700 rounded-lg"
              placeholder="Enter you email"
            />
            <button className="p-4 text-white bg-red-950 rounded-lg">
              Sign up
            </button>
          </div>
          <p>{data.main.joinOurMission.moreDescription}</p>
        </div>
        <div className="lg:w-[50%] relative w-full aspect-square">
          <Image
            fill
            className="object-cover"
            alt="Image of property"
            src={data.main.ecoFriendlyDev.imageUrl}
          />
        </div>
      </div>

      {/*Latest Insights*/}
      <div className="flex flex-col lg:w-[70%] space-y-5">
        <h1 className="text-3xl font-bold">{data.main.latestInsights.title}</h1>
        <span>{data.main.latestInsights.description}</span>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {data.main.latestInsights.articlesAndInsights.map((insight) => (
            <div className="flex space-x-5">
              <div className="w-[50%] relative aspect-square">
                <Image
                  fill
                  className="object-cover"
                  alt="Image of property"
                  src={insight.imageUrl}
                />
              </div>
              <div className="flex flex-col w-[50%] space-y-3">
                <span className="text-pink-500 text-sm">{insight.tag}</span>
                <h1 className="text-lg font-bold">{insight.title}</h1>
                <p className="text-sm">{insight.description}</p>
                <Link className="flex space-x-2.5 items-center" href={insight.href}>
                  <span>Read More </span><ArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
