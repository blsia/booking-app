import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Hero Image"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative flex h-full flex-col items-center justify-center text-center">
        <h1 className="mb-3 text-5xl font-extrabold leading-tight capitalize md:text-7xl">
          Book Your Luxury Room
        </h1>

        <p className="mb-8 text-xl text-gray-300">
          Get your special offer just for you today!
        </p>

        <div className="flex gap-5">
          <Link
            href="/rooms"
            className="rounded bg-blue-500 px-6 py-2.5 text-lg font-semibold text-white transition hover:scale-105 hover:bg-blue-700 hover:shadow-lg md:px-10"
          >
            Book Now
          </Link>

          <Link
            href="/contact"
            className="rounded border border-blue-500 bg-transparent px-6 py-2.5 text-lg font-semibold text-white transition hover:scale-105 hover:bg-blue-700 hover:shadow-lg md:px-10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;