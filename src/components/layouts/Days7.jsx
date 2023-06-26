import { Button } from "@material-tailwind/react";
import { SiAtandt } from "react-icons/si";
import { PiSealCheck } from "react-icons/pi";

const Days7 = () => {
    return (
        <>
            <section className="">
                <div className="py-20">
                    <div className="container mx-auto md:px-14 px-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="hover:bg-white hover:shadow-xl hover:scale-95 transition duration-500 p-2 rounded-xl">
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex justify-between mt-5">
                                    <div className="flex gap-2">
                                        <img
                                            className="w-14 h-14 rounded-full"
                                            src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                            alt="nature image"
                                        />
                                        <div>
                                            <h6 className="text-lg font-bold">The Futr Abstr</h6>
                                            <p>10 in the stock</p>
                                        </div>

                                    </div>
                                    <div>
                                        <h6 className="text-lg font-bold">Highest Bid</h6>
                                        <div className="flex items-center gap-2">
                                            <SiAtandt />
                                            <p>0.25 ETH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-6 w-full">

                                <div className="flex justify-between gap-6 hover:bg-white hover:shadow-xl hover:scale-95 transition duration-500 p-2 rounded-xl">
                                    <div className="w-1/3">
                                        <img
                                            className="w-full rounded-lg"
                                            src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                            alt="nature image"
                                        />
                                    </div>
                                    <div className="w-2/3 flex flex-col gap-2">
                                        <h4 className="text-lg font-bold">The Futr Abstr</h4>
                                        <div className="flex items-center gap-2">
                                            <img
                                                className="w-10 h-10 rounded-full"
                                                src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                                alt="nature image"
                                            />
                                            <div className="flex items-center ">
                                                <Button className="rounded text-green-600 border-green-600 flex items-center" variant="outlined" size="sm">
                                                    <SiAtandt className="mr-1" />
                                                    <span className="">0.25 ETH</span>
                                                </Button>
                                            </div>
                                            <p>1 of 8</p>
                                        </div>
                                        <Button className="rounded-full bg-blue-900 w-28" variant="filled" size="sm">Place a bid</Button>
                                    </div>
                                </div>
                                <div className="flex justify-between gap-6 hover:bg-white hover:shadow-xl hover:scale-95 transition duration-500 p-2 rounded-xl">
                                    <div className="w-1/3">
                                        <img
                                            className="w-full rounded-lg"
                                            src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                            alt="nature image"
                                        />
                                    </div>
                                    <div className="w-2/3 flex flex-col gap-2">
                                        <h4 className="text-lg font-bold">The Futr Abstr</h4>
                                        <div className="flex items-center gap-2">
                                            <img
                                                className="w-10 h-10 rounded-full"
                                                src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                                alt="nature image"
                                            />
                                            <div className="flex items-center ">
                                                <Button className="rounded text-green-600 border-green-600 flex items-center" variant="outlined" size="sm">
                                                    <SiAtandt className="mr-1" />
                                                    <span className="">0.25 ETH</span>
                                                </Button>
                                            </div>
                                            <p>1 of 8</p>
                                        </div>
                                        <Button className="rounded-full bg-blue-900 w-28" variant="filled" size="sm">Place a bid</Button>
                                    </div>
                                </div>
                                <div className="flex justify-between gap-6 hover:bg-white hover:shadow-xl hover:scale-95 transition duration-500 p-2 rounded-xl">
                                    <div className="w-1/3">
                                        <img
                                            className="w-full rounded-lg"
                                            src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                            alt="nature image"
                                        />
                                    </div>
                                    <div className="w-2/3 flex flex-col gap-2">
                                        <h4 className="text-lg font-bold">The Futr Abstr</h4>
                                        <div className="flex items-center gap-2">
                                            <img
                                                className="w-10 h-10 rounded-full"
                                                src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                                alt="nature image"
                                            />
                                            <div className="flex items-center ">
                                                <Button className="rounded text-green-600 border-green-600 flex items-center" variant="outlined" size="sm">
                                                    <SiAtandt className="mr-1" />
                                                    <span className="">0.25 ETH</span>
                                                </Button>
                                            </div>
                                            <p>1 of 8</p>
                                        </div>
                                        <Button className="rounded-full bg-blue-900 w-28" variant="filled" size="sm">Place a bid</Button>
                                    </div>
                                </div>

                            </div>


                            <div className="border-s-2 pl-8">

                                <div className="">
                                    <div className="mb-4">
                                        <h4 className="text-lg font-extrabold uppercase">Top Collections over</h4>
                                        <p className="font-bold text-purple-600">Last 7 days</p>
                                    </div>
                                    <div className="flex flex-col gap-2">

                                        <div className="flex items-center justify-between gap-6 border-b-2 pb-3 hover:bg-white hover:shadow-xl hover:scale-95 transition duration-500 p-2 rounded-xl">
                                            <span className="font-extrabold text-xl">1</span>

                                            <img
                                                className="w-14 h-14 rounded-full block md:hidden"
                                                src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                                alt="nature image"
                                            />

                                            <div className="relative hidden md:block">
                                                <img
                                                    className="w-14 h-14 rounded-full"
                                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                                    alt="nature image"
                                                />
                                                <PiSealCheck className="h-5 w-5 absolute -top-1 -right-1 bg-blue-600 rounded-full text-white " />
                                            </div>


                                            <div>
                                                <h6 className="text-base font-bold">CryptoFunks</h6>
                                                <div className="flex items-center gap-2">
                                                    <SiAtandt />
                                                    <p>19,769.39</p>
                                                </div>
                                            </div>
                                            <span className="font-bold text-2xl text-teal-500">+26.52%</span>
                                        </div>
                                        <div className="flex items-center justify-between gap-6 border-b-2 pb-3 hover:bg-white hover:shadow-xl hover:scale-95 transition duration-500 p-2 rounded-xl">
                                            <span className="font-extrabold text-xl">2</span>
                                            <img
                                                className="w-14 h-14 rounded-full"
                                                src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                                alt="nature image"
                                            />
                                            <div>
                                                <h6 className="text-base font-bold">Cryptix</h6>
                                                <div className="flex items-center gap-2">
                                                    <SiAtandt />
                                                    <p>2,769.39</p>
                                                </div>
                                            </div>
                                            <span className="font-bold text-2xl text-red-500">+10.52%</span>
                                        </div>
                                        <div className="flex items-center justify-between gap-6 border-b-2 pb-3 hover:bg-white hover:shadow-xl hover:scale-95 transition duration-500 p-2 rounded-xl">
                                            <span className="font-extrabold text-xl">3</span>
                                            <img
                                                className="w-14 h-14 rounded-full"
                                                src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                                alt="nature image"
                                            />
                                            <div>
                                                <h6 className="text-base font-bold">Frensware</h6>
                                                <div className="flex items-center gap-2">
                                                    <SiAtandt />
                                                    <p>9,232.39</p>
                                                </div>
                                            </div>
                                            <span className="font-bold text-2xl text-teal-500">+2.52%</span>
                                        </div>

                                        <div className="flex items-center justify-between gap-6 border-b-2 pb-3 hover:bg-white hover:shadow-xl hover:scale-95 transition duration-500 p-2 rounded-xl">
                                            <span className="font-extrabold text-xl">4</span>

                                            <img
                                                className="w-14 h-14 rounded-full block md:hidden"
                                                src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                                alt="nature image"
                                            />

                                            <div className="relative hidden md:block">
                                                <img
                                                    className="w-14 h-14 rounded-full"
                                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                                    alt="nature image"
                                                />
                                                <PiSealCheck className="h-5 w-5 absolute -top-1 -right-1 bg-blue-600 rounded-full text-white " />
                                            </div>


                                            <div>
                                                <h6 className="text-base font-bold">PunkArt</h6>
                                                <div className="flex items-center gap-2">
                                                    <SiAtandt />
                                                    <p>3,769.39</p>
                                                </div>
                                            </div>
                                            <span className="font-bold text-2xl text-teal-500">+1.52%</span>
                                        </div>
                                        <div className="flex items-center justify-between gap-6 hover:bg-white hover:shadow-xl hover:scale-95 transition duration-500 p-2 rounded-xl">
                                            <span className="font-extrabold text-xl">5</span>
                                            <img
                                                className="w-14 h-14 rounded-full"
                                                src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                                alt="nature image"
                                            />
                                            <div>
                                                <h6 className="text-base font-bold">Art Crypto</h6>
                                                <div className="flex items-center gap-2">
                                                    <SiAtandt />
                                                    <p>10,769.39</p>
                                                </div>
                                            </div>
                                            <span className="font-bold text-2xl text-red-500">+2.52%</span>
                                        </div>

                                    </div>

                                </div>
                            </div>



                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Days7;