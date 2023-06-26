import { Typography } from "@material-tailwind/react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";


const currentYear = new Date().getFullYear();
const Footer = () => {
    return (
        <>
            <footer className="relative w-full">
                <div className="container mx-auto md:px-14 px-4 flex gap-8 flex-col md:flex-row">
                    <div className="flex gap-10 py-12 flex-col md:flex-row w-full">

                        <div className="md:w-2/3">
                            <h3 className="text-2xl font-extrabold uppercase mb-4">NFters</h3>
                            <p className="py-3">The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
                            <div className="flex gap-4 my-4">
                                <FaFacebookF className="text-3xl text-white bg-blue-900 p-2 rounded-full" />
                                <FaTwitter className="text-3xl text-white bg-blue-600 p-2 rounded-full" />
                                <FaLinkedinIn className="text-3xl text-white bg-blue-900 p-2 rounded-full" />
                            </div>
                        </div>
                        <div className="md:w-1/3">
                            <Typography
                                color="black"
                                className="mb-4 font-extrabold text-xl"
                            >
                                Market Place
                            </Typography>
                            <ul className="space-y-1">
                                <Typography as="li" color="blue-gray" className="font-normal">
                                    <a
                                        href="#"
                                        className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                                    >
                                        All NFTs
                                    </a>
                                </Typography>
                                <Typography as="li" color="blue-gray" className="font-normal">
                                    <a
                                        href="#"
                                        className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                                    >
                                        New
                                    </a>
                                </Typography>
                                <Typography as="li" color="blue-gray" className="font-normal">
                                    <a
                                        href="#"
                                        className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                                    >
                                        Art
                                    </a>
                                </Typography>
                                <Typography as="li" color="blue-gray" className="font-normal">
                                    <a
                                        href="#"
                                        className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                                    >
                                        Sports
                                    </a>
                                </Typography>
                                <Typography as="li" color="blue-gray" className="font-normal">
                                    <a
                                        href="#"
                                        className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                                    >
                                        Utility
                                    </a>
                                </Typography>
                                <Typography as="li" color="blue-gray" className="font-normal">
                                    <a
                                        href="#"
                                        className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                                    >
                                        Domain Name
                                    </a>
                                </Typography>
                            </ul>
                        </div>

                    </div>

                    <div className="flex gap-8 py-12 flex-col md:flex-row w-full">
                        <div className="md:w-1/3">
                            <Typography
                                variant="lg"
                                color="black"
                                className="mb-4 font-extrabold text-xl"
                            >
                                My Account
                            </Typography>
                            <ul className="space-y-1">
                                <Typography as="li" color="blue-gray" className="font-normal">
                                    <a
                                        href="#"
                                        className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                                    >
                                        Profile
                                    </a>
                                </Typography>
                                <Typography as="li" color="blue-gray" className="font-normal">
                                    <a
                                        href="#"
                                        className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                                    >
                                        Favorite
                                    </a>
                                </Typography>
                                <Typography as="li" color="blue-gray" className="font-normal">
                                    <a
                                        href="#"
                                        className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                                    >
                                        My Collections
                                    </a>
                                </Typography>
                                <Typography as="li" color="blue-gray" className="font-normal">
                                    <a
                                        href="#"
                                        className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                                    >
                                        Settings
                                    </a>
                                </Typography>

                            </ul>
                        </div>
                        <div className="md:w-2/3">
                            <Typography
                                variant="lg"
                                color="black"
                                className="mb-4 font-extrabold text-xl"
                            >
                                Stay in the loop
                            </Typography>
                            <p>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.</p>
                            <div>
                                <div className="relative md:mb-6 mt-6">
                                    <input
                                        type="text"
                                        className="border-2 rounded-full py-3 px-2 w-full"
                                        placeholder="Email address" />
                                    <button
                                        type="button"
                                        className="text-white btn bg-blue-900 rounded-full px-4 py-2 absolute z-10 right-2 top-[6px]">
                                        Subscibe Now
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t">
                    <p className="py-6 text-center text-gray-500">Copyright &copy; {currentYear} <a href="">Avi Yansah</a></p>
                </div>


            </footer>
        </>
    );
};

export default Footer;