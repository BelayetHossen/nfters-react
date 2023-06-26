import { Avatar } from '@material-tailwind/react';
import { useState } from 'react';
import { SiAtandt } from "react-icons/si";
import { BiFilter } from "react-icons/bi";

const TabSection = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <div className="md:flex justify-between w-full items-center">

                <ul className="grid md:grid-flow-col grid-flow-row gap-6 text-center text-gray-900 rounded-xl w-10/12 md:mb-0 mb-4">
                    <li>
                        <a
                            href="#tab1"
                            className={`rounded-full flex justify-center py-2 px-4 ${activeTab === 'tab1' ? 'bg-blue-900 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleTabClick('tab1')}
                        >
                            All Categories
                        </a>
                    </li>
                    <li>
                        <a
                            href="#tab2"
                            className={`rounded-full flex justify-center py-2 px-4 ${activeTab === 'tab2' ? 'bg-blue-900 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleTabClick('tab2')}
                        >
                            Art
                        </a>
                    </li>
                    <li>
                        <a
                            href="#tab3"
                            className={`rounded-full flex justify-center py-2 px-4 ${activeTab === 'tab3' ? 'bg-blue-900 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleTabClick('tab3')}
                        >
                            Celebrities
                        </a>
                    </li>
                    <li>
                        <a
                            href="#tab4"
                            className={`rounded-full flex justify-center py-2 px-4 ${activeTab === 'tab4' ? 'bg-blue-900 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleTabClick('tab4')}
                        >
                            Gaming
                        </a>
                    </li>
                    <li>
                        <a
                            href="#tab5"
                            className={`rounded-full flex justify-center py-2 px-4 ${activeTab === 'tab5' ? 'bg-blue-900 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleTabClick('tab5')}
                        >
                            Sport
                        </a>
                    </li>
                    <li>
                        <a
                            href="#tab6"
                            className={`rounded-full flex justify-center py-2 px-4 ${activeTab === 'tab6' ? 'bg-blue-900 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleTabClick('tab6')}
                        >
                            Music
                        </a>
                    </li>
                    <li>
                        <a
                            href="#tab7"
                            className={`rounded-full flex justify-center py-2 px-4 ${activeTab === 'tab7' ? 'bg-blue-900 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleTabClick('tab7')}
                        >
                            Crypto
                        </a>
                    </li>

                </ul>

                <div className="">
                    <button className="py-2 px-4 rounded-full text-blue-900 border-blue-900 text-center bg-gray-300 flex items-center"><BiFilter className='text-4xl' /><span>All Filters</span></button>
                </div>

            </div>

            <div className="tab-content mt-6">

                <div id="tab1" className={`tab-pane ${activeTab === 'tab1' ? '' : 'hidden'}`}>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8'>

                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">ArtCrypto</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">This NFT</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">NameCrypto</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">KingCrypto</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">ArtCrypto</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">This NFT</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">NameCrypto</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">KingCrypto</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">ArtCrypto</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">This NFT</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">NameCrypto</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">KingCrypto</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">ArtCrypto</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">This NFT</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">NameCrypto</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">KingCrypto</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>

                    </div>
                </div>


                <div id="tab2" className={`tab-pane ${activeTab === 'tab2' ? '' : 'hidden'}`}>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8'>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">KingCrypto</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">ArtCrypto</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">This NFT</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">NameCrypto</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab3" className={`tab-pane ${activeTab === 'tab3' ? '' : 'hidden'}`}>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8'>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">NameCrypto</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">KingCrypto</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">ArtCrypto</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">This NFT</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab4" className={`tab-pane ${activeTab === 'tab4' ? '' : 'hidden'}`}>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8'>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">This NFT</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">NameCrypto</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">KingCrypto</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">ArtCrypto</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab5" className={`tab-pane ${activeTab === 'tab5' ? '' : 'hidden'}`}>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8'>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">ArtCrypto</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">This NFT</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">NameCrypto</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">KingCrypto</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab6" className={`tab-pane ${activeTab === 'tab6' ? '' : 'hidden'}`}>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8'>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">NameCrypto</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">KingCrypto</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">ArtCrypto</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">This NFT</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab7" className={`tab-pane ${activeTab === 'tab7' ? '' : 'hidden'}`}>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8'>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">ArtCrypto</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">This NFT</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">NameCrypto</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                        <div className='bg-white p-3 rounded-xl shadow-xl hover:scale-95 transition duration-500'>
                            <div className='relative'>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://media.phillyvoice.com/media/images/120522_Lensa_AI.width-696.jpg"
                                    alt="nature image"
                                />
                                <div className="flex items-center -space-x-4 absolute z-10 -bottom-5 left-4">
                                    <Avatar
                                        variant="circular"
                                        alt="user 1"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 2"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 3"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                                    />
                                    <Avatar
                                        variant="circular"
                                        alt="user 4"
                                        className="border-2 border-white hover:z-10 focus:z-10"
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                                    />
                                </div>
                            </div>
                            <div className='border-b-2 border-slate-200 pb-3 mt-8'>
                                <h6 className="text-lg font-bold mt-4 mb-2">KingCrypto</h6>
                                <div className="flex justify-between items-center text-green-600">
                                    <div className="flex items-center gap-2">
                                        <SiAtandt />
                                        <p>0.25 ETH</p>
                                    </div>
                                    <div>
                                        <p>1 of 321</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <button className='py-2 px-4 bg-gray-300 rounded-full'>3h 50m 2s left</button>
                                <button className='py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-blue-900 transition duration-500'>Place a bid</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TabSection;
