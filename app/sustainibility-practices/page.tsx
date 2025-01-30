import Navbar from "@/components/NavBar";
import ResponsiveImage from "@/components/ResponsiveImage";
import { SustainibilityPage } from "@/lib/consts";

export default function Page() {
  const data = SustainibilityPage;
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Navbar />
      <div className="mt-20 lg:mt-32 flex flex-col w-full lg:w-[70%] space-y-10 p-4">
        <ResponsiveImage
          src={data.backgroundImage}
          alt="Responsive Image"
          mobileAspectRatio="9/16"
          tabletAspectRatio="16/9"
          desktopAspectRatio="21/9"
          className="mb-4"
          overlayClassName="text-center flex flex-col items-center justify-center text-white"
        >
          <div className="flex flex-col space-y-16">
            {data.facts.map((fact, index) => (
              <div key={index} className="flex flex-col">
                <h1 className="text-3xl font-bold">{fact.name}</h1>
                <p className="text-lg">{fact.description}</p>
              </div>
            ))}
          </div>
        </ResponsiveImage>
        <div className="flex flex-col lg:flex-row w-full">
          <h1 className="text-4xl flex-1 font-bold lg:w-[50%]">{data.practicesTitle}</h1>
          <div className="flex flex-col flex-1 space-y-10">
            <p>{data.practiceDescription}</p>
            <div className="flex space-x-5">
              {data.otherFacts.map((fact) => (
                <div className="flex flex-col">
                  <h2 className="text-2xl font-bold">{fact.title}</h2>
                  <p>{fact.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

