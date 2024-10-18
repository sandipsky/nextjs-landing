import Image from "next/image";
import Services from "@/components/services/services";
import Process from "@/components/process/process";
import Testimonials from "@/components/testimonials/testimonials";

export default function Home() {
  return (
    <>
      <section className="relative w-full h-[800px] bg-gray-800 text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/team.jpg" // Replace with your own image path
            alt="Team"
            fill={true}
            className="object-cover opacity-70"
          />
        </div>

        {/* Hero Content */}
        <div className="relative flex flex-col items-center justify-center h-full px-4">
          <h1 className="font-bold text-5xl md:text-7xl text-center">
            Welcome to Next Corporate
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-center max-w-2xl">
            We are a leading company in delivering innovative solutions for your business growth.
          </p>
          <button className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md">
            Get Started
          </button>
        </div>
      </section>

      <Services></Services>
      <Process></Process>
      <Testimonials></Testimonials>
    </>
  );
}
