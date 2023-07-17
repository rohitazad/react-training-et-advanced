import React, {useEffect, useState} from 'react';
import LayoutComponent from '../../Components/Layout';
import SingleProudctItem from '../../Components/SingleProduct';
const EventPanelPage = ()=>{
    const [products, setProducts] = useState([]);
    const GetProductAPI = ()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(res => setProducts(res.products));
    }
    useEffect(()=>{
        GetProductAPI()
    },[])
    return (
        <LayoutComponent>
            <>
                <h1 className='text-lg text-gray-900 font-bold'>
                    Product Page 
                </h1>
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            {
                                products && products.length > 0 ? products.map((item)=>{
                                    return <SingleProudctItem key={item.id} data={item}/>
                                }) : ''
                            }
                            
                        </div>
                    </div>
                </div>
            </>
            
        </LayoutComponent>
    )
}

export default EventPanelPage;
