import Navbar from "@/components/NavBar";
import { PageData } from "@/lib/consts";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const data = PageData;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Navbar />
      <div className="mt-20 lg:mt-40 flex flex-col  lg:w-[70%] space-y-10 p-4">
        <div className="flex flex-col items-center justify-center space-y-10">
          <div className="lg:w-[50%]">
            <h1 className="text-4xl font-bold text-center">Community Impact</h1>
            <p className="text-center">
              Our projects empower communities by fostering collaboration and
              promoting social equity. We create spaces that reflect the diverse
              needs of residents, ensuring shared prosperity.
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold">Recent Insights</h1>
          <p>Explore our latest articles on community impact.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {data.main.latestInsights.articlesAndInsights.map((insight) => (
            <div className="flex space-x-5">
              <div className="w-[80%] lg:w-[50%] relative aspect-square">
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
                <Link
                  className="flex space-x-2.5 items-center"
                  href={insight.href}
                >
                  <span>Read More </span>
                  <ArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
