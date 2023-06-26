import { Button } from "@material-tailwind/react";


const SignUp = () => {
    return (
        <>
            <section>
                <div className="py-20">
                    <div className="container mx-auto md:px-14 px-4">
                        <div className="flex md:flex-row lg:flex-row flex-col gap-10 ">

                            <div className="md:w-1/2 flex items-center gap-14">
                                <div className="flex flex-col gap-14 w-1/2">
                                    <div className="relative">
                                        <img
                                            className="w-96 rounded-lg"
                                            src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                            alt="nature image"
                                        />
                                        <img
                                            className="w-12 h-12 rounded-full absolute right-[-20px] bottom-[-20px]"
                                            src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                            alt="nature image"
                                        />
                                    </div>
                                    <div className="relative">
                                        <img
                                            className="w-[200px] rounded-lg float-right"
                                            src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                            alt="nature image"
                                        />
                                        <img
                                            className="w-12 h-12 rounded-full absolute right-[-20px] bottom-[-20px]"
                                            src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                            alt="nature image"
                                        />
                                    </div>

                                </div>

                                <div className="w-1/2">
                                    <div className="relative">
                                        <img
                                            className="w-96 rounded-lg"
                                            src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                            alt="nature image"
                                        />
                                        <img
                                            className="w-12 h-12 rounded-full absolute right-[-20px] bottom-[-20px]"
                                            src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                            alt="nature image"
                                        />
                                    </div>
                                </div>

                            </div>

                            <div className="flex flex-col w-full md:w-1/2 justify-center items-start">
                                <h2 className="text-3xl md:text-4xl leading-relaxed md:leading-snug mb-2 uppercase font-extrabold w-96">
                                    Create and sell your NFTs
                                </h2>
                                <p className="text-sm md:text-base mb-4 w-96">DLorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.</p>
                                <Button className="rounded-full bg-blue-900" variant="filled">Sign Up Now</Button>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default SignUp;