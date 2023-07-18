import React, { useState } from "react";

const ProductDetails = ({data}) => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    return (
        <>
        <img src={data.thumbnail} className='w-full h-52' alt={data.title} />
        
        <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
            <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                {
                    data.images && data.images.length > 0 ? data.images.map((item)=>{
                        return <img key={item} className="w-full mt-2" alt="Logo Image" src={item} />
                    }) : ''
                }
            </div>
            {/* <div className="md:hidden">
                <img className="w-full" alt="img of a girl posing" src="https://i.ibb.co/QMdWfzX/component-image-one.png" />
                <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
                    <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/cYDrVGh/Rectangle-245.png" />
                    
                </div>
            </div> */}
            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div className="border-b border-gray-200 pb-6">
                    <p className="text-sm leading-none text-gray-600">{data.category}</p>
                    <h1
                        className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
                    >
                        {data.title}
                    </h1>
                </div>
                
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-base leading-4 text-gray-800">Brand</p>
                    <div className="flex items-center justify-center">
                        <p className="text-sm leading-none text-gray-600 mr-3">{data.brand}</p>
                    </div>
                </div>
                <button
                    className="
						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
						text-base
						flex
						items-center
						justify-center
						leading-none
						text-white
						bg-gray-800
						w-full
						py-4
						hover:bg-gray-700
					"
                >
                    Price :- 
                    $ {data.price}
                </button>
                
                <div>
                    <div className="border-t border-b py-4 mt-7 border-gray-200">
                        <div onClick={() => setShow(!show)} className="flex justify-between items-center cursor-pointer">
                            <p className="text-base leading-4 text-gray-800">Desc</p>
                            <button
                                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                                aria-label="show or hide"
                            >
                                <svg className={"transform " + (show ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show ? "block" : "hidden")} id="sect">
                            {data.description}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="border-b py-4 border-gray-200">
                        <div onClick={() => setShow2(!show2)} className="flex justify-between items-center cursor-pointer">
                            <p className="text-base leading-4 text-gray-800">Product Details</p>
                            <button
                                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                                aria-label="show or hide"
                            >
                                <svg className={"transform " + (show2 ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show2 ? "block" : "hidden")} id="sect">
                            <p>Category :- {data.category}</p>
                            <p>Brand :- {data.brand}</p>
                            <p>Rating :- {data.rating}</p>
                            <p>Stock Available :- {data.stock}</p>
                            <p>Price :- ${data.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ProductDetails;
