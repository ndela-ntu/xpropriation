import Navbar from "@/components/NavBar";
import NewsLetter from "@/components/NewsLetter";
import ResponsiveImage from "@/components/ResponsiveImage";
import { PageData } from "@/lib/consts";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id);

  const insights = PageData.main.latestInsights.articlesAndInsights;
  const insight = insights.find((insight) => insight.id === id);

  if (!insight) {
    return notFound();
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Navbar />
      <div className="mt-20 lg:mt-40 flex flex-col space-y-10 lg:space-y-20 lg:w-[70%] p-4">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold">{insight.title}</h1>
          <span>•{insight.date}</span>
        </div>
        <div>
          <ResponsiveImage
            src={insight.imageUrl}
            alt="Responsive Image"
            mobileAspectRatio="4/3"
            tabletAspectRatio="16/9"
            desktopAspectRatio="21/9"
          />
        </div>
        <p>{insight.content}</p>
        <NewsLetter />
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-5">Related Posts</h1>
          <div className="flex flex-col lg:flex-row lg:space-x-10">
            {insights
              .filter((insight) => insight.id !== id)
              .map((insight) => (
                <div className="lg:w-[80%] flex flex-col space-y-5 ">
                  <div className="relative aspect-square">
                    <Image
                      fill
                      className="object-cover"
                      alt="Image of property"
                      src={insight.imageUrl}
                    />
                  </div>
                  <div className="flex flex-col space-y-3">
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
    </div>
  );
}
