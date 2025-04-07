import { Carousel } from "flowbite-react";

export default function CarouselComponent() {
  return (
    <div className="w-full h-[400px] bg-gray-900">
      <Carousel slideInterval={4000} indicators>
        {/* Slide 1 - Full Background Image */}
        <div className="h-full w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?nature')" }}>
          <h2 className="text-white text-4xl font-bold">Welcome to Nature</h2>
        </div>

        {/* Slide 2 - Headline and Subheadline */}
        <div className="h-full flex flex-col items-center justify-center bg-blue-600 text-white">
          <h1 className="text-5xl font-bold">Innovative Solutions</h1>
          <p className="text-xl mt-2">We provide the best digital experience</p>
        </div>

        {/* Slide 3 - Image and Text */}
        <div className="h-full flex items-center justify-center bg-gray-700 text-white p-10">
          <img src="https://source.unsplash.com/300x300/?technology" alt="Tech" className="w-1/3 rounded-lg shadow-lg"/>
          <div className="ml-6">
            <h2 className="text-3xl font-bold">Tech Revolution</h2>
            <p className="mt-2">Explore the future of innovation.</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
