import { Button } from "@material-tailwind/react";
import { SiAtandt } from "react-icons/si";

const Hero = () => {
    return (
        <>
            <section>
                <div className="py-20">
                    <div className="container mx-auto md:px-14 px-4">
                        <div className="flex gap-10 ">

                            <div className="flex flex-col w-full md:w-1/2 justify-center items-start">
                                <h2 className="text-3xl md:text-4xl leading-relaxed md:leading-snug mb-2 uppercase font-extrabold">
                                    Discover, and collect Digital Art NFTs
                                </h2>
                                <p className="text-sm md:text-base mb-4">Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</p>
                                <Button className="rounded-full bg-blue-900" variant="filled">Explore Now</Button>
                            </div>

                            <div className="md:w-1/2 flex flex-wrap content-center relative">
                                <img
                                    className="w-96 rounded-lg  z-30"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="absolute z-40 flex gap-14 justify-between p-3 rounded-lg bottom-3 left-16 text-white" style={{ background: 'linear-gradient(45deg, #33C5ED, #543FC1)' }}>
                                    <div>
                                        <h6>Current Bid</h6>
                                        <div className="flex items-center gap-2">
                                            <SiAtandt />
                                            <p>0.25 ETH</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h6>Ends in</h6>

                                        <p>12h  43m  42s</p>

                                    </div>
                                </div>
                                <div className="absolute z-40 w-28 -left-14 top-40">
                                    <img src="../../../public/auction.png" alt="" />
                                </div>
                                <img
                                    className="w-80 rounded-lg absolute right-[165px] top-[2rem] z-20"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <img
                                    className="w-64 rounded-lg absolute right-[135px] top-[4rem] z-10"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />

                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Hero;