import Image from "next/image";
import Link from "next/link";
import { IoPeopleOutline } from "react-icons/io5";

const Card = () => {
    return (
        <div className="bg-white shadow-lg rounded-sm transition duration-100 hover:shadow-sm">
            <div className="h-[260px] w-auto rounded-t-sm relative">
                <Image
                    src="/hero.jpg" width={384} height={256} className="w-full h-full object-cover rounded-t-sm"
                    alt="Card Image"/>
            </div>
            <div className="p-8">
                <h4 className="text-2xl font-medium">
                    <Link href="#" className="text-gray-800 hover:text-blue-500 transition duration-150">
                        Luxury Room
                    </Link>
                </h4>
                <h4 className="text-2xl mb-7">
                    <span className="text-gray-600 font-semibold">Rp 900.000</span>
                    <span className="text-gray-400 text-sm">/night</span>
                </h4>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <IoPeopleOutline/>
                        <span> 2 Guests</span>
                    </div>
                    <Link href="#" className="px-6 py-2.5 md:px-10 font-semibold text-white
                     bg-blue-500 rounded hover:bg-blue-700 transition duration-150">
                        Book Now
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Card;