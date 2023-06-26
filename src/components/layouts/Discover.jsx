import { Button } from "@material-tailwind/react";
import TabSection from "./TabSection";


const Discover = () => {
    return (
        <>
            <section className="bg-gray-200">
                <div className="py-16">
                    <div className="container mx-auto md:px-14 px-4">
                        <h3 className="text-2xl font-extrabold uppercase mb-8">Discover more NFTs</h3>


                        <TabSection />

                        <div className="grid place-items-center mt-12">
                            <Button className="rounded-full text-blue-900 border-blue-900 text-center" variant="outlined">More NFTs</Button>
                        </div>


                    </div>

                </div>


            </section>
        </>
    );
};

export default Discover;