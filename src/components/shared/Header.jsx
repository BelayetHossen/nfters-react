import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Marketplace
                </a>
            </Typography>
            <Typography
                as="li"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Resoures
                </a>
            </Typography>
            <Typography
                as="li"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    About
                </a>
            </Typography>

        </ul>
    );

    return (
        <>
            <Navbar className="sticky top-0 z-50 h-max max-w-full rounded-none py-2 lg:py-4 px-0">
                <div className="container mx-auto md:px-14 px-4">
                    <div className="flex items-center justify-between text-blue-gray-900">
                        <div className="flex items-center">
                            <Typography
                                as="a"
                                href="#"
                                className="mr-4 cursor-pointer py-1.5 text-xl text-blue-900 font-bold"
                            >
                                NFTERS
                            </Typography>
                            <div className="ml-8 hidden lg:block text-black">
                                {navList}
                            </div>
                        </div>
                        <div className="flex justify-between items-center gap-4">

                            <div className="relative flex w-full gap-2 md:w-max">
                                <input
                                    type="text"
                                    placeholder="search..."
                                    className="px-3 rounded-full text-gray-600 w-full h-[40px] border-2"
                                />
                                <span className="!absolute right-3 top-2 text-xl"><AiOutlineSearch /></span>
                            </div>
                            <Button className="rounded-full bg-blue-900 hidden lg:block" variant="filled">Upload</Button>
                            <Button className="rounded-full hidden lg:block text-blue-900 border-blue-900" variant="outlined">Connect wallet</Button>


                            <IconButton
                                variant="text"
                                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                                ripple={false}
                                onClick={() => setOpenNav(!openNav)}
                            >
                                {openNav ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        className="h-6 w-6"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </IconButton>

                        </div>
                    </div>
                </div>
                <MobileNav className="text-black" open={openNav}>
                    {navList}

                    <Button className="rounded-full bg-blue-900 mr-4" variant="filled">Upload</Button>
                    <Button className="rounded-full text-blue-900 border-blue-900" variant="outlined">Connect wallet</Button>
                </MobileNav>
            </Navbar>






        </>
    );
}



export default Header;