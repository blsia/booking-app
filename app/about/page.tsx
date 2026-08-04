import HeaderSection from "@/components/header-section";
import Image from "next/image";
import { IoEyeOutline, IoLocateOutline } from "react-icons/io5";

const AboutPage = () => {
  return (
    <div>
      <HeaderSection
        title="About Us"
        subtitle="Learn more about our company and values."
      />

      <div className="max-w-screen-xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <Image
            src="/about-image.jpg"
            alt="About Us"
            width={650}
            height={579}
          />

          <div>
            <h1 className="text-5xl font-semibold text-gray-900 mb-4">
              Who We Are
            </h1>

            <p className="text-gray-700 py-5">
              We are a team of passionate professionals dedicated to
              delivering exceptional service and creating memorable
              experiences for our clients.
            </p>

            <ul className="list-item space-y-6 pt-8">
              <li className="flex gap-5">
                <div className="flex-none mt-1">
                    <IoEyeOutline  size={28} />
                </div>

                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">
                    Vision:
                  </h4>
                  <p className="text-gray-700">
                    Our vision is to be the leading provider of
                    innovative solutions that enhance the lives of our
                    customers and contribute positively to society.
                  </p>
                </div>
              </li>

              <li className="flex gap-5">
                <div className="flex-none mt-1">
                  <IoLocateOutline size={28} />
                </div>

                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">
                    Mission:
                  </h4>
                  <p className="text-gray-700">
                    Our mission is to deliver exceptional value to our
                    customers through innovation, quality, and integrity
                    in everything we do.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;