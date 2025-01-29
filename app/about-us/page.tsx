import Navbar from "@/components/NavBar";
import { AboutPageData } from "@/lib/consts";
import { Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function Page() {
  const data = AboutPageData;
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Navbar />
      <div className="mt-40 flex flex-col items-center justify-center space-y-10 lg:w-[70%]">
        <div className="flex flex-col space-y-5 items-center justify-center w-full lg:w-[50%] text-center">
          <h1 className="text-4xl font-bold">{data.ourCommitment.title}</h1>
          <p>{data.ourCommitment.description}</p>
        </div>
        <div className="flex flex-wrap space-x-8 items-center justify-center">
          {data.featureList.map((feature, index) => (
            <div className="flex flex-col lg:w-[25%] text-center" key={index}>
              <h1 className="text-2xl">{feature.title}</h1>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-5 items-center justify-center">
          <h1 className="text-4xl font-bold">{data.team.title}</h1>
          <p>{data.team.description}</p>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
            {data.team.teamMember.map((member) => (
              <div className="flex flex-col space-x-4">
                <div className="relative w-full aspect-square">
                  <Image
                    fill
                    className="object-cover"
                    alt="Image of property"
                    src={member.imageUrl}
                  />
                </div>
                <div className="flex flex-col text-center items-center justify-center space-y-2.5">
                <h1 className="text-2xl font-bold">{member.fullname}</h1>
                <span>{member.role}</span>
                <p>{member.bio}</p>
                <div className="flex space-x-2">
                  <Linkedin />
                  <Twitter />
                </div>
                </div>
               
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
