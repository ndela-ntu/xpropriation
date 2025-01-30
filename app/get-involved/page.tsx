import Navbar from "@/components/NavBar";
import { GetInvolvedPage } from "@/lib/consts";

export default function Page() {
  const data = GetInvolvedPage;
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Navbar />
      <div className="mt-20 lg:mt-40 flex flex-col lg:w-[70%] space-y-10 p-4">
        <div className="flex flex-col space-y-10 text-center justify-center">
          <h1 className="text-3xl font-bold">{data.title}</h1>
          <p className="text-lg">{data.description}</p>
          <div className="flex justify-center items-center space-x-5">
            <button className="p-3 bg-black text-white rounded-lg">
              Volunteer Now
            </button>
            <button className="p-3 rounded-lg border border-black bg-transparent text-black">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-20">
          <h1 className="flex-1 text-3xl font-bold">{data.joinOurTitle}</h1>
          <div className="flex-1 flex flex-col space-y-5">
            <p>{data.joinOurDescription}</p>
            <div className="flex flex-col lg:flex-row lg:space-x-5">
              {data.statements.map((statement, index) => (
                <div key={index} className="flex flex-col">
                  <h2 className="text-xl font-bold">{statement.title}</h2>
                  <p className="text-sm">{statement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
