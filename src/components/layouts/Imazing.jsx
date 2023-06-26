import { FaFileInvoice } from "react-icons/fa";
import { BiBarChartSquare } from "react-icons/bi";

const Imazing = () => {
    return (
        <>
            <section className="bg-gray-200">
                <div className="py-20">
                    <div className="container mx-auto md:px-14 px-4">
                        <div className="flex flex-col md:flex-row gap-10">
                            <h3 className="text-3xl font-extrabold uppercase w-4/6">The amazing NFT art of the world here</h3>
                            <div className="flex gap-2">
                                <FaFileInvoice className="text-5xl" />
                                <div className="">
                                    <h4 className="text-lg font-bold">Fast Transaction</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <BiBarChartSquare className="text-7xl -mt-4" />
                                <div className="">
                                    <h4 className="text-lg font-bold">Growth Transaction</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
                                </div>
                            </div>



                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Imazing;