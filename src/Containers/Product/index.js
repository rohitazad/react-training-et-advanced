
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import LayoutComponent from '../../Components/Layout';
import ProductDetails from '../../Components/ProductDetails';
import { Link } from 'react-router-dom';

const ProdcutPage = ()=>{
    let params = useParams();
    const productId = params.productId;
    console.log('params',params)
    const [product, setProduct] = useState('');
    const GetProductAPI = ()=>{
        fetch(`https://dummyjson.com/products/${productId}`)
        .then(res => res.json())
        .then(res => setProduct(res));
    }
    useEffect(()=>{
       GetProductAPI()
    },[])
    return (
        <LayoutComponent>
            <>
                <div className='flex items-center justify-between'>
                    <h1 className='ml-6 xl:mr-6 relative dark:hidden block text-lg text-gray-900 font-bold'>
                        Product - {product && product.title}
                    </h1>
                    <div className="mx-6  relative">
                        <Link to='/eventpanel'>
                            <button className="text-sm leading-4 px-6 py-3 bg-gray-50 hover:bg-opacity-40 bg-opacity-20 rounded relative z-30 ">Back</button>
                        </Link>
                    </div>
                </div>
                
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <div className="">
                            {
                                product && product !== '' ? <ProductDetails data={product}/> : ' '
                            }
                        </div>
                    </div>
                </div>
            </>
            
        </LayoutComponent>
    )
}

export default ProdcutPage;