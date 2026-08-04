
import Image from "next/image";
import Link from "next/link";

const footer = () => {
  return (
    <footer className="bg-gray-900">
        <div className="max-w-screen-xl mx-auto px-4 w-full py-10 md:py-16">
            <div className="grid md:grid-cols-3 gap-7">
                <div>
                    <Link href="/" className="mb-10 block">
                        <Image src="/logo.png" width={128} height={49} alt="Logo" priority />
                    </Link>
                    <p className="text-gray-400">
                        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </p>
                </div>
                <div>
                    <div className="flex gap-20">
                        <div className="flex-1 md:flex-none">
                            <h4 className="mb-8 text-xl font-semibold text-white">Link</h4>
                            <ul className="list-item space-y-5 text-gray-400">
                                <li><Link href="/" >Home</Link>
                                </li>
                                <li><Link href="/about" >About</Link>
                                </li>
                                <li><Link href="/rooms" >Rooms</Link>
                                </li>
                                <li><Link href="/contact" >Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                         <div className="flex-1 md:flex-none">
                            <h4 className="mb-8 text-xl font-semibold text-white">Legal</h4>
                            <ul className="list-item space-y-5 text-gray-400">
                                <li><Link href="#">Legal</Link>
                                </li>
                                <li><Link href="#">Term And Conditions</Link>
                                </li>
                                <li><Link href="#">Payment method</Link>
                                </li>
                                <li><Link href="#">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="mb-8 text-xl font-semibold text-white">Newsletter</h4>
                    <p className="text-gray-400">
                        Subscribe to our newsletter to get the latest news and offers.
                    </p>
                    <form action="" className="mt-5">
                        <div className="mb-5">
                            <input type="text" name="email" className="w-full p-3 rounded-sm bg-white" 
                            placeholder="johndoe@gmail.com" />
                        </div>
                        <button className="bg-orange-400 p-3 font-bold text-white w-full text-center
                        rounded-sm hover:bg-orange-500 transition-all duration-300">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className="mt-10 border-t border-gray-600 pt-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-y-4">
                    <p className="text-gray-400">&copy; 2026 Muhammad Al Fatih. All rights reserved.</p>
                </div>
            </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-4 border-t border-gray-600 py-8 text-center
        text-base text-gray-400">
            &copy; copyright 2026 | Muhammad Al Fatih | All Rights Reserved
        </div>
    </footer>
  );
};

export default footer